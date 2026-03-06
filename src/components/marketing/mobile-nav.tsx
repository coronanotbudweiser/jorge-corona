"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
}

export function MobileNav({ open, onClose, links }: MobileNavProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] transition-all duration-300",
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      )}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-dark/95"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Content */}
      <div
        className={cn(
          "relative flex flex-col items-center justify-center min-h-screen transition-transform duration-300",
          open ? "translate-y-0" : "-translate-y-8"
        )}
      >
        {/* Close */}
        <button
          className="absolute top-5 right-5 p-2 text-white"
          onClick={onClose}
          aria-label="Close menu"
        >
          <X className="w-7 h-7" />
        </button>

        <nav className="flex flex-col items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="font-heading text-4xl font-bold text-white uppercase tracking-tight hover:text-accent-yellow-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" onClick={onClose} className="mt-4">
            <Button variant="cta" size="lg">
              Get Started
            </Button>
          </Link>
        </nav>
      </div>
    </div>
  );
}
