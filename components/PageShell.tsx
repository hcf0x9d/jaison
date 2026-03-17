const SECTION_PADDING = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

export interface PageShellProps {
  children: React.ReactNode;
  /** Content max-width: "full" | "narrow" | "prose" */
  contentWidth?: "full" | "narrow" | "prose";
  className?: string;
}

const contentWidthClasses = {
  full: "",
  narrow: "max-w-3xl",
  prose: "max-w-2xl",
} as const;

export default function PageShell({
  children,
  contentWidth = "full",
  className = "",
}: PageShellProps) {
  const innerClass = contentWidthClasses[contentWidth];
  return (
    <main className={`${SECTION_PADDING} py-16 ${className}`}>
      {innerClass ? (
        <div className={`mx-auto ${innerClass}`}>{children}</div>
      ) : (
        children
      )}
    </main>
  );
}

export { SECTION_PADDING };
