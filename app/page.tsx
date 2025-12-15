"use client";

import { useEffect } from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    const revealElements = () => {
      const reveals = document.querySelectorAll<HTMLElement>(".reveal");

      reveals.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", revealElements);
    revealElements();

    return () => window.removeEventListener("scroll", revealElements);
  }, []);

  return (
    <main>
      {/* Background Orbs */}
      <div className="bg-animation">
        <div className="orb orb1"></div>
        <div className="orb orb2"></div>
        <div className="orb orb3"></div>
      </div>

      <Navbar />
      <Hero />

      <div className="reveal" id="about">
        <About />
      </div>

      <div className="reveal" id="skills">
        <Skills />
      </div>

      {/* ✅ ADD THIS */}
      <div className="reveal" id="experience">
        <Experience />
      </div>

      <div className="reveal" id="projects">
        <Projects />
      </div>

      <div className="reveal" id="contact">
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
