# Books Summaries — Cognitive Architecture Dashboard

## Project Overview

A static content website that visualizes cognitive and philosophical frameworks from influential books using interactive Mermaid.js diagrams. No backend, no database, no authentication — purely a premium-quality frontend.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Visualizations**: Mermaid.js
- **Animations**: Framer Motion
- **Content**: Static data in `src/data/frameworks.ts`

## Architecture

```
src/
├── app/           # Next.js pages and global styles
├── components/    # Sidebar, MindMapRenderer, ProtocolTracker
└── data/          # Static framework content (frameworks.ts)
```

## Design Principles

- **Anti-AI-slop**: Follow Hallmark skill guidelines — no generic colors, no placeholder UI, no cookie-cutter layouts.
- **Dark mode first**: Deep blacks (#080808), subtle borders (white/6%), glassmorphic card edges.
- **Typography**: Custom font stack, tight tracking for headers, mono for labels.
- **Motion**: Framer Motion for page transitions and reveals. Keep animations subtle and purposeful.

## Content Structure

Each framework in `src/data/frameworks.ts` has:
- `id`, `title`, `author`, `core` (one-line thesis)
- `description` (personal narrative)
- `protocol` (actionable daily routine)
- `diagram` + optional `secondaryDiagram` (Mermaid syntax)
- `keyInsights[]`, `examples[]`, `stats[]`

Current frameworks: Sapolsky (Determinism), Taleb (Antifragility), Kahneman (Dual Systems), Csikszentmihalyi (Flow), Newport (Deep Work), Oakley (Learning).

## Conventions

- No backend or database. All content is static.
- Components use client-side rendering (`'use client'`) where Mermaid or Framer Motion is needed.
- Mermaid diagrams use dark theme styling inline (fill, stroke, color in the diagram syntax).
- Tailwind classes directly in JSX — no separate CSS modules.

## Installed Skills (`.agents/skills/`)

Only frontend/design skills are installed:
- `hallmark` — Anti-AI-slop design guidance
- `frontend-design` — Modern UI structure
- `frontend-dev-guidelines` — Dev standards
- `web-design-guidelines` — Layout and typography
- `vercel-react-best-practices` — Next.js/React patterns
- `vercel-composition-patterns` — Component composition
- `vercel-optimize` — Performance auditing
- `vercel-react-view-transitions` — Route transition animations
- `clean-code` — Code quality
- `cc-skill-frontend-patterns` — Frontend architecture patterns
