"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, BookOpen, MapPin, Laptop, Award, User, Server, Database, Shield, Globe } from "lucide-react";
import Image from "next/image";

export default function About() {
  const stats = [
    { label: "Projects Completed", value: "4+", icon: <Code2 className="w-5 h-5" /> },
    { label: "Technologies Used", value: "10+", icon: <Laptop className="w-5 h-5" /> },
    { label: "Internship Experience", value: "1", icon: <Award className="w-5 h-5" /> },
    { label: "Degree Completed", value: "BSc", icon: <BookOpen className="w-5 h-5" /> },
  ];

  return (
    <section className="py-24 relative" id="about">
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight mb-4">
            About <span className="text-accent">Me</span>
          </h2>
          <div className="w-20 h-1.5 bg-accent mx-auto rounded-full mb-8 shadow-[0_0_15px_rgba(249,115,22,0.5)]" />
        </motion.div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          
          {/* Bio Box - Span 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 lg:col-span-2 glass p-8 rounded-[2rem] border border-border/50 relative overflow-hidden group hover:border-accent/30 transition-colors"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none group-hover:bg-accent/20 transition-colors duration-700" />
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Code2 className="text-accent" /> Software Developer
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hello! I am <strong className="text-foreground">Sewanta Luitel</strong>, a passionate software developer based in Nepal. I hold a BSc (Hons) Computing degree and specialize in building robust web applications.
              </p>
              <p>
                My expertise lies in Laravel and Full Stack Development, utilizing technologies like Python for backend services and PostgreSQL/MySQL for robust database architectures.
              </p>
            </div>
          </motion.div>

          {/* 3D Profile Box - Span 1, Row Span 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-1 lg:col-span-1 md:row-span-2 lg:row-span-2 glass p-0 rounded-[2rem] border border-border/50 overflow-hidden relative min-h-[300px] flex items-center justify-center group hover:border-accent/50 transition-colors"
            style={{ perspective: "1000px" }}
          >
            <Image 
              src="/profile.jpg" 
              alt="Sewanta Luitel" 
              fill 
              className="object-cover z-10 group-hover:scale-110 transition-transform duration-700" 
            />

            {/* Stunning 3D Full Stack Representation */}
            <motion.div 
              className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-30 opacity-90 mix-blend-screen"
              style={{ transformStyle: "preserve-3d" }}
              animate={{ rotateY: [360, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              {/* Top Layer: Frontend (UI/Browser) */}
              <motion.div 
                className="absolute w-20 h-20 bg-accent/10 border border-accent/40 rounded-xl flex items-center justify-center backdrop-blur-md shadow-[0_0_15px_rgba(249,115,22,0.2)]"
                style={{ transform: "rotateX(75deg) translateZ(35px)" }}
              >
                <Layout className="w-8 h-8 text-accent/80 drop-shadow-lg" style={{ transform: "rotateX(-75deg)" }} />
              </motion.div>

              {/* Middle Layer: Backend (API/Server) */}
              <motion.div 
                className="absolute w-20 h-20 bg-blue-500/10 border border-blue-500/40 rounded-xl flex items-center justify-center backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                style={{ transform: "rotateX(75deg) translateZ(0px)" }}
              >
                <Server className="w-8 h-8 text-blue-500/80 drop-shadow-lg" style={{ transform: "rotateX(-75deg)" }} />
              </motion.div>

              {/* Bottom Layer: Database */}
              <motion.div 
                className="absolute w-20 h-20 bg-green-500/10 border border-green-500/40 rounded-xl flex items-center justify-center backdrop-blur-md shadow-[0_0_15px_rgba(34,197,94,0.2)]"
                style={{ transform: "rotateX(75deg) translateZ(-35px)" }}
              >
                <Database className="w-8 h-8 text-green-500/80 drop-shadow-lg" style={{ transform: "rotateX(-75deg)" }} />
              </motion.div>

              {/* Glowing Connection Line */}
              <div className="absolute w-1 h-20 bg-gradient-to-b from-accent via-blue-500 to-green-500 blur-sm animate-pulse" />
            </motion.div>
          </motion.div>

          {/* Location Box - Span 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-3 lg:col-span-1 glass p-8 rounded-[2rem] border border-border/50 flex flex-col justify-center gap-4 group hover:border-accent/30 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium">Based in</p>
                <p className="font-bold">Itahari, Nepal</p>
              </div>
            </div>
            <div className="w-full h-px bg-border/50 my-2" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium">Degree</p>
                <p className="font-bold text-sm">BSc Hons Computing</p>
              </div>
            </div>
          </motion.div>

          {/* Core Modules Box - Span 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 lg:col-span-2 glass p-8 rounded-[2rem] border border-border/50 group hover:border-accent/30 transition-colors flex flex-col justify-center"
          >
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Laptop className="text-accent w-5 h-5" /> Core Modules
            </h4>
            <div className="grid grid-cols-2 gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2 bg-secondary/20 p-2.5 rounded-xl border border-border/30 group-hover:border-accent/20 transition-colors">
                <Globe className="w-4 h-4 text-accent" /> Web Tech
              </div>
              <div className="flex items-center gap-2 bg-secondary/20 p-2.5 rounded-xl border border-border/30 group-hover:border-accent/20 transition-colors">
                <Database className="w-4 h-4 text-accent" /> Databases
              </div>
              <div className="flex items-center gap-2 bg-secondary/20 p-2.5 rounded-xl border border-border/30 group-hover:border-accent/20 transition-colors">
                <Code2 className="w-4 h-4 text-accent" /> Software Eng.
              </div>
              <div className="flex items-center gap-2 bg-secondary/20 p-2.5 rounded-xl border border-border/30 group-hover:border-accent/20 transition-colors">
                <Shield className="w-4 h-4 text-accent" /> Cybersec
              </div>
            </div>
          </motion.div>

          {/* Stat Boxes */}
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="md:col-span-1 lg:col-span-1 glass p-6 rounded-[2rem] border border-border/50 flex flex-col items-center justify-center text-center group hover:bg-white/5 hover:border-accent/50 transition-all"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-4 group-hover:-translate-y-1 group-hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(249,115,22,0.1)] group-hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]">
                {stat.icon}
              </div>
              <h4 className="text-3xl font-display font-extrabold text-foreground mb-1 group-hover:text-accent transition-colors">
                {stat.value}
              </h4>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                {stat.label}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
