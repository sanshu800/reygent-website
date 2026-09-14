# Reygent Website — Project Instructions

## Project Purpose

This is the official Reygent agency website.

Reygent helps small professional-service firms automate lead management, client onboarding, follow-ups, reporting, and operational workflows using AI and business automation.

The website's primary objective is qualified client conversations.

Secondary objective: serve as the public-facing front end of the Reygent Agency OS.

## Product Architecture

### Frontend
- Next.js
- TypeScript
- App Router
- React Server Components where appropriate
- Client Components only where interaction requires them
- Tailwind CSS
- Custom design system
- Motion/animation only where it improves UX

### Content
Sanity is the planned CMS.

Sanity is for content management, not transactional application state.

### Application Backend
For V1, website backend functionality should live inside Next.js using appropriate server-side mechanisms.

Do not introduce a separate Express backend unless a concrete requirement justifies it.

### Database
PostgreSQL is the planned application database.

Use Prisma or Drizzle only when database functionality is actually required.

### Sales System
Twenty CRM is the operational sales source of truth.

The website must not become a second CRM.

Website submissions may be passed to the appropriate sales systems through approved integrations.

### Agency OS
Hermes is the Reygent Agency OS.

The website is not the Agency OS control plane.

Do not duplicate Agency OS functionality inside the website.

## Public Website Structure

The planned route structure is:

/
├── /systems
│   ├── /lead-management
│   ├── /client-onboarding
│   ├── /follow-up
│   └── /reporting
├── /industries
│   ├── /consulting
│   ├── /legal
│   ├── /accounting
│   └── ...
├── /work
│   ├── /case-study-a
│   └── /case-study-b
├── /about
├── /contact
└── /assessment

Do not create every route immediately.

Implement routes as their content and functionality become defined.

## Assessment

The assessment is a major conversion mechanism.

Planned flow:

Business
→ Team
→ Operational pain
→ Current workflow
→ Tools
→ Volume
→ Time/cost
→ Desired outcome
→ Contact
→ Qualification
→ Booking

The key business metric is:

Visitor → Qualified Conversation conversion rate

Do not optimize the assessment merely for completion rate.

## Design Direction

│   └── ...
├── /about
├── /contact
└── /assessment

Do not create every route immediately.

Implement routes as their content and functionality become defined.

## Assessment

The assessment is a major conversion mechanism.

Planned flow:

Business
→ Team
→ Operational pain
→ Current workflow
→ Tools
→ Volume
→ Time/cost
→ Desired outcome
→ Contact
→ Qualification
→ Booking

The key business metric is:

Visitor → Qualified Conversation conversion rate

Do not optimize the assessment merely for completion rate.

## Design Direction

The website should feel:

- premium
- modern
- technically credible
- consulting-led
- confident
- restrained
- conversion-focused

Avoid:

- generic AI aesthetics
- AI robots
- stock photography
- excessive gradients
- excessive glassmorphism
- huge collections of floating cards
- unnecessary animation
- visual gimmicks

Premium quality should come from:

- typography
- hierarchy
- spacing
- composition
- interaction quality
- responsiveness
- performance
- clarity
- restraint

A subtle ray/light/natural visual signature may be used as part of the Reygent identity, but it should not dominate the interface.

## Engineering Principles

Inspect before modifying.

Prefer:

- simple solutions
- incremental changes
- reusable components when justified
- existing project conventions
- accessible markup
- semantic HTML
- responsive implementation
- strong type safety
- meaningful error handling
- performance-conscious implementation
- testable code

Avoid:

- premature abstraction
- unnecessary dependencies
- unnecessary infrastructure
- unrelated refactors
- rewriting working systems without justification
- duplicating functionality

## Verification

A task is not complete merely because the code compiles.

Verify relevant changes using appropriate:

- development server checks
- production builds
- linting
- type checking
- tests
- browser verification
- responsive checks
- accessibility checks

Never report functionality as verified if it was not actually tested.

## Git

Normal Git operations are within the Web Engineer's authority:

- create branches
- stage changes
- commit changes
- push changes

Use clear, meaningful commit messages.

Do not use destructive history operations without human approval:

- force push
- destructive reset
- rewriting shared history
- deleting important branches

## Scope

This file contains project-specific instructions.

Generic Web Engineer behavior belongs in the Web Engineer SOUL.md.

Reusable engineering procedures belong in Hermes skills.

Do not turn client-specific decisions into universal engineering rules.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
