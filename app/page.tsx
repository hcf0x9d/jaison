import Link from "next/link";
import Image from "next/image";
import {
  site,
  getFeaturedCaseStudies,
  getFeaturedWriting,
} from "@/lib/site";
import { ButtonLink } from "@/components/Button";
import LinkArrow, { LinkArrowDisplay } from "@/components/LinkArrow";
import Chip from "@/components/Chip";
import TextLink from "@/components/TextLink";
import heroImage from "@/components/hero.webp"
import Logo from "@/components/Logo";

export default function HomePage() {
  const { home } = site;
  const featuredCaseStudies = getFeaturedCaseStudies();
  const featuredWriting = getFeaturedWriting();

  const [dominantWork, ...secondaryWork] = featuredCaseStudies;

  return (
    <main className="bg-[var(--background)]">
        {/* Hero — dark background, Figma layout */}
        <section className="relative min-h-[520px] overflow-hidden bg-[#2a2a2e] md:min-h-[640px]">
          {/* Hero image — full height on mobile, fills container on desktop */}
          <div className="absolute inset-0">
            <Image
              src={heroImage}
              alt=""
              fill
              className="object-cover object-right md:object-left"
              sizes="100vw"
            />
          </div>
          {/* Uniform dark overlay for text readability — mobile only */}
          <div
            className="absolute inset-0 bg-[#1a1a1e]/80 md:bg-transparent"
            aria-hidden
          />
          <div className="relative mx-auto flex min-h-[520px] max-w-7xl flex-col justify-center px-4 pb-16 pt-24 md:min-h-[640px] md:px-8 md:pb-12 md:pt-28 lg:px-12">
            <div className="max-w-2xl">
              <h1 className="mb-6 flex flex-col text-[2.5rem] font-medium leading-[1.1] tracking-[-0.02em] text-[#fdfcfa] sm:text-[3.25rem] md:mb-8 md:text-[3.75rem] lg:text-[3.75rem] lg:leading-[4.125rem]">
                <span>{home.hero.titleLine1}</span>
                <span className="text-[#ebeae7]">{home.hero.titleLine2}</span>
              </h1>
              <p className="mb-8 max-w-xl text-lg leading-[1.8] text-[#ebeae7] md:text-[1.125rem]">
                {home.hero.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <ButtonLink
                  href={home.hero.primaryCta.href}
                  variant="solid"
                  size="md"
                  showDefaultIcon
                >
                  {home.hero.primaryCta.label}
                </ButtonLink>
                <ButtonLink
                  href={home.hero.secondaryCta.href}
                  variant="outlineOnDark"
                  size="md"
                >
                  {home.hero.secondaryCta.label}
                </ButtonLink>
              </div>
            </div>
          </div>
        </section>

        {/* Proof strip — Figma: 48px padding, accent bars */}
        <section id="proof-strip" className="border-y border-[var(--border-subtle)] bg-[var(--surface-soft)] px-4 py-8 md:px-8 md:py-12 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:gap-6 md:gap-8">
              {home.proofStrip.map((item) => (
                <div key={item} className="flex min-w-0 flex-1 items-center gap-3">
                  <div className="h-10 w-1 shrink-0 bg-[var(--accent)] md:h-12 md:w-[4px]" aria-hidden />
                  <span className="text-sm leading-[1.45] text-[var(--foreground)] md:text-[0.875rem]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pillars / Expertise — Figma: 2x2 grid, 48px padding */}
        <section className="mx-auto max-w-7xl py-16 md:py-24 lg:py-28 px-4">
          <div className="section-label">Expertise</div>
          <h2 className="mb-12 text-[1.75rem] font-semibold leading-tight tracking-[-0.02em] text-[var(--foreground)] md:mb-16 md:text-[2.25rem]">
            Four areas of focus
          </h2>
          <div className="grid gap-12 md:grid-cols-2 md:gap-x-12 md:gap-y-16 lg:grid-cols-4 lg:gap-16">
            {home.pillars.map((pillar) => (
              <div key={pillar.title}>
                <h3 className="mb-4 text-[1.25rem] font-black leading-tight text-[var(--foreground)]">
                  {pillar.title}
                </h3>
                <p className="text-[0.9375rem] leading-[1.6] text-[var(--text-secondary)]">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured work — image placeholders, tint overlay, visual weight */}
        {featuredCaseStudies.length > 0 && (
          <section id="work" className="bg-[var(--surface-soft)] px-4 py-16 md:px-8 md:py-24 lg:px-12 lg:py-28">
            <div className="mx-auto max-w-7xl">
              <div className="section-label">Selected Work</div>
              <h2 className="mb-12 text-[2.25rem] font-semibold leading-tight tracking-[-0.02em] text-[var(--foreground)]">
                Case studies
              </h2>

              <div className={`grid gap-12 md:gap-16 ${secondaryWork.length > 0 ? "lg:grid-cols-2 lg:gap-12 xl:gap-20" : ""}`}>
                {dominantWork && (
                  <Link
                    href={dominantWork.href}
                    className={`group grid gap-6 md:grid-cols-2 md:gap-8 lg:col-span-2`}
                  >
                    {/* Text content — left on desktop */}
                    <div className="flex flex-col justify-center">
                      <div className="mb-4 flex flex-wrap gap-2">
                        {dominantWork.tags.slice(0, 3).map((tag) => (
                          <Chip key={tag} variant="tag">
                            {tag}
                          </Chip>
                        ))}
                      </div>
                      <h3 className="mb-4 text-xl font-semibold leading-tight text-[var(--foreground)] transition-colors group-hover:text-[var(--accent)] md:text-2xl lg:text-[1.875rem]">
                        {dominantWork.title}
                      </h3>
                      <p className="mb-6 max-w-xl text-base leading-[1.6] text-[var(--text-secondary)] md:text-lg">
                        {dominantWork.shortSummary}
                      </p>
                      <LinkArrowDisplay className="text-sm">
                        View case study
                      </LinkArrowDisplay>
                    </div>
                    {/* Image — right on desktop */}
                    <div className="relative order-first overflow-hidden rounded-lg bg-[#e8e8e4] md:order-last shadow-xl">
                      {dominantWork.image ? (
                        <div className="aspect-[4/3] w-full md:aspect-[16/9]">
                          <Image
                            src={dominantWork.image}
                            alt={dominantWork.title}
                            width={800}
                            height={450}
                            className="h-full w-full object-cover object-top opacity-90 transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                          />
                        </div>
                      ) : (
                        <div className="flex aspect-[4/3] w-full items-center justify-center md:aspect-[16/9]">
                          <div className="h-24 w-24 rounded-lg border border-[var(--accent)]/20 bg-[var(--accent)]/5" />
                        </div>
                      )}
                    </div>
                  </Link>
                )}

                <div className="grid grid-cols-1 gap-8 md:gap-10 lg:col-span-2 lg:grid-cols-3">
                  {secondaryWork.map((caseStudy) => (
                    <Link
                      key={caseStudy.slug}
                      href={caseStudy.href}
                      className="group w-full"
                    >
                      <div className="mb-4 aspect-[4/3] w-full overflow-hidden rounded-lg bg-gradient-to-br from-[var(--accent)]/10 to-[var(--text-secondary)]/5 shadow-xl">
                        {caseStudy.image ? (
                          <div className="h-full w-full">
                            <Image
                              src={caseStudy.image}
                              alt={caseStudy.title}
                              width={400}
                              height={300}
                              className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                            />
                          </div>
                        ) : (
                          <div className="flex h-full w-full items-center justify-center">
                            <div className="h-12 w-12 rounded border border-[var(--accent)]/15 bg-[var(--accent)]/5" />
                          </div>
                        )}
                      </div>
                      <div className="mb-2 flex flex-wrap gap-2">
                        {caseStudy.tags.slice(0, 2).map((tag) => (
                          <Chip key={tag} variant="tag">
                            {tag}
                          </Chip>
                        ))}
                      </div>
                      <h4 className="mb-2 text-[1.25rem] font-black leading-tight text-[var(--foreground)] transition-colors duration-200 group-hover:text-[var(--accent)]">
                        {caseStudy.title}
                      </h4>
                      <p className="text-[0.9375rem] leading-[1.55] text-[var(--text-secondary)]">
                        {caseStudy.shortSummary}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

              {/*<div className="mt-14">*/}
              {/*  <LinkArrow href="/case">*/}
              {/*    View all case studies*/}
              {/*  </LinkArrow>*/}
              {/*</div>*/}
            </div>
          </section>
        )}
      {/* Products — Figma: two-column, Kyōfolio with K placeholder */}
      {home.featuredProducts.length > 0 && (
        <section className="bg-[var(--surface-warmer)] px-4 py-16 md:px-8 md:py-24 lg:px-12 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div className="space-y-6">
              <div className="section-label">Side project</div>
              <h2 className="text-[2rem] font-semibold leading-tight tracking-[-0.02em] text-[var(--foreground)] md:text-[3rem]">
                {home.featuredProducts[0].title}
              </h2>
              <p className="max-w-xl text-base leading-[1.6] text-[var(--text-secondary)] md:text-lg">
                {home.featuredProducts[0].description}
              </p>
              <LinkArrow href={home.featuredProducts[0].href} className="text-base">
                Visit Kyōfolio
              </LinkArrow>
            </div>
            {/* K placeholder — Figma visual */}
            <div className="flex items-center justify-center rounded-lg">
              <Image
                src={home.featuredProducts[0].image}
                alt={home.featuredProducts[0].title}
                width={996}
                height={560}
                className="w-full object-cover"
              />
            </div>
          </div>
        </section>
      )}

        {/* Operating philosophy — Figma: centered, gradient bg */}
      <section id="operate"
               className="bg-gradient-to-b from-[var(--background)] to-[var(--surface-soft)] px-4 py-16 md:px-8 md:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <h2
            className="mb-6 text-[1.75rem] font-semibold leading-[1.2] tracking-[-0.02em] text-[var(--foreground)] sm:text-[2.25rem] md:mb-8 md:text-[2.75rem] lg:text-[3.45rem]">
            {home.operatingPhilosophy.title}
          </h2>
          <p className="text-base leading-[1.6] text-[var(--text-secondary)] sm:text-lg md:text-xl lg:text-[1.5rem]">
            {home.operatingPhilosophy.description}
          </p>
        </div>
        <div className="mx-auto max-w-7xl text-center">
          <h3
            className="mb-12 text-[2.25rem] font-semibold leading-tight tracking-[-0.02em] text-[var(--foreground)] mt-16">
            {home.howIWork.title}
          </h3>
          <div className="grid gap-12 md:grid-cols-2 md:gap-x-12 md:gap-y-16 lg:grid-cols-4 lg:gap-16 mt-8">
            {home.howIWork.steps.map((step) => (
              <div key={step.title} className="text-left">
                <h3 className="mb-4 text-[1.25rem] font-black leading-tight text-[var(--foreground)]">
                  {step.title}
                </h3>
                <p className="text-[0.9375rem] leading-[1.6] text-[var(--text-secondary)]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Writing — Figma: heading left, articles right on desktop */}
      {featuredWriting.length > 0 && (
        <section className="bg-[var(--surface-warm)] px-4 py-16 md:px-8 md:py-24 lg:px-12 lg:py-28">
          <div
            className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
            <div className="shrink-0 lg:w-80">
              <div className="section-label">Writing</div>
              <h2
                className="text-[1.75rem] font-semibold leading-tight tracking-[-0.02em] text-[var(--foreground)] md:text-[2.25rem]">
                  Recent articles
                </h2>
              </div>
              <div className="min-w-0 flex-1">
                {featuredWriting.map((article) => (
                  <Link
                    key={article.slug}
                    href={article.url || "#"}
                    className="group block border-b border-[var(--border-subtle)] py-6 last:border-b-0 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 rounded"
                  >
                    <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                      <span className="font-mono text-xs tracking-wider text-[var(--accent)] md:text-sm">
                        {article.date}
                      </span>
                      <span className="text-sm text-[var(--text-secondary)]">{article.readTime}</span>
                    </div>
                    <h3 className="mb-3 text-lg font-semibold leading-tight text-[var(--foreground)] transition-colors group-hover:text-[var(--accent)] md:text-xl">
                      {article.title}
                    </h3>
                    <p className="text-sm leading-[1.6] text-[var(--text-secondary)] md:text-base">
                      {article.summary}
                    </p>
                  </Link>
                ))}
                <div className="mt-8">
                  <LinkArrow href={site.social.medium}>
                    More on Medium
                  </LinkArrow>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Quote — Figma: accent bg, centered, decorative quote mark */}
        <section id="proof" className="relative overflow-hidden bg-[var(--accent)] px-4 py-16 md:px-8 md:py-24 lg:py-36">
          <div className="relative mx-auto max-w-3xl text-center">
            <p className="mb-8 text-xl font-medium leading-[1.4] text-white md:mb-10 md:text-2xl lg:text-[2.25rem]">
              &ldquo;{home.testimonial.quote}&rdquo;
            </p>
            <p className="text-sm font-medium tracking-wider text-white/70">
              — {home.testimonial.attribution}
            </p>
          </div>
        </section>

        {/* Final CTA — Figma: centered, gradient bg */}
        <section className="bg-gradient-to-b from-[var(--background)] to-[var(--surface-soft)] px-4 py-16 md:px-8 md:py-24 lg:px-12 lg:py-36">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-[1.75rem] font-semibold leading-[1.15] tracking-[-0.02em] text-[var(--foreground)] md:mb-8 md:text-[2.5rem] lg:text-[3rem]">
              {home.closingCta.title}
            </h2>
            <p className="mb-8 text-base leading-[1.6] text-[var(--text-secondary)] md:text-lg">
              {home.closingCta.description}
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
              <ButtonLink
                href={home.closingCta.primaryCta.href}
                variant="solidDark"
                size="lg"
                showDefaultIcon
                fullWidth
              >
                {home.closingCta.primaryCta.label}
              </ButtonLink>
              <ButtonLink
                href={home.closingCta.secondaryCta.href}
                variant="outline"
                size="lg"
                fullWidth
              >
                {home.closingCta.secondaryCta.label}
              </ButtonLink>
            </div>
          </div>
        </section>

        {/* Footer — Figma: border top, links, copyright */}
        <footer className="border-t border-[var(--border-subtle)] px-4 py-8 md:px-8 md:py-10 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <Logo variant={'light'} />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <TextLink href={site.social.linkedin} variant="muted" external>
                LinkedIn
              </TextLink>
              <TextLink href={site.social.medium} variant="muted" external>
                Writing
              </TextLink>
              <TextLink href={`mailto:${site.meta.email}`} variant="muted" external>
                Email
              </TextLink>
            </div>
            <p className="text-sm text-[var(--text-secondary)]">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </footer>
      </main>
  );
}
