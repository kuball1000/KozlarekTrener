import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, User } from "lucide-react";

const reviews = [
  {
    name: "Michał Kowalski",
    text: "Współpraca z Jakubem to czysta przyjemność. 10 kg w dół w 4 miesiące, a siła poszła w górę. Zmienił moje myślenie o jedzeniu i treningu.",
  },
  {
    name: "Anna Nowak",
    text: "Najlepszy trener w Poznaniu! Indywidualne podejście i ogromna wiedza. Treningi są wymagające, ale dają niesamowitą satysfakcję.",
  },
  {
    name: "Piotr Wiśniewski",
    text: "Dzięki Jakubowi wróciłem do formy po kontuzji. Profesjonalizm w każdym calu i dbałość o technikę wykonywania ćwiczeń.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-neutral-900 border-y border-neutral-800">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h3 className="text-brand-orange font-bold uppercase tracking-widest mb-2">
            Opinie
          </h3>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
            Historie sukcesu
          </h2>
        </div>

        <div className="relative">
          <div className="bg-brand-dark p-8 md:p-12 rounded-3xl relative shadow-xl">
            <Quote className="absolute top-8 left-8 text-neutral-800 w-16 h-16 -z-0" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full bg-neutral-800 flex items-center justify-center border-2 border-brand-orange mb-6 text-neutral-400">
                  <User className="w-10 h-10" />
                </div>
                <p className="text-xl md:text-2xl text-neutral-300 italic mb-8 leading-relaxed">
                  "{reviews[currentIndex].text}"
                </p>
                <h4 className="text-white font-bold font-display text-lg tracking-wider">
                  {reviews[currentIndex].name}
                </h4>
                <span className="text-neutral-500 text-sm">Podopieczny</span>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={prevReview}
            className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 bg-neutral-800 hover:bg-brand-orange text-white p-3 rounded-full transition-colors z-20"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={nextReview}
            className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 bg-neutral-800 hover:bg-brand-orange text-white p-3 rounded-full transition-colors z-20"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
