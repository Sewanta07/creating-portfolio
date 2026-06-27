"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Mail, User, Server, Database, Layout } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse tracking for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse values
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Map mouse position to rotation values
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [20, -20]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-20, 20]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden" id="hero">
      {/* Clean minimal background */}
      <div className="absolute inset-0 bg-background z-0 pointer-events-none" />
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium"
            >
              Available for new opportunities
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-4"
            >
              Hi, I&apos;m <span className="text-accent">Sewanta.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-3xl text-muted-foreground font-medium mb-6 h-[40px] md:h-[48px]"
            >
              {mounted && (
                <TypeAnimation
                  sequence={[
                    "Laravel Developer",
                    2000,
                    "Full Stack Developer",
                    2000,
                    "Software Engineer",
                    2000,
                    "Company Founder",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-foreground"
                />
              )}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-muted-foreground text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              A passionate software engineer and founder crafting modern, premium, and highly scalable web architectures from Nepal.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Link
                href="#projects"
                className="w-full sm:w-auto px-8 py-3.5 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-medium transition-all shadow-glow flex items-center justify-center gap-2 group interactive"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="#contact"
                className="w-full sm:w-auto p-3.5 glass hover:bg-white/5 border border-border rounded-lg text-muted-foreground hover:text-foreground transition-all flex items-center justify-center interactive sm:hidden lg:flex"
                title="Email Me"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-6 flex items-center justify-center lg:justify-start gap-2 text-muted-foreground"
            >
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium">Available for freelance</span>
            </motion.div>
          </div>

          {/* Right: Interactive 3D Portrait */}
          <div 
            className="order-1 lg:order-2 flex justify-center items-center relative h-[400px] md:h-[500px]"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-64 h-64 md:w-80 md:h-80 group cursor-pointer"
            >
              <div className="absolute inset-0 rounded-3xl border border-border/50 bg-secondary/20 shadow-xl overflow-hidden flex items-center justify-center z-10 transition-colors duration-500 hover:border-accent/50" style={{ perspective: "1000px" }}>
                
                {/* Image component using the provided profile photo */}
                <Image
                  src="/profile.jpg"
                  alt="Sewanta Luitel Portrait"
                  fill
                  className="object-cover z-10 group-hover:scale-105 transition-transform duration-700"
                  priority
                />

                {/* Stunning 3D Full Stack Representation (Rendered ON TOP to prevent mobile broken image block) */}
                <motion.div 
                  className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-30 opacity-90 mix-blend-screen"
                  style={{ transformStyle: "preserve-3d" }}
                  animate={{ rotateY: [0, 360] }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                >
                  {/* Top Layer: Frontend (UI/Browser) */}
                  <motion.div 
                    className="absolute w-32 h-32 bg-accent/10 border border-accent/40 rounded-xl flex items-center justify-center backdrop-blur-md shadow-[0_0_15px_rgba(249,115,22,0.2)]"
                    style={{ transform: "rotateX(75deg) translateZ(50px)" }}
                  >
                    <Layout className="w-12 h-12 text-accent/80 drop-shadow-lg" style={{ transform: "rotateX(-75deg)" }} />
                  </motion.div>

                  {/* Middle Layer: Backend (API/Server) */}
                  <motion.div 
                    className="absolute w-32 h-32 bg-blue-500/10 border border-blue-500/40 rounded-xl flex items-center justify-center backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                    style={{ transform: "rotateX(75deg) translateZ(0px)" }}
                  >
                    <Server className="w-12 h-12 text-blue-500/80 drop-shadow-lg" style={{ transform: "rotateX(-75deg)" }} />
                  </motion.div>

                  {/* Bottom Layer: Database */}
                  <motion.div 
                    className="absolute w-32 h-32 bg-green-500/10 border border-green-500/40 rounded-xl flex items-center justify-center backdrop-blur-md shadow-[0_0_15px_rgba(34,197,94,0.2)]"
                    style={{ transform: "rotateX(75deg) translateZ(-50px)" }}
                  >
                    <Database className="w-12 h-12 text-green-500/80 drop-shadow-lg" style={{ transform: "rotateX(-75deg)" }} />
                  </motion.div>

                  {/* Glowing Connection Line */}
                  <div className="absolute w-1 h-32 bg-gradient-to-b from-accent via-blue-500 to-green-500 blur-sm animate-pulse" />
                </motion.div>


              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
