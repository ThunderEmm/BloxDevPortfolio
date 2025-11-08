# Emmet Builds Systems - Design Guidelines

## Brand Identity
**Name:** Emmet Builds Systems  
**Tagline:** "Modular systems for indie devs — plug-in code so you can finish your game."  
**Voice:** Friendly, technically confident, developer-centric. Not corporate. Clear, concise, slightly playful. Use second-person ("you") and short sentences.

## Color System
- **Primary (Electric Blue):** #3B82F6 - Main CTAs, links, accents
- **Secondary (Violet):** #7C3AED - Secondary accents, highlights
- **Accent (Soft Orange):** #FB923C - Primary CTA buttons, important highlights
- **Base Dark:** #1E293B - Dark backgrounds, text on light
- **Slate:** #475569 - Secondary text, borders

### Light Mode
- Background: #FFFFFF (white)
- Foreground: #0F172A (slate-900)
- Card: #F8FAFC (slate-50)
- Muted: #64748B (slate-500)

### Dark Mode
- Background: #0F172A (slate-900)
- Foreground: #F8FAFC (slate-50)
- Card: #1E293B (slate-800)
- Muted: #94A3B8 (slate-400)

## Typography
- **Display/Headlines:** Poppins (bold, 700-800 weight) - For hero and major headings
- **Body Text:** Inter (400-500 weight) - Clean, readable for all body content
- **Code/Technical:** JetBrains Mono - For code snippets and technical content
- **Sizes:** Hero (text-5xl to text-6xl), Section Headers (text-3xl to text-4xl), Body (text-base to text-lg)

## Layout Principles
- **Spacing:** Generous spacing with Tailwind units: 4, 6, 8, 12, 16, 20, 24
- **Containers:** max-w-7xl for main content, px-6 for horizontal padding
- **Grid:** Responsive grids - 1 column mobile, 2-3 columns tablet, 3-4 columns desktop
- **Cards:** Rounded (rounded-xl), subtle shadows, hover states with slight elevation

## Component Patterns

### Buttons
- **Primary CTA:** bg-accent (orange #FB923C) with white text, hover elevation
- **Secondary:** bg-primary (blue #3B82F6) with white text
- **Outline:** border with primary color, transparent background
- **Sizes:** Default (px-6 py-3), Large (px-8 py-4), Icon (square)

### Cards
- Product cards: White/dark card background, border, rounded corners
- Hover state: Slight elevation, subtle scale transform
- Include: thumbnail, title, description, badges, price, CTA

### Navigation
- Sticky header with logo left, nav center/right
- Mobile: Hamburger menu
- Desktop: Horizontal nav with hover states

### Forms
- Clean inputs with subtle borders
- Focus states: primary color ring
- Labels above inputs
- Validation states (error/success)

## Page-Specific Guidelines

### Home Page
- Hero: Full-width, gradient background, large headline, dual CTAs
- Engine Icons: Row of 3 with hover states
- Featured Systems: 3-card grid
- Testimonials: 2-4 quote cards
- Email opt-in: Simple form at bottom

### Systems Marketplace
- Filter tabs: Horizontal, pill-style buttons
- Search: Prominent top-right
- Grid: Responsive product cards
- Pagination: Simple numbered or load more

### Product Detail
- Large demo video/GIF
- Feature bullets with icons
- Code snippet: Monospace, dark background, copy button
- Buy button: Prominent, accent color
- Related products: Horizontal scroll

## Accessibility
- WCAG AA contrast standards
- Semantic HTML (header, nav, main, section, footer)
- Alt text for all images
- Keyboard navigation for all interactive elements
- Focus indicators on form inputs

## Assets
- Engine icons: Simple SVG icons for Roblox, Godot, GameMaker
- Demo videos: MP4 format, compressed
- Thumbnails: Compressed GIFs or WebP
- Lazy loading for below-fold images

## Responsive Breakpoints
- Mobile: < 768px (sm)
- Tablet: 768px - 1024px (md)
- Desktop: > 1024px (lg)
- Wide: > 1280px (xl)
