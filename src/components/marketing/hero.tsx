import Link from "next/link";
import { Button } from "@/components/ui/button";

interface HeroProps {
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaHref: string;
  secondaryCta?: { text: string; href: string };
}

export function Hero({
  headline,
  subheadline,
  ctaText,
  ctaHref,
  secondaryCta,
}: HeroProps) {
  return (
    <section className="relative section-padding overflow-hidden">
      <div className="container-page">
        <div className="max-w-4xl">
          <h1 className="text-display mb-6">{headline}</h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed">
            {subheadline}
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Link href={ctaHref}>
              <Button variant="cta" size="lg">
                {ctaText}
              </Button>
            </Link>
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center gap-2 text-brand-green-600 font-semibold uppercase tracking-wider text-sm hover:text-brand-green-700 transition-colors py-3"
              >
                {secondaryCta.text}
                <span aria-hidden="true" className="text-lg">
                  &rarr;
                </span>
              </Link>
            )}
          </div>
          {/* ILLUSTRATION: hand-drawn arrow or scribble accent near the CTA */}
        </div>
      </div>
    </section>
  );
}
