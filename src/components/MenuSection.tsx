import { useState } from "react";
import pizzaMargherita from "@/assets/pizza-margherita.jpg";
import pizzaPepperoni from "@/assets/pizza-pepperoni.jpg";
import pizzaQuattro from "@/assets/pizza-quattro-formaggi.jpg";
import pizzaBbq from "@/assets/pizza-bbq-chicken.jpg";
import pizzaVeggie from "@/assets/pizza-veggie.jpg";
import pizzaHawaiian from "@/assets/pizza-hawaiian.jpg";
import pizzaMeatLovers from "@/assets/pizza-meat-lovers.jpg";

type Category = "All" | "Classic" | "Specialty" | "Gourmet";

interface Pizza {
  name: string;
  desc: string;
  price: string;
  img: string;
  tag: string;
  category: Category;
  ingredients: string[];
}

const pizzas: Pizza[] = [
  {
    name: "Margherita",
    desc: "The timeless classic — simple, elegant, unforgettable.",
    price: "$14.99",
    img: pizzaMargherita,
    tag: "Classic",
    category: "Classic",
    ingredients: ["San Marzano Tomatoes", "Fresh Mozzarella", "Basil", "EVOO"],
  },
  {
    name: "Pepperoni",
    desc: "Crispy pepperoni over bubbly cheese — our bestseller.",
    price: "$16.99",
    img: pizzaPepperoni,
    tag: "Popular",
    category: "Classic",
    ingredients: ["Pepperoni", "Mozzarella", "House Tomato Sauce"],
  },
  {
    name: "Quattro Formaggi",
    desc: "A rich symphony of four Italian cheeses.",
    price: "$18.99",
    img: pizzaQuattro,
    tag: "Chef's Pick",
    category: "Gourmet",
    ingredients: ["Mozzarella", "Gorgonzola", "Parmesan", "Fontina"],
  },
  {
    name: "BBQ Chicken",
    desc: "Smoky, tangy, and loaded with grilled chicken.",
    price: "$17.99",
    img: pizzaBbq,
    tag: "",
    category: "Specialty",
    ingredients: ["Grilled Chicken", "BBQ Sauce", "Red Onion", "Cilantro"],
  },
  {
    name: "Garden Veggie",
    desc: "A garden-fresh medley of seasonal vegetables.",
    price: "$15.99",
    img: pizzaVeggie,
    tag: "Vegetarian",
    category: "Specialty",
    ingredients: ["Bell Peppers", "Mushrooms", "Olives", "Onions", "Tomatoes"],
  },
  {
    name: "Hawaiian",
    desc: "Sweet pineapple meets savory ham — tropical bliss.",
    price: "$16.99",
    img: pizzaHawaiian,
    tag: "",
    category: "Specialty",
    ingredients: ["Smoked Ham", "Pineapple", "Mozzarella"],
  },
  {
    name: "Meat Lovers",
    desc: "For the serious carnivore — piled high with premium meats.",
    price: "$19.99",
    img: pizzaMeatLovers,
    tag: "Hearty",
    category: "Gourmet",
    ingredients: ["Pepperoni", "Sausage", "Bacon", "Ham", "Mozzarella"],
  },
];

const categories: Category[] = ["All", "Classic", "Specialty", "Gourmet"];

const MenuSection = () => {
  const [active, setActive] = useState<Category>("All");
  const filtered = active === "All" ? pizzas : pizzas.filter((p) => p.category === active);

  return (
    <section id="menu" className="py-24 bg-background relative">
      {/* Decorative top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-6">
          <div className="section-divider mb-4">
            <span className="text-primary text-lg">✦</span>
          </div>
          <p className="font-accent text-primary text-lg italic mb-2">Our Selection</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            The <span className="italic text-primary">Menu</span>
          </h2>
          <p className="font-body text-muted-foreground text-sm max-w-lg mx-auto leading-relaxed">
            Every pizza is made fresh to order with premium ingredients and baked in our traditional wood-fired oven at 900°F.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex items-center justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-body text-xs uppercase tracking-[0.15em] px-5 py-2.5 rounded-full transition-all duration-300 ${
                active === cat
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-card text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filtered.map((pizza) => (
            <div
              key={pizza.name}
              className="group glass-card rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={pizza.img}
                  alt={`${pizza.name} pizza`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                  width={640}
                  height={640}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {pizza.tag && (
                  <span className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm text-primary-foreground text-[10px] font-body font-semibold uppercase tracking-[0.15em] px-3.5 py-1.5 rounded-full">
                    {pizza.tag}
                  </span>
                )}
                <span className="absolute bottom-4 right-4 font-heading text-2xl font-bold text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {pizza.price}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-heading text-xl font-semibold text-foreground">{pizza.name}</h3>
                  <span className="font-heading text-lg font-bold text-primary">{pizza.price}</span>
                </div>
                <p className="font-accent text-muted-foreground italic text-base mb-4">{pizza.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {pizza.ingredients.map((ing) => (
                    <span
                      key={ing}
                      className="text-[10px] font-body uppercase tracking-wider text-muted-foreground/70 bg-secondary px-2.5 py-1 rounded-full"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
