"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Briefcase, Globe } from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

export default function SocialHub() {
  const socials = [
    {
      name: "GitHub",
      url: "https://github.com/sewanta07",
      icon: <FaGithub className="w-8 h-8" />,
      color: "hover:bg-[#333] hover:border-[#333]",
    },
    {
      name: "LinkedIn",
      url: "https://np.linkedin.com/in/sewanta-luitel-aa00512b7",
      icon: <FaLinkedin className="w-8 h-8" />,
      color: "hover:bg-[#0077b5] hover:border-[#0077b5]",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/sewanta07/",
      icon: <FaFacebook className="w-8 h-8" />,
      color: "hover:bg-[#1877f2] hover:border-[#1877f2]",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/sewanta07",
      icon: <FaInstagram className="w-8 h-8" />,
      color: "hover:bg-[#e4405f] hover:border-[#e4405f]",
    },
    {
      name: "Freelancer",
      url: "https://www.freelancer.com/u/sewantaluitel",
      icon: <Globe className="w-8 h-8" />,
      color: "hover:bg-[#29b2fe] hover:border-[#29b2fe]",
    },
    {
      name: "Upwork",
      url: "https://www.upwork.com/freelancers/~0155fd719240c1dbec",
      icon: <Briefcase className="w-8 h-8" />,
      color: "hover:bg-[#14a800] hover:border-[#14a800]",
    },
  ];

  return (
    <section className="py-24 relative bg-secondary/10" id="socials">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Connect <span className="text-accent">With Me</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-8" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {socials.map((social, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1, type: "spring" }}
            >
              <Link
                href={social.url}
                target="_blank"
                className={`flex flex-col items-center justify-center gap-4 w-32 h-32 md:w-40 md:h-40 glass rounded-3xl border border-border/50 transition-all duration-300 group hover:-translate-y-2 ${social.color} hover:text-white`}
              >
                <div className="text-muted-foreground group-hover:text-white transition-colors duration-300 group-hover:scale-110">
                  {social.icon}
                </div>
                <span className="font-semibold text-sm md:text-base">
                  {social.name}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
