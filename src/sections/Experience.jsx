import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      title: "Freelance Full Stack Developer",
      company: "Self-Employed",
      period: "2022 - Present",
      responsibilities: [
        "Developed and deployed 15+ full-stack web applications using MERN stack",
        "Built cross-platform mobile applications with React Native for iOS and Android",
        "Integrated payment gateways including Chapa for Ethiopian market solutions",
        "Collaborated with clients to deliver projects on time and within budget",
      ],
    },
    {
      title: "Junior Software Developer",
      company: "Tech Solutions Inc.",
      period: "2021 - 2022",
      responsibilities: [
        "Contributed to the development of enterprise web applications using React.js and Node.js",
        "Participated in agile development processes and code reviews",
        "Assisted in database design and optimization using PostgreSQL",
        "Maintained and updated existing codebases while implementing new features",
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto"></div>
          </motion.div>

          {/* Timeline Cards */}
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-indigo-600">
                      {experience.title}
                    </h3>
                    <p className="text-base text-slate-600 dark:text-slate-300">
                      {experience.company}
                    </p>
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400 mt-2 md:mt-0">
                    {experience.period}
                  </div>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-300">
                  {experience.responsibilities.map((resp, respIndex) => (
                    <motion.li
                      key={respIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.2 + respIndex * 0.1,
                      }}
                      viewport={{ once: true }}
                    >
                      {resp}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
