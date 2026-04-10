import { Flame, Wheat, Clock, Award } from "lucide-react";

const features = [
  { icon: Flame, title: "Wood-Fired Oven", desc: "Authentic brick oven reaching 900°F for the perfect leopard-spotted crust every time." },
  { icon: Wheat, title: "Fresh Ingredients", desc: "Locally sourced produce and specialties imported directly from Italy." },
  { icon: Clock, title: "Quick & Fresh", desc: "From our oven to your hands in minutes — never sitting, always fresh." },
  { icon: Award, title: "Award Winning", desc: "Voted best pizza in the city three years in a row by local food critics." },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-divider mb-4">
              <span className="text-primary text-lg">✦</span>
            </div>
            <p className="font-accent text-primary text-lg italic mb-2">Our Heritage</p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              The Bella <span className="italic text-primary">Story</span>
            </h2>
            <p className="font-body text-muted-foreground text-sm max-w-2xl mx-auto leading-relaxed">
              In 1987, the Rossi family brought a dream from Naples to this very corner — 
              a dream of sharing authentic Italian pizza with the community. Three generations later, 
              that flame still burns in our brick oven and in every pizza we serve.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="glass-card rounded-2xl p-7 text-center group hover:-translate-y-1 transition-all duration-500"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-500">
                  <f.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                </div>
                <h3 className="font-heading text-base font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="font-body text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
