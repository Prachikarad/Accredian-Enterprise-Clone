# Accredian Enterprise Landing Page Clone

This project is a partial clone of the Accredian Enterprise website, built as part of a Full Stack Developer Intern assignment.

## Live Project

- Live Demo: https://accredian-enterprise-clone-pink.vercel.app/
- GitHub Repository: https://github.com/Prachikarad/Accredian-Enterprise-Clone

## Tech Stack

- Next.js 14 (App Router)
- React 18 + TypeScript
- Tailwind CSS
- Lucide React
- Next.js API Route Handler (`/api/leads`)

## Features Implemented

- Responsive landing page sections (mobile + desktop)
- Sticky navbar with smooth section navigation
- Reusable component-based architecture
- Animated section reveal effects
- Program cards with category filtering
- Testimonials slider
- Partner and trust sections
- Footer with structured navigation
- Lead capture form with validation and API integration

## Bonus Feature

- Lead form submission handled by `POST /api/leads`
- Server-side validation for required fields and email format
- Success and error handling on the frontend

## Project Structure

- `app/page.tsx` - Main page composition
- `app/layout.tsx` - Root layout and metadata
- `app/api/leads/route.ts` - Lead capture API route
- `components/*` - Reusable UI sections and shared components
- `app/globals.css` - Global styles and design tokens

## Setup Instructions

```bash
npm install
npm run dev
```

Open `http://localhost:3000`

For production build:

```bash
npm run build
npm start
```

## Approach

I structured the page into independent reusable components so each section is easy to maintain, test, and extend.  
The implementation focuses on readability, clean UI composition, and practical responsiveness rather than strict pixel-perfect cloning.

## AI Usage (Required)

AI tools were used for:

- Early section/content structuring ideas
- Tailwind utility suggestions during UI refinement
- Drafting initial copy and API boilerplate patterns

Manual improvements made:

- Final layout hierarchy and spacing system
- Visual styling direction (typography, gradients, component polish)
- Mobile navigation and responsive behavior tuning
- Form UX details, validation behavior, and state handling
- Final code cleanup and README documentation

## Improvements With More Time

- Persist leads to a database (Supabase/PostgreSQL)
- Add E2E tests (Playwright)
- Add accessibility audit and keyboard-navigation refinements
- Add analytics for CTA and lead-conversion tracking
- Replace text placeholders with branded assets

## Deployment

Deployed on Vercel via GitHub integration.
