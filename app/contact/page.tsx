import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageIntro from "@/components/PageIntro";
import { Body } from "@/components/Typography";
import TextLink from "@/components/TextLink";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Contact – ${site.meta.title}`,
  description: site.contactPage.intro.description,
};

export default function ContactPage() {
  const { contactPage } = site;

  return (
    <PageShell contentWidth="prose">
      <PageIntro
        eyebrow={contactPage.intro.eyebrow}
        title={contactPage.intro.title}
        description={contactPage.intro.description}
      />
      <div className="space-y-6">
        {contactPage.contactMethods.map((method) => (
          <div key={method.label}>
            <Body size="small" weight="medium" className="mb-1 text-[var(--text-tertiary)]">
              {method.label}
            </Body>
            <TextLink href={method.href} variant="accent">
              {method.value}
            </TextLink>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
