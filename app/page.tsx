"use client";

import { useEffect } from "react";
import { initScrollReveal } from "@/utils/reveal";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {

  // 🔥 Initialize Scroll Reveal Animation
  useEffect(() => {
    initScrollReveal();
  }, []);

  return (
    <main>
      {/* Background Gradient Balls Layer */}
      <div className="bg-animation">
        <div className="orb orb1"></div>
        <div className="orb orb2"></div>
        <div className="orb orb3"></div>
      </div>

      <Navbar />
      <Hero />

      {/* 👇 Scroll-Reveal sections */}
      <section id="about" className="reveal">
        <About />
      </section>

      <section id="skills" className="reveal">
        <Skills />
      </section>

      <section id="projects" className="reveal">
        <Projects />
      </section>

      <section id="contact" className="reveal">
        <Contact />
      </section>

      <Footer />
    </main>
  );
}
