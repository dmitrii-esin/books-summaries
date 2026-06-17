export interface KeyInsight {
  title: string;
  text: string;
}

export interface Example {
  name: string;
  detail: string;
}

export interface Framework {
  id: string;
  title: string;
  author: string;
  bookReference: {
    title: string;
    summary: string;
  };
  core: string;
  description: string;
  protocol: string;
  diagram: string;
  secondaryDiagram?: string;
  secondaryDiagramTitle?: string;
  tertiaryDiagram?: string;
  tertiaryDiagramTitle?: string;
  keyInsights: KeyInsight[];
  examples: Example[];
  stats?: { label: string; value: string }[];
}

export const frameworks: Framework[] = [
  {
    id: "sapolsky",
    title: "Determinism – Sapolsky",
    author: "Robert Sapolsky",
    bookReference: {
      title: "Determined: A Science of Life without Free Will",
      summary: "Sapolsky argues that our choices, behaviors, and desires are entirely the product of a complex chain of biological and environmental causes stretching back from milliseconds to millennia, dismantling the illusion of free will."
    },
    core: "There is no free will. It's biology all the way down.",
    description: "When I read *Determined*, I realized my 'willpower' is just a biological state. Instead of relying on discipline, I now restructure my daily environment to redirect the causal chain before the moment of decision.",
    protocol: "If I feel resistance to a task, I don't force it. I check my biological baseline: Sleep, Glucose, Cortisol (stress). I fix the biology first. I use the 'Upstream Pause' — before judging anyone's behavior (including my own), I ask: what happened one second, one hour, one year before this action?",
    diagram: `graph TD
    A[Evolution & Genetics] --> B[Childhood & Epigenetics]
    B --> C[Months Prior: Chronic Stress]
    C --> D[Hours Prior: Blood Glucose]
    D --> E[Seconds Prior: Amygdala Triggers]
    E --> F{My Behavior}
    F --> G[Social Consequences]
    G -.->|Feedback Loop| C
    
    style F fill:#0f172a,stroke:#3b82f6,stroke-width:2px,color:#fff
    style D fill:#1e293b,stroke:#64748b,stroke-width:1px,color:#cbd5e1
    style G fill:#1e1e1e,stroke:#555,stroke-width:1px,color:#888`,
    secondaryDiagram: `graph TD
    S["Environmental Stressor"] --> C["Cortisol Release"]
    C --> B["Brain Architecture Changes"]
    B --> AMY["Amygdala Enlargement"]
    B --> PFC["Prefrontal Cortex Atrophy"]
    AMY --> BH["Impulsive Behavior"]
    PFC --> BH
    BH --> SC["Social Consequences"]
    SC -.->|Vicious Cycle| S
    
    style AMY fill:#7f1d1d,stroke:#ef4444,stroke-width:1px,color:#fff
    style PFC fill:#7f1d1d,stroke:#ef4444,stroke-width:1px,color:#fff
    style BH fill:#451a03,stroke:#d97706,stroke-width:1px,color:#fff`,
    secondaryDiagramTitle: "The Stress–Brain–Behavior Feedback Loop",
    tertiaryDiagram: `timeline
    title The Chain of Determinism
    Evolution : Millennia prior : Species-wide traits shaped
    Epigenetics : Decades prior : Childhood environment alters gene expression
    Neuroplasticity : Months prior : Chronic stress reshapes brain structure
    Endocrinology : Hours prior : Hormone levels fluctuate
    Neurobiology : Seconds prior : Sensory triggers activate amygdala
    Action : Now : Behavior occurs`,
    tertiaryDiagramTitle: "Causality Timeline",
    keyInsights: [
      { title: "The Domino Metaphor", text: "You are not the person pushing the first domino. You *are* the domino. Each tile represents a prior cause — gene, hormone, childhood event, cultural norm. There is no 'first pusher.'" },
      { title: "The Press Secretary", text: "The frontal cortex doesn't make decisions — it rationalizes decisions already determined by deeper biological processes, then presents them to consciousness as 'choices.'" },
      { title: "The Broken Car", text: "You don't hate a car for having a faulty engine. You fix it. Sapolsky applies this to behavior: treat problems as mechanical/medical issues, not moral failings." },
      { title: "Compassion Over Blame", text: "If a judge's sentencing can be predicted by the time since their last meal, the 'self' is not acting independently. Accountability becomes a question of architecture, not character." },
    ],
    examples: [
      { name: "The Hungry Judge Study", detail: "Parole grant rate: ~65% after a meal break → drops to nearly 0% as judges get hungry → rebounds to ~65% after the next food break. Rational judicial decisions predicted by blood glucose." },
      { name: "Marshmallow Test Reinterpretation", detail: "2018 replication showed a child's ability to delay gratification is overwhelmingly predicted by socioeconomic background and environmental trust — not innate 'willpower.' A child in a resource-scarce environment acts rationally by eating the marshmallow now." },
      { name: "Charles Whitman", detail: "The Texas Tower sniper (1966) left a note requesting an autopsy. It revealed a glioblastoma tumor pressing against his amygdala. A physical disruption fundamentally redirected behavior." },
      { name: "Dutch Hunger Winter", detail: "Fetuses exposed to famine in 1944-45 developed 'thrifty' metabolisms, leading to higher obesity and diabetes rates decades later. Biology was shaped before they were born." },
    ],
    stats: [
      { label: "Parole grant swing", value: "0% → 65%" },
      { label: "ACE score 4+ → alcoholism risk", value: "7× higher" },
      { label: "ACE score 4+ → drug abuse risk", value: "11× higher" },
      { label: "Chronic cortisol effect on PFC", value: "Measurable atrophy" },
    ],
  },
  {
    id: "taleb",
    title: "Antifragility – Taleb",
    author: "Nassim Nicholas Taleb",
    bookReference: {
      title: "Antifragile: Things That Gain from Disorder",
      summary: "Taleb introduces the concept of 'antifragility'—systems that not only withstand shocks but actively improve because of them. He explains how to structure our lives to benefit from volatility, randomness, and stress."
    },
    core: "Gain from disorder. The Barbell Strategy.",
    description: "I use Taleb's Barbell Strategy to ensure my cognitive and financial systems don't just survive chaos, but thrive on it. I avoid the 'moderate' middle — it's a trap. The mythological anchor: Damocles (fragile), Phoenix (robust), Hydra (antifragile).",
    protocol: "85% of my time and resources go to ultra-safe stability (routine, savings, deep work). 15% goes to high-volatility, high-upside experiments. I apply Via Negativa daily: I gain more by removing what's harmful than by adding what seems helpful. Cut the downside first.",
    diagram: `graph LR
    Safe["85% Safe: Stability"] --> Bar[The Barbell]
    Chaos["15% Chaos: Upside"] --> Bar
    Middle["The Fragile Middle: Avoid"] -.-> Bar
    
    style Safe fill:#064e3b,stroke:#10b981,stroke-width:2px,color:#fff
    style Chaos fill:#7f1d1d,stroke:#ef4444,stroke-width:2px,color:#fff
    style Middle fill:#1e1e1e,stroke:#333,stroke-width:1px,stroke-dasharray: 5 5,color:#555`,
    secondaryDiagram: `graph LR
    F["Fragile: Damocles"] --> R["Robust: Phoenix"]
    R --> A["Antifragile: Hydra"]
    
    F ---|"Breaks under stress"| FN["Concave payoff"]
    R ---|"Resists stress"| RN["Flat payoff"]
    A ---|"Gains from stress"| AN["Convex payoff"]
    
    style F fill:#7f1d1d,stroke:#ef4444,stroke-width:1px,color:#fff
    style R fill:#78350f,stroke:#d97706,stroke-width:1px,color:#fff
    style A fill:#064e3b,stroke:#10b981,stroke-width:1px,color:#fff`,
    secondaryDiagramTitle: "The Antifragility Spectrum",
    tertiaryDiagram: `graph LR
    subgraph Quadrants[Risk vs Reward Asymmetry]
        direction TB
        Q1["Optionality (Low Downside / High Upside)"]
        Q2["Fragile (Low Upside / High Downside)"]
        Q3["Trivial (Low Upside / Low Downside)"]
        Q4["Robust (Capped Upside / Capped Downside)"]
    end
    
    style Q1 fill:#064e3b,stroke:#10b981,stroke-width:1px,color:#fff
    style Q2 fill:#7f1d1d,stroke:#ef4444,stroke-width:1px,color:#fff`,
    tertiaryDiagramTitle: "Asymmetry Quadrant",
    keyInsights: [
      { title: "Via Negativa", text: "Gain more by *removing* what's harmful than by adding what seems helpful. Don't search for the perfect diet — just eliminate processed sugar and junk food. Subtraction > Addition." },
      { title: "Optionality", text: "Position yourself for capped downside and unlimited upside. A VC invests in 10 startups. 9 can fail entirely (capped loss), but 1 unicorn pays for everything (uncapped upside)." },
      { title: "Lindy Effect", text: "For non-perishable things (ideas, books, tech), the longer it has survived, the longer it will likely survive. Shakespeare (400+ years) will outlast any current bestseller." },
      { title: "Skin in the Game", text: "Decision-makers must bear consequences of their decisions. Hammurabi's Code: if an architect's building collapses and kills the owner, the architect is put to death." },
      { title: "Wind & Candle vs. Fire", text: "Wind extinguishes a candle but energizes a fire. Fragile systems are candles (destroyed by volatility). Antifragile systems are fires (fed by volatility)." },
    ],
    examples: [
      { name: "Career Barbell", detail: "Safe end: Stable day job with reliable income. Aggressive end: Side projects, startup experiments, book-writing. Avoid: 'Safe' corporate roles with hidden layoff risk and no upside." },
      { name: "Health Barbell", detail: "Safe end: Walking, rest, fasting, sleep. Aggressive end: Sprinting, heavy lifting, cold exposure. Avoid: Chronic moderate cardio — neither safe nor strengthening." },
      { name: "Learning Barbell", detail: "Safe end: Deep mastery of Lindy-proven fundamentals (math, writing, logic). Aggressive end: Wild experimentation in unrelated fields. Avoid: Shallow survey courses." },
      { name: "Social Barbell", detail: "A few deep, reliable long-term relationships AND many low-commitment exploratory connections. Avoid the mushy middle of many medium-depth acquaintances." },
    ],
  },
  {
    id: "kahneman",
    title: "Thinking, Fast and Slow – Kahneman",
    author: "Daniel Kahneman",
    bookReference: {
      title: "Thinking, Fast and Slow",
      summary: "Kahneman breaks down human thought into two systems: System 1 (fast, intuitive, emotional) and System 2 (slow, deliberate, logical), revealing the pervasive cognitive biases that shape our judgments and decisions."
    },
    core: "System 1 (Automatic) vs. System 2 (Deliberate).",
    description: "My brain defaults to System 1 to save energy. I now recognize that most of my anxiety comes from System 1 reacting to noise. I use deliberate pauses to force System 2 online. The key insight: the less you know, the easier it is to build a coherent story, and the *more* confident you feel (WYSIATI).",
    protocol: "The 10-10-10 Rule: Before any important decision, I ask — how will I feel about this in 10 minutes? 10 months? 10 years? This forces System 2 to engage temporal perspective-taking and overrides System 1's present-bias. I also run Pre-Mortems: before committing to a plan, I imagine it has already failed spectacularly and ask 'What went wrong?'",
    diagram: `graph TD
    Input((Stimulus)) --> S1[System 1: Fast, Emotional, Automatic]
    Input --> S2[System 2: Slow, Logical, Effortful]
    
    S1 -.->|Biases & Heuristics| Error[Reactive Decisions]
    S2 -->|Pattern Interruption| Focus[Deliberate Action]
    
    style S1 fill:#451a03,stroke:#d97706,stroke-width:2px,color:#fff
    style S2 fill:#0c4a6e,stroke:#0ea5e9,stroke-width:2px,color:#fff`,
    secondaryDiagram: `graph TD
    EXP["Experiencing Self"] ---|"Lives in the moment"| NOW["3-second windows"]
    REM["Remembering Self"] ---|"Constructs narratives"| MEM["Peak-End Rule"]
    MEM --> DUR["Duration Neglect"]
    REM ---|"Makes all future decisions"| DEC["Future Choices"]
    
    style EXP fill:#0c4a6e,stroke:#0ea5e9,stroke-width:1px,color:#fff
    style REM fill:#451a03,stroke:#d97706,stroke-width:1px,color:#fff`,
    secondaryDiagramTitle: "The Two Selves",
    tertiaryDiagram: `graph TD
    Stimulus --> S1[System 1: Default Path]
    S1 --> IR[Intuitive Response: Fast/Automatic]
    
    subgraph System_2_Override_Protocol
        P[Pause: 10-10-10 Rule] --> A[Analyze: Check WYSIATI]
        A --> R[Reframe: Base Rates]
    end
    
    IR -.->|Trigger Deliberation| P
    R --> Reasoned[Reasoned Decision: Slow/Effortful]
    
    style S1 fill:#7f1d1d,stroke:#ef4444,stroke-width:1px,color:#fff
    style Reasoned fill:#064e3b,stroke:#10b981,stroke-width:1px,color:#fff`,
    tertiaryDiagramTitle: "Bias Override Protocol",
    keyInsights: [
      { title: "Anchoring", text: "You over-rely on the first number you see. A jacket marked '$500 → $199' feels like a steal even if it's worth $120. In salary negotiations, the first number spoken shapes the final offer." },
      { title: "WYSIATI", text: "'What You See Is All There Is.' System 1 builds a coherent story from only the information currently available, without considering what's missing. This is the engine behind overconfidence." },
      { title: "Loss Aversion", text: "Losses feel ~2× more painful than equivalent gains feel good. You hold losing stocks too long and sell winners too quickly. Meta-analysis across 607 studies: mean coefficient = 1.955." },
      { title: "The Two Selves", text: "The Experiencing Self lives in 3-second windows. The Remembering Self judges by Peak-End Rule + Duration Neglect. 20 min of beautiful music 'ruined' by a screech at the end." },
      { title: "Substitution", text: "When facing a hard question, System 1 silently replaces it with an easier one. 'Should I invest in this company?' becomes 'Do I recognize this brand?'" },
    ],
    examples: [
      { name: "The Bat-and-Ball Problem", detail: "A bat and ball cost $1.10 total. The bat costs $1.00 more than the ball. How much is the ball? Intuitive answer: $0.10. Correct: $0.05. Over 50% of Harvard/MIT students get it wrong." },
      { name: "The Linda Problem", detail: "Linda is described as a bright philosophy major concerned with social justice. 85% of people say she's more likely to be 'a bank teller AND feminist' than 'a bank teller' — violating basic probability." },
      { name: "Cold-Hand Experiment", detail: "60 sec of pain vs. 90 sec (same 60 sec + 30 sec of slightly less cold). Most chose to repeat the longer trial because the ending was less painful. Duration neglect in action." },
      { name: "Attention Residue", detail: "It takes 23 minutes and 15 seconds to fully regain focus after an interruption. Even 5-second interruptions can triple error rates in complex cognitive tasks." },
    ],
    stats: [
      { label: "Loss aversion coefficient", value: "~2:1 ratio" },
      { label: "Bat-and-ball error rate (elite students)", value: ">50%" },
      { label: "Linda problem error rate", value: "85%" },
      { label: "Planning Fallacy underestimation", value: "30-50%" },
    ],
  },
  {
    id: "csikszentmihalyi",
    title: "Flow – Csikszentmihalyi",
    author: "Mihaly Csikszentmihalyi",
    bookReference: {
      title: "Flow: The Psychology of Optimal Experience",
      summary: "Csikszentmihalyi explores 'flow,' a state of deep absorption and optimal experience where challenge and skill are perfectly matched, leading to profound satisfaction and performance."
    },
    core: "The optimal state where challenge matches skill.",
    description: "Flow is my ultimate cognitive target. If I'm anxious, the challenge is too high. If I'm bored, my skill is too high. I constantly dial the difficulty up or down to stay in the zone. The sweet spot is approximately 4% beyond my current ability.",
    protocol: "Before starting work, I define a clear goal and an immediate feedback mechanism. I eliminate all notifications, put my phone in another room, and commit to a 15-minute push-through (flow typically emerges after 20-30 minutes). If anxious → break the task smaller. If bored → add constraints or raise difficulty.",
    diagram: `graph TD
    subgraph FlowState[Calibration]
        A["Low Skill/Low Challenge: Apathy"]
        B["High Skill/High Challenge: Flow"]
        C["High Skill/Low Challenge: Relaxation"]
        D["Low Skill/High Challenge: Anxiety"]
    end`,
    secondaryDiagram: `graph TB
    G["Clear Goals"] --> FL["FLOW STATE"]
    F["Immediate Feedback"] --> FL
    B["Challenge-Skill Balance"] --> FL
    FL --> AA["Action-Awareness Merging"]
    FL --> CC["Complete Concentration"]
    FL --> SC["Sense of Control"]
    FL --> LS["Loss of Self-Consciousness"]
    FL --> AT["Altered Sense of Time"]
    
    style FL fill:#064e3b,stroke:#10b981,stroke-width:2px,color:#fff
    style G fill:#1e293b,stroke:#64748b,stroke-width:1px,color:#cbd5e1
    style F fill:#1e293b,stroke:#64748b,stroke-width:1px,color:#cbd5e1
    style B fill:#1e293b,stroke:#64748b,stroke-width:1px,color:#cbd5e1`,
    secondaryDiagramTitle: "The 8 Elements of Flow",
    keyInsights: [
      { title: "3 Pre-Conditions", text: "Clear Goals (know your exact next step), Immediate Feedback (real-time performance data), and Challenge-Skill Balance (~4% beyond comfort zone). Without these, flow cannot begin." },
      { title: "5 Experiential Characteristics", text: "Action-awareness merging, complete concentration, sense of control, loss of self-consciousness, and altered sense of time. These are symptoms of flow, not triggers." },
      { title: "The Calibration Problem", text: "Skills improve with practice, so an activity that induces flow today may cause boredom tomorrow unless challenge is progressively increased. Flow requires continuous recalibration." },
      { title: "Flow Before Phone", text: "Avoid email and social media first thing in the morning. Your first deep work block is your most valuable — protect it from System 1 dopamine hits." },
    ],
    examples: [
      { name: "The 8-Channel Model", detail: "Beyond the simple quadrant: Apathy (low/low), Boredom (low challenge/med skill), Relaxation (low/high), Control (med/high), FLOW (high/high), Arousal (high challenge/med skill), Anxiety (high/low), Worry (med/low)." },
      { name: "The Jazz Musician", detail: "A jazz player improvising without consciously thinking about each note — action and awareness merge. They're responding to feedback (harmony) while meeting challenge (complexity) at the edge of skill." },
      { name: "The 15-Minute Rule", detail: "The initial resistance is the hardest part. Commit to 'just 15 minutes' and the discomfort typically dissolves into engagement. Flow emerges after the push-through." },
      { name: "Autotelic Experience", detail: "The activity becomes intrinsically rewarding — you do it for the sheer joy of doing it. External rewards become irrelevant. This is the deepest layer of flow." },
    ],
  },
  {
    id: "newport",
    title: "Deep Work – Newport",
    author: "Cal Newport",
    bookReference: {
      title: "Deep Work: Rules for Focused Success in a Distracted World",
      summary: "Newport argues that the ability to focus without distraction on a cognitively demanding task is a rare and increasingly valuable skill in the modern economy, providing rules to cultivate this capability."
    },
    core: "Distraction-free concentration vs. logistical shallow work.",
    description: "I protect my deep work blocks ruthlessly. Context-switching leaves 'attention residue' that destroys cognitive capacity for 23+ minutes. The biological limit is 3-4 hours of deep work per day. I don't aim for 8 hours — I aim for high-intensity, short-duration sprints.",
    protocol: "The 4DX Framework: (1) Focus on the Wildly Important goal, (2) Act on Lead Measures (hours of deep work, not outcomes), (3) Keep a Compelling Scoreboard, (4) Create a Cadence of Accountability. End every day with the Shutdown Ritual: capture loose ends → review tomorrow → close everything → say 'Shutdown complete' out loud.",
    diagram: `graph TD
    Day[Daily Schedule] --> Deep[Deep Work: 3-4 Hours]
    Day --> Shallow[Shallow Work: Batched]
    
    Deep -->|High Value| Output[New Value Creation]
    Shallow -->|Logistics| Maintenance[System Maintenance]
    
    style Deep fill:#312e81,stroke:#6366f1,stroke-width:2px,color:#fff
    style Shallow fill:#1f2937,stroke:#9ca3af,stroke-width:1px,color:#fff`,
    secondaryDiagram: `graph TD
    A["Start of Day: 10-min Planning"] --> B{"Deep or Shallow?"}
    B -->|Deep| C["Block 60-90 min"]
    B -->|Shallow| D["Batch into window"]
    C --> E["Phone away, tabs closed"]
    E --> F["ONE wildly important task"]
    F --> G{"Block complete?"}
    G -->|Yes| H["Ready-to-Resume note"]
    G -->|Interrupted| I["Write where I am"]
    I --> F
    H --> J{"More deep blocks today?"}
    J -->|Yes| C
    J -->|No, max 3-4 hrs| D
    D --> K["Process email, Slack"]
    K --> L["Shutdown Ritual"]
    
    style C fill:#312e81,stroke:#6366f1,stroke-width:1px,color:#fff
    style L fill:#064e3b,stroke:#10b981,stroke-width:1px,color:#fff`,
    secondaryDiagramTitle: "Time-Blocking Decision Flow",
    tertiaryDiagram: `graph TD
    Deep[Deep Work State] --> Switch[Context Switching]
    Switch --> Shallow[Shallow Work State]
    Shallow --> Deep
    
    style Switch fill:#7f1d1d,stroke:#ef4444,stroke-width:1px,color:#fff`,
    tertiaryDiagramTitle: "Attention Residue State Machine",
    keyInsights: [
      { title: "Rule 1: Work Deeply", text: "Choose a depth philosophy: Monastic (total isolation), Bimodal (multi-day retreats), Rhythmic (daily habit), or Journalistic (fit into gaps). Most people start with Rhythmic — 90 min every morning." },
      { title: "Rule 2: Embrace Boredom", text: "Don't take breaks from distraction — take breaks from focus. Schedule internet use in defined blocks. Practice Productive Meditation: focus on one problem while walking, 2-3× per week." },
      { title: "Rule 3: Quit Social Media", text: "Apply the Craftsman Approach: adopt a tool only if its positive impacts substantially outweigh its negatives. A minor benefit is NOT sufficient. Run the 30-Day Quit Test." },
      { title: "Rule 4: Drain the Shallows", text: "Schedule every minute. Ask 'How many months to train a college grad to do this?' to measure depth. Set a hard end-time (Fixed-Schedule Productivity). Budget shallow work to 30-50% max." },
      { title: "Slow Productivity", text: "Do Fewer Things (2-3 active projects max). Work at a Natural Pace (plan on years, not weeks). Obsess Over Quality (excellence, not perfectionism)." },
    ],
    examples: [
      { name: "Attention Residue", detail: "Sophie Leroy's 2009 study: subjects interrupted mid-task performed significantly worse on subsequent tasks. Residue is 'thicker' when Task A was left incomplete. Mitigation: write a 'Ready-to-Resume' note in <1 min." },
      { name: "The Shutdown Ritual", detail: "1) Capture all loose ends in a trusted system. 2) Review tomorrow's calendar. 3) Update time-block plan. 4) Close all tabs/apps. 5) Say 'Shutdown complete' out loud for psychological closure." },
      { name: "Lead vs. Lag Measures", detail: "Track hours of deep work per day (lead), not papers published or features shipped (lag). Use a physical tally or visible scoreboard. Review weekly." },
      { name: "Digital Minimalism Screen", detail: "For each tool: (1) Does it directly support something I deeply value? (2) Is it the best way? (3) How will I constrain use to maximize value? If it fails any test, don't reintroduce." },
    ],
    stats: [
      { label: "Focus recovery after interruption", value: "23 min 15 sec" },
      { label: "App/task toggles per day", value: "1,200+" },
      { label: "Error rate increase from 5-sec interruption", value: "3×" },
      { label: "Max sustainable deep work per day", value: "3-4 hours" },
    ],
  },
  {
    id: "oakley",
    title: "A Mind for Numbers – Oakley",
    author: "Barbara Oakley",
    bookReference: {
      title: "A Mind for Numbers: How to Excel at Math and Science",
      summary: "Oakley reveals the cognitive strategies underlying effective learning, focusing on the interplay between focused and diffuse modes of thinking, chunking, and defeating procrastination."
    },
    core: "Focused mode vs. Diffuse mode.",
    description: "Learning requires oscillating between intense focus and complete relaxation. If I'm stuck, pushing harder doesn't work — I have to step away to activate the Default Mode Network. The pinball metaphor: Focused Mode has bumpers packed tightly (deep analysis). Diffuse Mode has bumpers spread far apart (broad creative connections).",
    protocol: "Pomodoro Protocol: 25 min intense focus → 5 min break → repeat. After 4 cycles, take a 15-30 min break. Focus on PROCESS not PRODUCT ('I'll work for 25 minutes' not 'I'll finish this chapter'). Before bed, do a light review to leverage sleep-based memory consolidation via the glymphatic system.",
    diagram: `graph LR
    Focus[Focused Mode: Execution] <--> Diffuse[Diffuse Mode: Synthesis]
    
    Focus -->|Frustration / Block| Diffuse
    Diffuse -->|Insight / Breakthrough| Focus
    
    style Focus fill:#701a75,stroke:#d946ef,stroke-width:2px,color:#fff
    style Diffuse fill:#065f46,stroke:#10b981,stroke-width:2px,color:#fff`,
    secondaryDiagram: `graph TD
    P["Pomodoro: 25 min focus"] --> W["Hit a wall?"]
    W -->|Yes| R["Diffuse Mode: Walk, rest"]
    W -->|No| P
    R --> I["Subconscious processing"]
    I --> P
    P --> C["Chunking: Focus, Understand, Practice"]
    C --> AR["Active Recall: Self-test"]
    AR --> SR["Spaced Repetition: 1d, 3d, 7d, 14d, 30d"]
    SR --> IL["Interleaving: Mix topics"]
    IL --> SL["Sleep: Memory consolidation"]
    SL -->|Next day| P
    
    style P fill:#701a75,stroke:#d946ef,stroke-width:1px,color:#fff
    style R fill:#065f46,stroke:#10b981,stroke-width:1px,color:#fff
    style SL fill:#0c4a6e,stroke:#0ea5e9,stroke-width:1px,color:#fff`,
    secondaryDiagramTitle: "The Complete Learning Cycle",
    tertiaryDiagram: `graph LR
    A[Learn] --> B{Wait 1 Day}
    B --> C[Recall / Self-Test]
    C --> D{Wait 3 Days}
    D --> E[Recall / Self-Test]
    E --> F{Wait 7 Days}
    F --> G[Recall / Self-Test]
    G --> H[Long-Term Memory]
    
    style H fill:#064e3b,stroke:#10b981,stroke-width:2px,color:#fff
    style C fill:#451a03,stroke:#d97706,stroke-width:1px,color:#fff
    style E fill:#451a03,stroke:#d97706,stroke-width:1px,color:#fff
    style G fill:#451a03,stroke:#d97706,stroke-width:1px,color:#fff`,
    tertiaryDiagramTitle: "Spaced Repetition Protocol",
    keyInsights: [
      { title: "Chunking", text: "Group information into compact meaningful units that occupy less working memory. Working memory holds ~4 chunks. Well-formed chunks compress multiple pieces into one slot, like file compression." },
      { title: "Spaced Repetition", text: "Review at increasing intervals: 1 day → 3 days → 7 → 14 → 30. Fights the Ebbinghaus forgetting curve — we forget ~70% within 24 hours without review. 20 min across 4 days beats 80 min in one sitting." },
      { title: "Interleaving", text: "Mix different topics within the same study session. This teaches you WHEN to use a strategy, not just HOW. Combats the 'illusion of competence' from blocked repetition." },
      { title: "Illusion of Competence", text: "Passive re-reading feels like learning but isn't. Highlighting without recall creates familiarity, not mastery. Understanding someone else's solution ≠ being able to produce your own. Always self-test." },
      { title: "Default Mode Network", text: "The DMN activates when NOT focused — during mind-wandering, introspection, thinking about past/future. It handles memory consolidation and creative association. You cannot force creative insights; you must toggle networks." },
    ],
    examples: [
      { name: "The Pinball Machine", detail: "Focused Mode = bumpers packed tightly, ball bounces in a small area (deep analysis). Diffuse Mode = bumpers spread far apart, ball travels widely to reach new areas (creative connections)." },
      { name: "The Anti-Procrastination Protocol", detail: "1) Notice the discomfort (it's a habitual cue). 2) Focus on process not product. 3) Start the Pomodoro timer — starting is 90% of the battle. 4) Reward yourself after each cycle." },
      { name: "Sleep and the Glymphatic System", detail: "During sleep the brain cleans out metabolic toxins via the glymphatic system and consolidates learning through the DMN. Pulling an all-nighter literally poisons your neurons." },
      { name: "Ebbinghaus Forgetting Curve", detail: "Without review, ~70% of new information is lost within 24 hours. Spaced repetition at increasing intervals flattens this curve, moving information from working → long-term memory." },
    ],
    stats: [
      { label: "Working memory capacity", value: "~4 chunks" },
      { label: "Forgetting within 24 hours", value: "~70%" },
      { label: "Optimal Pomodoro duration", value: "25 min" },
      { label: "Spaced repetition schedule", value: "1-3-7-14-30 days" },
    ],
  }
];

export const unifiedSystem = {
  id: "unified",
  title: "My Unified Operating System",
  description: "This is how I synthesize all these mental models into my daily architecture. It minimizes noise, prevents cognitive fatigue, and automates my resilience.",
  diagram: `graph TD
    subgraph Mindset [Cognitive Inputs]
        Sapolsky[Biology dictates willpower]
        Taleb[Optimize for Antifragility]
        Kahneman[Interrupt System 1]
    end

    subgraph Execution [Daily Protocols]
        DeepWork[3-Hr Deep Work Block] --> Diffuse[Diffuse Mode Walk]
        Diffuse --> Shallow[Batched Shallow Work]
    end

    subgraph Output [The Output]
        Flow[Sustained Flow State]
        Resilience[Biological Resilience]
    end

    Mindset --> Execution
    Execution --> Output

    style Execution fill:#0f172a,stroke:#3b82f6,stroke-width:2px,color:#fff
    style Output fill:#064e3b,stroke:#10b981,stroke-width:2px,color:#fff
    style Mindset fill:#1e1e1e,stroke:#555,stroke-width:2px,color:#fff`,
  strategicAlignment: [
    "**Biology First:** I don't fight my biology. If I'm stressed, I fix the biology (sleep, food, cold exposure) before trying to 'think' my way out of it.",
    "**Pattern Interruption:** I use Kahneman's model to catch myself when I'm reacting emotionally, giving my prefrontal cortex 10 seconds to take control.",
    "**The Barbell:** I don't take moderate risks. I keep my baseline completely secure, and take wild bets with 10% of my time and resources.",
    "**Defending Depth:** I treat my attention as my most valuable asset. Deep work blocks are non-negotiable; context-switching is my enemy.",
    "**Oscillation:** I alternate between Focused and Diffuse modes deliberately. 90 min sprints → 20 min walks. The DMN does its best work when I stop forcing it.",
    "**Via Negativa:** I remove friction, distractions, and toxic inputs before adding new systems. Subtraction compounds faster than addition."
  ]
};
