import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero"; // only Hero exists right now
import About from "@/components/About";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      {/* These will be added later */}
      {/* <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer /> */}
    </main>
  );
}
