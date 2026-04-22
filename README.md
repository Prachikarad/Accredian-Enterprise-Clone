# Accredian Enterprise Landing Page Clone

A partial clone of the Accredian Enterprise website built with Next.js App Router, Tailwind CSS, reusable React components, and a mock lead capture API.

## Links

- Live demo: `Add your Vercel URL here`
- GitHub repo: `Add your GitHub repository URL here`

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

For a production build:

```bash
npm run build
npm start
```

## Approach

The page is split into reusable sections for hero, trust signals, feature blocks, rollout workflow, program cards, testimonials, partner credentials, lead capture, and footer. I used the App Router so the homepage and mock API route live in the same Next.js app, which keeps the structure clean and easy to review.

The UI is responsive by default, with mobile-first layouts, flexible grids, and a compact mobile navigation. A small `ScrollReveal` helper adds lightweight section animation using `IntersectionObserver` instead of a heavy animation library.

## AI Usage

AI helped with:

- Initial structure ideas for homepage sections and content hierarchy
- Drafting placeholder enterprise copy and card content
- Sanity-checking Tailwind utility combinations during layout work
- Shaping the mock API flow for the lead capture form

I manually improved:

- The final visual direction, spacing system, typography pairing, and color palette
- Component composition and section ordering for a stronger enterprise narrative
- Mobile navigation behavior and responsive layout polish
- Form UX, validation flow, success and error states, and overall content cleanup
- README framing so the submission reads clearly for reviewers

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Lucide React
- Next.js Route Handlers for mock API integration

## Bonus

The project includes a lead capture form that submits to `POST /api/leads`. The route validates the payload and stores submissions in memory for demo purposes.

## Improvements With More Time

- Replace in-memory lead storage with Supabase or PostgreSQL
- Add branded assets and optimized images with `next/image`
- Add accessibility refinements including stronger keyboard states and menu focus management
- Add Playwright coverage for navigation, responsive breakpoints, and form submission
- Add analytics and event tracking for CTA clicks and lead conversions

## Deployment

Deploy on Vercel by importing the GitHub repository, or use:

```bash
vercel --prod
```
