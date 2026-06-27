"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Database, Layout, Code2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Vehicle Service & Rental Management",
      category: "Full Stack",
      tech: ["Laravel", "MySQL", "Bootstrap"],
      features: ["Vehicle Booking", "Payments", "Customer Management", "Reporting Dashboard"],
      image: "/project-vehicle.jpg",
      color: "from-blue-500/20 to-cyan-500/20",
      repo: "https://github.com/sewanta07",
      live: "https://github.com/sewanta07",
    },
    {
      id: 2,
      title: "Inventory Management System",
      category: "Backend",
      tech: ["Laravel", "MySQL"],
      features: ["Products", "Suppliers", "Inventory Reports"],
      image: "/project-inventory.jpg",
      color: "from-emerald-500/20 to-teal-500/20",
      repo: "https://github.com/sewanta07",
      live: "https://github.com/sewanta07",
    },
    {
      id: 3,
      title: "Library Management System",
      category: "Software",
      tech: ["Java", "MySQL"],
      features: ["Books", "Issue/Return", "Fine Management"],
      image: "/project-library.jpg",
      color: "from-purple-500/20 to-pink-500/20",
      repo: "https://github.com/sewanta07",
      live: "https://github.com/sewanta07",
    },
    {
      id: 4,
      title: "Vehicle Parts Management",
      category: "Software",
      tech: [".NET", "SQL Server"],
      features: ["Inventory", "Sales", "Purchases"],
      image: "/project-parts.jpg",
      color: "from-orange-500/20 to-red-500/20",
      repo: "https://github.com/sewanta07",
      live: "https://github.com/sewanta07",
    },
  ];

  const categories = ["All", "Full Stack", "Backend", "Software"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="py-24 relative bg-secondary/10" id="projects">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-8" />
        </motion.div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-accent text-white shadow-glow"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group relative rounded-3xl overflow-hidden glass border border-border/50"
              >
                {/* Project Image placeholder */}
                <div className={`relative h-64 w-full bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 bg-grid opacity-20" />
                  <Code2 className="w-24 h-24 text-muted-foreground/20 group-hover:scale-110 transition-transform duration-500" />
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a href={project.repo} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass border border-border text-foreground flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                      <FaGithub className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                      <Layout className="w-4 h-4 text-muted-foreground" /> Features:
                    </h4>
                    <ul className="flex flex-wrap gap-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground bg-secondary/50 px-2 py-1 rounded-md border border-border/30">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                      <Database className="w-4 h-4 text-muted-foreground" /> Tech Stack:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="text-xs font-medium text-foreground bg-background px-3 py-1.5 rounded-lg border border-border shadow-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
