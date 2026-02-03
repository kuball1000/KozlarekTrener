import { Dumbbell, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 py-12">
      <div className="container mx-auto px-6 text-center">
        <a href="#" className="inline-flex items-center gap-2 group mb-6">
          <Dumbbell className="text-brand-orange w-6 h-6 group-hover:rotate-12 transition-transform" />
          <span className="text-xl font-display font-bold tracking-wider text-white">
            KOŹLAREK<span className="text-brand-orange">TRENER</span>
          </span>
        </a>
        
        <p className="text-neutral-500 text-sm mb-6 max-w-md mx-auto">
            Profesjonalne treningi personalne i opieka online. Zbuduj formę życia w Poznaniu pod okiem eksperta.
        </p>

        <div className="flex justify-center gap-8 text-sm text-neutral-400 font-medium uppercase tracking-wider mb-8">
            <a href="#about" className="hover:text-brand-orange transition-colors">O mnie</a>
            <a href="#offer" className="hover:text-brand-orange transition-colors">Oferta</a>
            <a href="#contact" className="hover:text-brand-orange transition-colors">Kontakt</a>
        </div>
        
        <p className="text-neutral-600 text-xs flex items-center justify-center gap-1">
          © {new Date().getFullYear()} Jakub Koźlarek. Wszystkie prawa zastrzeżone. 
        </p>
      </div>
    </footer>
  );
};

export default Footer;
