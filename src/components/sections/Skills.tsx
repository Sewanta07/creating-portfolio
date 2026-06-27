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
    },
    {
      title: "Frontend",
      icon: <Layout className="w-6 h-6" />,
      skills: ["HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "JavaScript", "React", "Next.js"],
    },
    {
      title: "Database",
      icon: <Database className="w-6 h-6" />,
      skills: ["MySQL", "PostgreSQL", "SQL Server"],
    },
    {
      title: "Tools",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["Git", "GitHub", "VS Code", "Figma"],
    },
  ];

  return (
    <section className="py-24 relative bg-secondary/10" id="skills">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Technical <span className="text-accent">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-8" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise, encompassing modern web development technologies, robust backend frameworks, and essential development tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5, z: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 300 }}
              style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
              className="glass p-6 rounded-3xl border border-border/50 hover:shadow-2xl hover:shadow-accent/20 hover:border-accent/50 transition-all duration-300 group cursor-default"
            >
              <div 
                className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-transparent flex items-center justify-center text-accent mb-6 border border-accent/20 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-500"
                style={{ transform: "translateZ(30px)" }}
              >
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ transform: "translateZ(20px)" }}>{category.title}</h3>
              <ul className="space-y-3" style={{ transform: "translateZ(10px)" }}>
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-150 transition-transform duration-300" />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors font-medium">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
