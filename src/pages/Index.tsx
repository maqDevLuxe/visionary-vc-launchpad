import { useEffect } from "react";
import Lenis from "lenis";
import CustomCursor from "@/components/landing/CustomCursor";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Portfolio from "@/components/landing/Portfolio";
import Thesis from "@/components/landing/Thesis";
import FocusAreas from "@/components/landing/FocusAreas";
import FundMetrics from "@/components/landing/FundMetrics";
import Partners from "@/components/landing/Partners";
import PitchProcess from "@/components/landing/PitchProcess";
import FutureTechImage from "@/components/landing/FutureTechImage";
import AUMCounters from "@/components/landing/AUMCounters";
import Blog from "@/components/landing/Blog";
import ValueCreation from "@/components/landing/ValueCreation";
import Testimonials from "@/components/landing/Testimonials";
import Footer from "@/components/landing/Footer";

const Index = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Thesis />
        <FocusAreas />
        <FundMetrics />
        <Partners />
        <PitchProcess />
        <FutureTechImage />
        <AUMCounters />
        <Blog />
        <ValueCreation />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
};

export default Index;
