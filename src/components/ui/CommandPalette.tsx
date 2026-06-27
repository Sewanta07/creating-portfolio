"use client";

import React, { useEffect, useState } from "react";
import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import { Search, User, Briefcase, Code, Terminal, Mail, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { setTheme } = useTheme();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  const navigateTo = (hash: string) => {
    if (window.location.pathname !== "/") {
      router.push(`/${hash}`);
    } else {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center pt-[20vh] bg-background/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-2xl px-4"
          >
            <Command
              className="w-full bg-card rounded-xl border border-border shadow-2xl overflow-hidden glass"
              shouldFilter={true}
            >
              <div className="flex items-center border-b border-border px-4 py-3">
                <Search className="w-5 h-5 text-muted-foreground mr-3" />
                <Command.Input
                  autoFocus
                  placeholder="Type a command or search..."
                  className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground"
                />
                <button
                  onClick={() => setOpen(false)}
                  className="p-1 rounded-md hover:bg-muted text-muted-foreground"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <Command.List className="max-h-[300px] overflow-y-auto p-2">
                <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
                  No results found.
                </Command.Empty>

                <Command.Group heading="Navigation" className="text-xs font-medium text-muted-foreground px-2 py-1 mb-2">
                  <Command.Item
                    onSelect={() => runCommand(() => navigateTo("#about"))}
                    className="flex items-center gap-3 px-3 py-2 text-sm text-foreground rounded-md cursor-pointer hover:bg-accent/10 aria-selected:bg-accent/10 aria-selected:text-accent"
                  >
                    <User className="w-4 h-4" />
                    <span>About Me</span>
                  </Command.Item>
                  <Command.Item
                    onSelect={() => runCommand(() => navigateTo("#skills"))}
                    className="flex items-center gap-3 px-3 py-2 text-sm text-foreground rounded-md cursor-pointer hover:bg-accent/10 aria-selected:bg-accent/10 aria-selected:text-accent"
                  >
                    <Terminal className="w-4 h-4" />
                    <span>Skills</span>
                  </Command.Item>
                  <Command.Item
                    onSelect={() => runCommand(() => navigateTo("#projects"))}
                    className="flex items-center gap-3 px-3 py-2 text-sm text-foreground rounded-md cursor-pointer hover:bg-accent/10 aria-selected:bg-accent/10 aria-selected:text-accent"
                  >
                    <Code className="w-4 h-4" />
                    <span>Projects</span>
                  </Command.Item>
                  <Command.Item
                    onSelect={() => runCommand(() => navigateTo("#experience"))}
                    className="flex items-center gap-3 px-3 py-2 text-sm text-foreground rounded-md cursor-pointer hover:bg-accent/10 aria-selected:bg-accent/10 aria-selected:text-accent"
                  >
                    <Briefcase className="w-4 h-4" />
                    <span>Experience</span>
                  </Command.Item>
                  <Command.Item
                    onSelect={() => runCommand(() => navigateTo("#contact"))}
                    className="flex items-center gap-3 px-3 py-2 text-sm text-foreground rounded-md cursor-pointer hover:bg-accent/10 aria-selected:bg-accent/10 aria-selected:text-accent"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Contact</span>
                  </Command.Item>
                </Command.Group>

                <Command.Separator className="h-px bg-border my-2" />

                <Command.Group heading="Theme" className="text-xs font-medium text-muted-foreground px-2 py-1">
                  <Command.Item
                    onSelect={() => runCommand(() => setTheme("light"))}
                    className="flex items-center gap-3 px-3 py-2 text-sm text-foreground rounded-md cursor-pointer hover:bg-accent/10 aria-selected:bg-accent/10 aria-selected:text-accent"
                  >
                    <Sun className="w-4 h-4" />
                    <span>Light Mode</span>
                  </Command.Item>
                  <Command.Item
                    onSelect={() => runCommand(() => setTheme("dark"))}
                    className="flex items-center gap-3 px-3 py-2 text-sm text-foreground rounded-md cursor-pointer hover:bg-accent/10 aria-selected:bg-accent/10 aria-selected:text-accent"
                  >
                    <Moon className="w-4 h-4" />
                    <span>Dark Mode</span>
                  </Command.Item>
                  <Command.Item
                    onSelect={() => runCommand(() => setTheme("system"))}
                    className="flex items-center gap-3 px-3 py-2 text-sm text-foreground rounded-md cursor-pointer hover:bg-accent/10 aria-selected:bg-accent/10 aria-selected:text-accent"
                  >
                    <Terminal className="w-4 h-4" />
                    <span>System Theme</span>
                  </Command.Item>
                </Command.Group>
              </Command.List>
            </Command>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
