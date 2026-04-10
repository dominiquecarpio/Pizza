import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Order", href: "#order" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-charcoal/95 backdrop-blur-lg shadow-xl py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <a href="#home" className="flex items-center gap-2">
          <span className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground tracking-wide">
            Bella <span className="text-gold italic">Pizza</span>
          </span>
        </a>

        {/* Desktop */}
        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-xs font-body font-medium text-primary-foreground/70 hover:text-gold transition-colors uppercase tracking-[0.2em] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="tel:+15551234567"
          className="hidden lg:flex items-center gap-2 bg-primary/90 hover:bg-primary px-5 py-2.5 rounded-full text-primary-foreground text-sm font-medium transition-all hover:shadow-lg hover:shadow-primary/20"
        >
          <Phone className="w-4 h-4" />
          (555) 123-4567
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-primary-foreground p-2"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-charcoal/98 backdrop-blur-xl border-t border-primary-foreground/10 px-6 pb-8 pt-4">
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-body font-medium text-primary-foreground/70 hover:text-gold transition-colors uppercase tracking-[0.2em]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="tel:+15551234567"
            className="mt-6 flex items-center justify-center gap-2 bg-primary/90 px-5 py-3 rounded-full text-primary-foreground text-sm font-medium"
          >
            <Phone className="w-4 h-4" />
            (555) 123-4567
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
