import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/marketing/hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { PortfolioGrid } from "@/components/marketing/portfolio-grid";
import { VideoEmbed } from "@/components/marketing/video-embed";
import { Button } from "@/components/ui/button";
import { Lightbulb, Camera, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Content Strategy",
    description:
      "We audit your brand, study your audience, and build a content roadmap that turns followers into customers.",
  },
  {
    icon: Camera,
    title: "Production",
    description:
      "Photo, video, motion graphics — whatever the platform demands. Shot and edited by people who actually understand the algorithm.",
  },
  {
    icon: BarChart3,
    title: "Management",
    description:
      "Posting, scheduling, community management, and reporting. We handle the daily grind so you can focus on running your business.",
  },
];

const featuredWork = [
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
    title: "The Animated History of the Hamburger",
    client: "Documentary",
    platform: "YouTube",
    color: "bg-brand-green-600",
    image: "/images/portfolio/yt-hamburger.jpg",
  },
  {
    id: "3",
    title: "Collective Dance Academy",
    client: "Photography",
    platform: "Art",
    color: "bg-brand-green-800",
    image: "/images/portfolio/dance-academy.jpg",
  },
  {
    id: "4",
    title: "Why NYU? — Brand Film",
    client: "New York University",
    platform: "YouTube",
    color: "bg-brand-green-400",
    image: "/images/portfolio/yt-nyu.jpg",
  },
  {
    id: "5",
    title: "Corporate Events",
    client: "Business Photography",
    platform: "Photography",
    color: "bg-brand-green-700",
    image: "/images/portfolio/corporate-event.jpg",
  },
  {
    id: "6",
    title: "Que Taco! Menu Photography",
    client: "Food Photography",
    platform: "Photography",
    color: "bg-brand-green-500",
    image: "/images/portfolio/que-taco.jpg",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── 1. Hero ── */}
      <Hero
        headline="Social media that actually works."
        subheadline="We're the NYC agency your competitors wish they hired first."
        ctaText="Start a Project"
        ctaHref="/contact"
        secondaryCta={{ text: "See the Work", href: "/portfolio" }}
        image="/images/about/jorge-illustrated.jpg"
        imageAlt="Jorge Corona — illustrated portrait"
      />

      {/* ── 2. Services ── */}
      <section className="relative bg-slate-50 bg-grain section-padding">
        <div className="container-page relative z-10">
          <SectionHeading label="What We Do" heading="Everything your feed needs." />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-lg p-8 border-l-4 border-brand-green-500 shadow-sm"
              >
                {/* ILLUSTRATION: hand-drawn icons for each service — replace Lucide icons later */}
                <service.icon className="w-8 h-8 text-brand-green-500 mb-4" />
                <h3 className="font-heading text-xl font-bold mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Featured Work ── */}
      <section className="section-padding">
        <div className="container-page">
          <SectionHeading label="Selected Work" heading="Proof, not promises." />

          <PortfolioGrid items={featuredWork} />

          {/* Video showcase */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <VideoEmbed
              type="vimeo"
              id="81630828"
              title="Forbidden Fruit — Short Film"
            />
            <VideoEmbed
              type="youtube"
              id="HIjX8OPuf-w"
              title="The Animated History of the Hamburger"
            />
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-brand-green-600 font-semibold uppercase tracking-wider text-sm hover:text-brand-green-700 transition-colors"
            >
              View All Work
              <span aria-hidden="true" className="text-lg">
                &rarr;
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. Why Us ── */}
      <section className="bg-dark text-white section-padding">
        <div className="container-page">
          <SectionHeading
            label="Why Us"
            heading="Why NYC businesses choose us."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
            <div>
              <p className="text-5xl font-heading font-black text-brand-green-400 mb-3">
                150+
              </p>
              <h3 className="text-lg font-bold mb-2">Projects Delivered</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                For restaurants, retail, fitness studios, law firms, and every
                type of NYC hustle in between.
              </p>
            </div>
            <div>
              <p className="text-5xl font-heading font-black text-brand-green-400 mb-3">
                3s
              </p>
              <h3 className="text-lg font-bold mb-2">Attention Span</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Your audience has a 3-second attention span.{" "}
                <span className="highlight-yellow text-dark font-semibold">
                  We make every one count.
                </span>
              </p>
            </div>
            <div>
              <p className="text-5xl font-heading font-black text-brand-green-400 mb-3">
                0
              </p>
              <h3 className="text-lg font-bold mb-2">Nephews With Phones</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Because your nephew with a phone isn&apos;t a content strategy.
                We bring real craft and real results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. CTA Banner ── */}
      <section className="bg-brand-green-500 text-white section-padding relative overflow-hidden">
        <div className="container-page text-center relative z-10">
          <h2 className="text-h1 text-white mb-6">
            Ready to stop blending in?
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto">
            Let&apos;s create content that makes people stop scrolling and start
            paying attention.
          </p>
          <Link href="/contact">
            <Button variant="cta" size="lg">
              Let&apos;s Talk
            </Button>
          </Link>
        </div>
        {/* Decorative background image */}
        <Image
          src="/images/home/header-film.jpg"
          alt=""
          fill
          className="object-cover opacity-10"
          aria-hidden="true"
        />
      </section>
    </>
  );
}
