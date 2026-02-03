import { motion } from "framer-motion";
import { Dumbbell, Laptop, Utensils, TrendingUp } from "lucide-react";

const offers = [
  {
    icon: <Dumbbell className="w-10 h-10" />,
    title: "Trening Personalny 1:1",
    description: "Pełna opieka trenerska, korekta techniki i maksymalna motywacja podczas wspólnych treningów w Poznaniu.",
  },
  {
    icon: <Laptop className="w-10 h-10" />,
    title: "Prowadzenie Online",
    description: "Indywidualny plan treningowy dostosowany do Twojego sprzętu i możliwości, ze stałym kontaktem i analizą raportów.",
  },
  {
    icon: <Utensils className="w-10 h-10" />,
    title: "Plany Dietetyczne",
    description: "Smaczna i prosta dieta dopasowana do Twojego stylu życia. Bez głodówek, z naciskiem na zdrowie.",
  },
  {
    icon: <TrendingUp className="w-10 h-10" />,
    title: "Metamorfozy",
    description: "Kompleksowa współpraca ukierunkowana na radykalną zmianę sylwetki w określonym czasie.",
  },
];

const Offer = () => {
  return (
    <section id="offer" className="py-20 md:py-32 bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-brand-orange font-bold uppercase tracking-widest mb-2">
            Współpraca
          </h3>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
            Wybierz swoją drogę
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl hover:border-brand-orange transition-colors group cursor-default"
            >
              <div className="bg-neutral-800 w-20 h-20 rounded-full flex items-center justify-center mb-6 text-white group-hover:bg-brand-orange group-hover:scale-110 transition-all duration-300">
                {offer.icon}
              </div>
              <h3 className="text-2xl font-bold font-display mb-4 text-white">{offer.title}</h3>
              <p className="text-neutral-400 mb-8 leading-relaxed">
                {offer.description}
              </p>
              <a
                href="#contact"
                className="inline-block text-brand-orange font-bold uppercase tracking-wide border-b-2 border-transparent group-hover:border-brand-orange transition-all"
              >
                Zapytaj o ofertę
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;
