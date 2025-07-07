import React from "react";
// import DarkModeToggle from "./DarkModeToggle"; // Uncomment when implemented

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur border-b border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
      <nav className="container mx-auto max-w-7xl flex items-center justify-between px-4 py-3">
        <a href="#home" className="text-2xl font-bold text-indigo-600 tracking-tight">
          Daniel Ayele
        </a>
        <ul className="hidden md:flex gap-6 text-md font-small">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-indigo-600 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        {/* <DarkModeToggle /> */}
        <div className="ml-4">
          {/* Placeholder for dark mode toggle */}
          <button className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-indigo-100 dark:hover:bg-indigo-900 transition">
            <span className="sr-only">Toggle dark mode</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.93l-.71-.71" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
