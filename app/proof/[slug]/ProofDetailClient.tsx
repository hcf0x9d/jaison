"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import BackLink from "@/components/BackLink";
import { Heading, Body } from "@/components/Typography";
import { ArrowRight } from "@/components/icons";
import { getCaseStudyBySlug, type ProofPage } from "@/lib/site";

type ProofSection = {
  title: string;
  content: string;
  items?: readonly string[];
  contentAfter?: string;
};

function ProofSections({
  sections,
}: {
  sections: readonly ProofSection[];
}): ReactNode {
  if (sections.length === 0) return null;
  return (
    <div className="space-y-16 mb-16">
      {sections.map((section) => (
        <section key={section.title}>
          <Heading
            size="m"
            weight="heavy"
            className="mb-4 text-[var(--foreground)]"
          >
            {section.title}
          </Heading>
          <Body
            size="baseline"
            weight="regular"
            className="max-w-[768px] text-[var(--text-muted)] leading-relaxed"
          >
            {section.content}
          </Body>
          {section.items && section.items.length > 0 && (
            <ul className="mt-4 list-disc space-y-2 pl-6 max-w-[768px]">
              {section.items.map((item) => (
                <li key={item}>
                  <Body
                    size="baseline"
                    weight="regular"
                    className="text-[var(--text-muted)] leading-relaxed"
                  >
                    {item}
                  </Body>
                </li>
              ))}
            </ul>
          )}
          {section.contentAfter && (
            <Body
              size="baseline"
              weight="regular"
              className="mt-4 max-w-[768px] text-[var(--text-muted)] leading-relaxed"
            >
              {section.contentAfter}
            </Body>
          )}
        </section>
      ))}
    </div>
  );
}

export default function ProofDetailClient({ page }: { page: ProofPage }) {
  const sections: ProofSection[] =
    "sections" in page && Array.isArray(page.sections)
      ? (page.sections as ProofSection[])
      : [];
  const principles: string[] =
    "principles" in page && Array.isArray(page.principles) ? page.principles : [];
  const framing = "framing" in page ? (page.framing as string | null) : null;
  const intro = "intro" in page ? (page.intro as string | null) : null;
  const callout = "callout" in page ? (page.callout as string | null) : null;
  const imagePlaceholder =
    "imagePlaceholder" in page
      ? (page.imagePlaceholder as string | null)
      : null;
  const relatedSlugs: string[] =
    "relatedCaseStudies" in page && Array.isArray(page.relatedCaseStudies)
      ? page.relatedCaseStudies
      : [];

  const relatedCaseStudies = relatedSlugs
    .map((slug) => getCaseStudyBySlug(slug))
    .filter((c): c is NonNullable<typeof c> => c != null);

  return (
    <PageShell contentWidth="full" className="pb-0">
      <div className="mx-auto max-w-[996px]">
        <BackLink href="/proof" className="mt-8 mb-8">
          Back to proof
        </BackLink>

        {/* Intro statement */}
        <Heading
          size="2xl"
          weight="heavy"
          className="mb-6 text-[var(--foreground)]"
        >
          {page.title}
        </Heading>

        {intro && (
          <Body
            size="large"
            weight="regular"
            className="mb-6 text-[var(--foreground)] leading-relaxed"
          >
            {intro}
          </Body>
        )}

        {framing && (
          <Body
            size="baseline"
            weight="regular"
            className="mb-12 max-w-[768px] text-[var(--text-muted)] leading-relaxed"
          >
            {framing}
          </Body>
        )}

        {/* Hero image placeholder */}
        {imagePlaceholder && (
          <div className="mb-16 overflow-hidden rounded-lg border border-[var(--divider)] bg-[var(--surface-neutral)]">
            <Image
              src={imagePlaceholder}
              alt={page.title}
              width={996}
              height={560}
              className="h-auto max-h-[560px] w-full object-cover"
            />
          </div>
        )}

        {/* Evidence sections */}
        <ProofSections sections={sections} />

        {/* Principle blocks */}
        {principles.length > 0 && (
          <section className="mb-16 py-12 px-6 -mx-6 sm:mx-0 sm:px-0 rounded-lg bg-[var(--surface-soft)]">
            <Heading
              size="s"
              weight="heavy"
              className="mb-8 text-[var(--foreground)]"
            >
              Principles
            </Heading>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {principles.map((principle) => (
                <div
                  key={principle}
                  className="rounded-lg border border-[var(--divider)] bg-[var(--background)] p-6"
                >
                  <div className="flex items-start gap-3">
                    {/*<div className="mt-1 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />*/}
                    <Body
                      size="baseline"
                      weight="medium"
                      className="text-[var(--foreground)]"
                    >
                      {principle}
                    </Body>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Optional callout */}
        {callout && (
          <section className="mb-16 py-4 px-6 -mx-6 sm:mx-0 border-l-2 border-[var(--accent)] bg-[rgba(82,99,116,0.05)]">
            <Body
              size="baseline"
              weight="regular"
              className="text-[var(--text-muted)] italic"
            >
              {callout}
            </Body>
          </section>
        )}

        {/* Fallback: legacy items list */}
        {sections.length === 0 && "items" in page && Array.isArray(page.items) && (
          <ul className="list-disc space-y-2 pl-6 mb-16">
            {(page.items as string[]).map((item) => (
              <li key={item}>
                <Body
                  size="baseline"
                  weight="regular"
                  className="text-[var(--foreground)]"
                >
                  {item}
                </Body>
              </li>
            ))}
          </ul>
        )}

        {/* Related case studies */}
        {relatedCaseStudies.length > 0 && (
          <section className="border-t border-[var(--divider)] pt-12 pb-16">
            <p className="mb-6 text-xs font-normal tracking-[0.06em] uppercase text-[var(--text-muted)]">
              Related case studies
            </p>
            <div className="space-y-6">
              {relatedCaseStudies.map((caseStudy) => (
                <Link
                  key={caseStudy.slug}
                  href={caseStudy.href}
                  className="flex items-center justify-between gap-4 group"
                >
                  <Heading
                    size="xs"
                    weight="heavy"
                    className="text-[var(--foreground)] transition-colors group-hover:text-[var(--accent)]"
                  >
                    {caseStudy.title}
                  </Heading>
                  <ArrowRight className="h-6 w-6 shrink-0 text-[var(--accent)]" />
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </PageShell>
  );
}
