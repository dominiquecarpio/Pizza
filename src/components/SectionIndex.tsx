import { useState, useEffect } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "menu", label: "Menu" },
  { id: "about", label: "About" },
  { id: "order", label: "Order" },
  { id: "contact", label: "Contact" },
];

const SectionIndex = () => {
  const [active, setActive] = useState("home");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActive(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end gap-3">
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className="group flex items-center gap-3"
        >
          <span
            className={`font-body text-[10px] uppercase tracking-[0.15em] transition-all duration-300 ${
              active === s.id
                ? "text-primary opacity-100 translate-x-0"
                : "text-muted-foreground opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
            }`}
          >
            {s.label}
          </span>
          <span
            className={`block rounded-full transition-all duration-300 ${
              active === s.id
                ? "w-3 h-3 bg-primary shadow-md shadow-primary/30"
                : "w-2 h-2 bg-muted-foreground/30 group-hover:bg-muted-foreground/60"
            }`}
          />
        </a>
      ))}
    </div>
  );
};

export default SectionIndex;
