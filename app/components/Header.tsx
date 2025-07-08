"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const navItems = [
    { name: "AP", targetId: "hero" },
    { name: "Story", targetId: "story" },
    { name: "Expertise", targetId: "features" },
    { name: "Projects", targetId: "projects" },
    { name: "Experiences", targetId: "experiences" },
    { name: "Contact", targetId: "contact" },
  ];

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-center p-6 lg:px-8 relative"
        aria-label="Global"
      >
        <div className="flex gap-x-12">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleScroll(item.targetId)}
              className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
            >
              {item.name}
            </button>
          ))}
        </div>

        {mounted && (
          <div className="absolute right-6">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full p-2 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              {theme === "dark" ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        )}
      </nav>
    </motion.header>
  );
}
