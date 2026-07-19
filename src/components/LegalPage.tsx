import type { ReactNode } from "react";
import { PageHero } from "@/components/Section";

export function LegalPage({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} subtitle={`Last updated: ${updated}`} />
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 prose prose-invert prose-headings:text-white prose-p:text-white/75 prose-li:text-white/75 prose-strong:text-white prose-a:text-brand-red">
          {children}
        </div>
      </section>
    </>
  );
}
