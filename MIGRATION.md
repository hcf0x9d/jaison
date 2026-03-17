# Migration Notes: Storybook → Public Website

This document describes what content to move from Storybook, what to rewrite for the website, and what still needs manual input.

---

## 1. Content to Move from Storybook First

If you have Storybook content (components, documentation, case study narratives), prioritize migrating:

- **Case study narratives** → `lib/site.ts` `caseStudies` array
- **Design system documentation** → `lib/site.ts` `proofPage.strengths` or `/proof/systems`
- **Product design work** → `lib/site.ts` `proofPage` or case studies
- **Operating principles** → `lib/site.ts` `operatePage.sections`
- **Testimonials** → `lib/site.ts` `operatePage.testimonial`

---

## 2. What to Rewrite for the Website

Storybook content is often written for designers and developers. Adapt it for a public audience:

- **Tone**: Less technical, more narrative. Focus on outcomes and impact.
- **Structure**: Use the case study template (context → problem → outcomes → lessons).
- **Length**: Website visitors skim. Lead with the most important points.

---

## 3. What Can Remain Storybook-Only

- Component playgrounds and interactive examples
- Design token reference
- Internal documentation
- Work-in-progress or NDA-protected work

---

## 4. Content Still Needing Manual Input

| Location | What to Add |
|----------|-------------|
| `lib/site.ts` | `writing[figma-team-rooms].url` – Add when article is published |
| `lib/site.ts` | `productsPage.products[0].href` – Replace with live Kyōfolio URL or case study link when available |
| `lib/site.ts` | `operatePage.testimonial.attribution` – Expand to full name/title if desired |

---

## 5. Checklist

- [x] Resolve TODO comments in `lib/site.ts`
- [ ] Add Figma Team Rooms article URL when published
- [ ] Add Kyōfolio product URL when live
- [ ] Expand testimonial attribution if desired
