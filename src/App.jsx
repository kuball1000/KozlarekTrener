import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Offer from "./components/Offer";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import InstagramPromo from "./components/InstagramPromo";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-orange selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Offer />
        <Testimonials />
        <Contact />
        <InstagramPromo />
      </main>
      <Footer />
    </div>
  );
}

export default App;
