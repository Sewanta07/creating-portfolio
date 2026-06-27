import React from "react";
import Link from "next/link";
import { Terminal } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-12 bg-accent/20 blur-[80px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 group">
            <Terminal className="w-6 h-6 text-accent transition-transform group-hover:rotate-12" />
            <span className="font-display font-bold text-lg">Sewanta.</span>
          </div>

          <div className="text-center md:text-left">
            {/* Tagline or empty space */}
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="https://github.com/sewanta07" target="_blank" className="hover:text-accent transition-colors">
              GitHub
            </Link>
            <Link href="https://np.linkedin.com/in/sewanta-luitel-aa00512b7" target="_blank" className="hover:text-accent transition-colors">
              LinkedIn
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Sewanta Luitel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
