import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  HiArrowUpRight,
  HiOutlineSparkles,
  HiOutlineMapPin,
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineClock,
  HiOutlineBuildingOffice2,
  HiOutlineChatBubbleLeftRight,
  HiArrowUp,
  HiOutlineArrowRight,
} from "react-icons/hi2";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

import hero from "@/assets/hero.jpg";
import habibi from "@/assets/habibi.png";
import coffee from "@/assets/coffee.jpg";
import mm1 from "@/assets/mm1.jpg";
import mandi from "@/assets/mandi.png";
import nuha from "@/assets/nuha.jpg";
import mentor1 from "@/assets/mentor1.png";
import mentor2 from "@/assets/mentor22.png";
import director1 from "@/assets/director1.png";
import director2 from "@/assets/director2.png";
import director3 from "@/assets/director3.png";
import g1 from "@/assets/g1.png";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

/* ------------------------------------------------------------------ */
/* Primitives                                                          */
/* ------------------------------------------------------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      custom={delay}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8 bg-gold" />
      <span className="eyebrow">{children}</span>
    </div>
  );
}

function PrimaryButton({
  children,
  href,
  onClick,
  type = "button",
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const Cmp: any = href ? "a" : "button";
  return (
    <Cmp
      href={href}
      onClick={onClick}
      type={type}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
      className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
      style={{ boxShadow: "var(--shadow-gold)" }}
    >
      <span className="absolute inset-0 gold-gradient" />
      <span className="absolute inset-0 bg-gradient-to-r from-white/25 via-white/0 to-white/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="relative z-10 tracking-wide">{children}</span>
      <HiArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Cmp>
  );
}

function GlassButton({
  children,
  href,
  onClick,
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}) {
  const Cmp: any = href ? "a" : "button";
  return (
    <Cmp
      href={href}
      onClick={onClick}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
      className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90"
    >
      {children}
    </Cmp>
  );
}

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["About", "#about"],
    ["Brands", "#brands"],
    ["Leadership", "#leadership"],
    ["Presence", "#presence"],
    ["Gallery", "#gallery"],
    ["Contact", "#contact"],
  ] as const;

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8"
    >
      <div
        className={`glass mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-2.5 pl-6 transition-all duration-500 ${scrolled ? "bg-white/80" : ""}`}
      >
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-full gold-gradient text-[10px] font-semibold text-white">
            FE
          </span>
          <span className="text-[15px] font-semibold tracking-tight">Fan Eateries</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <a
            href="#enquiry"
            className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-[13px] text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Enquire <HiOutlineArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden rounded-full p-2"
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-px w-5 bg-foreground transition-all ${open ? "translate-y-1 rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-5 bg-foreground transition-all ${open ? "-translate-y-1 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>
      {open && (
        <div className="glass mx-auto mt-2 max-w-7xl rounded-3xl p-6 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="text-lg text-foreground/90"
              >
                {label}
              </a>
            ))}
            <a
              href="#enquiry"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-fit rounded-full bg-foreground px-5 py-2.5 text-sm text-primary-foreground"
            >
              Enquire
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Abstract shapes */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full opacity-60 blur-3xl"
          style={{
            background: "radial-gradient(closest-side, oklch(0.9 0.08 82 / 0.6), transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-40 right-0 h-[600px] w-[600px] rounded-full opacity-70 blur-3xl"
          style={{
            background: "radial-gradient(closest-side, oklch(0.94 0.03 80), transparent 70%)",
          }}
        />
        <div className="absolute inset-x-0 top-0 h-full bg-[linear-gradient(to_bottom,transparent,var(--surface))]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <motion.div style={{ opacity }} className="grid gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>Fan Eateries · Est. Bangalore</Eyebrow>
            </Reveal>
            <Reveal delay={1}>
              <h1 className="display mt-6 text-[42px] leading-[1.02] text-foreground sm:text-6xl lg:text-[80px]">
                Building exceptional
                <br />
                <span className="italic text-gold-gradient">restaurant experiences</span>
                <br />
                across Bangalore.
              </h1>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
                A modern hospitality company operating a portfolio of distinctive restaurant brands,
                engineered around operational excellence, culinary craft, and lasting guest trust.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <PrimaryButton href="#brands">Explore Our Brands</PrimaryButton>
                <GlassButton href="#contact">Contact Us</GlassButton>
              </div>
            </Reveal>
            <Reveal delay={4}>
              <div className="mt-14 grid max-w-lg grid-cols-3 gap-6">
                {[
                  ["3", "Restaurant Brands"],
                  ["12+", "Outlets & Kitchens"],
                  ["1", "Central Production"],
                ].map(([n, l]) => (
                  <div key={l as string}>
                    <div className="display text-3xl text-foreground">{n}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <motion.div style={{ y }} className="relative lg:col-span-5">
            <div className="relative overflow-hidden rounded-[2rem] shadow-[var(--shadow-lift)]">
              <img
                src={hero}
                alt="Modern restaurant interior"
                width={1920}
                height={1280}
                className="h-[520px] w-full object-cover md:h-[640px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            {/* Floating glass cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="glass-strong absolute -left-6 top-16 hidden rounded-2xl p-4 md:block"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full gold-gradient text-white">
                  <HiOutlineSparkles className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-xs text-muted-foreground">Consistent Quality</div>
                  <div className="text-sm font-medium">One Central Kitchen</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="glass-strong absolute -right-4 bottom-14 hidden rounded-2xl p-4 md:block"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-foreground text-primary-foreground">
                  <HiOutlineBuildingOffice2 className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-xs text-muted-foreground">Headquartered</div>
                  <div className="text-sm font-medium">Bangalore, India</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

function About() {
  const pillars = [
    [
      "Premium Hospitality",
      "Every touchpoint is designed for warmth, precision, and elevated guest comfort.",
    ],
    [
      "Operational Excellence",
      "Standardised systems and daily discipline across every outlet we operate.",
    ],
    [
      "Food Innovation",
      "A craft-driven kitchen culture — recipes tested, refined, and quietly perfected.",
    ],
    [
      "Customer Satisfaction",
      "We measure success by return visits, referrals, and long-term guest trust.",
    ],
    [
      "Sustainable Growth",
      "Deliberate expansion into markets where we can deliver our full standard.",
    ],
  ];
  return (
    <section id="about" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>About Fan Eateries</Eyebrow>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="display mt-6 text-4xl leading-[1.05] md:text-5xl lg:text-6xl">
                A modern hospitality house behind three distinct brands.
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Fan Eateries is a Bangalore-based restaurant management company that builds and
                operates focused, high-quality food brands. We stand as the parent organisation
                behind Habibi Fried Chicken, Mashriq Mandi and Nuha Cafe — each with its own
                identity, held together by a shared operational standard.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <div className="hairline mt-10" />
              <p className="mt-6 text-sm text-muted-foreground">
                We do not sell online. Guests reach our restaurants through Swiggy, Zomato, Ownly,
                Swiggy Dineout and Zomato Gold.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {pillars.map(([title, body], i) => (
                <Reveal key={title} delay={i}>
                  <div className="glass group h-full rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-white/85">
                    <div className="flex items-start justify-between">
                      <span className="text-xs font-medium text-bronze">0{i + 1}</span>
                      <HiArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                    <h3 className="mt-8 text-lg font-semibold text-foreground">{title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Brands                                                              */
/* ------------------------------------------------------------------ */

type Brand = {
  name: string;
  monogram: string;
  cuisine: string;
  description: string;
  image: string;
  services: { label: string; href: string }[];
};

const brands: Brand[] = [
  {
    name: "Habibi Fried Chicken",
    monogram: "HFC",
    cuisine: "Signature Fried Chicken",
    description:
      "Golden, crisp and unmistakably ours — Habibi is our flagship fried chicken concept, built on a proprietary recipe and a fast, precise service model.",
    image: habibi,
    services: [
      { label: "Visit", href: "https://habibi-craft.vercel.app/" },
      {
        label: "Swiggy",
        href: "https://www.swiggy.com/city/bangalore/habibi-fried-chicken-koramangala-rest1283797",
      },
      { label: "Zomato", href: "https://zomato.onelink.me/xqzv/q9nciwau" },
    ],
  },
  {
    name: "Mashriq Mandi",
    monogram: "MM",
    cuisine: "Authentic Arabian Mandi",
    description:
      "Slow-cooked, aromatic and true to origin. Mashriq brings a refined Arabian mandi experience to Bangalore diners who value craft and tradition.",
    image: mandi,
    services: [
      { label: "Visit", href: "https://www.mashriqmandi.com" },
      {
        label: "Swiggy",
        href: "https://www.swiggy.com/city/bangalore/mashriq-mandi-koramangala-rest1285732",
      },
      { label: "Zomato", href: "https://zomato.onelink.me/xqzv/7qhs5x8q" },
    ],
  },
  {
    name: "Nuha Patisserie & Cafe",
    monogram: "NC",
    cuisine: "Specialty Coffee & All-Day Cafe",
    description:
      "A calm, contemporary all-day cafe — thoughtful coffee, honest food, and a warm neighbourhood atmosphere designed for regulars.",
    image: nuha,
    services: [
      { label: "Visit", href: "https://nuha-patisseries-cafe.vercel.app/" },

      {
        label: "Swiggy",
        href: "https://www.swiggy.com/city/bangalore/nuha-patisserie-and-cafe-indiranagar-rest1283859",
      },
      { label: "Zomato", href: "https://zomato.onelink.me/xqzv/zq9q0hp8" },
    ],
  },
];

function Brands() {
  return (
    <section id="brands" className="relative py-28 md:py-40" style={{ background: "var(--pearl)" }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="flex justify-center">
              <Eyebrow>Our Brands</Eyebrow>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="display mt-6 text-4xl md:text-5xl lg:text-6xl">
              Three brands. One standard.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 text-lg text-muted-foreground">
              A tightly curated portfolio, each concept engineered around a specific guest and
              cuisine.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {brands.map((b, i) => (
            <Reveal key={b.name} delay={i}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] bg-white shadow-[var(--shadow-glass)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
                <div className="relative overflow-hidden">
                  <img
                    src={b.image}
                    alt={b.name}
                    loading="lazy"
                    width={1200}
                    height={1200}
                    className="h-72 w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 glass rounded-full px-3 py-1 text-[11px] font-medium">
                    {b.cuisine}
                  </div>
                  <div className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full glass-strong text-xs font-semibold">
                    {b.monogram}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="display text-2xl">{b.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {b.description}
                  </p>
                  <div className="mt-6">
                    <a
                      href="#presence"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
                    >
                      Learn more <HiArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-6">
                    {b.services.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 rounded-full border border-border bg-surface px-3 py-1.5 text-[12px] font-medium text-foreground transition-all hover:border-gold hover:bg-white"
                      >
                        {s.label} <HiArrowUpRight className="h-3 w-3" />
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Leadership                                                          */
/* ------------------------------------------------------------------ */

function Leadership() {
  const directors = [
    { name: "Arbaz Sharrif", role: "Director — Habibi Fried Chicken", img: director1 },
    { name: "Faraz Sharrif", role: "Director — Mashriq Mandi", img: director2 },
    { name: "Nuha Sharrif", role: "Director — Nuha Patisserie and Cafe", img: director3 },
  ];

  return (
    <section id="leadership" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="flex justify-center">
              <Eyebrow>Leadership</Eyebrow>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="display mt-6 text-4xl md:text-5xl lg:text-6xl">
              Guided by mentorship. Led by family.
            </h2>
          </Reveal>
        </div>

        {/* Mentor Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 items-stretch">
          {/* Mentor 1 */}
          <Reveal delay={1}>
            <article className="h-full flex flex-col items-center rounded-[2.25rem] bg-white shadow-[var(--shadow-lift)] p-10 text-center">
              <img
                src={mentor1}
                alt="Executive Mentor"
                loading="lazy"
                width={220}
                height={220}
                className="h-55 w-55 rounded-full object-cover border-4 border-gold shadow-lg"
              />

              <div className="mt-6 glass rounded-full px-5 py-2">
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-bronze">
                  Mentor
                </span>
              </div>

              <Eyebrow className="mt-6">Navaj Sharief</Eyebrow>

              <h3 className="display mt-3 text-3xl"></h3>

              <p className="mt-4 text-muted-foreground leading-7">
                A visionary entrepreneur with over three decades of experience in the food industry,
                Nawaz A. Sharief pioneered the organized biryani QSR segment through iconic brands
                like Ammi's Biryani and Sharief Bhai. Having built and scaled over 180 restaurant
                outlets, he mentors Fan Eateries on strategy, brand building, and sustainable
                growth.
              </p>

              <figure className="mt-8 border-t border-gold/20 pt-6">
                <blockquote className="display italic text-lg text-foreground/90"></blockquote>

                <figcaption className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground"></figcaption>
              </figure>
            </article>
          </Reveal>

          {/* Mentor 2 */}
          <Reveal delay={1.2}>
            <article className="h-full flex flex-col items-center rounded-[2.25rem] bg-white shadow-[var(--shadow-lift)] p-10 text-center">
              <img
                src={mentor2}
                alt="Executive Mentor"
                loading="lazy"
                width={220}
                height={220}
                className="h-55 w-55 rounded-full object-cover border-4 border-gold shadow-lg"
              />

              <div className="mt-6 glass rounded-full px-5 py-2">
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-bronze">
                  Mentor
                </span>
              </div>

              <Eyebrow className="mt-6">Falak Nawaz Shariff</Eyebrow>

              <h3 className="display mt-3 text-3xl"></h3>

              <p className="mt-4 text-muted-foreground leading-7">
                An experienced food business operator with deep expertise in central kitchen
                management, procurement, and operational excellence. Falak Nawaz Shariff mentors Fan
                Eateries in building scalable systems, strengthening supply chains, and driving
                operational efficiency across all brands.
              </p>

              <figure className="mt-8 border-t border-gold/20 pt-6">
                <blockquote className="display italic text-lg text-foreground/90"></blockquote>

                <figcaption className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground"></figcaption>
              </figure>
            </article>
          </Reveal>
        </div>

        <Reveal delay={2}>
          <p className="mx-auto mt-16 max-w-2xl text-center text-muted-foreground">
            The three directors lead Fan Eateries with a shared vision, driving innovation,
            operational excellence, and sustainable growth under the guidance of their mentors.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {directors.map((d, i) => (
            <Reveal key={d.name} delay={i}>
              <article className="group overflow-hidden rounded-[2rem] bg-white shadow-[var(--shadow-glass)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
                <div className="relative overflow-hidden">
                  <img
                    src={d.img}
                    alt={d.name}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="h-80 w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <h4 className="display text-2xl">{d.name}</h4>
                  <p className="mt-2 text-sm text-muted-foreground">{d.role}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Presence — interactive map                                          */
/* ------------------------------------------------------------------ */

type Location = {
  id: string;
  brand: string;
  name: string;
  x: number; // % on map
  y: number;
  address: string;
  phone: string;
  hours: string;
  services: string;
  color: string;
  note?: string;
};

const locations: Location[] = [
  {
    id: "hfc-1",
    brand: "Habibi Fried Chicken",
    name: "Habibi — Koramangala",
    x: 58,
    y: 60,
    address:
      "No 28,Ground Floor, Koramangala Industrial Layout, 5th Block, Koramangala, Bengaluru, Karnataka 560095",
    phone: "+91 9742777705",
    hours: "11:00 AM — 11:00 PM",
    services: "Dine-in · Takeaway · Delivery",
    color: "oklch(0.42 0.11 150)",
  },
  {
    id: "hfc-2",
    brand: "Habibi Fried Chicken",
    name: "Habibi — HRBR Layout",
    x: 66,
    y: 70,
    address:
      "CLUB HOUSE, 418, 5th Main Rd, HRBR Layout 2nd Block, HRBR Layout, Kalyan Nagar, Bengaluru, Karnataka 560043",
    phone: "+91 9742777705",
    hours: "11:00 AM — 11:00 PM",
    services: "Dine-in · Delivery",
    color: "oklch(0.42 0.11 150)",
  },
  {
    id: "hfc-3",
    brand: "Habibi Fried Chicken",
    name: "Habibi(cloud) — Indranagar",
    x: 56,
    y: 34,
    address:
      "CLUB HOUSE, 418, 5th Main Rd, HRBR Layout 2nd Block, HRBR Layout, Kalyan Nagar, Bengaluru, Karnataka 560043",
    phone: "+91 9742777705",
    hours: "11:00 AM — 11:00 PM",
    services: "Delivery",
    color: "oklch(0.56 0.14 245)",
  },
  {
    id: "mm-1",
    brand: "Mashriq Mandi",
    name: "Mashriq — Indranagar",
    x: 52,
    y: 32,
    address:
      "First Floor, No 12, Shri Krishna Temple Rd, Indira Nagar 1st Stage, Indiranagar, Bengaluru, Karnataka 560038",
    phone: "+91 9742777750",
    hours: "11:00 AM — 11:30 PM",
    services: "Dine-in · Takeaway · Delivery",
    color: "oklch(0.65 0.24 25)",
  },
  {
    id: "mm-2",
    brand: "Mashriq Mandi",
    name: "Mashriq — Koramangala",
    x: 60,
    y: 62,
    address: "2nd Floor, 122/B, KHB Colony, 5th Block, Koramangala, Bengaluru, Karnataka 560095	",
    phone: "+91 9742777750",
    hours: "11:00 AM — 11:30 PM",
    services: "Dine-in · Takeaway · Delivery",
    color: "oklch(0.65 0.24 25)",
  },
  {
    id: "mm-3",
    brand: "Mashriq Mandi",
    name: "Mashriq — HRBR Layout",
    x: 68,
    y: 72,
    address: "2nd Floor, 122/B, KHB Colony, 5th Block, Koramangala, Bengaluru, Karnataka 560095	",
    phone: "+91 9742777750",
    hours: "11:00 AM — 11:30 PM",
    services: "Dine-in · Takeaway · Delivery",
    color: "oklch(0.65 0.24 25)",
  },
  {
    id: "mm-4",
    brand: "Mashriq & Habibi",
    name: "Mashriq & Habibi(cloud) — Sarjapura",
    x: 44,
    y: 38,
    address:
      "1ST FLOOR, shree complex, 65/1a, Sarjapur Main Rd, Kaikondrahalli, Bengaluru, Karnataka 560035	",
    phone: "+91 9742777750",
    hours: "11:00 AM — 11:30 PM",
    services: "Delivery",
    color: "oklch(0.56 0.14 245)",
  },
  {
    id: "nc-1",
    brand: "Nuha Cafe",
    name: "Nuha Patisserie & Cafe — Indiranagar",
    x: 62,
    y: 42,
    address:
      "Ground floor ,12, Shri Krishna Temple Rd, Indira Nagar 1st Stage,  Indiranagar, Bengaluru, Karnataka 560038",
    phone: "+91 9513777780",
    hours: "11:00 AM — 11:00 PM",
    services: "Dine-in · Takeaway · Delivery",
    color: "oklch(0.5 0.02 250)",
  },
  {
    id: "cpk",
    brand: "Central Kitchen",
    name: "Central Kitchen — Bommanahalli",
    x: 30,
    y: 52,
    address: "No 79, 1/2, Mangammanapalya Main Rd, Bommanahalli, Bengaluru, Karnataka 560068",
    phone: "+91 73537 77740",
    hours: "09:00 AM — 10:00 PM",
    services: "Cloud Kitchen for all outlets",
    color: " oklch(0.48 0.06 45)    ",
    note: "Our primary production facility where food products, marinades, sauces, ingredients and prepared items are produced and distributed to all Fan Eateries outlets — ensuring consistent quality and standardised taste across the group.",
  },
];

function Presence() {
  const [active, setActive] = useState<Location>(locations[0]);
  const legend = [
    ["Habibi Fried Chicken", "oklch(0.42 0.11 150)"],
    ["Mashriq Mandi", "oklch(0.65 0.24 25)"],
    ["Nuha Cafe", "oklch(0.50 0.05 50)"],
    ["Cloud Kitchen", "oklch(0.56 0.14 245)"],
    ["Central Production Kitchen", " oklch(0.48 0.06 45)"],
  ] as const;

  return (
    <section
      id="presence"
      className="relative py-28 md:py-40"
      style={{ background: "var(--surface)" }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="flex justify-center">
              <Eyebrow>Our Presence</Eyebrow>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="display mt-6 text-4xl md:text-5xl lg:text-6xl">
              A growing footprint across Bangalore.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 text-lg text-muted-foreground">
              Outlets, cloud kitchens and our central production facility — all mapped from a single
              quality standard.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          {/* Map */}
          <Reveal delay={1} className="lg:col-span-8">
            <div className="glass-strong relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] p-6">
              {/* Stylized map */}
              <svg
                viewBox="0 0 100 75"
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="mapBg" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.98 0.006 85)" />
                    <stop offset="100%" stopColor="oklch(0.94 0.014 78)" />
                  </linearGradient>
                </defs>
                <rect width="100" height="75" fill="url(#mapBg)" />
                {/* Grid */}
                {Array.from({ length: 10 }).map((_, i) => (
                  <line
                    key={`v${i}`}
                    x1={i * 10}
                    y1="0"
                    x2={i * 10}
                    y2="75"
                    stroke="oklch(0.9 0.008 80)"
                    strokeWidth="0.1"
                  />
                ))}
                {Array.from({ length: 8 }).map((_, i) => (
                  <line
                    key={`h${i}`}
                    x1="0"
                    y1={i * 10}
                    x2="100"
                    y2={i * 10}
                    stroke="oklch(0.9 0.008 80)"
                    strokeWidth="0.1"
                  />
                ))}
                {/* Roads */}
                <path
                  d="M 5 40 Q 40 30 60 45 T 95 55"
                  stroke="oklch(0.85 0.01 80)"
                  strokeWidth="0.6"
                  fill="none"
                />
                <path
                  d="M 20 10 Q 30 40 50 55 T 80 70"
                  stroke="oklch(0.85 0.01 80)"
                  strokeWidth="0.5"
                  fill="none"
                />
                <path
                  d="M 10 65 Q 45 55 70 30 T 95 15"
                  stroke="oklch(0.85 0.01 80)"
                  strokeWidth="0.5"
                  fill="none"
                />
                {/* Water */}
                <ellipse cx="82" cy="20" rx="10" ry="5" fill="oklch(0.94 0.02 220 / 0.5)" />
                <text x="82" y="22" textAnchor="middle" fontSize="1.6" fill="oklch(0.5 0.05 220)">
                  Bengaluru
                </text>
              </svg>

              {/* Markers */}
              {locations.map((loc) => {
                const isActive = active.id === loc.id;
                return (
                  <button
                    key={loc.id}
                    onClick={() => setActive(loc)}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                    aria-label={loc.name}
                  >
                    <span className="relative flex">
                      <span
                        className={`absolute inset-0 animate-ping rounded-full opacity-40 ${isActive ? "" : "hidden"}`}
                        style={{ background: loc.color }}
                      />
                      <span
                        className={`relative grid place-items-center rounded-full transition-all duration-300 ${isActive ? "h-6 w-6 ring-4 ring-white" : "h-4 w-4 ring-2 ring-white hover:scale-125"}`}
                        style={{ background: loc.color, boxShadow: "0 4px 12px rgb(0 0 0 / 0.15)" }}
                      />
                    </span>
                  </button>
                );
              })}

              {/* Legend */}
              <div className="absolute bottom-4 left-4 right-4 glass rounded-2xl px-4 py-3">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  {legend.map(([l, c]) => (
                    <div key={l} className="flex items-center gap-2 text-[11px] text-foreground/80">
                      <span className="h-2.5 w-2.5 rounded-full" style={{ background: c }} /> {l}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Detail card */}
          <Reveal delay={2} className="lg:col-span-4">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="glass-strong flex h-full flex-col rounded-[2rem] p-7"
            >
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[11px] font-medium">
                <span className="h-2 w-2 rounded-full" style={{ background: active.color }} />{" "}
                {active.brand}
              </span>
              <h3 className="display mt-5 text-2xl">{active.name}</h3>
              {active.note && (
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{active.note}</p>
              )}
              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex gap-3">
                  <HiOutlineMapPin className="mt-0.5 h-4 w-4 text-bronze" />
                  <span>{active.address}</span>
                </li>
                <li className="flex gap-3">
                  <HiOutlinePhone className="mt-0.5 h-4 w-4 text-bronze" />
                  <span>{active.phone}</span>
                </li>
                <li className="flex gap-3">
                  <HiOutlineClock className="mt-0.5 h-4 w-4 text-bronze" />
                  <span>{active.hours}</span>
                </li>
                <li className="flex gap-3">
                  <HiOutlineSparkles className="mt-0.5 h-4 w-4 text-bronze" />
                  <span>{active.services}</span>
                </li>
              </ul>
              <div className="mt-auto pt-8">
                <div className="hairline" />
                <p className="mt-4 text-xs text-muted-foreground">
                  Tap any pin on the map to view outlet details.
                </p>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Gallery                                                             */
/* ------------------------------------------------------------------ */

function Gallery() {
  const items = [
    { src: g1, label: "Interiors", h: "row-span-2" },
    { src: g2, label: "Food", h: "" },
    { src: g3, label: "HFC", h: "" },
    { src: g4, label: "Interiors", h: "row-span-2" },
    { src: coffee, label: "Beverages", h: "" },
    { src: mm1, label: "Food", h: "" },
  ];
  const categories = [
    "Restaurants",
    "Food",
    "Interiors",
    "Kitchen Operations",
    "Corporate Office",
    "Team",
  ];
  return (
    <section id="gallery" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Gallery</Eyebrow>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="display mt-6 text-4xl md:text-5xl lg:text-6xl">
                A closer look at Fan Eateries.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={2}>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-border bg-surface px-4 py-1.5 text-[12px] text-foreground/80"
                >
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={i} delay={i} className={it.h}>
              <div className="group relative h-full w-full overflow-hidden rounded-3xl">
                <img
                  src={it.src}
                  alt={it.label}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-x-4 bottom-4 flex translate-y-2 items-center justify-between opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="glass rounded-full px-3 py-1 text-[11px] font-medium">
                    {it.label}
                  </span>
                  <HiArrowUpRight className="h-4 w-4 text-white drop-shadow" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Delivery Partners                                                   */
/* ------------------------------------------------------------------ */

function Partners() {
  const partners = ["Swiggy", "Zomato", "Ownly", "Swiggy Dineout", "Zomato Gold"];
  return (
    <section className="relative py-24" style={{ background: "var(--pearl)" }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <div className="flex justify-center">
              <Eyebrow>Delivery & Dining Partners</Eyebrow>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="display mt-6 text-3xl md:text-4xl">
              Order and reserve through India's leading platforms.
            </h2>
          </Reveal>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-5">
          {partners.map((p, i) => (
            <Reveal key={p} delay={i}>
              <motion.div
                whileHover={{ y: -4 }}
                className="glass grid h-24 place-items-center rounded-2xl text-lg font-medium tracking-tight"
              >
                {p}
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Why Choose Us                                                       */
/* ------------------------------------------------------------------ */

function Why() {
  const items = [
    ["Premium Quality", "Consistent culinary standards, upheld shift after shift."],
    ["Trusted Brands", "Three distinct concepts that each stand on their own reputation."],
    ["Customer Satisfaction", "Guest experience is our most tracked, most protected metric."],
    ["Growing Presence", "A deliberate outlet roadmap across Bangalore."],
    ["Passionate Leadership", "A hands-on team with skin in every service."],
    ["Operational Excellence", "Systems, training and audits that make quality repeatable."],
  ];
  return (
    <section className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="flex justify-center">
              <Eyebrow>Why Fan Eateries</Eyebrow>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="display mt-6 text-4xl md:text-5xl lg:text-6xl">
              A partner built to be relied on.
            </h2>
          </Reveal>
        </div>
        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map(([t, d], i) => (
            <Reveal key={t} delay={i}>
              <div className="glass group relative h-full overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-white/90">
                <div
                  className="absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: "oklch(0.88 0.08 82 / 0.7)" }}
                />
                <div className="relative flex items-start justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl gold-gradient text-white">
                    <HiOutlineSparkles className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-medium text-muted-foreground">0{i + 1}</span>
                </div>
                <h3 className="relative mt-8 text-xl font-semibold">{t}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Business Enquiry (WhatsApp)                                         */
/* ------------------------------------------------------------------ */

function Enquiry() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", message: "" });
  const BUSINESS_NUMBER = "9845410770"; // placeholder — update with real number

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `Business Enquiry — Fan Eateries\n\n` +
      `Name: ${form.name}\n` +
      `Company: ${form.company}\n` +
      `Email: ${form.email}\n` +
      `Phone: ${form.phone}\n\n` +
      `Message:\n${form.message}`;
    const url = `https://wa.me/${BUSINESS_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const field =
    "glass w-full rounded-2xl bg-white/70 px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/60";

  return (
    <section
      id="enquiry"
      className="relative py-28 md:py-40"
      style={{ background: "var(--pearl)" }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>Business Enquiries</Eyebrow>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="display mt-6 text-4xl md:text-5xl lg:text-6xl">Let's talk.</h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-6 text-lg text-muted-foreground">
                For investors, landlords, franchise conversations, corporate catering, and supplier
                partnerships — send us a note and we'll respond on WhatsApp.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <div className="mt-10 space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <FaWhatsapp className="h-4 w-4 text-bronze" /> WhatsApp Business
                </div>
                <div className="flex items-center gap-3">
                  <HiOutlineEnvelope className="h-4 w-4 text-bronze" /> faneateries@gmail.com
                </div>
                <div className="flex items-center gap-3">
                  <HiOutlineChatBubbleLeftRight className="h-4 w-4 text-bronze" /> Response within
                  24 hours
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={2} className="lg:col-span-7">
            <form onSubmit={submit} className="glass-strong rounded-[2rem] p-8 md:p-10">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  required
                  className={field}
                  placeholder="Full name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                  className={field}
                  placeholder="Company"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                />
                <input
                  type="email"
                  required
                  className={field}
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <input
                  className={field}
                  placeholder="Phone"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>
              <textarea
                required
                rows={5}
                className={`${field} mt-4`}
                placeholder="Tell us about your enquiry"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-muted-foreground">
                  Sending will open WhatsApp with your message pre-filled.
                </p>
                <PrimaryButton type="submit">Send Enquiry</PrimaryButton>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Contact                                                             */
/* ------------------------------------------------------------------ */

function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>Contact</Eyebrow>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="display mt-6 text-4xl md:text-5xl lg:text-6xl">Fan Eateries</h2>
            </Reveal>

            <div className="mt-10 space-y-6 text-sm">
              <div className="flex gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full glass">
                  <HiOutlineMapPin className="h-4 w-4" />
                </span>
                <div>
                  <div className="font-medium text-foreground">Fan Eateries Corporate office</div>
                  <div className="text-muted-foreground">
                    3rd floor, No 16, 5th Cross Rd, KHB Colony, 6th Block, Koramangala, Bengaluru,
                    Karnataka 560095
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full glass">
                  <HiOutlinePhone className="h-4 w-4" />
                </span>
                <div>
                  <div className="font-medium">Phone</div>
                  <div className="text-muted-foreground">+91 9845410770</div>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full glass">
                  <HiOutlineEnvelope className="h-4 w-4" />
                </span>
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-muted-foreground">faneateries@gmail.com</div>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full glass">
                  <HiOutlineClock className="h-4 w-4" />
                </span>
                <div>
                  <div className="font-medium">Business Hours</div>
                  <div className="text-muted-foreground">Mon — Sat · 10:00 AM to 5:00 PM</div>
                </div>
              </div>
            </div>
          </div>

          <Reveal delay={2} className="lg:col-span-7">
            <div className="overflow-hidden rounded-[2rem] shadow-[var(--shadow-lift)]">
              <iframe
                title="Fan Eateries Corporate Office — Bangalore"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15554.794724675989!2d77.60513314532933!3d12.927077812131488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15f4fa836b49%3A0x16c19276f07b14c6!2sFAN%20EATERIES%20Corporate%20Office!5e0!3m2!1sen!2sin!4v1783322982267!5m2!1sen!2sin"
                className="h-[520px] w-full grayscale-[0.15]"
                loading="lazy"
                style={{ border: 0 }}
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

function Footer() {
  return (
    <footer className="relative pt-20 pb-10" style={{ background: "var(--ivory)" }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full gold-gradient text-xs font-semibold text-white">
                FE
              </span>
              <span className="display text-2xl">Fan Eateries</span>
            </div>
            <p className="mt-5 max-w-md text-sm text-muted-foreground">
              A modern hospitality company operating a portfolio of distinctive restaurant brands
              from Bangalore.
            </p>
            <div className="mt-6 flex gap-2">
              {[FaInstagram, FaLinkedin, FaFacebook, FaWhatsapp].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="glass grid h-10 w-10 place-items-center rounded-full text-foreground/80 transition-colors hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow">Navigate</div>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                ["About", "#about"],
                ["Brands", "#brands"],
                ["Leadership", "#leadership"],
                ["Presence", "#presence"],
                ["Gallery", "#gallery"],
                ["Contact", "#contact"],
              ].map(([l, h]) => (
                <li key={h}>
                  <a
                    href={h}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="eyebrow">Brands</div>
            <ul className="mt-5 space-y-3 text-sm">
              <li>Habibi Fried Chicken</li>
              <li>Mashriq Mandi</li>
              <li>Nuha Patisserie & Cafe</li>
            </ul>
          </div>
        </div>

        <div className="hairline mt-16" />

        <div className="mt-6 flex flex-col-reverse items-start justify-between gap-4 text-xs text-muted-foreground md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Fan Eateries. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground">
              Terms
            </a>
            <a href="#top" className="inline-flex items-center gap-1 hover:text-foreground">
              Back to top <HiArrowUp className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <Nav />
      <Hero />
      <About />
      <Brands />
      <Leadership />
      <Presence />
      <Gallery />
      <Partners />
      <Why />
      <Enquiry />
      <Contact />
      <Footer />
    </main>
  );
}
