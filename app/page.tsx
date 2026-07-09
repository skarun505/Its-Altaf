import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import Services from "@/components/Services";
import Process from "@/components/Process";
import CaseStudies from "@/components/CaseStudies";
import Brands from "@/components/Brands";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <WhyWorkWithMe />
      <Services />
      <Process />
      <CaseStudies />
      <Brands />
      <Skills />
      <Portfolio />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
