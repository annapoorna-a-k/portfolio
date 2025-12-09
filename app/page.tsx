import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero"; // only Hero exists right now
import About from "@/components/About";
import Skills from "@/components/Skills";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      {/* These will be added later */}
      {/* <About />
      
      <Projects />
      <Contact />
      <Footer /> */}
    </main>
  );
}
