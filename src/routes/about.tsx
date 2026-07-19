import { createFileRoute } from "@tanstack/react-router";
import { Award, Handshake, Gauge, TrendingUp, UserCircle2 } from "lucide-react";
import { FadeIn, PageHero } from "@/components/Section";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — ZR Nexus Services Ltd" },
      { name: "description", content: "Learn about ZR Nexus Services Ltd — a London-based UK registered company led by Director Muhammad Zahid Rauf." },
      { property: "og:title", content: "About ZR Nexus Services Ltd" },
      { property: "og:description", content: "A London-based UK registered company providing reliable business support across e-commerce, education and administration." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Award, title: "Professionalism", desc: "A consistent standard of work that earns long-term trust." },
  { icon: Handshake, title: "Trust", desc: "Honest, transparent relationships with every client we serve." },
  { icon: Gauge, title: "Efficiency", desc: "Streamlined processes that respect your time and budget." },
  { icon: TrendingUp, title: "Growth", desc: "Solutions designed to help your business move forward." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Building reliable business support, the British way."
        subtitle="ZR Nexus Services Ltd is a London-based UK registered company delivering trusted support across e-commerce, education consultancy and administrative services."
      />

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 grid gap-12 md:grid-cols-5 items-start">
          <FadeIn className="md:col-span-3">
            <h2 className="text-3xl font-bold text-white">Our story</h2>
            <div className="mt-3 h-1 w-16 bg-brand-red rounded" />
            <div className="mt-6 space-y-5 text-white/75 leading-relaxed">
              <p>
                ZR Nexus Services Ltd was founded to provide reliable, professional
                business support to organisations across the United Kingdom. From our
                base in London, we work with clients across e-commerce, education and
                administrative services — bringing structure, clarity and care to
                every engagement.
              </p>
              <p>
                We believe great service is built on relationships. That's why our
                approach is rooted in honest communication, quality delivery and
                lasting customer satisfaction. Whether you need day-to-day admin
                support or strategic guidance, our team is here to help your
                business thrive.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1} className="md:col-span-2">
            <div className="rounded-2xl bg-surface border border-white/10 p-8">
              <UserCircle2 className="text-brand-red" size={40} />
              <p className="mt-4 text-xs uppercase tracking-[0.25em] text-white/60">Director</p>
              <h3 className="mt-1 text-2xl font-bold text-white">Muhammad Zahid Rauf</h3>
              <p className="mt-4 text-sm text-white/70 leading-relaxed">
                Leading ZR Nexus Services Ltd with a commitment to professional
                standards, customer success and a personal approach to every client.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-surface border-y border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <FadeIn>
            <p className="text-brand-red text-sm tracking-[0.3em] uppercase">What we stand for</p>
            <h2 className="mt-3 text-4xl font-bold text-white">Our values</h2>
            <div className="mt-4 h-1 w-20 bg-brand-red rounded" />
          </FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.08}>
                <div className="group relative h-full rounded-xl bg-surface-elevated border border-white/10 p-7 hover:border-brand-red/60 transition">
                  <div className="absolute top-0 inset-x-0 h-px bg-brand-red/60" />
                  <v.icon className="text-brand-red" size={32} strokeWidth={1.5} />
                  <h3 className="mt-5 text-lg font-semibold text-white">{v.title}</h3>
                  <p className="mt-2 text-sm text-white/65">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <FadeIn>
            <p className="text-brand-red text-sm tracking-[0.3em] uppercase">Mission</p>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white leading-tight">
              "To empower businesses across the UK with dependable support — combining
              professionalism, integrity and a passion for our clients' success."
            </h2>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
