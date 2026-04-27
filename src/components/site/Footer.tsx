import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground mt-32">
      <div className="container-prose py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-3xl">Hayleys</span>
            <span className="font-serif text-3xl text-brass italic">Fibre</span>
          </div>
          <p className="mt-4 max-w-sm text-primary-foreground/70 leading-relaxed">
            Sri Lanka's most prestigious manufacturer and exporter of coconut
            fibre products. A 146-year legacy of craft, quality and care.
          </p>
        </div>

        <div>
          <p className="eyebrow text-brass mb-4">Explore</p>
          <ul className="space-y-2 text-primary-foreground/75">
            <li><Link to="/" className="hover:text-brass transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-brass transition-colors">About</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-brass mb-4">Contact</p>
          <ul className="space-y-2 text-primary-foreground/75 text-sm">
            <li>Colombo, Sri Lanka</li>
            <li>+94 11 262 8551</li>
            <li>info@hayleysfibre.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-prose py-6 flex flex-col md:flex-row justify-between gap-2 text-xs text-primary-foreground/55">
          <p>© {new Date().getFullYear()} Hayleys Fibre PLC. All rights reserved.</p>
          <p>Established 1878 · Sri Lanka</p>
        </div>
      </div>
    </footer>
  );
}
