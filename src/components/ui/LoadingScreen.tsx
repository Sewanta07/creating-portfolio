"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

export default function LoadingScreen({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Keep loading screen for a minimum duration to allow animations
    const timer = setTimeout(() => {
      setIsLoading(false);
      
      // Delay showing children slightly so the exit animation finishes
      setTimeout(() => setShowContent(true), 800); 
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-background pointer-events-auto"
          >
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-accent/10 rounded-full blur-[150px]" />
            <div className="absolute inset-0 bg-grid opacity-5" />

            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10 flex flex-col items-center"
            >
              <div className="relative w-32 h-32 rounded-full border-2 border-accent/30 bg-secondary flex items-center justify-center mb-8 shadow-glow overflow-hidden">
                <div className="absolute inset-0 bg-accent/20 animate-pulseGlow" />
                <User className="w-16 h-16 text-accent/80 drop-shadow-[0_0_15px_rgba(249,115,22,0.8)]" />
              </div>

              <div className="h-8 text-xl md:text-2xl font-display font-bold text-foreground">
                <TypeAnimation
                  sequence={[
                    "Sewanta Luitel",
                    800,
                    "Building Software Solutions...",
                  ]}
                  wrapper="span"
                  speed={50}
                  cursor={true}
                  className="tracking-wide"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Mount children after initial loading starts exiting to prevent layout shifting under the screen */}
      {showContent && children}
    </>
  );
}
