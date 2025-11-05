# Roblox Development Portfolio - Design Guidelines

## Design Approach
**Reference-Based:** Drawing inspiration from modern gaming portfolios (ArtStation, Behance) combined with Roblox's playful, block-based aesthetic. Professional gaming studio presentation with creative energy and personality.

## Typography System
- **Display/Hero:** Bold, geometric sans-serif with strong presence (Poppins Bold, 700-800 weight)
- **Headings:** Same family, 600 weight for hierarchy
- **Body Text:** Clean, readable sans-serif (Inter or similar, 400-500 weight)
- **Sizes:** Hero (text-5xl to text-7xl), Section Headers (text-3xl to text-4xl), Body (text-lg), Captions (text-sm)

## Layout & Spacing System
**Tailwind Units:** Primary spacing units of 4, 8, 12, 16, and 24 for consistency
- Section padding: py-20 (desktop), py-12 (mobile)
- Card/component gaps: gap-8 (desktop), gap-6 (mobile)
- Container max-width: max-w-7xl with px-6 padding

## Page Structure & Components

### Hero Section (Full viewport, 90vh)
- **Large Hero Image:** Dynamic Roblox game screenshot or studio workspace as background with subtle overlay
- Eye-catching headline with your development specialty
- Brief tagline (one sentence value proposition)
- Primary CTA button with blur background effect
- Stat counters: Projects completed, Years experience, Games published (animated on load)

### Portfolio Gallery (Featured Projects)
- **Masonry grid layout:** 2 columns (tablet), 3 columns (desktop)
- Each project card includes: Large game screenshot thumbnail, project title, brief description, technology tags (Lua, UI, Building, etc.), "View Details" link
- Hover effect: Subtle lift and shadow enhancement
- Filter buttons above grid: All, Scripting, Building, UI/UX, Game Design

### Skills Showcase
- **Icon-based grid:** 4 columns (desktop), 2 columns (mobile)
- Large, custom Roblox-themed icons for each skill
- Skill name and proficiency indicator (visual bar or level system)
- Core skills: Lua Scripting, 3D Building, UI/UX Design, Game Mechanics, DataStore Management, API Integration

### About Section
- **Two-column layout:** Left: Professional photo or avatar, Right: Biography and journey
- Timeline component showing development milestones
- Personality elements: Favorite tools, development philosophy, specializations

### Testimonials/Social Proof
- **Horizontal card layout:** 3 columns showcasing client reviews or project highlights
- Include client name, project type, and quote
- Star ratings or project success metrics

### Contact Section
- **Split layout:** Left: Contact form (Name, Email, Project Type dropdown, Message), Right: Additional info (Response time, availability, social links)
- Form with modern input styling and clear CTA
- Quick contact methods: Discord tag, Email, Twitter/X

### Footer
- Navigation links, Copyright info, Social media icons
- "Built with Roblox Studio" badge
- Quick links to top projects

## Component Design Patterns

**Cards:** Rounded corners (rounded-xl), elevated shadows, hover animations
**Buttons:** Solid primary actions with backdrop blur on hero, standard buttons elsewhere with hover state transitions
**Inputs:** Clean borders, focused state with subtle glow, generous padding (px-4 py-3)
**Tags/Badges:** Pill-shaped (rounded-full), compact (px-3 py-1), categorize skills/technologies
**Images:** All project screenshots with aspect-ratio-video, rounded corners, lazy loading

## Animations
- **Hero stats:** Count-up animation on page load
- **Scroll reveals:** Subtle fade-in-up for sections (stagger portfolio cards)
- **Hover states:** Smooth scale and shadow transitions (0.3s ease)
- Keep animations purposeful and non-distracting

## Images
**Hero Image:** Large, high-quality Roblox Studio workspace or flagship game screenshot spanning full viewport width. Should communicate professionalism and capability.

**Portfolio Images:** 6-9 project screenshots showcasing diverse work (games, UI systems, builds). Each image should clearly demonstrate the project's visual quality.

**About Section:** Professional headshot or Roblox avatar representation

**Skills Icons:** Use Font Awesome or Heroicons via CDN for technical skill icons

## Accessibility
- Maintain WCAG AA contrast standards
- Keyboard navigation for all interactive elements
- Focus indicators on form inputs and buttons
- Alt text for all portfolio images describing the project

## Viewport Strategy
- Hero: 90vh for impact
- Content sections: Natural height based on content (py-20 rhythm)
- Avoid forcing multiple sections into single viewport
- Mobile-first responsive breakpoints: sm, md, lg, xl