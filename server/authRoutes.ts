import { Router } from "express";
import passport from "./auth";
import { storage } from "./storage";
import { verifyCsrfToken } from "./csrf";
import type { User } from "@shared/schema";

const router = Router();

// Initiate Google OAuth
router.get("/auth/google", (req, res, next) => {
  if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
    return res.status(503).send(`
      <html>
        <body style="font-family: system-ui; padding: 2rem; max-width: 600px; margin: 0 auto;">
          <h1>🔧 Google OAuth Not Configured</h1>
          <p>To enable Google Sign-In, you need to:</p>
          <ol>
            <li>Create a Google Cloud Project</li>
            <li>Enable the Google+ API</li>
            <li>Create OAuth 2.0 credentials</li>
            <li>Add GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET to your Replit Secrets</li>
          </ol>
          <p><a href="/">← Go back to homepage</a></p>
        </body>
      </html>
    `);
  }
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })(req, res, next);
});

// Google OAuth callback
router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    const user = req.user as User;
    
    // Check if user needs to accept terms
    if (!user.termsAcceptedAt || !user.privacyAcceptedAt) {
      res.redirect("/consent");
    } else {
      res.redirect("/");
    }
  }
);

// Submit consent
router.post("/auth/consent", verifyCsrfToken, async (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ error: "Not authenticated" });
  }

  const user = req.user as User;
  const now = new Date().toISOString();

  const updatedUser = await storage.updateUserConsent(user.id, now, now);
  
  if (updatedUser) {
    // Update session with new user data
    req.login(updatedUser, (err) => {
      if (err) {
        return res.status(500).json({ error: "Failed to update session" });
      }
      res.json({ success: true });
    });
  } else {
    res.status(500).json({ error: "Failed to update consent" });
  }
});

// Get current user
router.get("/api/user", (req, res) => {
  if (req.isAuthenticated()) {
    res.json(req.user);
  } else {
    res.status(401).json({ error: "Not authenticated" });
  }
});

// Logout
router.post("/auth/logout", verifyCsrfToken, (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ error: "Logout failed" });
    }
    res.json({ success: true });
  });
});

export default router;
