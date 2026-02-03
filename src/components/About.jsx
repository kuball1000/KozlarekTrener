import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-neutral-900 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transition-all duration-700">
              <img
                src={`kozlarek.jpeg`}
                alt="Jakub Koźlarek"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-brand-orange rounded-2xl -z-0 hidden md:block" />
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h3 className="text-brand-orange font-bold uppercase tracking-widest mb-2">
              O mnie
            </h3>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
              Więcej niż trening — <br />
              <span className="text-white">Droga do lepszej wersji siebie</span>
            </h2>
            
            <p className="text-neutral-400 text-lg leading-relaxed mb-6">
              Nazywam się <span className="text-white font-bold">Jakub Koźlarek</span>. Jestem trenerem personalnym z Poznania, dla którego sport to nie tylko praca, ale przede wszystkim pasja i styl życia.
            </p>
            <p className="text-neutral-400 text-lg leading-relaxed mb-8">
              Moje podejście opiera się na indywidualnym planowaniu, zrozumieniu potrzeb Twojego organizmu oraz budowaniu nawyków, które zostaną z Tobą na lata. Nie wierzę w drogi na skróty — wierzę w konsekwencję i mądry trening.
            </p>

            <div className="space-y-4">
              {[
                "Indywidualne podejście do każdego podopiecznego",
                "Wieloletnie doświadczenie treningowe",
                "Skuteczne plany żywieniowe i suplementacyjne",
                "Stały monitoring postępów i motywacja"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-orange shrink-0" />
                  <span className="text-neutral-300">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
