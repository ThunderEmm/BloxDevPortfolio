import { z } from "zod";

export const productSchema = z.object({
  id: z.string(),
  title: z.string(),
  engine: z.enum(["roblox", "godot", "gamemaker"]),
  price: z.number(),
  shortDescription: z.string(),
  features: z.array(z.string()),
  tags: z.array(z.string()),
  gumroadUrl: z.string(),
  demoVideo: z.string().optional(),
  thumbnail: z.string().optional(),
  fullDescription: z.string().optional(),
  codeSnippet: z.string().optional(),
  requirements: z.string().optional(),
});

export const contactSubmissionSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  engine: z.enum(["roblox", "godot", "gamemaker", "other"]),
  projectType: z.enum(["pre-made", "custom"]),
  budget: z.string(),
  message: z.string().min(10),
  timestamp: z.string().optional(),
});

export const emailCaptureSchema = z.object({
  email: z.string().email(),
  timestamp: z.string().optional(),
});

export const testimonialSchema = z.object({
  id: z.string(),
  name: z.string(),
  role: z.string(),
  content: z.string(),
  rating: z.number().min(1).max(5),
});

export type Product = z.infer<typeof productSchema>;
export type ContactSubmission = z.infer<typeof contactSubmissionSchema>;
export type EmailCapture = z.infer<typeof emailCaptureSchema>;
export type Testimonial = z.infer<typeof testimonialSchema>;
