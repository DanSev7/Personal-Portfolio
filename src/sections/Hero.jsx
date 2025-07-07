import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Twitter, Mail, Download } from "lucide-react";
import portfolioImg from '../assets/portfolio.jpg'

export default function Hero() {
  const handleHireMe = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "data:application/pdf;base64,"; // Replace with your base64 PDF
    link.download = "Daniel_Ayele_Resume.pdf";
    link.click();
  };

  return (
    <section
      id="home"
      className="bg-slate-50 dark:bg-slate-900 py-20 lg:py-32"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-3">
              <motion.h1
                className="text-4xl pb-[8px] md:text-5xl lg:text-6xl font-extrabold text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text dark:text-white text-slate-900 drop-shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Daniel Ayele
              </motion.h1>

              <motion.div
                className="text-xl md:text-2xl font-semibold text-slate-700 dark:text-slate-300 h-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <TypeAnimation
                  sequence={[
                    "Full Stack Developer",
                    2000,
                    "MERN Developer",
                    2000,
                    "React Native Developer",
                    2000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                  wrapper="span"
                />
              </motion.div>
            </div>

            <motion.p
              className="text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Passionate developer building modern web and mobile apps. I turn
              ideas into responsive, scalable, and impactful solutions.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button
                onClick={handleHireMe}
                className="inline-flex items-center bg-indigo-600 text-white hover:bg-indigo-500 px-5 py-2 rounded-lg font-semibold transition hover:cursor-pointer"
              >
                <Mail className="w-4 h-4 mr-2" />
                Hire Me
              </button>
              <button
                onClick={handleDownloadResume}
                className="inline-flex items-center border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-5 py-2 rounded-lg font-semibold transition hover:cursor-pointer"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </button>
            </motion.div>

            <motion.div
              className="flex items-center space-x-6 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <a
                href="https://github.com/DanSev7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/daniel-ayele-105a37289/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/DanielAyel21507"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-80 h-80">
              <img
                src={portfolioImg}
                alt="Daniel Ayele - Developer"
                className="rounded-full object-cover w-full h-full border-4 border-white dark:border-slate-700 shadow-2xl z-10 relative"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500/30 to-purple-500/20 blur-2xl animate-pulse" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
