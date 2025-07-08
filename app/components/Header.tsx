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
    <motion.div
      className="fixed top-4 left-0 right-0 flex justify-center z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-center gap-x-6 px-8 py-3 bg-background/70 backdrop-blur-lg shadow-xl rounded-full border border-border/30">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => handleScroll(item.targetId)}
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            {item.name}
          </button>
        ))}

        {mounted && (
          <div className="ml-4">
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
      </div>
    </motion.div>
  );
}
