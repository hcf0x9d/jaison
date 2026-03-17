# Jaison Portfolio

A personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. Configured for static export to deploy on DigitalOcean App Platform.

## Project Structure

```
/app
  /                  - Homepage (main scrolling narrative)
  /case              - Case study index
  /case/[slug]       - Individual case study pages
  /proof             - Proof landing (links to detail pages)
  /proof/[slug]      - Proof detail pages (design-systems, design-operations)
  /contact           - Contact page
/lib
  site.ts            - All site copy and content configuration
/components
  Navigation.tsx     - Site navigation (Work, Proof, Contact)
```

## Features

- **Static Site Generation**: Configured for static export (`output: 'export'`)
- **TypeScript**: Full type safety throughout
- **Tailwind CSS**: Utility-first styling
- **Password Protection**: Case studies can be password protected (client-side)
- **Dynamic Routes**: Case studies use dynamic routing with static generation

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production (static export)
npm run build

# The static files will be in the /out directory
```

## Adding Case Studies

Edit `/lib/site.ts` to add new case studies:

```typescript
export const caseStudies: CaseStudy[] = [
  {
    slug: "my-case-study",
    title: "My Case Study",
    description: "Description here",
    passwordProtected: false,
  },
  {
    slug: "private-case",
    title: "Private Case Study",
    description: "Description here",
    passwordProtected: true,
    password: "your-password-here",
  },
];
```

## Deployment

This site is configured for static export. After running `npm run build`, the static files will be in the `/out` directory, ready to deploy to DigitalOcean App Platform or any static hosting service.

## Notes

- Password protection is client-side only (using sessionStorage)
- All site content is managed in `/lib/site.ts`
- Placeholder content is currently in place - ready for design implementation
