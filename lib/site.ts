export const site = {
  meta: {
    title: "Jason Fukura",
    description:
      "Principal product designer focused on complex workflows, scalable systems, and shipped digital products across healthcare, SaaS, and platform environments.",
    url: "https://jason.fukura.design",
    email: "jason@fukura.design",
    location: "Greater Seattle Area",
  },

  navigation: [
    { label: "Home", href: "/" },
    { label: "Proof", href: "/proof" },
    { label: "Contact", href: "/contact" },
  ],

  /** Paths that use dark nav variant (light text/logo). Default is light for all other pages. */
  navigationDarkPaths: ["/"],

  social: {
    linkedin: "https://www.linkedin.com/in/jason-fukura",
    medium: "https://medium.com/@jasonfukura",
    website: "https://jason.fukura.design",
  },

  home: {
    hero: {
      eyebrow: "Principal Product Designer · Complex Workflows · Design Systems",
      titleLine1: "I design and ship",
      titleLine2: "complex product experiences.",
      title: "I design and ship complex product experiences.",
      description:
        "From messy workflows to production-ready systems, I turn complex products into experiences people can actually use.",
      supportingText:
        "Over the past decade, I’ve designed end-to-end experiences across healthcare, SaaS, security, and platform products. I’m especially strong in workflow-heavy environments where product clarity, systems thinking, and technical fluency make the difference between something that looks good and something that actually ships well.",
      primaryCta: {
        label: "View case studies",
        href: "/#work",
      },
      secondaryCta: {
        label: "How I work",
        href: "/#operate",
      },
    },

    proofStrip: [
      "10+ years designing and shipping digital products",
      "Built design systems from scratch without losing product focus",
      "Deep experience in complex, workflow-heavy environments",
    ],

    pillars: [
      {
        title: "End-to-end product design",
        description:
          "Designing products from concept through production, with a focus on clarity, usability, and real-world constraints.",
      },
      {
        title: "Complex workflow UX",
        description:
          "Designing for high-frequency, high-context tasks where speed, confidence, and decision quality matter.",
      },
      {
        title: "Design systems that support product",
        description:
          "Building scalable systems, components, and patterns that help teams ship faster without fragmenting the experience.",
      },
      {
        title: "AI in real product environments",
        description:
          "Exploring practical, responsible uses of AI that improve outcomes without sacrificing usability, trust, or human judgment.",
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
      title: "Clarity is how better products ship.",
      description:
        "Design isn’t decoration. It’s product thinking made visible. The strongest work usually comes from clear decisions, strong constraints, and deep respect for the people who have to use the thing every day.",
    },
    howIWork: {
        title: "Practical, hands-on product design—focused on shipping, not just thinking.\n",
        steps: [
          {
            title: "End-to-end ownership",
            description: "I design from concept to production—not just handoff artifacts. The goal is a product that actually works in the real world.",
          },
          {
            title: "Built with engineering",
            description: "I collaborate directly with engineers to shape solutions that are both usable and buildable—closing the gap between intent and implementation.",
          },
          {
            title: "Validated through use",
            description: "I test ideas against real workflows and real behavior—not just assumptions or ideal scenarios.",
          },
          {
            title: "Clarity over complexity",
            description: "I focus on making complex systems understandable, fast, and reliable—so users can act with confidence.",
          },
        ],
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
          "A product I designed and built end-to-end to help people plan around changing energy, shifting priorities, and real life instead of rigid productivity rules.",
        href: "https://www.kyofolio.com",
        status: "Designed and built end-to-end",
        image: "/images/ipad-today.png",
      },
    ],

    testimonial: {
      quote:
        "Jason is an exceptionally talented UX professional. He brings disciplined thought and clarity to both problem analysis and solution iteration.",
      attribution: "Senior Design Lead",
    },

    closingCta: {
      title: "Building a product, scaling a platform, or untangling a messy workflow?",
      description:
        "Let’s talk about how strong product thinking, clear UX, and the right level of systems support can help.",
      primaryCta: {
        label: "Get in touch",
        href: "/contact",
      },
      secondaryCta: {
        label: "View proof",
        href: "/proof",
      },
    }
  },

  casePage: {
    intro: {
      eyebrow: "Selected Work",
      title: "Case studies in product design, complex workflows, and systems that scale.",
      description:
        "These projects span healthcare, security, platform tooling, and design systems. Different domains, same pattern: complex products, high-stakes decisions, and users who need clarity more than noise.",
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
      title: "Scaling Product Through a Design System",
      href: "/case/ambrosia-design-system",
      externalUrl: "https://foodsmartops.hcf0x9d.com/",
      image: "/images/design-system.webp",
      summary:
        "Scaled a fragmented product experience into a cohesive, multi-platform system that improved delivery speed, consistency, and usability across teams.",
      shortSummary:
        "Transformed fragmented UX into a scalable product system used across platforms.",
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
          image: "/images/design-system.webp",
          title: "Component Library",
          description:
            "Core component library showing foundational primitives and composition patterns",
        },
        {
          image: "/images/system-colors.webp",
          title: "Token Documentation",
          description:
            "Design token architecture with semantic naming and platform-specific implementations",
        },
        {
          image: "/images/components.webp",
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
      image: "/images/cisecurity-prototype.avif",
      summary:
        "Redesigned a high-stakes security dashboard to improve trust, reduce false urgency, and support confident decision-making.",
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
          image: "/images/cisecurity-wires.avif",
          title: "Initial wireframes",
          description:
            "Getting an understanding of what the data might look like",
        },
        {
          image: "/images/cisecurity-iteration2.avif",
          title: "Refined hierarchy",
          description:
            "System health view with reduced alert density and trend-based emphasis",
        },
        {
          image: "/images/cisecurity-prototype.avif",
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
    // {
    //   slug: "making-retirement-human",
    //   title: "Making Retirement Human",
    //   href: "/case/making-retirement-human",
    //   externalUrl: "https://retirementcalc.hcf0x9d.com/",
    //   image: "/images/retirement-calc.webp",
    //   summary:
    //     "A plain-language retirement planning experience that reframed a complex financial tool into something more conversational, understandable, and emotionally approachable.",
    //   shortSummary:
    //     "A retirement calculator designed to feel less like a spreadsheet and more like a conversation.",
    //   tags: ["Finance", "UX Writing", "Consumer UX", "Workflow UX"],
    //   featured: false,
    //   role: "Product Designer",
    //   context:
    //     "Retirement planning tools often feel abstract, intimidating, and overly technical for everyday users.",
    //   problem:
    //     "The experience needed to make complex planning feel understandable and useful without oversimplifying the underlying model.",
    //   outcomes: [
    //     "Made a complex planning flow feel more approachable",
    //     "Improved comprehension through plain language and progressive structure",
    //   ],
    //   lessons: [
    //     "Sometimes the real UX challenge is emotional, not just structural.",
    //   ],
    // },
    {
      slug: "connecting-platforms",
      title: "Connecting Platforms",
      href: "/case/connecting-platforms",
      externalUrl: "https://integrations.hcf0x9d.com/",
      image: "/images/3rd-party-integrations.webp",
      summary:
        "Simplified complex integration workflows into a modular system that reduced setup time and enabled non-technical users to configure connections.",
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
          image: "/images/medable-integrations-initial.webp",
          title: "Initial concept",
          description:
            "First concept with unified trigger configuration pattern — before usability learnings",
        },
        {
          image: "/images/medable-integrations-iteration.webp",
          title: "Revisited design",
          description:
            "Second iteration with wizard workflow, clear section labels, and primary action buttons",
        },
        {
          image: "/images/medable-integrations-overlay.webp",
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
      image: "/images/food-benefits.webp",
      summary:
        "Designed a visibility layer for benefit redemption that enabled real-time troubleshooting and reduced support dependency.",
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
        // {
        //   image: "/images/foodbenefits-ledger.avif",
        //   title: "Status hierarchy",
        //   description:
        //     "Ledger with status badges, filtering, and expiration visibility",
        // },
        {
          image: "/images/foodbenefits-workspace.webp",
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
        {
          title: "RD satisfaction",
          description:
            "Users rarely reach out unless something is broken — so when we received unsolicited messages of appreciation, we knew we'd hit the mark."
        }
      ],
      whatMatteredMost:
        "This project reinforced a core belief: transparency isn't just a design principle—it's a trust-building tool. By giving RDs visibility into member benefits, we didn't just solve a usability problem. We gave them the information they needed to be better advocates for their members.\n" +
        "\n" +
        "The work also demonstrated the value of lean, iterative design in B2B healthcare. Instead of waiting months for a perfect solution, we shipped MVPs, gathered feedback, and evolved the experience based on real-world needs.",
      lessons: [
        "Operational tools deserve the same design rigor as user-facing consumer products.",
      ],
      quote: {
        text: "I had one member who reported the link to her FreshFund code wasn't working. I was able to see that a correction link had been added to her account with the new features. I didn't have to submit a support ticket for the link not working. This feature will be so helpful. Instead of me having to guess or guide them through multiple already-redeemed codes, I can tell them exactly which dates need to be redeemed. It will save me a lot of time when working with tech-challenged members!",
        cite: "RD user"
      }
    },
    // {
    //   slug: "foodsmart-people-first-design-practice",
    //   title: "Foodsmart: Building a People-First Design Practice",
    //   href: "/case/foodsmart-people-first-design-practice",
    //   externalUrl: "https://foodsmartops.hcf0x9d.com/",
    //   image: "/images/case-studies/foodsmart-people-first-design-practice.png",
    //   summary:
    //     "How we transformed Foodsmart's design culture, systems, and tools to scale a world-class healthcare product experience.",
    //   shortSummary:
    //     "Transformed design culture, systems, and tools to scale a people-first healthcare product experience.",
    //   tags: ["Brand Refresh", "Design Systems", "DesignOps", "B2B Healthcare"],
    //   featured: true,
    //   role: "Director of Design",
    //   scope: "Brand, Design Systems, Design Process, DesignOps",
    //   team: "Design, Product, Engineering",
    //   timeframe: "2025",
    //   context:
    //     "When I joined Foodsmart, the existing style guide posed immediate challenges from a usability and accessibility standpoint. Our users—registered dietitians, health coaches, and members managing chronic conditions—needed clarity, reliability, and trust. The existing brand didn't fully support that mission. The work spanned brand refresh, design systems (Ambrosia DLS), dietitian tools from zero to launch, and DesignOps rituals to scale the team.",
    //   challenge:
    //     "The color palette was limited, typeface choices created legibility issues, and the overall design language prioritized brand expression over user needs.",
    //   challengeQuote:
    //     "Our users needed clarity, reliability, and trust. The existing brand didn't fully support that mission.",
    //   challengeDetail:
    //     "We evolved from playful brand-first to professional people-first design. This required an expanded color palette with semantic colors meeting WCAG AA, accessibility-first hierarchy with increased contrast, standardized typography for improved legibility, and a reframed design language that built trust with healthcare professionals and members.",
    //   complexity: [
    //     "Limited color palette and typeface choices creating legibility issues",
    //     "Design language prioritizing brand expression over user needs",
    //     "Multiple product surfaces (member-facing apps, clinical dashboards) requiring flexible systems",
    //     "No existing documentation for dietitian workflows; zero-to-launch for new tools",
    //   ],
    //   approach: [
    //     {
    //       title: "Brand Refresh",
    //       description:
    //         "Expanded the color palette with semantic colors for success, warning, error, and informational states—all meeting WCAG AA. Shifted to accessibility-first hierarchy with increased contrast. Standardized typography for body copy and interface text. Refreshed Ovi mascot with a modular 'Ovi Factory' system for scalable, contextual expressions and poses.",
    //     },
    //     {
    //       title: "Design Systems (Ambrosia DLS)",
    //       description:
    //         "Built a foundational library of tokens, components, and patterns for consistency across all Foodsmart products. Created Product Design Component Library for clinician and admin-facing workflows (data tables, charting, scheduling). Built Member Design Component Library optimized for responsive UI, multilingual content, and WCAG AA compliance.",
    //     },
    //     {
    //       title: "Design Process",
    //       description:
    //         "From zero to launch for dietitian tools: discovery and definition via interviews and competitor audits, centralized Confluence for research and personas, lightweight user testing protocols (FigJam templates, RD manager partnerships), and a single-pane-of-glass dietitian dashboard consolidating scheduling, member management, documentation, and communication.",
    //     },
    //     {
    //       title: "DesignOps Blitz",
    //       description:
    //         "Defined team culture with onboarding deck, central Confluence structure, and clear roles and skill expectations. Fostered curiosity through monthly Lunch & Learn sessions (Lean UX, rapid user testing, AI-assisted design). Built collaboration rituals: weekly critique templates, async design retros, Figma/Confluence playbooks. Created File Setup Wizard Figma plugin for consistent project structure.",
    //     },
    //   ],
    //   visuals: [
    //     {
    //       image: "/images/case-studies/foodsmart-people-first-design-practice.png",
    //       title: "Color System Reference",
    //       description:
    //         "New semantic color system with accessibility-first approach",
    //     },
    //     {
    //       image: "/images/case-studies/foodsmart-people-first-design-practice.png",
    //       title: "Ovi mascot system",
    //       description:
    //         "Ovi mascot system with modular expressions and poses. Ovi Factory demonstration: https://www.youtube.com/embed/cgSsckMPsaU",
    //     },
    //     {
    //       image: "/images/case-studies/foodsmart-people-first-design-practice.png",
    //       title: "Ambrosia DLS architecture",
    //       description:
    //         "Design system showing tokens, components, and patterns",
    //     },
    //     {
    //       image: "/images/case-studies/foodsmart-people-first-design-practice.png",
    //       title: "Dietitian dashboard",
    //       description:
    //         "Single pane of glass consolidating scheduling, member management, and documentation",
    //     },
    //   ],
    //   outcomes: [
    //     {
    //       title: "+43 NPS Point Increase",
    //       description:
    //         "Measured over 6 months post-launch.",
    //     },
    //     {
    //       title: "Workflows > UI Refresh",
    //       description:
    //         "Solved actual pain points, not just aesthetics.",
    //     },
    //     {
    //       title: "Trust Reduced Friction",
    //       description:
    //         "Improved confidence and efficiency in care delivery.",
    //     },
    //   ],
    //   whatMatteredMost:
    //     "The hardest part wasn't the design work—it was the organizational change. Getting teams to trust a shared system required patience, clear communication, and a willingness to iterate based on real feedback. What mattered most was treating the system as a service, not a mandate. We built trust by solving real problems—workflows, accessibility, and clarity—not by imposing process.",
    //   lessons: [
    //     "Consistency is an operational advantage, not just an aesthetic one.",
    //     "A design system only works when documentation, implementation, and collaboration all evolve together.",
    //     "Operational tools deserve the same design rigor as user-facing consumer products.",
    //   ],
    // },
  ],

  proofPages: [
    {
      slug: "design-systems",
      title: "Design Systems",
      description:
        "Design systems as a way to scale product quality, improve delivery speed, and create consistent user experiences across platforms.",
      intro: "Design systems work best when they directly improve product quality and team velocity—not when they exist as standalone artifacts.",
      framing:
        "At Foodsmart, I led the creation of Ambrosia, a design system built from the ground up to support multiple product surfaces, evolving product priorities, and a growing design team. The goal was not to create a perfect library. It was to create a system teams could actually use, extend, and trust. The work included defining shared foundations, introducing reusable components, improving documentation, and helping design and engineering align around practical decisions rather than abstract idealism.",
      sections: [
        {
          title: "Building from Zero",
          content:
            "There was no established system when this work began. Patterns existed in isolated places, but there was no shared language or reliable source of truth. Ambrosia introduced:",
          items: [
            "foundational tokens for spacing, color, typography, and interaction",
            "reusable components across product contexts",
            "clearer naming conventions",
            "documentation that explained intent, not just appearance",
          ],
        },
        {
          title: "More Than One Library",
          content:
            "The system evolved into distinct layers: Design Language System (DLS) for foundational principles, Product library for internal platform workflows, and Member library for customer-facing experiences. This allowed shared consistency while respecting different product needs.",
        },
        {
          title: "What Scaling Actually Required",
          content:
            "The hardest part of design systems is rarely drawing components. It is:",
          items: [
            "deciding where consistency matters most",
            "knowing when not to standardize",
            "documenting decisions before teams forget why they were made",
            "helping engineers adopt patterns without slowing delivery",
          ],
        },
      ],
      principles: [
        "Consistency over perfection",
        "Build for adoption",
        "Document relentlessly",
        "Systems are social before they are technical",
      ],
      callout:
        "Earlier in my career, I also built Nucleus, another system effort under different constraints. Together, those experiences reinforced the same lesson: systems succeed when they reduce friction, not when they chase elegance for its own sake.",
      imagePlaceholder: "/images/design-system.webp",
      relatedCaseStudies: ["ambrosia-design-system"],
    },
    {
      slug: "designops",
      title: "DesignOps",
      description:
        "Operational practices that improve how design actually gets shipped—without adding unnecessary process or overhead.",
      intro: "Good process should make product design easier to execute, not heavier to manage.",
      framing:
        "Much of my leadership work has involved quietly building the operating systems around design: critique habits, documentation expectations, handoff clarity, and team rhythms that help work move with less confusion. DesignOps, for me, has never meant adding ceremony. It means reducing avoidable friction.",
      sections: [
        {
          title: "Establishing Operating Rhythm",
          content:
            "At Foodsmart, this included introducing:",
          items: [
            "more structured critique conversations",
            "clearer expectations for design artifacts",
            "stronger visibility into work in progress",
            "more intentional review points before engineering handoff",
          ],
        },
        {
          title: "Making Design Visible",
          content:
            "One recurring problem in small teams is that important design thinking disappears into conversations. I pushed for systems where decisions could be revisited:",
          items: [
            "clearer rationale in files",
            "documentation of tradeoffs",
            "shared references for patterns and decisions",
          ],
        },
        {
          title: "Supporting Designers Without Bureaucracy",
          content:
            "Small teams do not need heavy frameworks. They need:",
          items: [
            "predictable habits",
            "useful templates",
            "enough structure to reduce rework",
          ],
        },
        {
          title: "Learning as Team Infrastructure",
          content:
            "I also introduced recurring internal learning moments, including a Lunch & Learn series, to strengthen shared vocabulary and sharpen design thinking across the team.",
        },
      ],
      principles: [
        "Clarity over ceremony",
        "Process should earn its existence",
        "Documentation is leadership",
        "Healthy teams need lightweight structure",
      ],
      callout:
        "The goal was always the same: make good design easier to produce consistently without creating systems that collapse under their own weight.",
      imagePlaceholder: null,
      relatedCaseStudies: ["ambrosia-design-system"],
    },
    {
      slug: "product-delivery",
      title: "Product Design & Delivery",
      description:
        "Design decisions that improve real product outcomes—focused on workflow clarity, usability, and confidence in complex environments.",
      intro: "What improves outcomes most often is workflow clarity, not visual polish.",
      framing:
        "Across projects, my strongest product work has usually started by identifying where users were blocked, uncertain, or forced into unnecessary work. That often meant resisting the urge to over-design early.",
      sections: [
        {
          title: "Lean First",
          content:
            "I tend to begin with the smallest version that reveals whether the idea is useful. At Foodsmart, early internal tools often started as intentionally simple interfaces designed to answer one question: What information do users need right now to act confidently?",
        },
        {
          title: "Iteration Over Assumption",
          content:
            "The Foodsmart benefit ledger work is a strong example. The first version introduced basic visibility. Feedback quickly revealed missing needs:",
          items: [
            "status clarity",
            "expiration visibility",
            "filtering for daily workflow",
          ],
          contentAfter: "The design evolved from there.",
        },
        {
          title: "Product Judgment",
          content:
            "Not every useful improvement needs large scope. Sometimes the highest-value work is:",
          items: [
            "exposing hidden system state",
            "improving confidence",
            "reducing support dependency",
          ],
        },
      ],
      principles: [
        "Ship to learn",
        "Solve for confidence",
        "Reduce invisible friction",
        "Small changes can shift trust dramatically",
      ],
      callout:
        "The most valuable design decisions are often the ones users barely notice because the work simply becomes easier.",
      imagePlaceholder: "/images/food-benefits.webp",
      relatedCaseStudies: ["food-benefit-ledger", "connecting-platforms"],
    },
    {
      slug: "technical-fluency",
      title: "Technical Fluency",
      description:
        "Technical fluency that improves design quality, speeds up delivery, and strengthens collaboration with engineering.",
      intro: "Understanding how products are built leads to better design decisions and faster execution.",
      framing:
        "I am not a full-time engineer, but technical fluency has consistently improved my design work, especially in systems-heavy environments. It changes conversations from abstract preference to practical decision-making.",
      sections: [
        {
          title: "Prototyping to Think",
          content:
            "For CI Security's MDR dashboard, I built a functional prototype using:",
          items: [
            "HTML",
            "JavaScript",
            "D3",
            "scrubbed real-world data",
          ],
          contentAfter:
            "The goal was not visual polish. It was testing whether hierarchy and interpretation worked under realistic conditions.",
        },
        {
          title: "Better Handoff Through Shared Language",
          content:
            "Technical understanding improves:",
          items: [
            "feasibility conversations",
            "component thinking",
            "implementation quality",
            "design system adoption",
          ],
        },
        {
          title: "Current Practice",
          content:
            "My independent product work has deepened this further through hands-on work with:",
          items: [
            "React",
            "Supabase",
            "design tokens",
            "front-end architecture",
            "deployment pipelines",
          ],
        },
      ],
      principles: [
        "Constraints improve design",
        "Shared vocabulary builds trust",
        "Prototypes answer different questions than mockups",
      ],
      callout:
        "Technical fluency does not replace design judgment. It strengthens it.",
      imagePlaceholder: "/images/cisecurity-prototype.avif",
      relatedCaseStudies: ["designing-trust-security-system"],
    },
  ],

  proofPage: {
    intro: {
      eyebrow: "Experience & Credibility",
      title: "Proof that the product thinking shows up in the work.",
      description:
        "I design products, workflows, and systems that make complex experiences clearer, faster, and more reliable across teams and platforms.",
    },

    strengths: [
      {
        title: "Product Design",
        items: [
          "End-to-end product design across healthcare, SaaS, platform, and security environments",
          "Workflow UX for complex, high-context tasks",
          "Design decisions grounded in usability, implementation reality, and product outcomes",
        ],
      },
      {
        title: "Systems & Delivery",
        items: [
          "Design systems with tokens, components, documentation, and governance",
          "Cross-functional collaboration that improves design-to-development velocity",
          "Front-end fluency that helps bridge design intent and shipped reality",
        ],
      },
    ],

    highlights: [
      "Designed and shipped products across healthcare, platform, and security domains",
      "Built design systems from scratch that improved consistency and delivery speed",
      "Created a partner portal that reduced marketing overhead by ~60%",
      "Redesigned a web experience and doubled qualified leads",
      "Improved workflow clarity across web and mobile product surfaces",
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
      "Product Design",
      "Complex Workflow UX",
      "Design Systems",
      "Cross-functional collaboration",
      "Front-end fluency",
      "AI-assisted product workflows",
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
        "If you’re building a product, improving a complex workflow, or trying to bring more clarity and consistency to a growing platform, I’d love to hear about it.",
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

export type ProofPage = (typeof site.proofPages)[number];