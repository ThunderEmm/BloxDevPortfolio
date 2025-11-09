# Emmet Builds Systems

## Overview

Emmet Builds Systems is a professional e-commerce website for selling modular game development systems targeting indie developers across three platforms: Roblox, Godot, and GameMaker. The site showcases production-ready code systems (inventory, quest, dialogue, combat, etc.) with detailed product pages, filtering capabilities, and integration with external payment processors.

The application serves as a portfolio and sales platform with a developer-focused brand identity emphasizing modularity, clean code, and plug-and-play functionality. The core value proposition is saving indie developers weeks of development time by providing well-documented, engine-specific systems.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Rendering**: React 18 with TypeScript using Wouter for client-side routing. Single-page application architecture with static site generation capability through Vite. Pages include Home, Systems (marketplace), Product Detail, Portfolio, Demo, About, Contact, Reviews, Terms, and Privacy.

**Styling System**: Tailwind CSS with custom design tokens following the shadcn/ui New York theme. Implements a comprehensive design system with light/dark mode support using CSS custom properties. Brand colors include Electric Blue (#3B82F6) for primary actions, Violet (#7C3AED) for secondary accents, and Soft Orange (#FB923C) for CTAs. Typography uses Poppins for headlines, Inter for body text, and JetBrains Mono for code.

**Component Architecture**: Built on shadcn/ui components (Radix UI primitives) with custom variants. Reusable components include Header with responsive navigation, Footer with newsletter signup, and various card-based layouts. Component path aliases configured for clean imports (@/components, @/lib, @/hooks).

**State Management**: TanStack Query (React Query) for server state with custom query client configuration. Local state managed via React hooks. Toast notifications via shadcn/ui toast system.

**Responsive Design**: Mobile-first approach with breakpoints at 768px (tablet) and larger for desktop. Collapsible mobile menu in header. Grid layouts adapt from 1 column (mobile) to 2-3 columns (tablet) to 3-4 columns (desktop).

### Backend Architecture

**Server Framework**: Express.js running in ESM mode with TypeScript. Development mode uses Vite middleware for HMR, production serves static built assets.

**API Structure**: RESTful endpoints under `/api` namespace. Current endpoints include `/api/contact` for form submissions and `/api/email-capture` for newsletter signups. API responses use JSON format with consistent error handling.

**Data Persistence**: File-based storage using JSON files in `/data` directory for contact submissions and email captures. In-memory storage implementation (MemStorage class) provides interface for potential database migration. Schema validation via Zod ensures type safety.

**Request Handling**: Express middleware for JSON parsing with raw body capture for potential webhook integrations. Custom logging middleware tracks API request duration and response data. CORS and security headers managed through Express configuration.

**Static Asset Serving**: Vite handles asset optimization and bundling. Development mode proxies requests through Vite dev server. Production mode serves pre-built static files from `dist/public`.

### Data Storage Solutions

**Current Implementation**: JSON file-based storage in `/data` directory for form submissions and email captures. Timestamps automatically added to all entries. Directory creation handled automatically via `ensureDataDir()` utility.

**Database Schema (Drizzle ORM)**: Configured for PostgreSQL via Neon Database serverless driver. Schema definitions in `shared/schema.ts` using Zod for validation. Migrations directory set up but storage layer not yet connected to database. The IStorage interface provides abstraction layer for future database integration.

**Schemas Defined**:
- Product: id, title, engine (enum: roblox/godot/gamemaker), price, descriptions, features, tags, external URLs, media assets
- ContactSubmission: name, email, engine, projectType, budget, message, timestamp
- EmailCapture: email, timestamp
- Testimonial: id, name, role, content, rating

**Data Sources**: Product data currently sourced from `site-config.json` with plans to migrate to database. Static assets stored in `attached_assets/generated_images/` directory.

### Authentication and Authorization

**Status: Fully Implemented but Temporarily Disabled**

A complete Google OAuth authentication system with post-authentication consent flow has been implemented but is currently disabled in the UI. The system remains fully functional in the codebase for future activation.

**Implemented Features:**
- Google OAuth 2.0 integration using Passport.js strategy
- Post-authentication consent page requiring users to accept Terms of Service and Privacy Policy
- CSRF protection for all state-changing requests (sameSite="lax" cookies + synchronizer tokens)
- Session management via express-session with secure, httpOnly cookies
- User profile management with Google account data (email, display name, avatar)
- Secure logout functionality with CSRF validation

**Technical Implementation:**
- Backend: `server/auth.ts` (Passport config), `server/authRoutes.ts` (OAuth routes), `server/csrf.ts` (CSRF protection)
- Frontend: `client/src/pages/Login.tsx` (redirects to Google), `client/src/pages/Consent.tsx` (consent form)
- Database Schema: User model with Google ID, consent timestamps, and profile data
- Storage: Currently uses in-memory storage (MemStorage); ready for database integration

**Current State:**
- All auth code is preserved and commented out in `client/src/components/Header.tsx`
- Login button and user profile UI removed from header
- Backend routes remain active and functional
- Google OAuth credentials configured in Replit Secrets (GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET)

**To Re-enable:**
1. Uncomment auth-related imports in Header.tsx
2. Uncomment user query and logout mutation code
3. Uncomment auth UI section (login button and user dropdown)
4. Optionally: Migrate from in-memory storage to database for production use

The application currently operates as a public-facing e-commerce site. Form submissions are open endpoints with validation only.

### External Dependencies

**Payment Processing**: Integration hooks for Gumroad and Itch.io (external checkout). Product pages include `gumroadUrl` property for direct purchase links. No server-side payment processing currently implemented.

**Email Marketing**: Placeholder integration for ConvertKit or Mailchimp. Newsletter capture form posts to `/api/email-capture` with stored emails available for manual export or future integration.

**Analytics**: HTML comment placeholders for Google Analytics integration. No active tracking currently implemented.

**CDN & Fonts**: Google Fonts for typography (Inter, Poppins, JetBrains Mono) loaded via preconnect for performance.

**UI Components**: Radix UI primitives (@radix-ui/react-*) for accessible, unstyled components. Icons from Lucide React and React Icons (game engine logos).

**Development Tools**: Replit-specific Vite plugins for error overlays, cartographer, and dev banner (development mode only).

**Database (Configured)**: Neon Database serverless PostgreSQL with connection pooling via `@neondatabase/serverless`. Drizzle ORM for schema management and migrations (not yet actively used).