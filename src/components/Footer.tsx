import { MapPin, Phone, Clock, Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-charcoal text-primary-foreground relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-heading text-3xl font-bold mb-2">
              Bella <span className="text-gold italic">Pizza</span>
            </h3>
            <p className="font-accent text-primary-foreground/40 italic text-base mb-6">
              Authentic since 1987
            </p>
            <p className="font-body text-primary-foreground/50 text-xs leading-relaxed mb-6">
              Every slice tells our story — three generations of passion for perfect pizza.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/8 flex items-center justify-center hover:bg-gold/20 hover:text-gold transition-all" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/8 flex items-center justify-center hover:bg-gold/20 hover:text-gold transition-all" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-primary-foreground/8 flex items-center justify-center hover:bg-gold/20 hover:text-gold transition-all" aria-label="Email">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-widest text-primary-foreground/60 mb-5">Navigate</h4>
            <ul className="space-y-3 font-body text-sm text-primary-foreground/50">
              {["Home", "Menu", "About", "Order", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-gold transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-widest text-primary-foreground/60 mb-5">Hours</h4>
            <div className="space-y-3 font-body text-sm text-primary-foreground/50">
              <div className="flex justify-between gap-4">
                <span>Mon – Thu</span><span className="text-primary-foreground/70">11 AM – 10 PM</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>Fri – Sat</span><span className="text-primary-foreground/70">11 AM – 11 PM</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>Sunday</span><span className="text-primary-foreground/70">12 PM – 9 PM</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-widest text-primary-foreground/60 mb-5">Contact</h4>
            <div className="space-y-4 font-body text-sm text-primary-foreground/50">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>123 Italian Street<br />Downtown, NY 10001</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href="tel:+15551234567" className="hover:text-gold transition-colors">(555) 123-4567</a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-gold shrink-0" />
                <span>Open 7 days a week</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/8 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-primary-foreground/30">
            © {new Date().getFullYear()} Bella Pizza. All rights reserved.
          </p>
          <p className="font-body text-xs text-primary-foreground/20">
            Crafted with ❤️ and fresh mozzarella
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
