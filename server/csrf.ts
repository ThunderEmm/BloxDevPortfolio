import { randomBytes } from "crypto";
import type { Request, Response, NextFunction } from "express";

// Extend session to include CSRF token
declare module "express-session" {
  interface SessionData {
    csrfToken?: string;
  }
}

// Generate a random CSRF token
export function generateCsrfToken(): string {
  return randomBytes(32).toString("hex");
}

// Middleware to generate and attach CSRF token to session
export function csrfTokenMiddleware(req: Request, res: Response, next: NextFunction) {
  if (req.session && !req.session.csrfToken) {
    req.session.csrfToken = generateCsrfToken();
  }
  next();
}

// Middleware to verify CSRF token on POST requests
export function verifyCsrfToken(req: Request, res: Response, next: NextFunction) {
  if (req.method === "POST" || req.method === "PUT" || req.method === "DELETE") {
    const tokenFromHeader = req.headers["x-csrf-token"];
    const tokenFromBody = req.body?.csrfToken;
    const sessionToken = req.session?.csrfToken;

    const providedToken = tokenFromHeader || tokenFromBody;

    if (!sessionToken || !providedToken || providedToken !== sessionToken) {
      return res.status(403).json({ error: "Invalid CSRF token" });
    }
  }
  next();
}

// Route to get CSRF token
export function getCsrfToken(req: Request, res: Response) {
  if (!req.session) {
    return res.status(500).json({ error: "Session not initialized" });
  }
  
  if (!req.session.csrfToken) {
    req.session.csrfToken = generateCsrfToken();
  }
  
  res.json({ csrfToken: req.session.csrfToken });
}
