"use client";

import React from "react";
import { motion } from "framer-motion";
import { Server, Layout, Database, Wrench } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Backend",
      icon: <Server className="w-6 h-6" />,
      skills: ["Laravel", "Django", "Python", "Java", "C# / .NET"],
      className: "md:col-span-1 lg:col-span-5",
    },
    {
      title: "Frontend",
      icon: <Layout className="w-6 h-6" />,
      skills: ["HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "JavaScript", "React", "Next.js"],
      className: "md:col-span-2 lg:col-span-7",
    },
    {
      title: "Database",
      icon: <Database className="w-6 h-6" />,
      skills: ["MySQL", "PostgreSQL", "SQL Server"],
      className: "md:col-span-1 lg:col-span-7",
    },
    {
      title: "Tools",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["Git", "GitHub", "VS Code", "Figma"],
      className: "md:col-span-2 lg:col-span-5",
    },
  ];

  return (
    <section className="py-24 relative bg-background" id="skills">
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight mb-4">
            Technical <span className="text-accent">Skills</span>
          </h2>
          <div className="w-20 h-1.5 bg-accent mx-auto rounded-full mb-8 shadow-[0_0_15px_rgba(249,115,22,0.5)]" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A comprehensive overview of my technical expertise, encompassing modern web development technologies, robust backend frameworks, and essential development tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2, z: 10 }}
              transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 300 }}
              style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
              className={`glass p-8 rounded-[2rem] border border-border/50 hover:shadow-2xl hover:shadow-accent/20 hover:border-accent/50 transition-all duration-300 group cursor-default overflow-hidden relative ${category.className || "lg:col-span-6"}`}
            >
              {/* Subtle background glow on hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none group-hover:bg-accent/10 transition-colors duration-500" />
              
              <div 
                className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-transparent flex items-center justify-center text-accent mb-6 border border-accent/20 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-[0_0_15px_rgba(249,115,22,0.1)]"
                style={{ transform: "translateZ(30px)" }}
              >
                {category.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-6" style={{ transform: "translateZ(20px)" }}>{category.title}</h3>
              
              <div className="flex flex-wrap gap-3" style={{ transform: "translateZ(10px)" }}>
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="px-4 py-2 bg-secondary/30 rounded-xl text-sm font-medium text-muted-foreground border border-border/50 group-hover:border-accent/30 group-hover:text-foreground transition-all duration-300 hover:bg-accent/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
