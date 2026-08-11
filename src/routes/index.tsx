import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Droplets,
  Sparkles,
  Sun,
  Coffee,
  Star,
  ShieldCheck,
  Rabbit,
  Truck,
  Lock,
  Menu,
  X,
  Instagram,
  Facebook,
  Youtube,
  Mail,
  Phone,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import heroDuo from "@/assets/hero-duo.jpg";
import faceWash from "@/assets/face-wash.jpg";
import bodyScrub from "@/assets/body-scrub.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "mCaffeine Coffee Face Wash & Body Scrub | Glowing Skin" },
      {
        name: "description",
        content:
          "Refresh, cleanse and exfoliate naturally with mCaffeine's Coffee Face Wash and Coffee Body Scrub for healthy, glowing skin.",
      },
      { property: "og:title", content: "mCaffeine Coffee Face Wash & Body Scrub" },
      {
        property: "og:description",
        content:
          "Wake up your skin with coffee goodness — deep cleansing, gentle exfoliation and a natural glow.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const features = [
  {
    icon: Droplets,
    title: "Deep Cleansing",
    body: "Removes dirt, excess oil, and impurities while leaving your skin feeling fresh and clean.",
  },
  {
    icon: Sparkles,
    title: "Gentle Exfoliation",
    body: "Coffee particles help remove dead skin cells for smoother, brighter-looking skin.",
  },
  {
    icon: Sun,
    title: "Soft & Glowing Skin",
    body: "Regular use improves skin texture and leaves your skin feeling refreshed and radiant.",
  },
  {
    icon: Coffee,
    title: "Natural Coffee Goodness",
    body: "Infused with coffee and skin-loving ingredients that energize your skincare routine.",
  },
];

const badges = [
  { icon: ShieldCheck, label: "Dermatologically Tested" },
  { icon: Rabbit, label: "Cruelty-Free" },
  { icon: Truck, label: "Free Shipping" },
  { icon: Lock, label: "Secure Checkout" },
];

function ShopButton({ className = "" }: { className?: string }) {
  return (
    <a
      href="#products"
      className={`inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-medium tracking-wide text-primary-foreground shadow-[var(--shadow-soft)] transition-transform duration-200 hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${className}`}
    >
      Shop Now
    </a>
  );
}

function Landing() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/85 shadow-[var(--shadow-card)] backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 md:flex md:justify-between">
          <a href="#home" className="flex min-w-0 items-center gap-2">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
              <Coffee size={18} />
            </span>
            <span className="truncate font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight">
              mCaffeine
            </span>
          </a>

          <ul className="hidden items-center gap-9 md:flex">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <ShopButton className="px-6 py-3" />
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border text-foreground md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>

        {open && (
          <div className="border-t border-border bg-background px-5 pb-5 md:hidden">
            <ul className="flex flex-col gap-1 py-2">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <ShopButton className="w-full" />
          </div>
        )}
      </header>

      <main>
        {/* Hero */}
        <section
          id="home"
          className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
          style={{ background: "var(--gradient-warm)" }}
        >
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-background/70 px-4 py-2 text-xs tracking-widest text-accent uppercase">
                <Sparkles size={14} /> 100% Coffee Powered
              </span>
              <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl leading-[1.08] font-semibold tracking-tight text-primary sm:text-5xl lg:text-6xl">
                Wake Up Your Skin with Coffee Goodness
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Refresh, cleanse, and exfoliate naturally with mCaffeine's Coffee Face Wash and
                Coffee Body Scrub for healthy, glowing skin.
              </p>
              <div className="mt-9">
                <ShopButton />
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2.5rem] bg-background/50 blur-2xl" />
                <img
                  src={heroDuo}
                  alt="mCaffeine Coffee Face Wash tube and Coffee Body Scrub jar with coffee beans"
                  width={1408}
                  height={1104}
                  className="relative w-full rounded-[2rem] object-cover shadow-[var(--shadow-soft)]"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Product highlight */}
        <section id="products" className="py-20 md:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16">
            <Reveal className="order-2 lg:order-1">
              <h2 className="font-[family-name:var(--font-display)] text-3xl leading-tight font-semibold text-primary sm:text-4xl">
                Your Daily Coffee Skincare Duo
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Start your skincare routine with the refreshing Coffee Face Wash that gently removes
                dirt, excess oil, and impurities without drying your skin. Pair it with the Coffee
                Body Scrub, enriched with coffee and natural exfoliants, to remove dead skin cells,
                smooth rough patches, and reveal soft, glowing skin.
              </p>
              <h3 className="mt-8 text-sm font-medium tracking-widest text-accent uppercase">
                Perfect For
              </h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  "Men and women",
                  "All skin types",
                  "Daily skincare routines",
                  "Anyone seeking naturally glowing skin",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-2xl bg-secondary px-4 py-3 text-sm text-secondary-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={120} className="order-1 grid grid-cols-2 gap-4 lg:order-2">
              <img
                src={faceWash}
                alt="mCaffeine Coffee Face Wash tube"
                loading="lazy"
                width={912}
                height={1104}
                className="h-full w-full rounded-[1.75rem] object-cover shadow-[var(--shadow-card)]"
              />
              <img
                src={bodyScrub}
                alt="mCaffeine Coffee Body Scrub jar"
                loading="lazy"
                width={912}
                height={1104}
                className="mt-10 h-full w-full rounded-[1.75rem] object-cover shadow-[var(--shadow-card)]"
              />
            </Reveal>
          </div>
        </section>

        {/* Video ad */}
        <section className="px-5 pb-4 md:pb-8">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <h2 className="text-center font-[family-name:var(--font-display)] text-3xl font-semibold text-primary sm:text-4xl">
                See It In Action
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-center leading-relaxed text-muted-foreground">
                A closer look at the Coffee Face Wash and Coffee Body Scrub — texture, ritual, and
                the glow that follows.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-10 overflow-hidden rounded-[2rem] bg-card shadow-[var(--shadow-soft)]">
                <video
                  src={productAd.url}
                  poster={heroDuo}
                  controls
                  playsInline
                  muted
                  loop
                  preload="metadata"
                  aria-label="mCaffeine Coffee Face Wash and Coffee Body Scrub product video"
                  className="aspect-video w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>



        {/* Benefits */}
        <section className="bg-cream py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <Reveal>
              <h2 className="text-center font-[family-name:var(--font-display)] text-3xl font-semibold text-primary sm:text-4xl">
                Why You'll Love It
              </h2>
            </Reveal>
            <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((f, i) => (
                <Reveal as="li" key={f.title} delay={i * 90}>
                  <article className="h-full rounded-3xl bg-card p-7 shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1.5">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-primary">
                      <f.icon size={22} />
                    </span>
                    <h3 className="mt-5 font-[family-name:var(--font-display)] text-lg font-semibold text-card-foreground">
                      {f.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* Social proof */}
        <section id="reviews" className="py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-5 text-center">
            <Reveal>
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-primary sm:text-4xl">
                Loved by Coffee & Skincare Enthusiasts
              </h2>
              <div
                className="mt-7 flex justify-center gap-1 text-accent"
                aria-label="Rated 4.8 out of 5"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={22} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-4 text-2xl font-semibold text-foreground">4.8/5 Average Rating</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Based on 25,000+ Happy Customers
              </p>
            </Reveal>

            <Reveal delay={120}>
              <figure className="mt-12 rounded-3xl bg-card p-8 shadow-[var(--shadow-card)] sm:p-12">
                <blockquote className="font-[family-name:var(--font-display)] text-lg leading-relaxed text-card-foreground sm:text-xl">
                  "I've been using the Coffee Face Wash and Body Scrub for a month, and my skin
                  feels cleaner, smoother, and looks noticeably brighter. The coffee fragrance is
                  amazing!"
                </blockquote>
                <figcaption className="mt-6 text-sm text-muted-foreground">— Priya S.</figcaption>
              </figure>
            </Reveal>

            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {badges.map((b, i) => (
                <Reveal as="li" key={b.label} delay={i * 80}>
                  <div className="flex h-full items-center justify-center gap-2 rounded-full border border-border bg-secondary px-4 py-3 text-sm text-secondary-foreground">
                    <b.icon size={16} className="shrink-0 text-accent" />
                    <span className="text-center">{b.label}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-5 pb-20 md:pb-28">
          <Reveal>
            <div
              className="mx-auto max-w-6xl rounded-[2.5rem] px-6 py-16 text-center sm:px-12 md:py-24"
              style={{ background: "var(--gradient-coffee)" }}
            >
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-primary-foreground sm:text-4xl">
                Ready for Fresh, Glowing Skin?
              </h2>
              <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-primary-foreground/80">
                Transform your daily skincare routine with the energizing power of coffee.
                Experience clean, smooth, and radiant skin every day.
              </p>
              <a
                href="#products"
                className="mt-9 inline-flex items-center justify-center rounded-full bg-background px-8 py-4 text-sm font-medium tracking-wide text-primary transition-transform duration-200 hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background"
              >
                Shop Now
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer id="contact" className="border-t border-border bg-cream py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground">
                <Coffee size={18} />
              </span>
              <span className="font-[family-name:var(--font-display)] text-xl font-semibold">
                mCaffeine
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Coffee-powered skincare for naturally fresh, smooth and glowing skin.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-sm font-medium tracking-widest text-primary uppercase">Navigate</h2>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-medium tracking-widest text-primary uppercase">Follow</h2>
            <ul className="mt-4 space-y-2.5">
              {[
                { label: "Instagram", icon: Instagram },
                { label: "Facebook", icon: Facebook },
                { label: "YouTube", icon: Youtube },
                { label: "X", icon: X },
              ].map((s) => (
                <li key={s.label}>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <s.icon size={15} /> {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-medium tracking-widest text-primary uppercase">Contact</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail size={15} className="shrink-0" /> hello@mcaffeine.com
              </li>
              <li className="flex items-center gap-2">
                <Phone size={15} className="shrink-0" /> +91-XXXXXXXXXX
              </li>
            </ul>
          </div>
        </div>

        <p className="mx-auto mt-12 max-w-6xl px-5 text-xs text-muted-foreground">
          © 2026 mCaffeine. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
