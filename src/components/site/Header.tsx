import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="container-prose flex items-center justify-between h-20">
        <Link to="/" className="flex items-baseline gap-2 group">
          <span className="font-serif text-2xl tracking-tight text-foreground">
            Hayleys
          </span>
          <span className="font-serif text-2xl tracking-tight text-brass italic">
            Fibre
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10 text-sm">
          <Link
            to="/"
            className="text-foreground/75 hover:text-foreground transition-colors"
            activeProps={{ className: "text-foreground font-medium" }}
            activeOptions={{ exact: true }}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-foreground/75 hover:text-foreground transition-colors"
            activeProps={{ className: "text-foreground font-medium" }}
          >
            About
          </Link>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/80 px-5 py-2 text-foreground hover:bg-foreground hover:text-background transition-colors"
          >
            Inquire
          </a>
        </nav>
      </div>
    </header>
  );
}
