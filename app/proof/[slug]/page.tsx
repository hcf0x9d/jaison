import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import BackLink from "@/components/BackLink";
import TextLink from "@/components/TextLink";
import { Heading, Body } from "@/components/Typography";
import { site, getProofPageBySlug } from "@/lib/site";

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
          <TextLink href="/#proof" variant="accent" className="mt-6 inline-block">
            Back to homepage
          </TextLink>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell contentWidth="narrow">
      <BackLink href="/#proof" className="mb-8">
        Back to proof
      </BackLink>

      <Heading size="2xl" weight="heavy" className="mb-6 text-[var(--foreground)]">
        {page.title}
      </Heading>
      <Body
        size="large"
        weight="regular"
        className="mb-8 text-[var(--text-muted)] leading-relaxed"
      >
        {page.description}
      </Body>

      <ul className="list-disc space-y-2 pl-6">
        {page.items.map((item) => (
          <li key={item}>
            <Body size="baseline" weight="regular" className="text-[var(--foreground)]">
              {item}
            </Body>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
