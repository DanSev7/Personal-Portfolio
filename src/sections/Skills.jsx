import React from "react";
import { motion } from "framer-motion";
import { Code, Server, Smartphone } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiPostgresql,
  SiSupabase,
  SiGit,
  SiFlutter,
  SiHashicorp,
  SiMysql,
} from "react-icons/si";
import {
  FaServer,
  FaEnvelope,
  FaCogs,
  FaCreditCard,
  FaDatabase,
  FaTools,
} from "react-icons/fa";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="h-6 w-6" />,
      color: "text-indigo-600",
      skills: [
        { name: "React.js", icon: <SiReact className="text-blue-500" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
        { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
      ],
    },
    {
      title: "Backend",
      icon: <Server className="h-6 w-6" />,
      color: "text-green-600",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-700 dark:text-gray-300" /> },
        { name: "PHP", icon: <SiPhp className="text-purple-500" /> },
        { name: "Java", icon: <div className="w-4 h-4 bg-red-500 rounded-full" /> },
        { name: "Spring Boot", icon: <div className="w-4 h-4 bg-green-600 rounded-full" /> },
      ],
    },
    {
      title: "Mobile",
      icon: <Smartphone className="h-6 w-6" />,
      color: "text-purple-600",
      skills: [
        { name: "React Native", icon: <SiReact className="text-blue-500" /> },
        { name: "Flutter", icon: <SiFlutter className="text-blue-400" /> },
      ],
    },
    {
      title: "Database",
      icon: <FaDatabase className="h-6 w-6" />,
      color: "text-blue-600",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-800" /> },
        { name: "MySQL", icon: <SiMysql className="text-sky-600" /> },
        { name: "Supabase", icon: <SiSupabase className="text-green-700" /> },
      ],
    },
    {
      title: "Others",
      icon: <FaTools className="h-6 w-6" />,
      color: "text-yellow-600",
      skills: [
        { name: "Git", icon: <SiGit className="text-orange-500" /> },
        { name: "EmailJS", icon: <FaEnvelope className="text-pink-500" /> },
        { name: "Nodemailer", icon: <FaServer className="text-green-700" /> },
        { name: "REST APIs", icon: <FaCogs className="text-indigo-600" /> },
        { name: "Chapa Payment Gateway", icon: <FaCreditCard className="text-blue-600" /> },
        { name: "HashiCorp Vault", icon: <SiHashicorp className="text-yellow-700" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-900 px-4">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              Skills & Tech Stack
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6" />
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <div className={`mr-3 ${category.color}`}>{category.icon}</div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="flex items-center justify-between"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: categoryIndex * 0.2 + skillIndex * 0.1,
                      }}
                      viewport={{ once: true }}
                    >
                      <span className="flex items-center gap-2 text-slate-700 text-md dark:text-slate-300">
                        {skill.icon}
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
