import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ShoppingCart, GraduationCap, Briefcase, Globe, ShieldCheck, Sparkles, Zap, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import logo from "@/assets/logo.png";
import { FadeIn } from "@/components/Section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ZR Nexus Services Ltd — Empowering Businesses Across the UK" },
      { name: "description", content: "London-based UK registered company delivering e-commerce, education consultancy, administrative and digital support services." },
      { property: "og:title", content: "ZR Nexus Services Ltd — Empowering Businesses Across the UK" },
      { property: "og:description", content: "London-based UK registered company delivering e-commerce, education consultancy, administrative and digital support services." },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: ShoppingCart, title: "E-Commerce Solutions", desc: "Marketplace operations, product sourcing and customer support that scales." },
  { icon: GraduationCap, title: "Education Consultancy", desc: "Educational guidance, documentation support and professional advice." },
  { icon: Briefcase, title: "Administrative Services", desc: "Business admin support, communications and documentation management." },
  { icon: Globe, title: "Digital Services", desc: "Online business assistance and digital communication support." },
];

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const duration = 1500;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          setVal(Math.floor(p * to));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      }
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_30%_30%,_#dc2626_0%,_transparent_45%),radial-gradient(circle_at_75%_70%,_#1e3a8a_0%,_transparent_50%)]" />
        <div className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:60px_60px]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-32 w-full text-center">
          <motion.img
            src={logo}
            alt="ZR Nexus Services Ltd"
            className="mx-auto h-28 w-auto mb-8"
            width={112}
            height={112}
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7 }}
          />
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-brand-red text-sm tracking-[0.4em] uppercase mb-6"
          >
            Solutions • Support • Success
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }}
            className="text-5xl md:text-7xl font-bold text-gradient-silver max-w-5xl mx-auto leading-[1.05]"
          >
            Empowering Businesses<br />Across the UK
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ delay: 0.8 }}
            className="mx-auto mt-8 h-1 w-24 bg-brand-red rounded origin-center"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
            className="mt-8 text-lg md:text-xl text-white/70 max-w-2xl mx-auto"
          >
            A London-based UK registered company delivering trusted e-commerce,
            education, administrative and digital support services.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-brand-red px-7 py-3.5 text-sm font-semibold text-white hover:opacity-90 transition shadow-lg shadow-red-900/30">
              Get in touch <ArrowRight size={16} />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 rounded-md border border-white/30 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition">
              Our Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-surface border-y border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { n: 500, s: "+", label: "Clients Served" },
            { n: 4, s: "", label: "Service Areas" },
            { n: 1, s: "", label: "UK Registered" },
            { n: 100, s: "%", label: "Satisfaction" },
          ].map((s, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-brand-red">
                  {s.label === "UK Registered" ? "UK" : <Counter to={s.n} suffix={s.s} />}
                </div>
                <p className="mt-2 text-sm uppercase tracking-wider text-white/70">{s.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <FadeIn>
            <p className="text-brand-red text-sm tracking-[0.3em] uppercase">What we do</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">Services built around your business</h2>
            <div className="mt-4 h-1 w-20 bg-brand-red rounded" />
          </FadeIn>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.08}>
                <div className="group relative h-full rounded-xl bg-surface border border-white/10 p-7 hover:border-brand-red/60 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                  <div className="absolute top-0 inset-x-0 h-1 bg-brand-red scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  <div className="absolute top-0 inset-x-0 h-px bg-brand-red/60" />
                  <s.icon className="text-brand-red" size={36} strokeWidth={1.5} />
                  <h3 className="mt-5 text-lg font-semibold text-white">{s.title}</h3>
                  <p className="mt-3 text-sm text-white/65 leading-relaxed">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div className="mt-12 text-center">
              <Link to="/services" className="inline-flex items-center gap-2 text-brand-red hover:text-white transition text-sm uppercase tracking-wider">
                Explore all services <ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-surface border-y border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <p className="text-brand-red text-sm tracking-[0.3em] uppercase">Why choose us</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">A partner you can rely on</h2>
            <div className="mt-4 h-1 w-20 bg-brand-red rounded" />
            <p className="mt-6 text-white/70 leading-relaxed">
              We build strong professional relationships through honest communication,
              quality service and customer satisfaction — the foundations of every project
              we take on.
            </p>
          </FadeIn>
          <div className="grid gap-5">
            {[
              { icon: ShieldCheck, title: "Trusted", desc: "UK registered and committed to integrity in every engagement." },
              { icon: Sparkles, title: "Professional", desc: "A senior team that treats your business as their own." },
              { icon: Zap, title: "Efficient", desc: "Lean processes and clear communication — no wasted time." },
            ].map((h, i) => (
              <FadeIn key={h.title} delay={i * 0.1}>
                <div className="flex gap-5 rounded-xl bg-surface-elevated border border-white/10 p-6 hover:border-brand-red/50 transition">
                  <div className="flex-shrink-0 grid place-items-center h-12 w-12 rounded-lg bg-brand-red/10 text-brand-red">
                    <h.icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{h.title}</h3>
                    <p className="mt-1 text-sm text-white/65">{h.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <FadeIn>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-black via-[#0a0a14] to-black p-12 md:p-16 text-center">
              <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-brand-red/20 blur-3xl" />
              <h2 className="relative text-3xl md:text-5xl font-bold text-white max-w-2xl mx-auto">
                Ready to grow your business?
              </h2>
              <p className="relative mt-4 text-white/70 max-w-xl mx-auto">
                Let's talk about how ZR Nexus can support your next chapter.
              </p>
              <Link to="/contact" className="relative mt-8 inline-flex items-center gap-2 rounded-md bg-brand-red px-7 py-3.5 text-sm font-semibold text-white hover:opacity-90 transition">
                Contact us <ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
