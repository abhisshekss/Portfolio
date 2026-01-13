import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="bg-background min-h-screen overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Portfolio />
      <Contact />
    </main>
  );
};

export default Index;
