import Image from "next/image";
import { SectionHeading } from "@/components/marketing/section-heading";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const teamMembers = [
  { name: "Jorge Corona", role: "Founder & Creative Director", bio: "Filmmaker, writer, illustrator, animator, and photographer. Trained in comedy improv at UCB. Work has appeared in VICE, Vogue, The Verge, and premiered at SXSW and Austin Film Festival." },
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
            <div className="relative">
              <Image
                src="/images/about/jorge-portrait.jpg"
                alt="Jorge Corona — Founder of Anaroc"
                width={570}
                height={570}
                className="rounded-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Illustrated personality section */}
      <section className="bg-slate-50 bg-grain section-padding relative">
        <div className="container-page relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <Image
              src="/images/about/jorge-illustrated.jpg"
              alt="Jorge Corona — illustrated"
              width={351}
              height={647}
              className="rounded-lg mx-auto"
            />
          </div>
          <div>
            <p className="text-label text-slate-500 mb-3">The Founder</p>
            <h2 className="text-h2 mb-6">
              Filmmaker. Writer. Improviser.
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Jorge Corona is a filmmaker, writer, illustrator, animator, and
              photographer specializing in comedy, documentary, and entertainment
              storytelling. His short film <em>Love Me Tenderizer</em> premiered
              at the Academy Award-qualifying Austin Film Festival.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              His client portfolio includes The X Factor, VICE Media, The
              Huffington Post, New York Magazine, The Verge, Vogue, and various
              academic institutions.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Fluent in English, Spanish, and French. Born and raised in Mexico.
              Trained in comedy improv at Upright Citizens Brigade.
            </p>
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
            {teamMembers.map((member, i) => (
              <div key={member.name}>
                {i === 0 ? (
                  <div className="relative rounded-lg aspect-[3/4] mb-4 overflow-hidden">
                    <Image
                      src="/images/about/jorge-portrait.jpg"
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="bg-slate-100 rounded-lg aspect-[3/4] mb-4 flex items-center justify-center">
                    <p className="text-slate-300 text-label">Photo</p>
                  </div>
                )}
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
      <section className="bg-dark text-white section-padding relative overflow-hidden">
        <Image
          src="/images/portfolio/travel-sf.jpg"
          alt=""
          fill
          className="object-cover opacity-15"
          aria-hidden="true"
        />
        <div className="container-page relative z-10">
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
