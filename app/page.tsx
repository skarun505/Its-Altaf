import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import About from "@/components/About";
import Services from "@/components/Services";
import BeforeAfterToggle from "@/components/BeforeAfterToggle";
import RoiCalculator from "@/components/RoiCalculator";
import CaseStudies from "@/components/CaseStudies";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-primary relative selection:bg-cyan-500/30 selection:text-white">
      <Navbar />
      <Hero />
      <Brands />
      <About />
      <Services />
      <BeforeAfterToggle />
      <RoiCalculator />
      <CaseStudies />
      <WhyWorkWithMe />
      <Portfolio />
      <Process />
      <Skills />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
