import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import heroFibre from "@/assets/hero-fibre.jpg";
import whoWeAre from "@/assets/who-we-are.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hayleys Fibre — Heritage Coconut Fibre Manufacturer, Sri Lanka" },
      {
        name: "description",
        content:
          "Since 1878, Hayleys Fibre has been Sri Lanka's leading manufacturer and exporter of premium coconut coir products. Discover our craft, certifications and sustainable approach.",
      },
      { property: "og:title", content: "Hayleys Fibre — Heritage Coconut Fibre" },
      {
        property: "og:description",
        content: "146 years of craft. The world's most trusted source of coconut coir products.",
      },
      { property: "og:image", content: heroFibre },
      { name: "twitter:image", content: heroFibre },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <WhoWeAre />
        <WhatWeDo />
        <UniqueFeatures />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroFibre}
          alt="Close-up of natural golden coconut coir fibres"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
      </div>

      <div className="relative container-prose pb-24 pt-40 text-primary-foreground">
        <p className="eyebrow text-brass">Since 1878 · Sri Lanka</p>
        <h1 className="mt-6 font-serif text-5xl md:text-7xl lg:text-7xl leading-[1.02] max-w-4xl">
          A heritage woven from <em className="italic text-brass">coconut</em> and craft.
        </h1>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#who"
            className="inline-flex items-center gap-3 rounded-full bg-brass text-brass-foreground px-7 py-3.5 text-sm font-medium hover:bg-brass/90 transition-colors shadow-soft"
          >
            Discover our story
            <span aria-hidden>→</span>
          </a>
          <a
            href="#products"
            className="inline-flex items-center gap-3 rounded-full border border-primary-foreground/30 px-7 py-3.5 text-sm text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
          >
            Our products
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- WHO WE ARE ---------- */
function WhoWeAre() {
  return (
    <section id="who" className="py-28 md:py-40">
      <div className="container-prose grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-elegant">
          <img
            src={whoWeAre}
            alt="Artisan hands holding natural coconut coir"
            width={1024}
            height={1280}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute -bottom-px -right-px bg-background px-6 py-4">
            <p className="font-serif text-3xl text-primary">1878</p>
            <p className="eyebrow text-brass mt-1">Est.</p>
          </div>
        </div>

        <div>
          <p className="eyebrow">Who we are</p>
          <div className="divider-brass mt-3 mb-6" />
          <h2 className="font-serif text-4xl md:text-5xl leading-tight text-primary">
            A 148-year story, <em className="italic">distilled</em>.
          </h2>
          <div className="mt-8 space-y-5 text-foreground/75 leading-relaxed">
            <p>
              Incorporated in 1878 as Chas P. Hayleys & Co, we stand today as
              Sri Lanka's most prestigious manufacturer and exporter of coconut
              fibre products — the very origin of the Hayleys Group itself.
            </p>
            <p>
              From a single-product trading house, we have grown into a global
              custodian of coir: ten production facilities across Sri Lanka,
              India and Indonesia, a portfolio of more than four hundred items,
              and partnerships with the world's leading horticulturists,
              manufacturers and lifestyle brands.
            </p>
            <p>
              What has not changed in 146 years is our craft — patient,
              considered, and rooted in the land that grows our raw material.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- WHAT WE DO ---------- */
function WhatWeDo() {
  const items = [
    {
      n: "01",
      title: "Twisted & Curled Fibre",
      copy: "The structural backbone of mattresses, upholstery and erosion control — engineered for resilience and longevity.",
    },
    {
      n: "02",
      title: "Coco Peat & Growing Media",
      copy: "Premium horticultural substrates trusted by commercial growers from the Netherlands to Japan.",
    },
    {
      n: "03",
      title: "Brushware & Matting",
      copy: "Hand-finished brushes, doormats and floor coverings designed for the world's most discerning homes.",
    },
    {
      n: "04",
      title: "Industrial Coir Solutions",
      copy: "Geo-textiles, insulation and bespoke fibre formulations engineered to specification.",
    },
  ];
  return (
    <section id="products" className="py-28 md:py-40 bg-surface">
      <div className="container-prose">
        <div className="max-w-3xl">
          <p className="eyebrow">What we do</p>
          <div className="divider-brass mt-3 mb-6" />
          <h2 className="font-serif text-4xl md:text-5xl text-primary leading-tight">
            Four hundred products. <em className="italic">One material.</em>
          </h2>
          <p className="mt-6 text-foreground/70 leading-relaxed">
            Every fibre we work with comes from a single, humble source — the
            husk of the coconut. From it, we craft solutions for industries that
            demand both performance and provenance.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-px bg-border/60 border border-border/60">
          {items.map((it) => (
            <article
              key={it.n}
              className="group bg-background p-10 md:p-12 transition-colors hover:bg-card"
            >
              <div className="flex items-start justify-between">
                <span className="font-serif text-brass text-sm tracking-widest">
                  {it.n}
                </span>
                <span
                  aria-hidden
                  className="text-foreground/30 group-hover:text-brass group-hover:translate-x-1 transition-all"
                >
                  →
                </span>
              </div>
              <h3 className="mt-8 font-serif text-2xl md:text-3xl text-primary">
                {it.title}
              </h3>
              <p className="mt-4 text-foreground/65 leading-relaxed">
                {it.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- UNIQUE FEATURES ---------- */
function UniqueFeatures() {
  const features = [
    { t: "Naturally Renewable", d: "A by-product of the coconut harvest — nothing felled, nothing wasted." },
    { t: "Exceptional Durability", d: "Resistant to salt water, microbial growth and mechanical wear for decades." },
    { t: "Moisture Intelligence", d: "Holds up to nine times its weight in water while remaining structurally aerated." },
    { t: "Biodegradable", d: "Returns to the soil at end of life, leaving no microplastic legacy." },
    { t: "Thermally Insulating", d: "A natural insulator used in everything from mattresses to building panels." },
    { t: "Hypo-allergenic", d: "Naturally inhospitable to dust mites, mould and bacteria." },
  ];
  return (
    <section className="py-28 md:py-40">
      <div className="container-prose">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="eyebrow">The material</p>
            <div className="divider-brass mt-3 mb-6" />
            <h2 className="font-serif text-4xl md:text-5xl text-primary leading-tight">
              Why coconut fibre is <em className="italic">extraordinary</em>.
            </h2>
            <p className="mt-6 text-foreground/70 leading-relaxed">
              Few natural materials offer the rare combination of strength,
              softness and sustainability found in coir. These are the qualities
              that have shaped our craft for nearly a century and a half.
            </p>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-x-10 gap-y-10">
            {features.map((f, i) => (
              <div key={f.t} className="border-t border-border pt-6">
                <p className="font-serif text-brass text-xs tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-serif text-xl text-primary">{f.t}</h3>
                <p className="mt-2 text-sm text-foreground/65 leading-relaxed">
                  {f.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- CERTIFICATIONS ---------- */
function Certifications() {
  const certs = [
    "ISO 9001",
    "ISO 14001",
    "FSC® Certified",
    "GOTS",
    "OEKO-TEX®",
    "Sedex SMETA",
    "Rainforest Alliance",
    "GRS",
  ];
  return (
    <section className="py-28 md:py-40 bg-primary text-primary-foreground">
      <div className="container-prose">
        <div className="max-w-3xl">
          <p className="eyebrow text-brass">Certifications</p>
          <div className="divider-brass mt-3 mb-6" />
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            Held to the world's <em className="italic text-brass">highest standards</em>.
          </h2>
          <p className="mt-6 text-primary-foreground/70 leading-relaxed">
            Every facility, every process and every fibre we ship is governed by
            international quality, environmental and ethical standards — because
            heritage is only as strong as the systems that protect it.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-primary-foreground/10 border border-primary-foreground/10">
          {certs.map((c) => (
            <div
              key={c}
              className="bg-primary px-6 py-10 text-center font-serif text-lg text-primary-foreground/85 hover:text-brass transition-colors"
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}