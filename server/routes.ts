import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactSubmissionSchema, emailCaptureSchema } from "@shared/schema";
import { writeFileSync, readFileSync, existsSync, mkdirSync } from "fs";
import path from "path";

const CONTACT_SUBMISSIONS_FILE = path.join(process.cwd(), "data", "contact-submissions.json");
const EMAIL_CAPTURES_FILE = path.join(process.cwd(), "data", "email-captures.json");

function ensureDataDir() {
  const dataDir = path.join(process.cwd(), "data");
  if (!existsSync(dataDir)) {
    mkdirSync(dataDir, { recursive: true });
  }
}

function saveContactSubmission(submission: any) {
  ensureDataDir();
  const submissions = existsSync(CONTACT_SUBMISSIONS_FILE)
    ? JSON.parse(readFileSync(CONTACT_SUBMISSIONS_FILE, "utf-8"))
    : [];
  
  submissions.push({
    ...submission,
    timestamp: new Date().toISOString(),
  });
  
  writeFileSync(CONTACT_SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2));
}

function saveEmailCapture(email: string) {
  ensureDataDir();
  const captures = existsSync(EMAIL_CAPTURES_FILE)
    ? JSON.parse(readFileSync(EMAIL_CAPTURES_FILE, "utf-8"))
    : [];
  
  captures.push({
    email,
    timestamp: new Date().toISOString(),
  });
  
  writeFileSync(EMAIL_CAPTURES_FILE, JSON.stringify(captures, null, 2));
}

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const submission = contactSubmissionSchema.parse(req.body);
      saveContactSubmission(submission);
      res.json({ success: true });
    } catch (error: any) {
      console.error("Contact form validation error:", error);
      const message = error?.errors?.[0]?.message || "Invalid submission. Please check all required fields.";
      res.status(400).json({ 
        error: "Invalid submission",
        message: message
      });
    }
  });

  app.post("/api/email-capture", async (req, res) => {
    try {
      const { email } = emailCaptureSchema.parse(req.body);
      saveEmailCapture(email);
      res.json({ success: true });
    } catch (error) {
      res.status(400).json({ error: "Invalid email" });
    }
  });

  app.get("/api/submissions", async (req, res) => {
    try {
      const contactSubmissions = existsSync(CONTACT_SUBMISSIONS_FILE)
        ? JSON.parse(readFileSync(CONTACT_SUBMISSIONS_FILE, "utf-8"))
        : [];
      const emailCaptures = existsSync(EMAIL_CAPTURES_FILE)
        ? JSON.parse(readFileSync(EMAIL_CAPTURES_FILE, "utf-8"))
        : [];
      
      res.json({ contactSubmissions, emailCaptures });
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve submissions" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
