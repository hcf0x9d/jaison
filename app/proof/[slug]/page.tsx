import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import TextLink from "@/components/TextLink";
import { site, getProofPageBySlug } from "@/lib/site";
import ProofDetailClient from "./ProofDetailClient";

export function generateStaticParams() {
  return site.proofPages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getProofPageBySlug(slug);
  if (!page) return {};
  return {
    title: `${page.title} – ${site.meta.title}`,
    description: page.description,
  };
}

export default async function ProofDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getProofPageBySlug(slug);

  if (!page) {
    return (
      <PageShell contentWidth="narrow">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-[var(--foreground)]">
            Proof page not found
          </h1>
          <p className="mt-4 text-[var(--text-secondary)]">
            The proof page you&apos;re looking for doesn&apos;t exist.
          </p>
          <TextLink
            href="/proof"
            variant="accent"
            className="mt-6 inline-block"
          >
            Back to proof
          </TextLink>
        </div>
      </PageShell>
    );
  }

  return <ProofDetailClient page={page} />;
}
