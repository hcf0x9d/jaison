import { Heading, Body } from "./Typography";

export interface PageIntroProps {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
}

export default function PageIntro({
  eyebrow,
  title,
  description,
  className = "",
}: PageIntroProps) {
  return (
    <section className={`mb-16 max-w-3xl ${className}`}>
      <Body size="small" weight="regular" className="pt-8 mb-4 text-[var(--text-tertiary)]">
        {eyebrow}
      </Body>
      <Heading size="2xl" weight="heavy" className="mb-4 text-[var(--foreground)]">
        {title}
      </Heading>
      <Body size="large" weight="regular" className="text-[var(--text-muted)]">
        {description}
      </Body>
    </section>
  );
}
