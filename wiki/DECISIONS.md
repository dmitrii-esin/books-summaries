# Decision Log

> Chronological record of all key decisions made during the project.

---

## Decision 1: Tech Stack Selection
**Date:** June 15, 2026  
**Context:** User requested a web application for cognitive framework visualization  
**Decision:** Next.js 14+ with Tailwind CSS, Framer Motion, and Mermaid.js  
**Rationale:** Next.js provides SSR and modern React patterns. Tailwind enables rapid dark mode iteration. Framer Motion for declarative scroll animations. Mermaid.js renders diagrams from text syntax (no image generation needed).  
**Alternatives Considered:** Plain HTML/CSS/JS (rejected: too manual for the component architecture needed), Vite (rejected: SSR not built-in)

## Decision 2: Data Architecture
**Date:** June 15, 2026  
**Context:** Need a structured way to represent 6 frameworks with diagrams, descriptions, and metadata  
**Decision:** Single TypeScript file (`frameworks.ts`) exporting typed arrays with string-based Mermaid diagram definitions  
**Rationale:** Keeps all content co-located. TypeScript interfaces enforce schema consistency. String diagrams avoid build-time Mermaid processing.  
**Trade-off:** Large file (~350 lines) but easy to maintain and extend

## Decision 3: Client-Side Mermaid Rendering
**Date:** June 15, 2026  
**Context:** Mermaid.js requires DOM access for SVG generation  
**Decision:** Render Mermaid charts in a `"use client"` component with `useEffect` and unique random IDs  
**Rationale:** Server-side rendering of Mermaid is complex and fragile. Client-side rendering is simpler and allows dynamic theming.  
**Risk:** Flash of loading state on initial render (mitigated with spinner)

## Decision 4: 1st-Person Narrative Voice
**Date:** June 15, 2026  
**Context:** User requested "less robotic, less AI-sloppy, more human-created and personal"  
**Decision:** Rewrote all framework descriptions from 3rd-person encyclopedic ("Sapolsky argues...") to 1st-person protocol ("When I read Determined, I realized...")  
**Impact:** Transformed content from generic summary to personal operating system. Added `protocol` field to each framework.

## Decision 5: Hallmark Aesthetic Overhaul  
**Date:** June 15, 2026  
**Context:** User linked Hallmark project and requested anti-AI-slop design  
**Decision:** Stripped all generic Tailwind defaults (blue-500 gradients, rounded-full buttons). Implemented `#0a0a0a` background, `border-white/[0.06]` borders, Geist Mono for protocols, serif italic for reflections.  
**Rationale:** The default Tailwind dark mode reads as "AI-generated" immediately. Active removal of defaults is required for premium feel.

## Decision 6: Parallel Research Agents
**Date:** June 15, 2026  
**Context:** User requested "spawn sub agents for deep reasoning and ultrathink before running actual research"  
**Decision:** Spawned 5 research-type subagents, one per framework topic, running in parallel  
**Result:** All 5 completed within ~2 minutes with comprehensive reports. Sequential would have taken ~20 minutes. Quality was high — each agent performed 5-8 targeted searches and synthesized structured findings.

## Decision 7: Dual Diagram System
**Date:** June 15, 2026  
**Context:** Research agents returned multiple diagram suggestions per framework  
**Decision:** Added `secondaryDiagram` and `secondaryDiagramTitle` optional fields to the Framework interface  
**Rationale:** Doubles visual density per framework section. Primary diagram shows core model; secondary shows extended/applied model.

## Decision 8: IntersectionObserver Sidebar
**Date:** June 15, 2026  
**Context:** Sidebar navigation links didn't highlight the active section while scrolling  
**Decision:** Rebuilt Sidebar as a client component with `IntersectionObserver` tracking each section  
**Alternative:** Scroll event listener with manual position calculation (rejected: less performant, more code)

## Decision 9: Archive Strategy
**Date:** June 16, 2026  
**Context:** User requested zip archive without dependencies  
**Decision:** Exclude `node_modules/`, `.next/`, `.git/` from archive. Include `wiki/` folder with internal documentation.  
**Note:** User can restore dependencies with `npm install` after extraction.
