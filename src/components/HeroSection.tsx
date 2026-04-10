import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Rustic Italian pizzeria interior with brick oven"
          className="w-full h-full object-cover scale-105"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/80" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full border border-gold/10 animate-float" />
      <div className="absolute bottom-32 right-16 w-20 h-20 rounded-full border border-primary-foreground/5 animate-float" style={{ animationDelay: "2s" }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Decorative accent line */}
        <div className="flex items-center justify-center gap-4 mb-6 animate-fade-in-up">
          <div className="h-px w-12 bg-gold/60" />
          <span className="font-accent text-gold text-lg italic tracking-wide">Est. 1987</span>
          <div className="h-px w-12 bg-gold/60" />
        </div>

        <h1
          className="font-heading text-6xl md:text-7xl lg:text-9xl font-bold text-primary-foreground leading-[0.9] mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.15s" }}
        >
          Bella{" "}
          <span className="italic text-gold">Pizza</span>
        </h1>

        <p
          className="font-accent text-primary-foreground/70 text-xl md:text-2xl italic max-w-lg mx-auto mb-4 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          Authentic Wood-Fired Artisan Pizza
        </p>

        <p
          className="font-body text-primary-foreground/50 text-sm md:text-base max-w-md mx-auto mb-12 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          Handcrafted with love using the finest ingredients, baked to perfection in our traditional brick oven.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: "0.55s" }}
        >
          <a
            href="#menu"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-full font-body font-semibold text-sm uppercase tracking-widest transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
          >
            View Our Menu
          </a>
          <a
            href="#order"
            className="border-2 border-gold/60 hover:bg-gold/10 text-gold px-10 py-4 rounded-full font-body font-semibold text-sm uppercase tracking-widest transition-all hover:-translate-y-0.5"
          >
            Order Now
          </a>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
        <span className="font-body text-[10px] uppercase tracking-[0.3em] text-primary-foreground/30">Scroll</span>
        <div className="w-5 h-8 border border-primary-foreground/20 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-primary-foreground/40 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
