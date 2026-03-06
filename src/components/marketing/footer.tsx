import Link from "next/link";
import { Instagram, Linkedin, Twitter } from "lucide-react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Work" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/terms", label: "Terms of Service" },
  { href: "/privacy", label: "Privacy Policy" },
];

const socialLinks = [
  { href: "https://instagram.com", label: "Instagram", icon: Instagram },
  { href: "https://linkedin.com", label: "LinkedIn", icon: Linkedin },
  { href: "https://twitter.com", label: "Twitter", icon: Twitter },
];

export function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container-page py-16 sm:py-20">
        {/* Oversized wordmark */}
        <p className="font-heading text-5xl sm:text-7xl font-black uppercase tracking-tight text-white/10 mb-12">
          Anaroc<span className="text-accent-yellow-400">.</span>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* About blurb */}
          <div className="lg:col-span-2">
            <p className="text-slate-400 leading-relaxed max-w-md">
              Anaroc is a New York City social media content agency that helps
              small and mid-size businesses create scroll-stopping content and
              grow their brands.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-label text-slate-500 mb-4">Pages</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Social */}
          <div>
            <h4 className="text-label text-slate-500 mb-4">Connect</h4>
            <p className="text-slate-300 text-sm mb-4">hello@anaroc.com</p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Anaroc. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {legalLinks.map((link, i) => (
              <span key={link.href} className="flex items-center gap-4">
                <Link
                  href={link.href}
                  className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
                >
                  {link.label}
                </Link>
                {i < legalLinks.length - 1 && (
                  <span className="text-accent-yellow-400" aria-hidden="true">
                    &middot;
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
