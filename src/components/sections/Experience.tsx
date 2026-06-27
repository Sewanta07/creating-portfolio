"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Building2, ChevronRight } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      year: "2024",
      role: "Intern Software Developer",
      company: "Kyanite Software",
      location: "Nepal",
      responsibilities: [
        "Requirement Analysis",
        "Development",
        "Module Testing",
        "Debugging",
        "Documentation",
        "Team Collaboration",
      ],
    },
    {
      year: "2024 - Present",
      role: "Founder & Full Stack Developer",
      company: "Self-Employed / Own Startup",
      location: "Nepal",
      responsibilities: [
        "Architecting robust scalable web solutions",
        "Leading end-to-end full stack development",
        "Managing client relationships and product delivery",
        "Database design and API integration",
        "Business strategy and execution",
      ],
    },
  ];

  return (
    <section className="py-24 relative" id="experience">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Professional <span className="text-accent">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-8" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline Line for Desktop */}
              <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-border -translate-x-[0.5px]" />

              <div className="md:flex items-center justify-between w-full">
                
                {/* Left Side (Desktop) / Top Side (Mobile) */}
                <div className="md:w-5/12 mb-8 md:mb-0 text-left md:text-right pr-0 md:pr-8 relative">
                  <div className="text-2xl font-bold text-accent mb-2">{exp.year}</div>
                  <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                  <div className="flex flex-wrap items-center md:justify-end gap-4 text-muted-foreground text-sm font-medium">
                    <span className="flex items-center gap-1">
                      <Building2 className="w-4 h-4" /> {exp.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" /> {exp.location}
                    </span>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-background border-4 border-accent -translate-x-[15px] md:-translate-x-1/2 mt-1 md:mt-0 z-10 shadow-glow" />

                {/* Right Side (Desktop) / Bottom Side (Mobile) */}
                <div className="md:w-5/12 pl-0 md:pl-8">
                  <div className="glass p-6 rounded-2xl border border-border/50">
                    <h4 className="font-semibold mb-3">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground text-sm">
                          <ChevronRight className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
