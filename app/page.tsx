import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero"; // only Hero exists right now

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      {/* These will be added later */}
      {/* <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer /> */}
    </main>
  );
}
