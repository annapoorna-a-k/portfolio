import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero"; // only Hero exists right now
import About from "@/components/About";
import Skills from "@/components/Skills";  
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Background from "@/components/Background";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <Background />
    </main>
  );
}
