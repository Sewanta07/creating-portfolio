"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Server, Database, Code, ShieldCheck, Rocket } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Portfolio Websites",
      description: "Custom-designed, highly interactive portfolio websites to showcase your work and personal brand.",
      icon: <Globe className="w-8 h-8" />,
    },
    {
      title: "Business Websites",
      description: "Scalable and SEO-optimized business websites tailored to your company's unique needs.",
      icon: <Rocket className="w-8 h-8" />,
    },
    {
      title: "Laravel Applications",
      description: "Robust, secure, and scalable enterprise applications built with the Laravel framework.",
      icon: <Code className="w-8 h-8" />,
    },
    {
      title: "Management Systems",
      description: "Custom ERPs, inventory management, and reporting dashboards to streamline operations.",
      icon: <ShieldCheck className="w-8 h-8" />,
    },
    {
      title: "API Development",
      description: "RESTful API design and development for seamless integration between systems.",
      icon: <Server className="w-8 h-8" />,
    },
    {
      title: "Database Design",
      description: "Efficient database architecture and optimization for MySQL and SQL Server.",
      icon: <Database className="w-8 h-8" />,
    },
  ];

  return (
    <section className="py-24 relative" id="services">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            My <span className="text-accent">Services</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-8" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Providing comprehensive software development services, from custom web applications to robust database design and API integrations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-3xl border border-border/50 hover:bg-white/5 group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
