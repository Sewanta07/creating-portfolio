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
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            About <span className="text-accent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-8" />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
          
          {/* Left: 3D Circular Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/3 flex justify-center"
          >
            <motion.div 
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-[2rem] border border-border/50 shadow-xl overflow-hidden flex items-center justify-center bg-secondary/20 transition-all duration-500 hover:border-accent/50" style={{ perspective: "1000px" }}
            >
              
              {/* 3D Wireframe Cube Placeholder */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-50"
                style={{ transformStyle: "preserve-3d" }}
                animate={{ rotateX: [360, 0], rotateY: [360, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-24 h-24 border border-accent/40 rounded-lg absolute bg-accent/5" style={{ transform: "translateZ(48px)" }} />
                <div className="w-24 h-24 border border-accent/40 rounded-lg absolute bg-accent/5" style={{ transform: "translateZ(-48px)" }} />
                <div className="w-24 h-24 border border-accent/40 rounded-lg absolute bg-accent/5" style={{ transform: "rotateY(90deg) translateZ(48px)" }} />
                <div className="w-24 h-24 border border-accent/40 rounded-lg absolute bg-accent/5" style={{ transform: "rotateY(90deg) translateZ(-48px)" }} />
                <div className="w-24 h-24 border border-accent/40 rounded-lg absolute bg-accent/5" style={{ transform: "rotateX(90deg) translateZ(48px)" }} />
                <div className="w-24 h-24 border border-accent/40 rounded-lg absolute bg-accent/5" style={{ transform: "rotateX(90deg) translateZ(-48px)" }} />
              </motion.div>

              {/* Image component using the provided profile photo */}
              <Image 
                src="/profile.jpg" 
                alt="Sewanta Luitel" 
                fill 
                className="object-cover z-10 group-hover:scale-110 transition-transform duration-500" 
              />

            </motion.div>
          </motion.div>

          {/* Right: Text and Stats */}
          <div className="w-full lg:w-2/3 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="glass p-8 rounded-3xl border border-border/50 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />
              
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Code2 className="text-accent" /> Software Developer
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hello! I am <strong className="text-foreground">Sewanta Luitel</strong>, a passionate software developer based in Nepal. I hold a BSc (Hons) Computing degree and specialize in building robust web applications.
                </p>
                <p>
                  My expertise lies in Laravel and Full Stack Development, utilizing technologies like Python for backend services and PostgreSQL/MySQL for robust database architectures. I love creating scalable, practical solutions that solve real-world problems. Whether it&apos;s designing a responsive frontend or engineering a complex backend, I enjoy every step of the development process.
                </p>
                <p>
                  I consider myself a continuous learner, always exploring new technologies and modern design patterns to stay ahead in the rapidly evolving tech landscape.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-border/50">
                <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <BookOpen className="text-accent w-5 h-5" /> BSc Hons Computing (London Met University) Core Modules
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2 bg-secondary/20 p-2 rounded-lg border border-border/30">
                    <Globe className="w-4 h-4 text-accent" /> Web Technologies
                  </div>
                  <div className="flex items-center gap-2 bg-secondary/20 p-2 rounded-lg border border-border/30">
                    <Database className="w-4 h-4 text-accent" /> Database Systems
                  </div>
                  <div className="flex items-center gap-2 bg-secondary/20 p-2 rounded-lg border border-border/30">
                    <Code2 className="w-4 h-4 text-accent" /> Software Engineering
                  </div>
                  <div className="flex items-center gap-2 bg-secondary/20 p-2 rounded-lg border border-border/30">
                    <Server className="w-4 h-4 text-accent" /> Computer Systems & Networks
                  </div>
                  <div className="flex items-center gap-2 bg-secondary/20 p-2 rounded-lg border border-border/30">
                    <Shield className="w-4 h-4 text-accent" /> Cybersecurity
                  </div>
                  <div className="flex items-center gap-2 bg-secondary/20 p-2 rounded-lg border border-border/30">
                    <Laptop className="w-4 h-4 text-accent" /> Final Year Project
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm font-medium bg-secondary/30 px-4 py-2 rounded-full border border-border/50">
                  <MapPin className="w-4 h-4 text-accent" />
                  Itahari, Nepal
                </div>
                <div className="flex items-center gap-2 text-sm font-medium bg-secondary/30 px-4 py-2 rounded-full border border-border/50">
                  <BookOpen className="w-4 h-4 text-accent" />
                  BSc (Hons) Computing
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass p-6 rounded-2xl border border-border/50 hover:bg-white/5 hover:border-accent/50 transition-all group"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <h4 className="text-2xl md:text-4xl font-display font-bold text-foreground mb-1 md:mb-2 group-hover:text-accent transition-colors">
                    {stat.value}
                  </h4>
                  <p className="text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
