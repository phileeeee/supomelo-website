import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Statement from '@/components/Statement';
import Founder from '@/components/Founder';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Statement />
        {/* <Founder /> */}
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
