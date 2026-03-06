import Image from "next/image";
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactDetails = [
  { icon: Mail, label: "Email", value: "hello@anaroc.com" },
  { icon: Phone, label: "Phone", value: "(212) 555-0147" },
  { icon: MapPin, label: "Location", value: "Brooklyn, New York" },
];

const socialLinks = [
  { href: "https://instagram.com", label: "Instagram", icon: Instagram },
  { href: "https://linkedin.com", label: "LinkedIn", icon: Linkedin },
  { href: "https://twitter.com", label: "Twitter", icon: Twitter },
];

export default function ContactPage() {
  return (
    <>
      <section className="section-padding">
        <div className="container-page">
          <h1 className="text-display mb-6">
            Let&apos;s Make Something<span className="text-accent-yellow-400">.</span>
          </h1>
          <div className="flex items-center gap-6 mb-16">
            <p className="text-lg text-slate-500 max-w-xl">
              We don&apos;t bite. We just make really good content.
            </p>
            <Image
              src="/images/home/welcome.jpg"
              alt="Welcome!"
              width={120}
              height={124}
              className="hidden sm:block rounded-lg"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact details */}
            <div>
              <h2 className="font-heading text-2xl font-bold mb-8">
                Get in touch
              </h2>
              <div className="space-y-6">
                {contactDetails.map((detail) => (
                  <div key={detail.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-green-50 flex items-center justify-center shrink-0">
                      <detail.icon className="w-5 h-5 text-brand-green-600" />
                    </div>
                    <div>
                      <p className="text-label text-slate-400 mb-1">
                        {detail.label}
                      </p>
                      <p className="text-lg font-medium">{detail.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div className="mt-12">
                <h3 className="text-label text-slate-400 mb-4">Follow us</h3>
                <div className="flex items-center gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-brand-green-50 hover:text-brand-green-600 transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA card */}
            <div className="bg-brand-green-500 rounded-2xl p-10 sm:p-12 text-white flex flex-col justify-center">
              <h2 className="font-heading text-3xl font-bold mb-4">
                Ready to start?
              </h2>
              <p className="text-white/80 leading-relaxed mb-8">
                Drop us an email and tell us about your brand. We&apos;ll get
                back to you within 24 hours with ideas — not a sales pitch.
              </p>
              <a href="mailto:hello@anaroc.com">
                <Button variant="cta" size="lg">
                  Email Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
