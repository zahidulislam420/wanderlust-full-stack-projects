"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destinations" },
  { label: "My Bookings", href: "/bookings" },
  { label: "My Profile", href: "/profile" },
];

const supportLinks = [
  { label: "Help Center", href: "/help" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

const socials = [
  {
    label: "X",
    href: "#",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    label: "LinkedIn",
    href: "#",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z",
  },
  {
    label: "Instagram",
    href: "#",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z",
  },
];

function Footer() {
  return (
    <footer className="bg-[#0a0a0a] px-4 pt-14 pb-6 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="text-4xl font-bold tracking-tight md:text-5xl">
          Wanderlust
        </p>
        <p className="mt-3 text-sm text-neutral-400">
          Your gateway to extraordinary travel experiences around the world.
        </p>

        <div className="mt-12 grid gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase">
              Newsletter
            </h3>
            <p className="mt-3 text-xs text-neutral-400">
              Subscribe for exclusive travel deals and inspiration.
            </p>
            <form
              className="relative mt-4 max-w-[260px]"
              onSubmit={(event) => {
                event.preventDefault();
                event.currentTarget.reset();
              }}
            >
              <Input
                type="email"
                required
                placeholder="Enter email"
                aria-label="Email address"
                className="h-10 rounded-md border-white/15 bg-white/5 pr-11 text-sm text-white placeholder:text-neutral-500 focus-visible:border-white/40 focus-visible:ring-white/20"
              />
              <Button
                type="submit"
                variant="ghost"
                size="icon-sm"
                aria-label="Subscribe"
                className="absolute top-1/2 right-1 -translate-y-1/2 text-white hover:bg-white/10 hover:text-white"
              >
                <ArrowUpRight />
              </Button>
            </form>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase">
              Support
            </h3>
            <ul className="mt-4 space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="tel:7869016522"
                  className="text-sm text-neutral-400 transition-colors hover:text-white"
                >
                  786 901 6522
                </a>
              </li>
              <li>
                <a
                  href="mailto:Info@wanderland.com"
                  className="text-sm text-neutral-400 transition-colors hover:text-white"
                >
                  Info@wanderland.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex items-center justify-between border-t border-white/10 pt-6">
          <p className="text-xs text-neutral-500">
            © 2025 Wanderlust. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="text-neutral-400 transition-colors hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                  className="size-4"
                >
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
