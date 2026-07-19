import { createFileRoute, Link } from "@tanstack/react-router";
import { ShoppingCart, GraduationCap, Briefcase, Globe, Check, ArrowRight } from "lucide-react";
import { FadeIn, PageHero } from "@/components/Section";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — ZR Nexus Services Ltd" },
      { name: "description", content: "E-commerce, education consultancy, administrative and digital services delivered by ZR Nexus Services Ltd." },
      { property: "og:title", content: "Services — ZR Nexus Services Ltd" },
      { property: "og:description", content: "Four service areas built around your business: e-commerce, education, administration and digital." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    desc: "End-to-end support for online sellers — from listing operations to customer care.",
    items: ["Marketplace operations", "Product sourcing", "Customer support"],
  },
  {
    icon: GraduationCap,
    title: "Education Consultancy",
    desc: "Practical guidance for students and institutions navigating UK education.",
    items: ["Educational guidance", "Documentation support", "Professional guidance"],
  },
  {
    icon: Briefcase,
    title: "Administrative Services",
    desc: "Reliable back-office support so you can focus on running your business.",
    items: ["Business admin support", "Communication handling", "Documentation management"],
  },
  {
    icon: Globe,
    title: "Digital Services",
    desc: "Day-to-day digital support for small businesses operating online.",
    items: ["Basic digital support", "Online business assistance", "Digital communication support"],
  },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Four areas. One standard of care."
        subtitle="From e-commerce operations to administrative support, every service is delivered with the same commitment to quality."
      />

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid gap-7 md:grid-cols-2">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.08}>
              <article className="group relative h-full rounded-2xl bg-surface border border-white/10 p-8 hover:border-brand-red/60 transition overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-1 bg-brand-red" />
                <div className="flex items-start gap-5">
                  <div className="grid place-items-center h-14 w-14 rounded-xl bg-brand-red/10 text-brand-red flex-shrink-0">
                    <s.icon size={26} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{s.title}</h2>
                    <p className="mt-2 text-white/70">{s.desc}</p>
                  </div>
                </div>
                <ul className="mt-7 space-y-3">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-3 text-white/80">
                      <Check className="text-brand-red flex-shrink-0" size={18} />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="mt-16 text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-brand-red px-7 py-3.5 text-sm font-semibold text-white hover:opacity-90 transition">
              Discuss your project <ArrowRight size={16} />
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
