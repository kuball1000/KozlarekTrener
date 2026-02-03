import { ArrowRight } from "lucide-react";

const InstagramPromo = () => {
    return (
        <section className="py-16 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] relative overflow-hidden group">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
            <div className="container mx-auto px-6 relative z-10 text-center text-white">
                <img src="/instagram.png" alt="Instagram" className="w-16 h-16 mx-auto mb-4 object-contain" />
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 uppercase">
                    Dołącz do społeczności
                </h2>
                <p className="text-lg md:text-xl font-medium mb-8 max-w-2xl mx-auto opacity-90">
                    Codzienna dawka motywacji, porady treningowe i relacje z treningów. 
                    Zobacz metamorfozy moich podopiecznych!
                </p>
                <a 
                    href="https://www.instagram.com/trenerkozlarek/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-bold uppercase tracking-wide hover:bg-neutral-100 transition-transform transform hover:-translate-y-1"
                >
                    Zobacz Instagram
                    <ArrowRight className="w-5 h-5" />
                </a>
            </div>
        </section>
    );
};

export default InstagramPromo;
