import { SectionHeading } from "@/components/marketing/section-heading";
import { PortfolioGrid } from "@/components/marketing/portfolio-grid";
import { VideoEmbed } from "@/components/marketing/video-embed";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const platforms = [
  "All",
  "Film",
  "Photography",
  "YouTube",
  "Brands",
];

const portfolioItems = [
  {
    id: "1",
    title: "Forbidden Fruit — Narrative Short",
    client: "Film",
    platform: "Vimeo",
    color: "bg-brand-green-300",
    image: "/images/portfolio/vimeo-forbidden-fruit.jpg",
  },
  {
    id: "2",
    title: "DJI Osmo Review — The Verge",
    client: "Brands",
    platform: "YouTube",
    color: "bg-brand-green-700",
    image: "/images/portfolio/yt-verge-osmo.jpg",
  },
  {
    id: "3",
    title: "Collective Dance Academy",
    client: "Photography",
    platform: "Art",
    color: "bg-brand-green-500",
    image: "/images/portfolio/dance-academy.jpg",
  },
  {
    id: "4",
    title: "The Animated History of the Hamburger",
    client: "Documentary",
    platform: "YouTube",
    color: "bg-brand-green-400",
    image: "/images/portfolio/yt-hamburger.jpg",
  },
  {
    id: "5",
    title: "Why NYU? — Brand Film",
    client: "New York University",
    platform: "YouTube",
    color: "bg-brand-green-800",
    image: "/images/portfolio/yt-nyu.jpg",
  },
  {
    id: "6",
    title: "Que Taco! Menu Photography",
    client: "Food Photography",
    platform: "Photography",
    color: "bg-brand-green-600",
    image: "/images/portfolio/que-taco.jpg",
  },
  {
    id: "7",
    title: "Corporate Events",
    client: "Business Photography",
    platform: "Photography",
    color: "bg-brand-green-200",
    image: "/images/portfolio/corporate-event.jpg",
  },
  {
    id: "8",
    title: "Prodigo — Narrative Short",
    client: "Film",
    platform: "Vimeo",
    color: "bg-brand-green-900",
    image: "/images/portfolio/vimeo-prodigo.jpg",
  },
  {
    id: "9",
    title: "Deja Vu — Art Photography",
    client: "Photography",
    platform: "Art",
    color: "bg-brand-green-300",
    image: "/images/portfolio/deja-vu.jpg",
  },
  {
    id: "10",
    title: "Kevin Kenny Portraits",
    client: "Business Photography",
    platform: "Photography",
    color: "bg-brand-green-500",
    image: "/images/portfolio/portrait-kenny.jpg",
  },
  {
    id: "11",
    title: "Social Video — Deadspin, Lifehacker",
    client: "Social Video",
    platform: "Social",
    color: "bg-brand-green-700",
    image: "/images/portfolio/social-video-cover.jpg",
  },
  {
    id: "12",
    title: "Travel Photography — San Francisco",
    client: "Photography",
    platform: "Travel",
    color: "bg-brand-green-400",
    image: "/images/portfolio/travel-sf.jpg",
  },
];

const videos = [
  { type: "vimeo" as const, id: "81630828", title: "Forbidden Fruit — Short Film" },
  { type: "youtube" as const, id: "HIjX8OPuf-w", title: "The Animated History of the Hamburger" },
  { type: "youtube" as const, id: "bJOf6xosOUc", title: "Why NYU? — New York University" },
  { type: "vimeo" as const, id: "59854072", title: "Prodigo — Short Film" },
  { type: "youtube" as const, id: "mcVblksIJmk", title: "DJI Osmo Review — The Verge" },
  { type: "vimeo" as const, id: "131614677", title: "Burros — Short Film" },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding pb-8 sm:pb-10 lg:pb-12">
        <div className="container-page">
          <h1 className="text-display mb-6">Our Work</h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            Film, photography, social video, and brand content — a selection of
            projects spanning documentary, narrative, commercial, and editorial
            work.
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

      {/* Image Grid */}
      <section className="section-padding pt-0">
        <div className="container-page">
          <PortfolioGrid items={portfolioItems} />
        </div>
      </section>

      {/* Video Showcase */}
      <section className="bg-slate-50 bg-grain section-padding relative">
        <div className="container-page relative z-10">
          <SectionHeading label="Video Work" heading="Watch the reel." />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((video) => (
              <VideoEmbed
                key={video.id}
                type={video.type}
                id={video.id}
                title={video.title}
              />
            ))}
          </div>
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
