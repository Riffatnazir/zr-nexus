import { Link } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 text-white/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-3">
        <div>
          <img src={logo} alt="ZR Nexus Services Ltd" className="h-16 w-auto" width={64} height={64} loading="lazy" />
          <p className="mt-4 text-sm italic text-brand-red">Solutions | Support | Success</p>
          <p className="mt-6 flex items-start gap-3 text-sm">
            <MapPin size={16} className="mt-0.5 text-brand-red flex-shrink-0" />
            <span>56 Bondfield Road, London, E6 5TS, United Kingdom</span>
          </p>
          <p className="mt-3 flex items-center gap-3 text-sm">
            <Mail size={16} className="text-brand-red" />
            <a href="mailto:zrnexusservices@gmail.com" className="hover:text-white">zrnexusservices@gmail.com</a>
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold tracking-wider uppercase text-sm">Quick Links</h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link to="/" className="hover:text-brand-red">Home</Link></li>
            <li><Link to="/about" className="hover:text-brand-red">About</Link></li>
            <li><Link to="/services" className="hover:text-brand-red">Services</Link></li>
            <li><Link to="/contact" className="hover:text-brand-red">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold tracking-wider uppercase text-sm">Legal</h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link to="/privacy" className="hover:text-brand-red">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-brand-red">Terms &amp; Conditions</Link></li>
            <li><Link to="/shipping" className="hover:text-brand-red">Shipping Policy</Link></li>
            <li><Link to="/returns" className="hover:text-brand-red">Returns Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-6 lg:px-10 py-6 text-xs text-white/50 text-center">
          © 2026 ZR NEXUS SERVICES LTD. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
