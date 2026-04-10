import pizzaVideo from "@/assets/pizza-intro.mp4.asset.json";

const VideoSection = () => {
  return (
    <section className="py-24 bg-charcoal relative overflow-hidden">
      {/* Decorative texture overlay */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <div className="section-divider mb-4">
            <span className="text-gold text-lg">✦</span>
          </div>
          <p className="font-accent text-gold text-lg italic mb-2">Our Craft</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-5">
            Made With <span className="italic text-gold">Passion</span>
          </h2>
          <p className="font-body text-primary-foreground/50 max-w-lg mx-auto text-sm leading-relaxed">
            Watch our artisan chefs craft each pizza by hand — from kneading fresh dough to the perfect brick-oven bake.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-charcoal/50 ring-1 ring-primary-foreground/10">
            <video
              className="w-full aspect-video object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={pizzaVideo.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Subtle vignette */}
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_80px_rgba(0,0,0,0.3)]" />
          </div>
        </div>

        {/* Stats row */}
        <div className="max-w-3xl mx-auto mt-16 grid grid-cols-3 gap-8 text-center">
          {[
            { num: "35+", label: "Years of Tradition" },
            { num: "50K+", label: "Pizzas Served" },
            { num: "4.9", label: "Customer Rating" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-heading text-3xl md:text-4xl font-bold text-gold">{stat.num}</p>
              <p className="font-body text-xs uppercase tracking-widest text-primary-foreground/40 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
