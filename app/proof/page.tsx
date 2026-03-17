import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import PageIntro from "@/components/PageIntro";
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
        description="I build design systems, workflows, and operational frameworks that make good design repeatable across products, platforms, and teams."
      />
      <div className="space-y-6">
        {site.proofPages.map((page) => (
          <Link
            key={page.slug}
            href={`/proof/${page.slug}`}
            className="block rounded-lg border border-[var(--divider)] p-6 transition-colors hover:border-[var(--border-subtle)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2"
          >
            <h2 className="mb-2 text-xl font-semibold text-[var(--foreground)]">
              {page.title}
            </h2>
            <p className="text-[var(--text-muted)]">{page.description}</p>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
