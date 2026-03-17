import { site, getCaseStudyBySlug, getNextCaseStudy } from "@/lib/site";
import PageShell from "@/components/PageShell";
import CaseStudyClient from "./CaseStudyClient";

export function generateStaticParams() {
  return site.caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);
  const nextCaseStudy = caseStudy ? getNextCaseStudy(caseStudy.slug) : null;

  if (!caseStudy) {
    return (
      <PageShell>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-[var(--foreground)]">
            Case Study Not Found
          </h1>
          <p className="mt-4 text-[var(--text-secondary)]">
            The case study you're looking for doesn't exist.
          </p>
        </div>
      </PageShell>
    );
  }

  return (
    <CaseStudyClient caseStudy={caseStudy} nextCaseStudy={nextCaseStudy} />
  );
}
