import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl space-y-4", className)}>
      <p className="font-mono text-xs uppercase tracking-[0.45em] text-sky-300/80">{eyebrow}</p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">{description}</p>
    </div>
  );
}