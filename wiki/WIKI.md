# Cognitive Architecture Dashboard — Internal Wiki

> **Project:** Cognitive Architecture Dashboard  
> **Created:** June 15-16, 2026  
> **Agent:** Antigravity 2.0 (Claude Opus 4.6 Thinking + Gemini 3.1 Pro)  
> **Status:** Complete  

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Architecture Decisions](#architecture-decisions)
3. [Research Materials & Sources](#research-materials--sources)
4. [Tools & Skills Used](#tools--skills-used)
5. [Agent Workflow Log](#agent-workflow-log)
6. [Lessons Learned](#lessons-learned)
7. [File Manifest](#file-manifest)

---

## Project Overview

### Goal
Build a premium, single-page web dashboard that operationalizes six cognitive/behavioral frameworks into an interactive visual architecture. The frameworks are:

| # | Book/Author | Core Concept |
|---|---|---|
| 1 | *Determined* — Robert Sapolsky | Behavior is a biological endpoint; willpower is a myth |
| 2 | *Antifragile* — Nassim Nicholas Taleb | Gain from disorder via the Barbell Strategy |
| 3 | *Thinking, Fast and Slow* — Daniel Kahneman | System 1 (automatic) vs System 2 (deliberate) |
| 4 | *Flow* — Mihaly Csikszentmihalyi | Optimal state where challenge matches skill |
| 5 | *Deep Work* — Cal Newport | Distraction-free concentration vs shallow work |
| 6 | *Learning How to Learn* — Barbara Oakley | Focused mode vs Diffuse mode oscillation |

### Design Philosophy
- **Anti-AI-Slop**: No generic gradients, no default blue buttons, no clinical copy
- **Hallmark Aesthetic**: Premium, personal, human-crafted feel
- **1st-Person Narrative**: Written as personal protocols, not encyclopedia entries
- **Barbell Strategy Applied to Code**: 80% automated scaffolding, 20% custom focus on Mermaid.js and content

---

## Architecture Decisions

### Tech Stack
| Layer | Choice | Rationale |
|---|---|---|
| Framework | Next.js 14+ (App Router) | SSR, file-based routing, React Server Components |
| Styling | Tailwind CSS | Rapid iteration on dark mode aesthetic |
| Animation | Framer Motion | Declarative, performant scroll animations |
| Diagrams | Mermaid.js | Renders flowcharts, quadrant charts from text syntax |
| Typography | Geist Sans + Geist Mono | Modern, clean; Mono used for "protocol" cards |
| Markdown | react-markdown | Inline bold/italic in dynamic content |

### Key Design Decisions

1. **IntersectionObserver for Sidebar** — The Sidebar tracks which section is in the viewport and highlights the active nav item. This eliminates the need for a scroll-spy library.

2. **Client-Side Mermaid Rendering** — Mermaid.js must run in the browser. Each diagram gets a unique random ID to avoid re-render collisions. The `securityLevel: 'loose'` setting allows inline styles in diagram nodes.

3. **Dual Diagram System** — Each framework has a primary `diagram` (core model) and optional `secondaryDiagram` (extended model). This doubles the visual density without cluttering the initial view.

4. **Typed Data Model** — `frameworks.ts` exports typed interfaces (`Framework`, `KeyInsight`, `Example`) to ensure type safety and enable IDE autocompletion.

5. **Staggered Animations** — Key Insights and Examples use `staggerChildren` variants in Framer Motion, creating a cascading reveal effect as the user scrolls.

---

## Research Materials & Sources

### User-Provided Links
| URL | Topic | Status |
|---|---|---|
| https://www.sloww.co/determined-robert-sapolsky/ | Sapolsky summary | ✅ Fetched & synthesized |
| https://app.getstoryshots.com/book-summary/thinking-fast-and-slow | Kahneman summary | ✅ Fetched & synthesized |
| https://app.getstoryshots.com/book-summary/slow-productivity | Newport: Slow Productivity | ✅ Fetched & synthesized |
| https://app.getstoryshots.com/book-summary/deep-work | Newport: Deep Work | ✅ Fetched & synthesized |
| https://app.getstoryshots.com/book-summary/digital-minimalism | Newport: Digital Minimalism | ✅ Fetched & synthesized |
| https://www.getstoryshots.com/books/antifragile-summary/ | Taleb summary | ✅ Fetched & synthesized |
| https://www.norberthires.blog/antifragile-summary/ | Taleb extended summary | ✅ Fetched & synthesized |
| https://www.insta.page/flow-book-mindmap | Flow mind map | ✅ Fetched & synthesized |
| https://github.com/Nutlope/hallmark | Hallmark design principles | ✅ Applied to UI aesthetic |
| https://github.com/sickn33/antigravity-awesome-skills | Antigravity skills | ✅ Documented in AGENT_SKILLS.md |
| https://www.skills.sh/ | Skills marketplace | ✅ Reviewed |
| https://officialskills.sh/ | Official skills | ✅ Reviewed |

### Agent-Discovered Sources (via Web Search)
| Source | Topic | Key Data Extracted |
|---|---|---|
| UCI Gloria Mark research | Attention Residue | 23 min 15 sec recovery time |
| Sophie Leroy 2009 study | Context-switching costs | "Thicker" residue from incomplete tasks |
| Danziger et al. 2011 | Hungry Judge study | Parole rate: 0% → 65% after meals |
| Watts, Duncan, Quan 2018 | Marshmallow Test replication | SES predicts "willpower," not character |
| CDC/Kaiser ACE Study | Adverse Childhood Experiences | 4+ ACEs → 7× alcoholism, 11× drug abuse |
| Kahneman & Tversky prospect theory | Loss aversion meta-analysis (2024) | λ = 1.955 across 607 estimates |
| Steven Kotler research | Flow triggers | ~4% beyond comfort zone |
| Ebbinghaus forgetting curve | Spaced repetition | ~70% forgotten within 24 hours |
| Reddit r/nassimtaleb, r/getdisciplined | Practical applications | Barbell applied to career, health, social |

---

## Tools & Skills Used

### Comprehensive Tool Usage Report

| Tool / Skill | Purpose | Times Used | Impact |
|---|---|---|---|
| **search_web** | Searched for visual models, charts, practical examples for all 6 frameworks | 6+ | Found key statistics (23 min attention residue, 2:1 loss aversion ratio), real experiments (bat-and-ball, Linda problem), and visual metaphors (Damocles/Phoenix/Hydra triad) |
| **read_url_content** | Fetched full content from user-provided URLs (Sloww.co, StoryShots, NorbertHires) | 8+ | Extracted detailed book summaries, key concepts, and actionable frameworks |
| **invoke_subagent** (research) | Spawned 5 parallel research agents — one per framework topic | 5 | Deep parallel research across Sapolsky, Taleb, Kahneman, Newport, and Flow/Oakley. Each agent performed 5-8 web searches and synthesized findings into structured reports |
| **schedule** | Set timers to wait for research agent completion | 3 | Coordinated async workflow without polling |
| **write_to_file** | Created/rewrote source files | 12+ | Built `frameworks.ts`, `page.tsx`, `Sidebar.tsx`, `MindMapRenderer.tsx`, `globals.css`, `layout.tsx`, wiki, and report |
| **replace_file_content** | Made targeted edits to existing files | 6+ | Fixed template string syntax errors, updated Mermaid themes, refined layout classes |
| **view_file** | Inspected current file state before editing | 10+ | Ensured edits were accurate and didn't break existing functionality |
| **list_dir** | Explored project structure | 3 | Understood file layout for targeted modifications |
| **grep_search** | Searched for patterns in codebase | 2 | Found syntax errors and import references |
| **run_command** | Ran `npm run dev`, `npx create-next-app` | 3 | Initialized project and started development server |
| **manage_task** | Checked dev server status | 2 | Confirmed server was running and pages were compiling |
| **generate_image** | Not used (Mermaid.js handles all visuals) | 0 | — |

### MCP Servers Available (Not Used for This Project)
| MCP Server | Reason Not Used |
|---|---|
| pixellab | Project uses Mermaid.js for diagrams, not pixel art |
| context-memory | Could be useful for future session persistence |
| playwright | Could be used for automated visual regression testing |
| sequential-thinking | Research agents handled deep reasoning instead |

### Subagent Architecture
```
Main Agent (Claude Opus 4.6 Thinking)
├── Sapolsky Research Agent (research type)
│   └── 6 web searches + URL fetches → structured report
├── Taleb Research Agent (research type)
│   └── 6 web searches + URL fetches → structured report
├── Kahneman Research Agent (research type)
│   └── 5 web searches + URL fetches → structured report
├── Newport Research Agent (research type)
│   └── 6 web searches + URL fetches → structured report
└── Flow/Oakley Research Agent (research type)
    └── 6 web searches + URL fetches → structured report
```

---

## Agent Workflow Log

### Phase 1: Project Initialization
1. User provided the project blueprint and MCP server configuration
2. Initialized Next.js 14+ project with Tailwind, Framer Motion, Mermaid.js
3. Created initial data model in `frameworks.ts` with Mermaid diagram syntax
4. Built Sidebar, MindMapRenderer, and main page layout

### Phase 2: Bug Fixes
1. Fixed `Unterminated template` error in Sidebar.tsx (backtick escaping issue)
2. Fixed Mermaid syntax errors: `[cite: 1]` tags inside labels, quadrant label parentheses
3. Resolved build errors and confirmed dev server compilation

### Phase 3: Content Enrichment (Current Session)
1. User requested: "search internet and reddit and x.com for additional materials"
2. Performed initial web searches for Deep Work, Antifragile, and Kahneman visuals
3. User requested: "make it well structured and less noisy"
4. Rewrote all framework content to 1st-person protocol format
5. Applied Hallmark aesthetic: removed generic gradients, refined typography

### Phase 4: Deep Research Sprint
1. User requested: "spawn sub agents for deep reasoning"
2. Spawned 5 parallel research subagents (one per framework)
3. Each agent performed 5-8 web searches and URL fetches
4. All 5 agents returned comprehensive reports within ~2 minutes
5. Synthesized all findings into expanded `frameworks.ts` with:
   - `keyInsights[]` — 4-5 core concepts per framework
   - `examples[]` — 4 real-world examples per framework
   - `stats[]` — 3-4 key numbers per framework
   - `secondaryDiagram` — additional Mermaid diagram per framework

### Phase 5: UX Polish & Finalization
1. Rebuilt Sidebar with IntersectionObserver active-state tracking
2. Overhauled globals.css with custom scrollbars, Mermaid SVG refinements
3. Updated page.tsx to render all expanded content sections
4. Created internal wiki and comprehensive report
5. Archived project to zip

---

## Lessons Learned

### Technical
1. **Mermaid.js Syntax is Fragile** — Bracket characters (`[`, `]`), parentheses in labels, and `cite:` tags all cause parse errors. Always validate diagram syntax in isolation before embedding.
2. **Template Literals with Backticks** — In JSX/TSX, template strings containing backticks must use `\`` escaping or string concatenation. This caused the first build error.
3. **Client-Side Only Rendering** — Mermaid.js cannot run on the server. Components using it must have `"use client"` directives and render after mount.
4. **IntersectionObserver > Scroll Listeners** — For sidebar active-state tracking, IO is more performant and declarative than manual scroll position calculations.

### Design
1. **Anti-AI-Slop Requires Active Removal** — The default Tailwind aesthetic (blue-500, gradient blobs, rounded-full buttons) instantly reads as "AI-generated." Removing these defaults is as important as adding custom styles.
2. **Typography Pairing Creates Personality** — Sans for body, serif italic for reflections, mono for protocols. This three-font system creates the "personal journal" feel that distinguishes the dashboard from generic apps.
3. **Whitespace > Decoration** — Generous spacing (`space-y-40`, `pb-32`) between sections creates visual breathing room that no amount of gradient borders can replicate.

### Process
1. **Parallel Research Agents Are Extremely Effective** — 5 agents completing 30+ searches in ~2 minutes would have taken 20+ minutes sequentially. The quality of synthesis was high.
2. **1st-Person Rewriting Transforms Content** — Changing "Taleb's framework categorizes..." to "I use Taleb's Barbell Strategy to..." makes the same content feel 10× more personal and actionable.
3. **The Barbell Applied to Development** — 80% automated scaffolding (Next.js, Tailwind, Framer Motion) + 20% custom (Mermaid integration, content architecture) is the ideal split for rapid, high-quality output.

---

## File Manifest

```
c:\Projects\books\
├── src/
│   ├── app/
│   │   ├── globals.css          — Custom scrollbars, Mermaid overrides, typography
│   │   ├── layout.tsx           — Root layout with Geist fonts, Sidebar, dark mode
│   │   └── page.tsx             — Main dashboard page with all framework sections
│   ├── components/
│   │   ├── MindMapRenderer.tsx  — Client-side Mermaid.js renderer with loading/error states
│   │   └── Sidebar.tsx          — Navigation sidebar with IntersectionObserver tracking
│   └── data/
│       └── frameworks.ts        — All framework data: diagrams, insights, examples, stats
├── wiki/
│   └── WIKI.md                  — This file (internal wiki)
├── AGENT_SKILLS.md              — Documentation of available agent skills
├── README.md                    — Project readme
├── package.json                 — Dependencies and scripts
├── next.config.ts               — Next.js configuration
├── tailwind.config.ts           — Tailwind configuration
└── tsconfig.json                — TypeScript configuration
```
