import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
// import { useDarkMode } from '../context/ThemeContext';
import {motion, AnimatePresence } from 'framer-motion';

// import { FaMoon, FaSun } from 'react-icons/fa';
// import useDarkMode from "../hooks/useDarkMode";

// Simple modern SVG logo component
function Logo() {
  return (
    <svg
      className="w-8 h-8 mr-2"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Daniel Ayele Logo"
      role="img"
    >
      <circle cx="32" cy="32" r="30" stroke="#4F46E5" strokeWidth="4" />
      <path
        d="M20 44L32 20L44 44"
        stroke="#4F46E5"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Navigation() {
  // const [dark, setDark] = useDarkMode();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // const { darkMode, setDarkMode } = useDarkMode();

  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage?.getItem("theme") === "dark" ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches &&
          !localStorage?.getItem("theme"))
      );
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage?.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage?.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);


  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = (href) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur border-b border-slate-200 dark:border-slate-800 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto max-w-7xl flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center text-indigo-600 dark:text-indigo-400 tracking-tight font-bold text-2xl"
          aria-label="Go to home"
        >
          <Logo />
          <span>Daniel Ayele</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 text-md font-medium">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => handleNavClick(item.href)}
                className="text-slate-700 dark:text-slate-200 hover:text-indigo-600 transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button and Dark Mode Toggle */}
        <div className="flex items-center gap-3 ml-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-indigo-100 dark:hover:bg-indigo-900 transition"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          {/* Dark Mode Toggle Button */}
          {/* <button
            onClick={() => setDarkMode(prev => !prev)}
            className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-yellow-400 transition cursor-pointer"
            aria-label="Toggle dark mode"
          > */}
          <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              onClick={toggleDarkMode}
              className="relative ml-4 p-3 rounded-full bg-gradient-to-r from-yellow-100 to-yellow-200 dark:from-gray-800 dark:to-gray-700 hover:from-yellow-200 hover:to-yellow-300 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl group"
              aria-label="Toggle dark mode"
            >
              <AnimatePresence mode="wait">
                {darkMode ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Sun className="text-yellow-600 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Moon className="text-yellow-600 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
            {/* {darkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />} */}
          {/* </button> */}
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mx-4 mt-2 mb-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-lg">
          <ul className="flex flex-col divide-y divide-slate-100 dark:divide-slate-800">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className="w-full text-left px-5 py-3 font-medium text-slate-700 dark:text-slate-200 hover:bg-indigo-50 dark:hover:bg-slate-800 transition"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
