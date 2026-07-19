import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Mail, MapPin, Phone, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { FadeIn, PageHero } from "@/components/Section";
import { sendContactEmail } from "@/lib/contact.functions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ZR Nexus Services Ltd" },
      { name: "description", content: "Get in touch with ZR Nexus Services Ltd. Based in London, United Kingdom." },
      { property: "og:title", content: "Contact ZR Nexus Services Ltd" },
      { property: "og:description", content: "Reach out to our London team — we'd love to hear about your project." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [form, setForm] = useState({ fullName: "", email: "", phone: "", subject: "", message: "" });
  const send = useServerFn(sendContactEmail);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await send({ data: form });
      setStatus("success");
      setForm({ fullName: "", email: "", phone: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const input = "w-full rounded-lg bg-surface-elevated border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/30 transition";

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's start a conversation."
        subtitle="Tell us a bit about your project. We typically respond within one working day."
      />

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-5 gap-10">
          <FadeIn className="lg:col-span-3">
            <form onSubmit={onSubmit} className="rounded-2xl bg-surface border border-white/10 p-8 md:p-10">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-xs uppercase tracking-wider text-white/60">Full Name</label>
                  <input required maxLength={100} value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} className={`mt-2 ${input}`} placeholder="Your name" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-white/60">Email</label>
                  <input required type="email" maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={`mt-2 ${input}`} placeholder="you@example.com" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-white/60">Phone</label>
                  <input type="tel" maxLength={30} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={`mt-2 ${input}`} placeholder="+44 ..." />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-white/60">Subject</label>
                  <input required maxLength={150} value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className={`mt-2 ${input}`} placeholder="How can we help?" />
                </div>
              </div>
              <div className="mt-5">
                <label className="text-xs uppercase tracking-wider text-white/60">Message</label>
                <textarea required maxLength={2000} rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`mt-2 ${input} resize-none`} placeholder="Tell us about your project..." />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-brand-red px-7 py-3.5 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-50 transition"
              >
                {status === "sending" ? "Sending..." : (<>Send message <Send size={16} /></>)}
              </button>

              {status === "success" && (
                <div className="mt-5 flex items-start gap-3 rounded-lg border border-green-500/30 bg-green-500/10 p-4 text-sm text-green-200">
                  <CheckCircle2 size={18} className="mt-0.5 flex-shrink-0" />
                  <span>Thanks — your message has been sent. We'll be in touch shortly.</span>
                </div>
              )}
              {status === "error" && (
                <div className="mt-5 flex items-start gap-3 rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-200">
                  <AlertCircle size={18} className="mt-0.5 flex-shrink-0" />
                  <span>Something went wrong. Please email us directly at zrnexusservices@gmail.com.</span>
                </div>
              )}
            </form>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-2">
            <div className="rounded-2xl bg-surface border border-white/10 p-8 h-full">
              <h2 className="text-xl font-bold text-white">Get in touch</h2>
              <div className="mt-3 h-1 w-12 bg-brand-red rounded" />
              <p className="mt-5 text-white/70 text-sm">
                We're based in London and work with clients across the UK.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <MapPin className="text-brand-red flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/50">Address</p>
                    <p className="mt-1 text-white/90 text-sm">56 Bondfield Road<br />London, E6 5TS<br />United Kingdom</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="text-brand-red flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/50">Email</p>
                    <a href="mailto:zrnexusservices@gmail.com" className="mt-1 block text-white/90 text-sm hover:text-brand-red">zrnexusservices@gmail.com</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="text-brand-red flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/50">Director</p>
                    <p className="mt-1 text-white/90 text-sm">Muhammad Zahid Rauf</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
