import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import logoAsset from "@/assets/proptech-ghana-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PropTech Ghana — AI Automation for Ghanaian Businesses" },
      {
        name: "description",
        content:
          "PropTech Ghana builds AI-powered systems that save Ghanaian businesses hours every week — automated sales, support, and operations done for you.",
      },
      { property: "og:title", content: "PropTech Ghana — AI Automation Agency" },
      {
        property: "og:description",
        content:
          "AI systems that handle sales, support, and operations for businesses in Ghana. Book a free strategy call.",
      },
      { property: "og:image", content: logoAsset.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: logoAsset.url },
      { rel: "canonical", href: "/" } as never,
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&display=swap",
      },
      { rel: "icon", href: logoAsset.url },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Logos />
        <Services />
        <Process />
        <Results />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

/* ───────────────────────── Nav ───────────────────────── */

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2.5">
          <img src={logoAsset.url} alt="PropTech Ghana" className="h-9 w-9 object-contain" />
          <span className="font-display text-xl text-primary">
            PropTech <span className="text-accent">Ghana</span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#services" className="transition hover:text-foreground">Services</a>
          <a href="#process" className="transition hover:text-foreground">Process</a>
          <a href="#results" className="transition hover:text-foreground">Results</a>
          <a href="#faq" className="transition hover:text-foreground">FAQ</a>
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
        >
          Book a call
        </a>
      </div>
    </header>
  );
}

/* ───────────────────────── Hero ───────────────────────── */

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute right-0 top-40 h-[400px] w-[400px] rounded-full bg-[oklch(0.72_0.13_75/0.12)] blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-24 pt-24 md:pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            AI automation, built in Ghana
          </div>

          <h1 className="font-display text-5xl leading-[1.05] text-primary md:text-7xl">
            AI systems that run
            <br />
            <span className="italic text-accent">your business</span> while you sleep.
          </h1>

          <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            We build custom AI agents and automations for Ghanaian businesses — handling
            sales follow-ups, customer support, and back-office work, 24/7.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 sm:w-auto"
            >
              Book a free strategy call
              <span className="transition group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#services"
              className="inline-flex w-full items-center justify-center rounded-full border border-border bg-card px-7 py-3.5 text-sm font-medium text-foreground transition hover:bg-secondary sm:w-auto"
            >
              See what we build
            </a>
          </div>

          <p className="mt-5 text-xs text-muted-foreground">
            30-minute call · No obligation · Tailored to your business
          </p>
        </div>

        {/* Hero stat strip */}
        <div className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
          {[
            { k: "20+", v: "Hours saved / week" },
            { k: "24/7", v: "Always-on AI agents" },
            { k: "3×", v: "Faster lead response" },
            { k: "100%", v: "Built for Ghana 🇬🇭" },
          ].map((s) => (
            <div key={s.v} className="bg-card px-6 py-7 text-center">
              <div className="font-display text-3xl text-primary">{s.k}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Logos / Trust ───────────────────────── */

function Logos() {
  const industries = [
    "Real Estate",
    "Hospitality",
    "Fintech",
    "Logistics",
    "E-commerce",
    "Healthcare",
  ];
  return (
    <section className="border-y border-border bg-secondary/40 py-10">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Trusted across industries in Ghana
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm text-muted-foreground">
          {industries.map((i) => (
            <span key={i} className="font-display text-xl text-primary/70">
              {i}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Services ───────────────────────── */

const services = [
  {
    n: "01",
    title: "AI Sales Agents",
    body: "Voice and chat agents that qualify leads, answer questions, and book meetings into your calendar — in English, Twi, or Pidgin.",
  },
  {
    n: "02",
    title: "Customer Support Automation",
    body: "WhatsApp, Instagram, and website bots that resolve 70%+ of repetitive questions and hand off cleanly to your team.",
  },
  {
    n: "03",
    title: "Workflow & Back-office",
    body: "Automate invoicing, reporting, onboarding, and document handling. Connect Sheets, Mailgun, MoMo, and the tools you already use.",
  },
  {
    n: "04",
    title: "Custom AI Tools",
    body: "Internal dashboards and AI assistants tailored to your team — trained on your data, your processes, your way of working.",
  },
];

function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.2em] text-accent">Services</div>
          <h2 className="mt-3 font-display text-4xl text-primary md:text-5xl">
            Done-for-you AI, <span className="italic">end to end.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            We design, build, and maintain the systems. You keep your team focused on the
            work that actually moves the business forward.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.n}
              className="group relative bg-card p-8 transition hover:bg-secondary/60 md:p-10"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-display text-2xl text-accent">{s.n}</span>
                <h3 className="font-display text-2xl text-primary">{s.title}</h3>
              </div>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
              <div className="mt-6 h-px w-10 bg-accent/60 transition-all group-hover:w-20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Process ───────────────────────── */

const steps = [
  {
    t: "Discover",
    d: "A 30-minute call to map your workflows and find the highest-leverage automation opportunities.",
  },
  {
    t: "Design",
    d: "We scope a clear plan — what gets built, expected impact, and a fixed timeline. No surprises.",
  },
  {
    t: "Build",
    d: "Most systems ship in 2–4 weeks. We integrate with the tools you already use.",
  },
  {
    t: "Optimize",
    d: "We monitor performance and refine continuously so the system keeps getting smarter.",
  },
];

function Process() {
  return (
    <section id="process" className="bg-primary py-24 text-primary-foreground md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.2em] text-[oklch(0.72_0.13_75)]">
            Process
          </div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">
            From idea to live system in <span className="italic">weeks, not months.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.t} className="relative">
              <div className="font-display text-5xl text-[oklch(0.72_0.13_75)]">
                0{i + 1}
              </div>
              <h3 className="mt-4 font-display text-2xl">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Results / Testimonial ───────────────────────── */

function Results() {
  return (
    <section id="results" className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="text-xs uppercase tracking-[0.2em] text-accent">Why teams choose us</div>
        <blockquote className="mt-6 font-display text-3xl leading-tight text-primary md:text-5xl">
          “We replaced 30 hours a week of manual follow-ups with an AI agent that never
          sleeps. <span className="italic text-accent">Booked revenue doubled in 60 days.</span>”
        </blockquote>
        <div className="mt-8 text-sm text-muted-foreground">
          — Operations Lead, Accra-based real estate firm
        </div>

        <div className="mx-auto mt-16 grid max-w-3xl gap-6 md:grid-cols-3">
          {[
            { k: "Local-first", v: "Built for Ghanaian businesses, channels, and payment rails." },
            { k: "Fixed scope", v: "Clear deliverables and timelines. No runaway invoices." },
            { k: "We maintain it", v: "Monitoring and improvements included after launch." },
          ].map((b) => (
            <div key={b.k} className="rounded-xl border border-border bg-card p-6 text-left">
              <div className="font-display text-lg text-primary">{b.k}</div>
              <p className="mt-2 text-sm text-muted-foreground">{b.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── FAQ ───────────────────────── */

const faqs = [
  {
    q: "How long does a project take?",
    a: "Most AI agents and automations go live in 2–4 weeks. Larger custom builds take 6–8 weeks. We agree timelines up front.",
  },
  {
    q: "What does it cost?",
    a: "Projects start from a fixed scoping fee. After the strategy call, we send a clear proposal with deliverables and pricing — no surprises.",
  },
  {
    q: "Do you work with non-tech businesses?",
    a: "Yes. Most of our clients are not technical. We handle the build, integration, and training so your team can simply use the system.",
  },
  {
    q: "Which tools do you integrate with?",
    a: "WhatsApp, Instagram, Gmail, Google Sheets, Notion, HubSpot, Airtable, Hubtel, Paystack, MoMo APIs, and most modern SaaS tools.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="border-t border-border bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1fr_1.5fr]">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-accent">FAQ</div>
          <h2 className="mt-3 font-display text-4xl text-primary md:text-5xl">
            Questions, <span className="italic">answered.</span>
          </h2>
        </div>
        <div className="divide-y divide-border border-y border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <button
                key={f.q}
                onClick={() => setOpen(isOpen ? null : i)}
                className="block w-full py-6 text-left"
              >
                <div className="flex items-center justify-between gap-6">
                  <span className="font-display text-xl text-primary">{f.q}</span>
                  <span
                    className={`text-2xl text-accent transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </div>
                {isOpen && (
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </p>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── CTA ───────────────────────── */

function CTA() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-primary px-8 py-16 text-center text-primary-foreground md:px-16 md:py-20">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[oklch(0.72_0.13_75/0.3)] blur-3xl" />

          <h2 className="relative font-display text-4xl leading-tight md:text-6xl">
            Let's automate the work
            <br />
            <span className="italic text-[oklch(0.72_0.13_75)]">slowing you down.</span>
          </h2>
          <p className="relative mx-auto mt-5 max-w-lg text-primary-foreground/70">
            Book a free 30-minute strategy call. We'll map 2–3 opportunities you can act on
            — whether you work with us or not.
          </p>

          <div className="relative mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="mailto:hello@proptechghana.com?subject=Strategy%20Call%20Request"
              className="inline-flex w-full items-center justify-center rounded-full bg-background px-7 py-3.5 text-sm font-medium text-primary transition hover:bg-background/90 sm:w-auto"
            >
              Email us →
            </a>
            <a
              href="https://wa.me/233000000000"
              className="inline-flex w-full items-center justify-center rounded-full border border-primary-foreground/30 px-7 py-3.5 text-sm font-medium text-primary-foreground transition hover:bg-primary-foreground/10 sm:w-auto"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Footer ───────────────────────── */

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row">
        <div className="flex items-center gap-2.5">
          <img src={logoAsset.url} alt="PropTech Ghana" className="h-7 w-7 object-contain" />
          <span className="font-display text-base text-primary">PropTech Ghana</span>
        </div>
        <div>© {new Date().getFullYear()} PropTech Ghana. Accra, Ghana.</div>
      </div>
    </footer>
  );
}
