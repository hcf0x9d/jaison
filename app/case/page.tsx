import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageIntro from "@/components/PageIntro";
import CaseStudyCard from "@/components/CaseStudyCard";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Case Studies – ${site.meta.title}`,
  description: site.casePage.intro.description,
};

export default function CaseIndexPage() {
  const { casePage, caseStudies } = site;

  return (
    <PageShell contentWidth="full">
      <PageIntro
        eyebrow={casePage.intro.eyebrow}
        title={casePage.intro.title}
        description={casePage.intro.description}
      />
      <section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard
              key={caseStudy.slug}
              category={caseStudy.tags[0] ?? ""}
              title={caseStudy.title}
              description={caseStudy.shortSummary}
              href={caseStudy.href}
            />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
