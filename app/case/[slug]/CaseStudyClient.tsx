"use client";

import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import BackLink from "@/components/BackLink";
import Chip from "@/components/Chip";
import { Heading, Body } from "@/components/Typography";
import { ArrowRight } from "@/components/icons";
import Blockquote from "@/components/Blockquote";

type CaseStudy = (typeof import("@/lib/site").site.caseStudies)[number];

type OutcomeItem =
  | string
  | { title: string; description: string };

function isRichOutcome(o: OutcomeItem): o is { title: string; description: string } {
  return typeof o === "object" && "title" in o && "description" in o;
}

export default function CaseStudyClient({
  caseStudy,
  nextCaseStudy,
}: {
  caseStudy: CaseStudy;
  nextCaseStudy: (typeof import("@/lib/site").site.caseStudies)[number] | null;
}) {
  const challenge = "challenge" in caseStudy ? caseStudy.challenge : (caseStudy as { problem?: string }).problem ?? null;
  const challengeDetail = "challengeDetail" in caseStudy ? caseStudy.challengeDetail : null;
  const challengeQuote = "challengeQuote" in caseStudy ? caseStudy.challengeQuote : null;
  const complexity = "complexity" in caseStudy ? caseStudy.complexity : null;
  const approach = "approach" in caseStudy ? caseStudy.approach : null;
  const visuals = "visuals" in caseStudy ? caseStudy.visuals : null;
  const outcomes = caseStudy.outcomes ?? [];
  const whatMatteredMost = "whatMatteredMost" in caseStudy ? caseStudy.whatMatteredMost : null;
  const lessons = caseStudy.lessons ?? [];
  const scope = "scope" in caseStudy ? caseStudy.scope : null;
  const team = "team" in caseStudy ? caseStudy.team : null;
  const timeframe = "timeframe" in caseStudy ? caseStudy.timeframe : null;

  const hasRichTemplate =
    challengeDetail ||
    challengeQuote ||
    complexity ||
    approach ||
    visuals ||
    outcomes.some(isRichOutcome) ||
    whatMatteredMost;

  return (
    <PageShell contentWidth="full" className="pb-0">
      <div className="max-w-[996px] mx-auto">
        <BackLink href="/" className="mt-8">
          Back to home
        </BackLink>

        {/*<p className="section-label mb-4">Case Study</p>*/}

        <Heading size="2xl" weight="heavy" className="mb-6 text-[var(--foreground)]">
          {caseStudy.title}
        </Heading>

        <Body size="large" weight="regular" className="mb-12 text-[var(--text-muted)] max-w-[821px]">
          {caseStudy.summary}
        </Body>

        {/* Meta grid */}
        {(caseStudy.role || scope || team || timeframe) && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-16 mb-16 border-b border-[var(--divider)]">
            {caseStudy.role && (
              <MetaItem label="Role" value={caseStudy.role} />
            )}
            {scope && <MetaItem label="Scope" value={scope} />}
            {team && <MetaItem label="Team" value={team} />}
            {timeframe && <MetaItem label="Timeframe" value={timeframe} />}
          </div>
        )}

        {/* Hero image */}
        {caseStudy.image && (
          <div className="mb-16 overflow-hidden rounded-lg border border-[var(--divider)] bg-[var(--surface-neutral)]">
            <Image
              src={caseStudy.image}
              alt={caseStudy.title}
              width={1200}
              height={675}
              className="w-full object-cover"
            />
          </div>
        )}

        {hasRichTemplate ? (
          <>
            {/* The Challenge */}
            {(challenge || challengeDetail) && (
              <section className="py-12 px-6 -mx-6 sm:mx-0 sm:px-0 rounded-lg bg-[var(--surface-soft)] mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 lg:gap-12 items-start">
                  <div className="space-y-6">
                    <Heading size="m" weight="heavy" className="text-[var(--foreground)]">
                      The Challenge
                    </Heading>
                    {challenge && (
                      <Body size="large" weight="regular" className="text-[var(--foreground)]">
                        {challenge}
                      </Body>
                    )}
                    {challengeDetail && (
                      <Body size="baseline" weight="regular" className="text-[var(--text-muted)]">
                        {challengeDetail}
                      </Body>
                    )}
                  </div>
                  {challengeQuote && (
                    <div className="border-l-2 border-[var(--accent)] pl-6 py-6 bg-[rgba(82,99,116,0.05)] rounded-r">
                      <p className="text-lg leading-7 italic text-[var(--accent)]">
                        &ldquo;{challengeQuote}&rdquo;
                      </p>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Context & Complexity */}
            {(caseStudy.context || complexity) && (
              <section className="mb-16">
                <Heading size="m" weight="heavy" className="mb-6 text-[var(--foreground)]">
                  Context & Complexity
                </Heading>
                {caseStudy.context && (
                  <Body size="baseline" weight="regular" className="mb-8 text-[var(--text-muted)] max-w-[768px]">
                    {caseStudy.context}
                  </Body>
                )}
                {complexity && complexity.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {complexity.map((item) => (
                      <div key={item} className="flex gap-3 items-start">
                        <div className="w-1 h-6 shrink-0 bg-[var(--accent)] rounded mt-0.5" />
                        <Body size="baseline" weight="regular" className="text-[var(--foreground)]">
                          {item}
                        </Body>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            )}

            {/* Approach */}
            {approach && approach.length > 0 && (
              <section className="py-24 px-8 -mx-4 sm:mx-0 sm:px-0 rounded-lg bg-gradient-to-b from-[var(--background)] to-[var(--surface-soft)] mb-16">
                <Heading size="m" weight="heavy" className="mb-12 text-[var(--foreground)]">
                  Approach
                </Heading>
                <div className="space-y-12">
                  {approach.map((item) => (
                    <div key={item.title} className="relative pl-6 border-l border-[rgba(82,99,116,0.1)] -ml-6">
                      <div className="grid grid-cols-1 md:grid-cols-[316px_1fr] gap-8">
                        <Heading size="xs" weight="heavy" className="text-[var(--foreground)]">
                          {item.title}
                        </Heading>
                        <Body size="baseline" weight="regular" className="text-[var(--text-muted)]">
                          {item.description}
                        </Body>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Visuals */}
            {visuals && visuals.length > 0 && (
              <section className="space-y-16 mb-16">
                {visuals.map((v, i) => (
                  <div key={i} className="space-y-6">
                    <div className="overflow-hidden rounded-lg border border-[var(--divider)] bg-[var(--surface-neutral)] max-h-[560px]">
                      <Image
                        src={v.image}
                        alt={v.title}
                        width={996}
                        height={560}
                        className="w-full object-cover"
                      />
                    </div>
                    <div className="space-y-2">
                      <Heading size="xs" weight="heavy" className="text-[var(--foreground)]">
                        {v.title}
                      </Heading>
                      <Body size="small" weight="regular" className="text-[var(--text-muted)]">
                        {v.description}
                      </Body>
                    </div>
                  </div>
                ))}
              </section>
            )}

            {/* Outcomes */}
            {outcomes.length > 0 && (
              <section className="py-12 px-6 -mx-6 sm:mx-0 sm:px-0 rounded-lg mb-16">
                <Heading size="m" weight="heavy" className="mb-12 text-[var(--foreground)]">
                  Outcomes
                </Heading>
                {outcomes.some(isRichOutcome) ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {(outcomes as unknown as OutcomeItem[])
                      .filter(isRichOutcome)
                      .map((o) => (
                      <div key={o.title} className="space-y-3">
                        <Heading size="xs" weight="heavy" className="text-[var(--accent)]">
                          {o.title}
                        </Heading>
                        <Body size="baseline" weight="regular" className="text-[var(--text-muted)]">
                          {o.description}
                        </Body>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="list-disc space-y-2 pl-6">
                    {outcomes.map((item) => (
                      <li key={typeof item === "object" ? item.title : item}>
                        <Body size="baseline" weight="regular" className="text-[var(--foreground)]">
                          {typeof item === "object" ? item.title : item}
                        </Body>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            )}

            {/* What mattered most */}
            {whatMatteredMost && (
              <section className="py-32 px-8 -mx-4 sm:mx-0 sm:px-0 rounded-lg mb-16">
                <Heading size="m" weight="heavy" className="mb-8 text-[var(--foreground)]">
                  What mattered most
                </Heading>
                <Body size="large" weight="regular" className="text-[var(--text-muted)] mx-auto">
                  {whatMatteredMost}
                </Body>
              </section>
            )}
          </>
        ) : (
          /* Fallback: simple template for case studies without rich data */
          <>
            {caseStudy.tags.length > 0 && (
              <div className="mb-6 flex flex-wrap gap-2">
                {caseStudy.tags.map((tag) => (
                  <Chip key={tag} variant="grey">
                    {tag}
                  </Chip>
                ))}
              </div>
            )}

            {caseStudy.role && (
              <CaseStudySection title="Role">
                <Body size="baseline" weight="regular" className="text-[var(--foreground)]">
                  {caseStudy.role}
                </Body>
              </CaseStudySection>
            )}

            {caseStudy.context && (
              <CaseStudySection title="Context">
                <Body size="baseline" weight="regular" className="text-[var(--foreground)]">
                  {caseStudy.context}
                </Body>
              </CaseStudySection>
            )}

            {challenge && (
              <CaseStudySection title="Problem">
                <Body size="baseline" weight="regular" className="text-[var(--foreground)]">
                  {challenge}
                </Body>
              </CaseStudySection>
            )}

            {outcomes.length > 0 && (
              <CaseStudySection title="Outcomes">
                <ul className="list-disc space-y-1 pl-6">
                  {outcomes.map((item) => (
                    <li key={String(item)}>
                      <Body size="baseline" weight="regular" className="text-[var(--foreground)]">
                        {typeof item === "object" ? item.title : item}
                      </Body>
                    </li>
                  ))}
                </ul>
              </CaseStudySection>
            )}

            {lessons.length > 0 && (
              <CaseStudySection title="Lessons">
                <ul className="list-disc space-y-1 pl-6">
                  {lessons.map((lesson) => (
                    <li key={lesson}>
                      <Body size="baseline" weight="regular" className="text-[var(--foreground)]">
                        {lesson}
                      </Body>
                    </li>
                  ))}
                </ul>
              </CaseStudySection>
            )}
          </>
        )}

        {"quote" in caseStudy && caseStudy.quote && (
          <div className="mb-16">
            <Blockquote quote={caseStudy.quote.text} attribution={caseStudy.quote.cite} />
            {/*<Blockquote size="baseline" weight="regular" className="text-[var(--foreground)]">*/}
            {/*</Blockquote>*/}
          </div>
        )}

        {/* Next Case Study */}
        {nextCaseStudy && (
          <section className="pt-12 pb-16 border-t border-[var(--divider)]">
            <p className="section-label mb-4">Next Case Study</p>
            <Link
              href={nextCaseStudy.href}
              className="flex items-center justify-between gap-4 group"
            >
              <Heading size="xs" weight="heavy" className="text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                {nextCaseStudy.title}
              </Heading>
              <ArrowRight className="shrink-0 w-6 h-6 text-[var(--accent)]" />
            </Link>
          </section>
        )}
      </div>
    </PageShell>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-normal tracking-[0.06em] uppercase text-[var(--text-muted)]">
        {label}
      </p>
      <Body size="small" weight="regular" className="text-[var(--foreground)]">
        {value}
      </Body>
    </div>
  );
}

function CaseStudySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-12">
      <Heading size="s" weight="heavy" className="mb-4 text-[var(--foreground)]">
        {title}
      </Heading>
      {children}
    </section>
  );
}
