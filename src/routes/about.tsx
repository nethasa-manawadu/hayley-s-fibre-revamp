import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import heroAbout from "@/assets/hero-about.jpg";
import sustainable from "@/assets/sustainable.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Hayleys Fibre | A 146-Year Legacy in Coconut Coir" },
      {
        name: "description",
        content:
          "Discover the story, vision and sustainable approach behind Sri Lanka's most prestigious coconut fibre manufacturer.",
      },
      { property: "og:title", content: "About Hayleys Fibre" },
      {
        property: "og:description",
        content: "A 146-year legacy of craft, sustainability and Sri Lankan heritage.",
      },
      { property: "og:image", content: heroAbout },
      { name: "twitter:image", content: heroAbout },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <AboutHero />
        <Intro />
        <VisionMission />
        <Sustainable />
      </main>
      <Footer />
    </div>
  );
}

/* ---------- HERO ---------- */
function AboutHero() {
  return (
    <section className="relative min-h-[80vh] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroAbout}
          alt="Coconut palm grove at golden hour in Sri Lanka"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-primary/10" />
      </div>
      <div className="relative container-prose pb-24 pt-40 text-primary-foreground">
        <p className="eyebrow text-brass">Our story</p>
        <h1 className="mt-6 font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.02] max-w-4xl">
          Rooted in the soil of <em className="italic text-brass">Sri Lanka</em>.
        </h1>
        <p className="mt-8 max-w-xl text-lg text-primary-foreground/80 leading-relaxed">
          A house of coir founded in 1878 — and the foundation upon which the
          entire Hayleys Group was built.
        </p>
      </div>
    </section>
  );
}

/* ---------- INTRO ---------- */
function Intro() {
  return (
    <section className="py-28 md:py-40">
      <div className="container-prose grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <p className="eyebrow">A brief introduction</p>
          <div className="divider-brass mt-3" />
        </div>
        <div className="lg:col-span-8 space-y-6 text-lg text-foreground/75 leading-relaxed">
          <p className="font-serif text-3xl md:text-4xl text-primary leading-snug not-italic">
            We are the quiet craftspeople behind one of the world's most
            versatile natural materials — coconut coir.
          </p>
          <p>
            From our origins as Chas P. Hayleys & Co in 1878, we have spent
            nearly a century and a half refining a single discipline: turning
            the humble coconut husk into products of enduring quality.
          </p>
          <p>
            Today, with operations spanning Sri Lanka, India and Indonesia, our
            work touches industries as varied as horticulture, hospitality,
            home furnishing and sustainable construction — yet our values
            remain firmly local. We are, and always will be, a Sri Lankan
            house of craft.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- VISION / MISSION ---------- */
function VisionMission() {
  return (
    <section className="py-28 md:py-40 bg-surface">
      <div className="container-prose">
        <div className="max-w-2xl">
          <p className="eyebrow">Vision & Mission</p>
          <div className="divider-brass mt-3 mb-6" />
          <h2 className="font-serif text-4xl md:text-5xl text-primary leading-tight">
            A purpose <em className="italic">larger</em> than a product.
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-px bg-border/60 border border-border/60">
          <article className="bg-background p-10 md:p-14">
            <p className="font-serif text-brass text-sm tracking-widest">VISION</p>
            <h3 className="mt-6 font-serif text-3xl text-primary leading-snug">
              To be the world's most trusted name in natural coconut fibre —
              setting the standard for quality, innovation and responsibility.
            </h3>
          </article>
          <article className="bg-background p-10 md:p-14">
            <p className="font-serif text-brass text-sm tracking-widest">MISSION</p>
            <h3 className="mt-6 font-serif text-3xl text-primary leading-snug">
              To craft enduring coir products that honour the land, empower our
              communities and serve customers with uncompromising integrity.
            </h3>
          </article>
        </div>

        <div className="mt-16 grid sm:grid-cols-3 gap-10 max-w-4xl">
          {[
            { t: "Integrity", d: "In every fibre, every contract, every relationship." },
            { t: "Craft", d: "A reverence for the slow art of doing things well." },
            { t: "Stewardship", d: "Of the land, the people and the legacy entrusted to us." },
          ].map((v) => (
            <div key={v.t}>
              <h4 className="font-serif text-xl text-primary">{v.t}</h4>
              <p className="mt-2 text-sm text-foreground/65 leading-relaxed">
                {v.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SUSTAINABLE APPROACH ---------- */
function Sustainable() {
  const pillars = [
    { t: "Zero-waste sourcing", d: "Coir is reclaimed from coconut husks that would otherwise be discarded — a circular material by nature." },
    { t: "Renewable energy", d: "Our facilities increasingly run on biomass and solar — reducing emissions year on year." },
    { t: "Water stewardship", d: "Closed-loop water systems and rainwater harvesting protect the watersheds we work in." },
    { t: "Community livelihoods", d: "Thousands of families across rural Sri Lanka depend on our supply chain — we treat that responsibility with great care." },
  ];
  return (
    <section className="py-28 md:py-40">
      <div className="container-prose grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <div className="lg:sticky lg:top-32">
          <p className="eyebrow">Sustainable approach</p>
          <div className="divider-brass mt-3 mb-6" />
          <h2 className="font-serif text-4xl md:text-5xl text-primary leading-tight">
            What we take from the land, we <em className="italic">return</em>.
          </h2>
          <p className="mt-6 text-foreground/70 leading-relaxed">
            Our craft begins with a by-product of nature and ends with materials
            that biodegrade safely back into the earth. Sustainability is not a
            programme at Hayleys Fibre — it is the very logic of our business.
          </p>
          <div className="mt-10 overflow-hidden rounded-sm shadow-elegant">
            <img
              src={sustainable}
              alt="Aerial view of a Sri Lankan coconut plantation at sunrise"
              width={1400}
              height={1000}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="space-y-10">
          {pillars.map((p, i) => (
            <article key={p.t} className="border-t border-border pt-8">
              <div className="flex items-baseline gap-6">
                <span className="font-serif text-brass text-sm tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl text-primary">
                    {p.t}
                  </h3>
                  <p className="mt-3 text-foreground/70 leading-relaxed">
                    {p.d}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
