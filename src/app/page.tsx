import React from "react";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import SocialHub from "@/components/sections/SocialHub";
import Contact from "@/components/sections/Contact";
import CommandPalette from "@/components/ui/CommandPalette";

export default function Home() {
  return (
    <>
      <CommandPalette />
      
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-[100] pointer-events-none">
        <div 
          className="h-full bg-accent origin-left transform scale-x-0 transition-transform duration-100 ease-out" 
          id="scroll-progress"
        />
      </div>

      <div className="flex flex-col min-h-screen">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <SocialHub />
        <Contact />
      </div>

      {/* Script for Scroll Progress */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.addEventListener('scroll', () => {
              const scrollProgress = document.getElementById('scroll-progress');
              if (scrollProgress) {
                const scrollPx = document.documentElement.scrollTop;
                const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const scrolled = \`\${scrollPx / winHeightPx * 100}%\`;
                scrollProgress.style.transform = \`scaleX(\${scrollPx / winHeightPx})\`;
              }
            });
          `,
        }}
      />
    </>
  );
}
