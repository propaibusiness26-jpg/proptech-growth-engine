import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/proptech-ghana-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PropTech Ghana — AI Systems for Real Estate Agents in Accra" },
      {
        name: "description",
        content:
          "Real estate agents in Accra waste 28 hours/week on admin. PropTech Ghana builds AI systems that reply, qualify, book viewings, and follow up — automatically.",
      },
      { property: "og:title", content: "PropTech Ghana — AI for Accra Real Estate Agents" },
      {
        property: "og:description",
        content:
          "Save 15–20 hours a week. 35% higher lead conversion. AI systems built for real estate agents in Ghana.",
      },
      { property: "og:image", content: logoAsset.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: logoAsset.url },
      { rel: "canonical", href: "/" } as never,
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
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
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Logos />
        <Services />
        <Results />
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
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <img src={logoAsset.url} alt="PropTech Ghana" className="h-14 w-14 shrink-0 object-contain sm:h-16 sm:w-16" />
          <span className="font-display text-xl text-primary sm:text-2xl">
            PropTech <span className="text-accent">Ghana</span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#problem" className="transition hover:text-foreground">The Problem</a>
          <a href="#services" className="transition hover:text-foreground">The System</a>
          <a href="#results" className="transition hover:text-foreground">Results</a>
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-primary px-3.5 py-2 text-xs font-medium text-primary-foreground transition hover:bg-primary/90 sm:px-5 sm:py-2.5 sm:text-sm"
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
        <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl sm:h-[600px] sm:w-[600px]" />
        <div className="absolute -right-20 top-20 h-[250px] w-[250px] rounded-full bg-[oklch(0.72_0.13_75/0.12)] blur-3xl sm:right-0 sm:top-40 sm:h-[400px] sm:w-[400px]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-16 sm:px-6 sm:pb-24 sm:pt-24 md:pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            For real estate agents in Accra
          </div>

          <h1 className="font-display text-3xl leading-[1.1] text-primary sm:text-4xl md:text-6xl lg:text-7xl">
            Stop losing <span className="italic text-accent">$1,950 a week</span>{' '}
            to admin work.
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:mt-7 sm:text-base md:text-lg">
            Real estate agents spend <strong className="text-foreground">72% of their time on admin</strong> —
            answering the same WhatsApp messages, chasing cold leads, booking viewings one by one.
            We build the AI system that does it all for you.
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:mt-9 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 sm:w-auto"
            >
              Book a free strategy call
              <span className="transition group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#problem"
              className="inline-flex w-full items-center justify-center rounded-full border border-border bg-card px-7 py-3.5 text-sm font-medium text-foreground transition hover:bg-secondary sm:w-auto"
            >
              See how it works
            </a>
          </div>

          <p className="mt-5 text-xs text-muted-foreground">
            30-minute call · No obligation · Tailored to your agency
          </p>
        </div>

        {/* Hero stat strip */}
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:mt-20 md:grid-cols-4">
          {[
            { k: "28 hrs", v: "Wasted weekly on admin" },
            { k: "$1,950", v: "Lost revenue / week" },
            { k: "35%", v: "Higher lead conversion" },
            { k: "15–20", v: "Hours saved weekly" },
          ].map((s) => (
            <div key={s.v} className="bg-card px-4 py-5 text-center sm:px-6 sm:py-7">
              <div className="font-display text-2xl text-primary sm:text-3xl">{s.k}</div>
              <div className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground sm:text-xs">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Problem ───────────────────────── */

function Problem() {
  return (
    <section id="problem" className="border-t border-border py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-xs uppercase tracking-[0.2em] text-accent">The hidden cost</div>
        <h2 className="mt-3 font-display text-2xl text-primary sm:text-3xl md:text-4xl lg:text-5xl">
          That's 28 hours a week — <span className="italic">not selling.</span>{' '}
          Just surviving.
        </h2>

        <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground sm:mt-10 sm:space-y-6 sm:text-lg">
          <p>
            Answering the same WhatsApp messages. Manually updating lead details. Chasing cold
            leads by hand. Booking viewings one by one.
          </p>
          <p>
            At <strong className="text-foreground">$150/hr</strong>, that's{' '}
            <strong className="text-foreground">$1,950 in lost revenue.</strong>{' '}
            <span className="italic">Every. Single. Week.</span>
          </p>
          <p className="font-display text-xl text-primary sm:text-2xl md:text-3xl">
            Meanwhile the top agents aren't working harder.{' '}
            They're working with <span className="italic text-accent">better systems.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Logos / Trust ───────────────────────── */

function Logos() {
  const stack = ["WhatsApp", "Calendars", "CRM Sync", "MoMo", "Sheets", "HubSpot"];
  return (
    <section className="border-y border-border bg-secondary/40 py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Plugs into the tools you already use
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground sm:gap-x-10">
          {stack.map((i) => (
            <span key={i} className="font-display text-base text-primary/70 sm:text-lg md:text-xl">
              {i}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Services / What it does ───────────────────────── */

const services = [
  {
    n: "01",
    title: "Replies to every lead instantly — 24/7",
    body: "No more lost leads at 9pm. The AI responds within seconds on WhatsApp, Instagram, and your website — in English, Twi, or Pidgin.",
  },
  {
    n: "02",
    title: "Qualifies leads by budget and location",
    body: "Every inquiry gets scored and tagged so you only spend your time on serious buyers ready to view.",
  },
  {
    n: "03",
    title: "Books viewings directly into your calendar",
    body: "Two-way calendar sync means qualified leads pick a slot themselves — no back-and-forth, no missed appointments.",
  },
  {
    n: "04",
    title: "Follows up on cold leads automatically",
    body: "The system nurtures every lead with personalized follow-ups for weeks, so deals you'd otherwise lose still close.",
  },
  {
    n: "05",
    title: "Updates your CRM without you touching it",
    body: "Every conversation, status change, and viewing is logged automatically. Your pipeline is always up to date.",
  },
];

function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.2em] text-accent">The system</div>
          <h2 className="mt-3 font-display text-2xl text-primary sm:text-3xl md:text-5xl">
            One AI system. <span className="italic">All your admin, handled.</span>
          </h2>
          <p className="mt-4 text-sm text-muted-foreground sm:text-base">
            PropTech Ghana gives real estate agents in Accra an AI system that handles every
            repetitive task automatically — so you can focus on closing.
          </p>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:mt-14 md:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.n}
              className="group relative bg-card p-6 transition hover:bg-secondary/60 sm:p-8 md:p-10"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-4">
                <span className="font-display text-xl text-accent sm:text-2xl">{s.n}</span>
                <h3 className="font-display text-lg text-primary sm:text-xl md:text-2xl">{s.title}</h3>
              </div>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:mt-4">
                {s.body}
              </p>
              <div className="mt-5 h-px w-10 bg-accent/60 transition-all group-hover:w-20 sm:mt-6" />
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
    <section id="results" className="bg-primary py-16 text-primary-foreground sm:py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
        <div className="text-xs uppercase tracking-[0.2em] text-[oklch(0.72_0.13_75)]">
          The result
        </div>
        <h2 className="mt-3 font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
          15–20 hours saved weekly.{" "}
          <span className="italic text-[oklch(0.72_0.13_75)]">35% higher lead conversion.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-primary-foreground/70 sm:mt-6 sm:text-base">
          More deals closed. Less time wasted. The system runs while you sleep.
        </p>

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 text-left sm:mt-16 sm:p-10 md:p-12">
          <div className="font-display text-lg leading-tight sm:text-xl md:text-3xl lg:text-4xl">
            "One of our agents saved <span className="text-[oklch(0.72_0.13_75)]">15 hours a week</span> and
            closed <span className="text-[oklch(0.72_0.13_75)]">5 extra deals in 6 months</span> —
            <span className="italic"> $50,000 in extra commissions.</span>"
          </div>
          <div className="mt-6 text-xs text-primary-foreground/60 sm:mt-8 sm:text-sm">
            — Accra-based real estate agency
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:mt-16 sm:gap-6 md:grid-cols-3">
          {[
            { k: "15–20 hrs", v: "Saved every week per agent" },
            { k: "+35%", v: "Lead-to-viewing conversion" },
            { k: "$50,000", v: "Extra commissions in 6 months" },
          ].map((b) => (
            <div
              key={b.k}
              className="rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-5 text-left sm:p-6"
            >
              <div className="font-display text-xl text-[oklch(0.72_0.13_75)] sm:text-2xl">{b.k}</div>
              <p className="mt-2 text-xs text-primary-foreground/70 sm:text-sm">{b.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── CTA ───────────────────────── */

function CTA() {
  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-primary px-6 py-12 text-center text-primary-foreground sm:px-8 sm:py-16 md:px-16 md:py-20">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[oklch(0.72_0.13_75/0.3)] blur-3xl" />

          <h2 className="relative font-display text-2xl leading-tight sm:text-3xl md:text-5xl lg:text-6xl">
            Stop surviving.{" "}
            <span className="italic text-[oklch(0.72_0.13_75)]">Start selling.</span>
          </h2>
          <p className="relative mx-auto mt-4 max-w-lg text-sm text-primary-foreground/70 sm:mt-5 sm:text-base">
            Book a free 30-minute strategy call. We'll map exactly where you're losing hours —
            and show you the AI system that wins them back.
          </p>

          <div className="relative mt-7 flex justify-center sm:mt-9">
            <a
              href="mailto:hello@proptechghana.com?subject=Strategy%20Call%20Request"
              className="inline-flex items-center justify-center rounded-full bg-background px-6 py-3 text-sm font-medium text-primary transition hover:bg-background/90 sm:px-8 sm:py-3.5"
            >
              Book my strategy call →
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
    <footer className="border-t border-border py-8 sm:py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-xs text-muted-foreground sm:px-6 sm:text-sm md:flex-row">
        <div className="flex items-center gap-2.5">
          <img src={logoAsset.url} alt="PropTech Ghana" className="h-12 w-12 object-contain sm:h-14 sm:w-14" />
          <span className="font-display text-lg text-primary sm:text-xl">PropTech Ghana</span>
        </div>
        <div>© {new Date().getFullYear()} PropTech Ghana. Accra, Ghana.</div>
      </div>
    </footer>
  );
}
