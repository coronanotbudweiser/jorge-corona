import { SectionHeading } from "@/components/marketing/section-heading";
import { PortfolioGrid } from "@/components/marketing/portfolio-grid";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const platforms = [
  "All",
  "Instagram",
  "TikTok",
  "YouTube",
  "LinkedIn",
  "Twitter/X",
];

const portfolioItems = [
  {
    id: "1",
    title: "Brand Launch Campaign",
    client: "Greenpoint Bakery",
    platform: "Instagram",
    color: "bg-brand-green-300",
  },
  {
    id: "2",
    title: "TikTok Growth Strategy",
    client: "Midtown Fitness Co",
    platform: "TikTok",
    color: "bg-brand-green-700",
  },
  {
    id: "3",
    title: "Social Media Overhaul",
    client: "BK Vintage",
    platform: "Instagram",
    color: "bg-brand-green-500",
  },
  {
    id: "4",
    title: "YouTube Channel Launch",
    client: "East River Eats",
    platform: "YouTube",
    color: "bg-brand-green-400",
  },
  {
    id: "5",
    title: "LinkedIn Thought Leadership",
    client: "Harlem Legal Group",
    platform: "LinkedIn",
    color: "bg-brand-green-800",
  },
  {
    id: "6",
    title: "Reels + Stories Package",
    client: "SoHo Skincare",
    platform: "Instagram",
    color: "bg-brand-green-600",
  },
  {
    id: "7",
    title: "Community Management",
    client: "Chelsea Coffee Co",
    platform: "Twitter/X",
    color: "bg-brand-green-200",
  },
  {
    id: "8",
    title: "Viral Campaign",
    client: "Williamsburg Tattoo",
    platform: "TikTok",
    color: "bg-brand-green-900",
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding pb-8 sm:pb-10 lg:pb-12">
        <div className="container-page">
          <h1 className="text-display mb-6">Our Work</h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            A selection of projects for NYC businesses who decided to take their
            social media seriously.
          </p>
        </div>
      </section>

      {/* Filter chips (static) */}
      <section className="pb-8">
        <div className="container-page">
          <div className="flex flex-wrap gap-2">
            {platforms.map((platform, i) => (
              <button
                key={platform}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  i === 0
                    ? "bg-brand-green-500 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {platform}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding pt-0">
        <div className="container-page">
          <PortfolioGrid items={portfolioItems} />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-dark text-white section-padding">
        <div className="container-page text-center">
          <SectionHeading
            label="Let's Work Together"
            heading="Like what you see?"
            align="center"
            light
          />
          <p className="text-slate-400 max-w-lg mx-auto mb-10">
            Every project starts with a conversation. Tell us about your brand,
            and we&apos;ll tell you how we can help.
          </p>
          <Link href="/contact">
            <Button variant="cta" size="lg">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
