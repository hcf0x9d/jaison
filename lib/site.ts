export const site = {
  meta: {
    title: "Jason Fukura",
    description:
      "Systems-first design. Human-centered outcomes. I help teams build clearer, more scalable digital products through design systems, workflow UX, and operational clarity.",
    url: "https://jason.fukura.design",
    email: "jason@fukura.design",
    location: "Greater Seattle Area",
  },

  navigation: [
    { label: "Home", href: "/" },
    { label: "Proof", href: "/proof" },
    { label: "Contact", href: "/contact" },
  ],

  social: {
    linkedin: "https://www.linkedin.com/in/jason-fukura",
    medium: "https://medium.com/@jasonfukura",
    website: "https://jason.fukura.design",
  },

  home: {
    hero: {
      eyebrow: "Product Design · Design Systems · DesignOps",
      titleLine1: "Systems-first design.",
      titleLine2: "Human-centered outcomes.",
      title: "Systems-first design. Human-centered outcomes.",
      description:
        "I help teams create clearer, more scalable digital products through design systems, workflow UX, and operational clarity.",
      supportingText:
        "Over the past decade, I’ve built design systems from scratch, improved handoff and quality loops, and designed workflow-heavy products in complex environments. My work bridges strategy and execution—helping teams move faster without drifting into inconsistency.",
      primaryCta: {
        label: "View case studies",
        href: "/#work",
      },
      secondaryCta: {
        label: "How I operate",
        href: "/#operate",
      },
    },

    proofStrip: [
      "10+ years in product, UX, and systems work",
      "Built major design systems from scratch",
      "Deep experience in workflow-heavy product environments",
    ],

    pillars: [
      {
        title: "Design systems",
        description:
          "Building cohesive, scalable component libraries that accelerate product velocity while maintaining consistency.",
      },
      {
        title: "Workflow UX",
        description:
          "Designing for complex, high-frequency tasks where efficiency and clarity directly impact user success.",
      },
      {
        title: "DesignOps",
        description:
          "Establishing processes, tooling, and team structures that enable design organizations to scale effectively.",
      },
      {
        title: "Responsible AI",
        description:
          "Embedding transparency, accountability, and human oversight into AI-powered product experiences.",
      },
    ],

    featuredCaseStudies: [
      "ambrosia-design-system",
      "designing-trust-security-system",
      "food-benefit-ledger",
      // "foodsmart-people-first-design-practice",
      "connecting-platforms",
    ],

    operatingPhilosophy: {
      title: "Clarity is an operating principle.",
      description:
        "Design isn't decoration. It's decision-making made visible. The best systems emerge from clear thinking, rigorous constraints, and a deep respect for the people who will use them daily.",
    },

    featuredWriting: [
      "ai-no-vibes",
      "scaling-design-systems",
      "figma-team-rooms",
    ],

    featuredProducts: [
      {
        title: "Kyōfolio",
        description:
          "A minimal portfolio builder for designers who value clarity over flash. Built with the belief that your work should speak louder than the container it's in.",
        href: "#",
        status: "Side project",
      },
    ],

    testimonial: {
      quote:
        "Jason cares deeply about his team, maintains a consistently high bar, and approaches problems with clear, logical thinking.",
      attribution: "Senior Engineering Lead",
    },

    closingCta: {
      title: "Building a system, scaling a product surface, or trying to reduce chaos tax?",
      description:
        "Let's talk about how clarity, structure, and systems thinking can help.",
      primaryCta: {
        label: "Get in touch",
        href: "/contact",
      },
      secondaryCta: {
        label: "View proof",
        href: "/proof",
      },
    },
  },

  casePage: {
    intro: {
      eyebrow: "Selected Work",
      title: "Case studies in systems, workflows, and scalable product thinking.",
      description:
        "These projects span design systems, operational tooling, workflow-heavy UX, and product infrastructure. Different domains, same pattern: complex systems, high-stakes decisions, and teams that need better clarity between intention and implementation.",
    },
    filters: [
      "Design Systems",
      "Workflow UX",
      "Enterprise",
      "Healthcare",
      "Security",
      "Platform",
      "DesignOps",
    ],
  },

  caseStudies: [
    {
      slug: "ambrosia-design-system",
      title: "Ambrosia Design System",
      href: "/case/ambrosia-design-system",
      externalUrl: "https://foodsmartops.hcf0x9d.com/",
      image: "/images/case-studies/ambrosia-design-system.png",
      summary:
        "A scalable multi-surface design system built from zero across product complexity.",
      shortSummary:
        "Design system built from scratch for cross-platform consistency and velocity.",
      tags: ["Design Systems", "Healthcare", "Cross-platform", "DesignOps"],
      featured: true,
      role: "Lead Product Designer / Design Systems",
      scope: "Foundation, Components, Documentation, Governance",
      team: "3 designers, 4 engineers, 1 product manager",
      timeframe: "18 months (2024–2025)",
      context:
        "The challenge wasn't just creating components—it was building a system that could serve multiple product surfaces, respect existing technical constraints, and scale with a growing organization.",
      challenge:
        "Product teams were moving fast, but consistency was falling apart.",
      challengeQuote: "Every new feature felt like starting over.",
      challengeDetail:
        "As the product expanded across web, mobile, and desktop surfaces, different teams were solving the same problems in different ways. Design-to-dev handoff required constant clarification. New features took longer to ship because every component needed to be designed and built from scratch. There was no shared language.",
      complexity: [
        "3 platform surfaces (web, iOS, Android) with different technical stacks",
        "12 product teams working in parallel across time zones",
        "Legacy codebase with 4+ years of accumulated design debt",
        "No existing token foundation or naming conventions",
      ],
      approach: [
        {
          title: "Audit & Foundation",
          description:
            "Conducted a comprehensive audit of existing patterns across all surfaces. Established a token architecture (color, typography, spacing) that could flex across platforms while maintaining brand consistency.",
        },
        {
          title: "Component Model",
          description:
            "Built a tiered component library starting with foundational primitives, then composition patterns, then complex workflows. Each component included accessibility specs, implementation guidance, and usage examples.",
        },
        {
          title: "Documentation as Product",
          description:
            "Treated documentation as a first-class product deliverable. Created interactive examples, migration guides, and decision trees to help teams self-serve.",
        },
        {
          title: "Governance & Adoption",
          description:
            "Established a contribution model with clear review processes. Partnered with engineering leads to embed the system into sprint workflows. Tracked adoption metrics to identify friction points.",
        },
      ],
      visuals: [
        {
          image: "/images/case-studies/ambrosia-design-system.png",
          title: "Component Library",
          description:
            "Core component library showing foundational primitives and composition patterns",
        },
        {
          image: "/images/case-studies/ambrosia-design-system.png",
          title: "Token Documentation",
          description:
            "Design token architecture with semantic naming and platform-specific implementations",
        },
        {
          image: "/images/case-studies/ambrosia-design-system.png",
          title: "System Architecture",
          description:
            "Multi-platform architecture showing token distribution and component inheritance",
        },
      ],
      outcomes: [
        {
          title: "60% faster design-to-dev handoff",
          description:
            "Teams using system components reduced handoff time from days to hours. Engineers could self-serve implementation details from documentation.",
        },
        {
          title: "94% adoption across product teams",
          description:
            "Within 12 months, all active product teams had migrated to the system. New features shipped using system components by default.",
        },
        {
          title: "Consistent cross-platform experience",
          description:
            "Users now encounter familiar patterns across web, mobile, and desktop. Visual inconsistencies dropped by 85%.",
        },
        {
          title: "Foundation for scale",
          description:
            "System enabled the organization to ship 3 new product surfaces without requiring proportional design resources.",
        },
      ],
      whatMatteredMost:
        "The hardest part wasn't the design work—it was the organizational change. Getting teams to trust a shared system required patience, clear communication, and a willingness to iterate based on real feedback. What mattered most was treating the system as a service, not a mandate. We built trust by solving real problems, not by imposing process.",
      lessons: [
        "Consistency is an operational advantage, not just an aesthetic one.",
        "A design system only works when documentation, implementation, and collaboration all evolve together.",
      ],
    },
    {
      slug: "designing-trust-security-system",
      title: "Designing Trust in a Silent, High-Stakes Security System",
      href: "/case/designing-trust-security-system",
      externalUrl: "https://cisecurity.hcf0x9d.com/",
      image: "/images/case-studies/mdr-dashboard.jpg",
      summary:
        "A high-stakes dashboard experience for quiet, confident security monitoring.",
      shortSummary:
        "A high-stakes dashboard experience for quiet, confident security monitoring.",
      tags: ["Security", "Workflow UX"],
      featured: true,
      role: "Senior Product Designer",
      context:
        "The project was created for CI Security's Managed Detection and Response (MDR) dashboard. CI Security served organizations without internal security teams. The dashboard was primarily used by IT leaders, security leaders, and non-specialist stakeholders. Users came with two questions: Is CI doing their job? Is there anything I should know about?",
      challenge:
        "The key design challenge: make invisible security work visible without creating anxiety or false urgency. Early dashboard concepts exposed too much raw data and leaned heavily on alert-oriented visual language. This unintentionally encouraged users to investigate events themselves rather than trust the MDR team's monitoring role.",
      challengeQuote: "Users gravitated toward red signals and interpreted normal system behavior as risk.",
      challengeDetail:
        "Early concepts emphasized alerts and detailed visualizations. The hierarchy and visual language had to be refined to reduce alert density, emphasize system health, and shift attention toward trends instead of isolated events.",
      complexity: [
        "Users gravitated toward red signals; normal behavior read as risk",
        "Alert density competed with signal; hierarchy needed refinement",
        "System health and trends mattered more than isolated events",
      ],
      approach: [
        {
          title: "Iteration one",
          description:
            "Early concepts emphasized alerts and detailed visualizations. Users gravitated toward red signals and interpreted normal system behavior as risk. The approach validated the need for a different visual language.",
        },
        {
          title: "Iteration two",
          description:
            "Hierarchy and visual language were refined: reduced alert density, emphasized system health, shifted attention toward trends instead of isolated events. Trust in the MDR team's role became the design goal.",
        },
        {
          title: "Technical prototype",
          description:
            "A functional prototype was built using HTML, JavaScript, and D3 with scrubbed real-world collector data. This allowed realistic validation before implementation.",
        },
      ],
      visuals: [
        {
          image: "/images/case-studies/mdr-dashboard.jpg",
          title: "Refined hierarchy",
          description:
            "System health view with reduced alert density and trend-based emphasis",
        },
        {
          image: "/images/case-studies/mdr-dashboard.jpg",
          title: "D3 prototype",
          description:
            "Functional prototype built with real-world collector data for validation",
        },
      ],
      outcomes: [
        {
          title: "Increased client confidence",
          description:
            "Clients reported stronger trust in MDR services. The dashboard clarified the monitoring role without inviting unnecessary investigation.",
        },
        {
          title: "Internal dogfooding and sales enablement",
          description:
            "Analysts used the dashboard internally. The prototype also became a sales enablement tool for demonstrating MDR value.",
        },
      ],
      whatMatteredMost:
        "In high-stakes systems, clarity and emotional neutrality are functional product decisions, not aesthetic preferences.",
      lessons: [
        "In high-stakes environments, calm clarity matters more than visual flourish.",
        "Trust is built through understandable structure and predictable signals.",
      ],
    },
    {
      slug: "making-retirement-human",
      title: "Making Retirement Human",
      href: "/case/making-retirement-human",
      externalUrl: "https://retirementcalc.hcf0x9d.com/",
      image: "/images/case-studies/retirement-human.png",
      summary:
        "A plain-language retirement planning experience that reframed a complex financial tool into something more conversational, understandable, and emotionally approachable.",
      shortSummary:
        "A retirement calculator designed to feel less like a spreadsheet and more like a conversation.",
      tags: ["Finance", "UX Writing", "Consumer UX", "Workflow UX"],
      featured: false,
      role: "Product Designer",
      context:
        "Retirement planning tools often feel abstract, intimidating, and overly technical for everyday users.",
      problem:
        "The experience needed to make complex planning feel understandable and useful without oversimplifying the underlying model.",
      outcomes: [
        "Made a complex planning flow feel more approachable",
        "Improved comprehension through plain language and progressive structure",
      ],
      lessons: [
        "Sometimes the real UX challenge is emotional, not just structural.",
      ],
    },
    {
      slug: "connecting-platforms",
      title: "Connecting Platforms",
      href: "/case/connecting-platforms",
      externalUrl: "https://integrations.hcf0x9d.com/",
      image: "/images/case-studies/integrations.png",
      summary:
        "Designing a faster, more intuitive way to map complex 3rd-party integrations. The Integration Platform was created to help users more efficiently manage third-party integrations within Medable's platform.",
      shortSummary:
        "A modular integration system that reduced setup time from hours to minutes.",
      tags: ["Platform", "Enterprise", "Integrations", "Workflow UX"],
      featured: false,
      role: "Product Designer",
      scope: "Integration Management",
      team: "PM, Engineering, UX Research",
      timeframe: "Q1–Q2 2023",
      context:
        "Integrations had become a key part of Medable's offering — but configuring them was messy, manual, and required escalation. We needed a way to make these complex workflows approachable, repeatable, and fast. Our goal: build a simple point-and-click interface for mapping integrations.",
      challenge:
        "Mapping fields between systems sounds simple — until you do it. Each platform has its own field types, labels, naming conventions, and data validation. We needed to design for flexibility across use cases without overwhelming users.",
      challengeQuote:
        "The same field might be called member_id in one system, user_external_reference in another, and id somewhere else.",
      challengeDetail:
        "Integrations could be for very different use cases: form submissions, enrollment, assessments, and more. Field naming mismatches, authentication requirements, trigger-action mapping, and context-aware default values all added complexity. We had to make configuration feel approachable without hiding the technical reality.",
      complexity: [
        "Field naming mismatches across platforms",
        "Authentication requirements and security constraints",
        "Trigger-action mapping with varying use cases",
        "Context-aware default values for different integration types",
      ],
      approach: [
        {
          title: "Discovery & Alignment",
          description:
            "Kicked off with whiteboard sessions, a FigJam workspace, and a shared Confluence doc to align on user goals. Reviewed engineering constraints and current behavior, then mapped out the most critical user flows and blockers. Landed on a modular, trigger-first interface designed to minimize configuration friction.",
        },
        {
          title: "Initial Concept & Early Learnings",
          description:
            "First concept aimed to show all integrations with a unified trigger configuration pattern. Usability testing uncovered: too much at once — users didn't understand what needed configuration vs. what was defaulted; trigger-first wasn't obvious — users assumed everything was already set up; no visual priority — key actions didn't stand out.",
        },
        {
          title: "Second Iteration: Cleaning It Up",
          description:
            "Clarified the user's mental model and gave structure to the page. Introduced clear section labels. Styled actions like Set Trigger and Map Fields as primary buttons. Moved the trigger field to the top of the workflow. By reducing clutter and guiding focus, users completed integration setup significantly faster.",
        },
        {
          title: "Validation",
          description:
            "Returned to user feedback frequently throughout — validating new concepts with real workflows before locking in the design.",
        },
      ],
      visuals: [
        {
          image: "/images/case-studies/integrations.png",
          title: "Integration platform interface",
          description:
            "Main integration management interface",
        },
        {
          image: "/images/case-studies/integrations.png",
          title: "Initial concept",
          description:
            "First concept with unified trigger configuration pattern — before usability learnings",
        },
        {
          image: "/images/case-studies/integrations.png",
          title: "Revisited design",
          description:
            "Second iteration with wizard workflow, clear section labels, and primary action buttons",
        },
        {
          image: "/images/case-studies/integrations.png",
          title: "Add trigger modal",
          description:
            "Example of adding a trigger to an action during configuration",
        },
      ],
      outcomes: [
        {
          title: "Setup time: hours to minutes",
          description:
            "The redesigned platform significantly reduced setup time and enabled non-technical users to confidently configure integrations.",
        },
        {
          title: "Fewer configuration escalations",
          description:
            "Stakeholders reported fewer escalations. RDs and support staff completed setups independently.",
        },
        {
          title: "Modular, understandable connection model",
          description:
            "Created a more approachable integration experience without hiding technical complexity.",
        },
      ],
      whatMatteredMost:
        "By reducing clutter and guiding focus, we gave users control without overwhelming them. The trigger-first mental model and clear visual hierarchy were key. Good configuration UX makes technical complexity feel manageable without pretending it isn't there.",
      lessons: [
        "Good configuration UX makes technical complexity feel manageable without pretending it isn't there.",
        "Usability testing early revealed that 'obvious' flows weren't obvious to users — validate before locking in.",
      ],
    },
    {
      slug: "food-benefit-ledger",
      title: "Food Benefit Ledger",
      href: "/case/food-benefit-ledger",
      externalUrl: "https://foodbenefits.hcf0x9d.com/",
      image: "/images/case-studies/food-benefits.png",
      summary:
        "A benefit redemption ledger built for support, visibility, and trust.",
      shortSummary:
        "A benefit redemption ledger built for support, visibility, and trust.",
      tags: ["Healthcare", "Support Tools"],
      featured: true,
      role: "Lead Product Designer",
      context:
        "This work improved transparency around member food benefit codes used by Foodsmart dietitians. The feature supported registered dietitians managing Instacart Fresh Funds for members.",
      challenge:
        "Registered dietitians had no visibility into whether codes were redeemed, whether codes expired, when codes were used, or whether a code correction existed. This forced simple member questions into engineering escalations.",
      challengeQuote: "When a member says their code isn't working, I have no way to see what's happening.",
      challengeDetail:
        "The design goal was to create a ledger that gave RDs visibility without requiring engineering support for routine troubleshooting.",
      complexity: [
        "No visibility into redemption status, expiration, or usage",
        "No way to see code corrections or resolve discrepancies",
        "Simple member questions escalated to engineering",
      ],
      approach: [
        {
          title: "First iteration",
          description:
            "Basic list view: transaction history, code amounts, simple layout. Limitations: no status clarity, no filtering, weak expiration visibility.",
        },
        {
          title: "Second iteration",
          description:
            "Added status badges, filtering, redemption timestamps, and expiration visibility. RDs could now answer basic questions during member conversations.",
        },
        {
          title: "Final variant",
          description:
            "Production-ready ledger: complete history, status hierarchy, progressive disclosure, contextual warnings. The ledger supported real-time troubleshooting and proactive outreach.",
        },
      ],
      visuals: [
        {
          image: "/images/case-studies/food-benefits.png",
          title: "Status hierarchy",
          description:
            "Ledger with status badges, filtering, and expiration visibility",
        },
        {
          image: "/images/case-studies/food-benefits.png",
          title: "Production ledger",
          description:
            "Complete history with progressive disclosure and contextual warnings",
        },
      ],
      outcomes: [
        {
          title: "Real-time troubleshooting",
          description:
            "RDs could troubleshoot during member conversations instead of escalating. Support escalations dropped.",
        },
        {
          title: "Proactive outreach and RD confidence",
          description:
            "Expiration visibility enabled proactive outreach for expiring codes. Stronger RD confidence in answering member questions.",
        },
      ],
      whatMatteredMost:
        "Transparency was not only a usability improvement—it became a trust-building tool between dietitians and members. Lean iterative shipping mattered more than waiting for a perfect solution.",
      lessons: [
        "Operational tools deserve the same design rigor as user-facing consumer products.",
      ],
    },
    {
      slug: "foodsmart-people-first-design-practice",
      title: "Foodsmart: Building a People-First Design Practice",
      href: "/case/foodsmart-people-first-design-practice",
      externalUrl: "https://foodsmartops.hcf0x9d.com/",
      image: "/images/case-studies/foodsmart-people-first-design-practice.png",
      summary:
        "How we transformed Foodsmart's design culture, systems, and tools to scale a world-class healthcare product experience.",
      shortSummary:
        "Transformed design culture, systems, and tools to scale a people-first healthcare product experience.",
      tags: ["Brand Refresh", "Design Systems", "DesignOps", "B2B Healthcare"],
      featured: true,
      role: "Director of Design",
      scope: "Brand, Design Systems, Design Process, DesignOps",
      team: "Design, Product, Engineering",
      timeframe: "2025",
      context:
        "When I joined Foodsmart, the existing style guide posed immediate challenges from a usability and accessibility standpoint. Our users—registered dietitians, health coaches, and members managing chronic conditions—needed clarity, reliability, and trust. The existing brand didn't fully support that mission. The work spanned brand refresh, design systems (Ambrosia DLS), dietitian tools from zero to launch, and DesignOps rituals to scale the team.",
      challenge:
        "The color palette was limited, typeface choices created legibility issues, and the overall design language prioritized brand expression over user needs.",
      challengeQuote:
        "Our users needed clarity, reliability, and trust. The existing brand didn't fully support that mission.",
      challengeDetail:
        "We evolved from playful brand-first to professional people-first design. This required an expanded color palette with semantic colors meeting WCAG AA, accessibility-first hierarchy with increased contrast, standardized typography for improved legibility, and a reframed design language that built trust with healthcare professionals and members.",
      complexity: [
        "Limited color palette and typeface choices creating legibility issues",
        "Design language prioritizing brand expression over user needs",
        "Multiple product surfaces (member-facing apps, clinical dashboards) requiring flexible systems",
        "No existing documentation for dietitian workflows; zero-to-launch for new tools",
      ],
      approach: [
        {
          title: "Brand Refresh",
          description:
            "Expanded the color palette with semantic colors for success, warning, error, and informational states—all meeting WCAG AA. Shifted to accessibility-first hierarchy with increased contrast. Standardized typography for body copy and interface text. Refreshed Ovi mascot with a modular 'Ovi Factory' system for scalable, contextual expressions and poses.",
        },
        {
          title: "Design Systems (Ambrosia DLS)",
          description:
            "Built a foundational library of tokens, components, and patterns for consistency across all Foodsmart products. Created Product Design Component Library for clinician and admin-facing workflows (data tables, charting, scheduling). Built Member Design Component Library optimized for responsive UI, multilingual content, and WCAG AA compliance.",
        },
        {
          title: "Design Process",
          description:
            "From zero to launch for dietitian tools: discovery and definition via interviews and competitor audits, centralized Confluence for research and personas, lightweight user testing protocols (FigJam templates, RD manager partnerships), and a single-pane-of-glass dietitian dashboard consolidating scheduling, member management, documentation, and communication.",
        },
        {
          title: "DesignOps Blitz",
          description:
            "Defined team culture with onboarding deck, central Confluence structure, and clear roles and skill expectations. Fostered curiosity through monthly Lunch & Learn sessions (Lean UX, rapid user testing, AI-assisted design). Built collaboration rituals: weekly critique templates, async design retros, Figma/Confluence playbooks. Created File Setup Wizard Figma plugin for consistent project structure.",
        },
      ],
      visuals: [
        {
          image: "/images/case-studies/foodsmart-people-first-design-practice.png",
          title: "Color System Reference",
          description:
            "New semantic color system with accessibility-first approach",
        },
        {
          image: "/images/case-studies/foodsmart-people-first-design-practice.png",
          title: "Ovi mascot system",
          description:
            "Ovi mascot system with modular expressions and poses. Ovi Factory demonstration: https://www.youtube.com/embed/cgSsckMPsaU",
        },
        {
          image: "/images/case-studies/foodsmart-people-first-design-practice.png",
          title: "Ambrosia DLS architecture",
          description:
            "Design system showing tokens, components, and patterns",
        },
        {
          image: "/images/case-studies/foodsmart-people-first-design-practice.png",
          title: "Dietitian dashboard",
          description:
            "Single pane of glass consolidating scheduling, member management, and documentation",
        },
      ],
      outcomes: [
        {
          title: "+43 NPS Point Increase",
          description:
            "Measured over 6 months post-launch.",
        },
        {
          title: "Workflows > UI Refresh",
          description:
            "Solved actual pain points, not just aesthetics.",
        },
        {
          title: "Trust Reduced Friction",
          description:
            "Improved confidence and efficiency in care delivery.",
        },
      ],
      whatMatteredMost:
        "The hardest part wasn't the design work—it was the organizational change. Getting teams to trust a shared system required patience, clear communication, and a willingness to iterate based on real feedback. What mattered most was treating the system as a service, not a mandate. We built trust by solving real problems—workflows, accessibility, and clarity—not by imposing process.",
      lessons: [
        "Consistency is an operational advantage, not just an aesthetic one.",
        "A design system only works when documentation, implementation, and collaboration all evolve together.",
        "Operational tools deserve the same design rigor as user-facing consumer products.",
      ],
    },
  ],

  proofPages: [
    {
      slug: "design-systems",
      title: "Design systems work",
      description:
        "Token-based design systems, component libraries, and cross-platform coherence. Building systems that improve design-to-dev velocity and visual consistency.",
      items: [
        "Token-based design systems with components, documentation, and governance",
        "Cross-platform consistency across web and mobile",
        "Contribution models that scale without slowing teams down",
      ],
    },
    {
      slug: "design-operations",
      title: "Product design & DesignOps",
      description:
        "Workflow UX in complex domains, design operations, and product design leadership. End-to-end ownership from discovery to delivery.",
      items: [
        "Workflow UX in complex and regulated domains",
        "Critiques, handoffs, and quality loops that improve delivery",
        "AI-assisted prototyping and documentation, used responsibly",
      ],
    },
  ],

  proofPage: {
    intro: {
      eyebrow: "Experience & Credibility",
      title: "Proof that the systems thinking shows up in the work.",
      description:
        "I build design systems, workflows, and operational frameworks that make good design repeatable across products, platforms, and teams.",
    },

    strengths: [
      {
        title: "Systems",
        items: [
          "Token-based design systems with components, documentation, and governance",
          "Cross-platform consistency across web and mobile",
          "Contribution models that scale without slowing teams down",
        ],
      },
      {
        title: "Design Operations",
        items: [
          "Workflow UX in complex and regulated domains",
          "Critiques, handoffs, and quality loops that improve delivery",
          "AI-assisted prototyping and documentation, used responsibly",
        ],
      },
    ],

    highlights: [
      "Built design systems from scratch",
      "Improved design-to-development velocity",
      "Created a partner portal that reduced marketing overhead by ~60%",
      "Redesigned a web experience and doubled qualified leads",
      "Improved coherence across web and mobile product surfaces",
    ],

    experience: {
      main: [
        {
          title: "Lead Product Designer / Design Systems",
          company: "Foodsmart",
          period: "2022 – 2025",
          items: [
            "Led the creation of the Ambrosia Design System from scratch across member and RD surfaces.",
            "Improved consistency and collaboration across design and engineering through tokens, documentation, and shared practices.",
            "Supported cross-platform coherence across web, iOS, and Android experiences.",
          ],
        },
        {
          title: "Senior Product Designer",
          company: "Medable",
          period: "2021 – 2022",
          items: [
            "Designed workflow-heavy tools in a complex healthcare environment.",
            "Balanced usability, operational needs, and product constraints in high-context product surfaces.",
          ],
        },
        {
          title: "Senior Product Designer",
          company: "Center for Internet Security",
          period: "2020 – 2021",
          items: [
            "Designed high-stakes security workflows focused on trust, clarity, and rapid comprehension.",
            "Created interface patterns for complex dashboards and monitoring tools.",
          ],
        },
        {
          title: "Senior UX / Product Design roles",
          company: "Otto and earlier companies",
          period: "2011 – 2020",
          items: [
            "Built digital standards, component libraries, and marketing systems.",
            "Created a partner marketing portal that reduced marketing overhead by roughly 60%.",
            "Redesigned web experiences for SEO and accessibility improvements that doubled qualified leads.",
          ],
        },
      ],
      extended: [
        {
          title: "Design Technologist / Web Developer",
          company: "Capital One Investing / ShareBuilder",
          period: "2014 – 2018",
        },
        {
          title: "UX Designer & Developer",
          company: "Music Prodigy",
          period: "2015 – 2016",
        },
        {
          title: "Creative Lead",
          company: "Averetek (E2open)",
          period: "2011 – 2014",
        },
        {
          title: "Owner / Photographer",
          company: "f/8.3 photography",
          period: "2008 – 2011",
        },
      ],
    },

    education: [
      {
        certificate: "Certified Usability Analyst (CUA™)",
        institution: "Human Factors International",
        years: "2023",
      },
      {
        certificate: "Full-Stack Web Developer",
        institution: "Udacity",
        years: "2017",
      },
      {
        certificate: "Front-End Web Developer",
        institution: "Udacity",
        years: "2016",
      },
      {
        certificate: "BA Music Education",
        institution: "Central Washington University",
        years: "2000–2005",
      },
    ],

    topSkills: [
      "Design Systems",
      "DesignOps",
      "Workflow UX",
      "Cross-functional collaboration",
      "Front-end fluency",
      "Responsible AI-assisted workflows",
    ],
  },

  writing: [
    {
      slug: "ai-no-vibes",
      title: "I Built a Product With AI. There Were No Vibes.",
      date: "Jan 2026",
      readTime: "7 min read",
      url: "https://medium.com/@jasonfukura/i-built-a-product-with-ai-there-were-no-vibes-554a3d3c6b60",
      summary:
        "A practical playbook for using AI as a copilot without letting it quietly sabotage your codebase.",
      featured: true,
    },
    {
      slug: "scaling-design-systems",
      title: "Scaling Design Systems",
      date: "Feb 2025",
      readTime: "10 min read",
      url: "https://medium.com/design-systems-collective/scaling-design-systems-99f56459e665",
      summary:
        "An honest look at the messy, iterative process of building a design system that survives contact with reality, balancing principles, speed, and cross-functional alignment.",
      featured: true,
    },
    {
      slug: "figma-team-rooms",
      title: "Figma Team Rooms",
      date: "Jan 2025",
      readTime: "10 min read",
      url: "",
      summary:
        "A reflection on collaboration, creative mess, and the need for quiet exploratory space before inviting everyone into the room.",
      featured: false,
      // Add url when published
    },
  ],

  contactPage: {
    intro: {
      eyebrow: "Contact",
      title: "Let’s talk.",
      description:
        "If you’re building a system, scaling a product surface, improving workflow UX, or trying to make quality more repeatable, I’d love to hear about it.",
    },
    contactMethods: [
      {
        label: "Email",
        value: "jason@fukura.design",
        href: "mailto:jason@fukura.design",
      },
      {
        label: "LinkedIn",
        value: "linkedin.com/in/jason-fukura",
        href: "https://www.linkedin.com/in/jason-fukura",
      },
      {
        label: "Writing",
        value: "medium.com/@jasonfukura",
        href: "https://medium.com/@jasonfukura",
      },
    ],
  },

  systemNotes: {
    principles: [
      "Developer experience matters. If the system is difficult to use, it will not scale.",
      "Documentation is part of the product, not an afterthought.",
      "Start with present needs, but design with future growth in mind.",
      "Measure adoption, usage, and impact where possible.",
    ],
    governanceNote:
      "Governance, principles, and token/theming material can remain secondary content or supporting material rather than primary top-level site content.",
  },
} as const;

export type SiteContent = typeof site;

export function getCaseStudyBySlug(slug: string) {
  return site.caseStudies.find((c) => c.slug === slug);
}

export function getNextCaseStudy(currentSlug: string) {
  const idx = site.caseStudies.findIndex((c) => c.slug === currentSlug);
  if (idx < 0 || idx >= site.caseStudies.length - 1) return null;
  return site.caseStudies[idx + 1];
}

export function getFeaturedCaseStudies() {
  const slugSet = new Set<string>(site.home.featuredCaseStudies);
  return site.caseStudies.filter((c) => slugSet.has(c.slug));
}

export function getFeaturedWriting() {
  const slugSet = new Set<string>(site.home.featuredWriting);
  return site.writing.filter((w) => slugSet.has(w.slug));
}

export function getProofPageBySlug(slug: string) {
  return site.proofPages.find((p) => p.slug === slug);
}