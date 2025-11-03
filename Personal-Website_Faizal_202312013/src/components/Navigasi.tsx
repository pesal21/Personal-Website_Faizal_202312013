"use client";

import { useEffect, useState } from "react";

type ThemeMode = "light" | "dark";

function applyTheme(mode: ThemeMode) {
  const root = document.documentElement;
  if (mode === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
}

export default function Navigasi() {
  const [theme, setTheme] = useState<ThemeMode | null>(null);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem(
      "theme"
    ) as ThemeMode | null;
    if (storedTheme === "light" || storedTheme === "dark") {
      applyTheme(storedTheme);
      setTheme(storedTheme);
      return;
    }

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialTheme = prefersDark ? "dark" : "light";
    applyTheme(initialTheme);
    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(current || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleTheme = () => {
    if (!theme) return;
    const nextTheme: ThemeMode = theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    window.localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

  const navItems = [
    { id: "about", label: "About", icon: "👤" },
    { id: "projects", label: "Projects", icon: "💼" },
    { id: "contact", label: "Contact", icon: "📞" },
  ];

  return (
    <nav className="p-1.5 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-700/50 flex items-center gap-x-1 rounded-2xl shadow-lg fixed bottom-6 md:bottom-auto md:top-8 left-1/2 -translate-x-1/2 z-50">
      {navItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={`px-4 py-2.5 rounded-xl transition-all duration-200 ${
            activeSection === item.id
              ? "bg-blue-500 text-white shadow-md"
              : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800"
          }`}
        >
          <span className="md:hidden text-lg">{item.icon}</span>
          <span className="hidden md:inline text-sm font-medium">
            {item.label}
          </span>
        </a>
      ))}
      <div className="h-6 w-px bg-zinc-300 dark:bg-zinc-600 mx-1"></div>
      <button
        onClick={handleToggleTheme}
        aria-label="Toggle theme"
        className="p-2.5 rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-200"
        disabled={!theme}
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </nav>
  );
}
