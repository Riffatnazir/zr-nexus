import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10"
          : "bg-black/40 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="ZR Nexus Services Ltd" className="h-12 w-auto" width={48} height={48} />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-white font-semibold tracking-[0.18em] text-sm">ZR NEXUS</span>
            <span className="text-brand-red text-[10px] italic tracking-wider">Solutions | Support | Success</span>
          </div>
        </Link>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => {
            const active = location.pathname === l.to;
            return (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={`relative text-sm tracking-wide uppercase transition-colors ${
                    active ? "text-brand-red" : "text-white/80 hover:text-white"
                  }`}
                >
                  {l.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-brand-red"
                    />
                  )}
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              to="/contact"
              className="rounded-md bg-brand-red px-5 py-2 text-sm font-semibold text-white hover:opacity-90 transition"
            >
              Get in touch
            </Link>
          </li>
        </ul>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-white p-2"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-black/95 backdrop-blur-md border-t border-white/10"
          >
            <ul className="flex flex-col px-6 py-6 gap-4">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="block py-2 text-white/90 hover:text-brand-red uppercase tracking-wide text-sm"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
