import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import PageIntro from "@/components/PageIntro";
import { Heading, Body } from "@/components/Typography";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Proof – ${site.meta.title}`,
  description:
    "Experience and credibility. Proof that systems thinking shows up in the work.",
};

export default function ProofIndexPage() {
  return (
    <PageShell contentWidth="narrow">
      <PageIntro
        eyebrow="Experience & Credibility"
        title="Proof that the systems thinking shows up in the work."
        description="Focused evidence of how I work across disciplines. Design systems, DesignOps, product delivery, and technical fluency—not resume dumps, but intentional proof documents."
      />
      <div className="space-y-8">
        {site.proofPages.map((page) => (
          <Link
            key={page.slug}
            href={`/proof/${page.slug}`}
            className="group block rounded-lg border border-[var(--divider)] bg-[var(--background)] p-8 transition-colors hover:border-[var(--border-subtle)] hover:bg-[var(--surface-soft)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2"
          >
            <Heading
              size="s"
              weight="heavy"
              className="mb-3 text-[var(--foreground)] transition-colors group-hover:text-[var(--accent)]"
            >
              {page.title}
            </Heading>
            <Body
              size="baseline"
              weight="regular"
              className="text-[var(--text-muted)] leading-relaxed"
            >
              {page.description}
            </Body>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
