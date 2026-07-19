import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function FadeIn({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="relative pt-40 pb-20 bg-gradient-to-b from-black via-[#0a0a14] to-background overflow-hidden">
      <div className="absolute inset-0 opacity-20 [background:radial-gradient(circle_at_20%_20%,_#dc2626_0%,_transparent_40%),radial-gradient(circle_at_80%_60%,_#1e293b_0%,_transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <FadeIn>
          {eyebrow && <p className="text-brand-red text-sm tracking-[0.3em] uppercase mb-4">{eyebrow}</p>}
          <h1 className="text-4xl md:text-6xl font-bold text-gradient-silver max-w-3xl">{title}</h1>
          <div className="mt-5 h-1 w-20 bg-brand-red rounded" />
          {subtitle && <p className="mt-6 text-lg text-white/70 max-w-2xl">{subtitle}</p>}
        </FadeIn>
      </div>
    </section>
  );
}
