import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
          alt="Gym Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-brand-dark/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h2 className="text-brand-orange font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
            Trener Personalny — Poznań
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-6">
            Twoja forma <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">
              zaczyna się dziś
            </span>
          </h1>
          <p className="text-neutral-300 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
            Profesjonalne wsparcie w budowaniu sylwetki, siły i zdrowych nawyków. 
            Zrealizuj swoje cele pod okiem eksperta.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#offer"
              className="bg-brand-orange text-white px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-orange-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2 group"
            >
              Rozpocznij teraz
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about"
              className="border border-white/20 hover:border-white text-white px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-white/5 transition-all flex items-center justify-center"
            >
              Dowiedz się więcej
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-brand-orange rounded-full animate-scroll" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
