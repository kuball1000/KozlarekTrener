import { useState } from "react";
import { Mail, Phone, Instagram, Facebook, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Wiadomość wysłana! (Symulacja)");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-neutral-950 relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-neutral-900 -skew-x-12 translate-x-32 hidden lg:block pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Info */}
          <div className="lg:w-1/2">
            <h3 className="text-brand-orange font-bold uppercase tracking-widest mb-2">
              Kontakt
            </h3>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
              Zacznij zmianę już dziś
            </h2>
            <p className="text-neutral-400 text-lg mb-12 leading-relaxed">
              Masz pytania dotyczące treningów, diety lub współpracy online? 
              Wypełnij formularz lub skontaktuj się bezpośrednio.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-neutral-800 p-3 rounded-lg text-brand-orange">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">E-mail</h4>
                  <a href="mailto:kontakt@kozlarek.pl" className="text-neutral-400 hover:text-white transition-colors">
                    kontakt@kozlarek.pl
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-neutral-800 p-3 rounded-lg text-brand-orange">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Telefon</h4>
                  <a href="tel:+48123456789" className="text-neutral-400 hover:text-white transition-colors">
                    +48 123 456 789
                  </a>
                </div>
              </div>

               <div className="flex items-start gap-4">
                <div className="bg-neutral-800 p-3 rounded-lg text-brand-orange">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Lokalizacja</h4>
                  <span className="text-neutral-400">
                    Poznań, Polska
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-white font-bold mb-4">Obsweruj mnie</h4>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/trenerkozlarek/" target="_blank" rel="noopener noreferrer" className="bg-neutral-800 p-3 rounded-full text-white hover:bg-brand-orange transition-all hover:-translate-y-1">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.facebook.com/people/Trener-Ko%C5%BAlarek/61579001561549/" target="_blank" rel="noopener noreferrer" className="bg-neutral-800 p-3 rounded-full text-white hover:bg-[#1877F2] transition-all hover:-translate-y-1">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-1/2 bg-neutral-900 p-8 md:p-10 rounded-3xl border border-neutral-800 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm text-neutral-400 mb-2 uppercase tracking-wide">Imię i nazwisko</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-neutral-950 border border-neutral-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-brand-orange transition-colors"
                  placeholder="Twoje imię"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                 <div>
                    <label className="block text-sm text-neutral-400 mb-2 uppercase tracking-wide">E-mail</label>
                    <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-neutral-950 border border-neutral-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-brand-orange transition-colors"
                    placeholder="adres@email.com"
                    />
                </div>
                <div>
                    <label className="block text-sm text-neutral-400 mb-2 uppercase tracking-wide">Telefon</label>
                    <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-neutral-950 border border-neutral-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-brand-orange transition-colors"
                    placeholder="Twój numer"
                    />
                </div>
              </div>
              <div>
                <label className="block text-sm text-neutral-400 mb-2 uppercase tracking-wide">Wiadomość</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full bg-neutral-950 border border-neutral-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-brand-orange transition-colors resize-none"
                  placeholder="Opisz swój cel..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-brand-orange text-white font-bold uppercase tracking-wide py-4 rounded-lg hover:bg-orange-600 transition-colors"
              >
                Wyślij wiadomość
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
