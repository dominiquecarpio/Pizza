import { Truck, Store, MapPin, Clock, ArrowRight } from "lucide-react";

const OrderSection = () => {
  return (
    <section id="order" className="py-24 bg-background relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="section-divider mb-4">
            <span className="text-primary text-lg">✦</span>
          </div>
          <p className="font-accent text-primary text-lg italic mb-2">Ready When You Are</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Pick Up & <span className="italic text-gold">Delivery</span>
          </h2>
          <p className="font-body text-muted-foreground text-sm max-w-lg mx-auto leading-relaxed">
            Enjoy Bella Pizza your way — grab it fresh from our counter or sit back and have it delivered to your door.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Pick Up */}
          <div className="glass-card rounded-3xl p-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-500">
              <Store className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Pick Up</h3>
            <p className="font-accent text-muted-foreground italic text-base mb-8">
              Order ahead and skip the wait. Hot and ready when you arrive.
            </p>
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                </div>
                <span className="text-sm font-body text-foreground">123 Italian Street, Downtown</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <Clock className="w-3.5 h-3.5 text-primary" />
                </div>
                <span className="text-sm font-body text-foreground">Ready in 15–20 minutes</span>
              </div>
            </div>
            <a
              href="tel:+15551234567"
              className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-body font-semibold text-sm uppercase tracking-widest transition-all hover:shadow-xl hover:shadow-primary/20 group"
            >
              Call to Order
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Delivery */}
          <div className="glass-card rounded-3xl p-10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden">
            {/* Popular badge */}
            <div className="absolute top-6 right-6 bg-gold/15 text-gold text-[10px] font-body font-semibold uppercase tracking-[0.15em] px-3 py-1.5 rounded-full">
              Free over $25
            </div>
            <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-8 group-hover:bg-gold group-hover:shadow-lg group-hover:shadow-gold/20 transition-all duration-500">
              <Truck className="w-7 h-7 text-gold group-hover:text-foreground transition-colors duration-500" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Delivery</h3>
            <p className="font-accent text-muted-foreground italic text-base mb-8">
              Hot pizza at your doorstep. Free delivery within 5 miles on $25+ orders.
            </p>
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-gold" />
                </div>
                <span className="text-sm font-body text-foreground">Delivering within 5-mile radius</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <Clock className="w-3.5 h-3.5 text-gold" />
                </div>
                <span className="text-sm font-body text-foreground">Estimated 30–45 minutes</span>
              </div>
            </div>
            <a
              href="tel:+15551234567"
              className="flex items-center justify-center gap-2 bg-gold hover:bg-gold/90 text-foreground px-8 py-4 rounded-full font-body font-semibold text-sm uppercase tracking-widest transition-all hover:shadow-xl hover:shadow-gold/20 group"
            >
              Order Delivery
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
