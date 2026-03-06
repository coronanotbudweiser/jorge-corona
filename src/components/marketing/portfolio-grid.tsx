import { cn } from "@/lib/utils";

interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  platform: string;
  color: string;
}

interface PortfolioGridProps {
  items: PortfolioItem[];
  className?: string;
}

export function PortfolioGrid({ items, className }: PortfolioGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
        className
      )}
    >
      {items.map((item, index) => {
        const isLarge = index === 0 || index === 3;
        return (
          <div
            key={item.id}
            className={cn(
              "group relative overflow-hidden rounded-lg cursor-pointer",
              isLarge
                ? "sm:col-span-2 sm:row-span-2 aspect-[4/3]"
                : "aspect-square"
            )}
          >
            {/* Placeholder colored div — replace with Sanity image */}
            <div className={cn("absolute inset-0", item.color)} />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/80 transition-all duration-300 flex items-end p-6">
              <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-label text-accent-yellow-400 mb-1">
                  {item.platform}
                </p>
                <h3 className="font-heading text-xl font-bold text-white">
                  {item.client}
                </h3>
                <p className="text-sm text-slate-300 mt-1">{item.title}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
