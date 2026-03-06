import { SectionHeading } from "@/components/marketing/section-heading";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const teamMembers = [
  { name: "Jorge Corona", role: "Founder & Creative Director", bio: "15 years of brand storytelling, from Madison Ave agencies to building Anaroc from a Bushwick apartment." },
  { name: "Maya Chen", role: "Head of Content", bio: "Former social lead at a top NYC restaurant group. Knows what makes the timeline stop." },
  { name: "Darius Cole", role: "Videographer & Editor", bio: "Shoots on film and digital. Believes every brand has a visual language — he finds it." },
  { name: "Priya Sharma", role: "Strategy & Analytics", bio: "Data nerd with a creative streak. Turns metrics into stories and stories into growth." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-page">
          <h1 className="text-display mb-6">The Story</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Anaroc started in 2019 with a simple bet: that small businesses
                deserve the same caliber of social media content as the big
                brands — without the big-brand price tag or the big-brand
                attitude.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                We&apos;re a tight crew of strategists, writers, designers, and
                filmmakers based in New York City. We make content that feels
                real, looks incredible, and actually drives results.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                No jargon. No fluff. No 47-slide decks. Just great work, honest
                conversations, and a genuine obsession with helping our clients
                win.
              </p>
            </div>
            {/* Placeholder image */}
            <div className="bg-brand-green-100 rounded-lg aspect-[4/3] flex items-center justify-center">
              {/* ILLUSTRATION: hand-drawn team illustration or photo placeholder */}
              <p className="text-brand-green-400 text-label">Team Photo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission statement — full-bleed green */}
      <section className="bg-brand-green-500 text-white section-padding">
        <div className="container-page">
          <h2 className="text-h1 text-white max-w-3xl leading-tight">
            We believe every small business has a story worth telling
            <span className="text-accent-yellow-400">.</span> We just make sure
            the algorithm agrees.
          </h2>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container-page">
          <SectionHeading label="The Team" heading="The people behind the posts." />

          {/* TODO: sanityFetch(queries.teamMembers) — replace placeholder data */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name}>
                {/* Placeholder photo */}
                <div className="bg-slate-100 rounded-lg aspect-[3/4] mb-4 flex items-center justify-center">
                  <p className="text-slate-300 text-label">Photo</p>
                </div>
                <h3 className="font-heading text-lg font-bold">{member.name}</h3>
                <p className="text-sm text-brand-green-600 font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NYC Roots */}
      <section className="bg-dark text-white section-padding">
        <div className="container-page">
          <h2 className="text-h1 text-white mb-6">
            Born in New York<span className="text-accent-yellow-400">.</span>{" "}
            Obsessed with New York<span className="text-accent-yellow-400">.</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-lg leading-relaxed mb-10">
            We know this city because we live it — the bodegas, the subway ads,
            the way a storefront on a side street can become the most
            Instagrammed spot in the borough. NYC is in our content DNA.
          </p>
          <Link href="/contact">
            <Button variant="cta" size="lg">
              Work With Us
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
