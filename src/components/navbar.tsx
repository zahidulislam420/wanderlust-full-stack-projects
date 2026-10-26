import Image from "next/image";
import Link from "next/link";
import { User } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destinations" },
  { label: "My Bookings", href: "/bookings" },
  { label: "Admin", href: "/admin" },
];

const authLinks = [
  { label: "Profile", href: "/profile" },
  { label: "Login", href: "/login" },
  { label: "Sign Up", href: "/signup" },
];

function Navbar() {
  return (
    <header className="border-b border-border bg-background">
      <nav className="relative mx-auto flex h-12 max-w-7xl items-center justify-between px-4">
        <ul className="hidden items-center gap-5 md:flex">
          {navLinks.map((link, index) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`text-sm transition-colors hover:text-brand ${
                  index === 0 ? "text-brand" : "text-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/"
          aria-label="Wanderlust home"
          className="absolute left-1/2 -translate-x-1/2"
        >
          <Image
            src="/images/Wanderlast.png"
            alt="Wanderlust"
            width={1456}
            height={230}
            priority
            className="h-4 w-auto"
          />
        </Link>

        <ul className="hidden items-center gap-5 md:flex">
          {authLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="flex items-center gap-1 text-sm text-foreground/80 transition-colors hover:text-brand"
              >
                {link.label === "Profile" && <User className="size-3.5" />}
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export { Navbar };
