import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label: string;
  heading: string;
  className?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({
  label,
  heading,
  className,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" && "text-center",
        className
      )}
    >
      <p
        className={cn(
          "text-label mb-3 flex items-center gap-2",
          align === "center" && "justify-center",
          light ? "text-slate-400" : "text-slate-500"
        )}
      >
        {label}
        <span
          className="inline-block w-2 h-2 rounded-full bg-accent-yellow-400"
          aria-hidden="true"
        />
      </p>
      <h2
        className={cn(
          "text-h2",
          light ? "text-white" : "text-dark"
        )}
      >
        {heading}
      </h2>
    </div>
  );
}
