import React from 'react';
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      name: "Food Delivery System",
      description:
        "A comprehensive food delivery platform with real-time tracking, secure payments via Chapa, and cross-platform mobile app built with React Native.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      technologies: ["React.js", "Express.js", "React Native", "PostgreSQL", "Chapa"],
      liveDemo: "#",
      github: "#",
    },
    {
      name: "Fixer Hub",
      description:
        "A service marketplace connecting customers with skilled professionals for home repairs and maintenance services, featuring real-time chat and booking system.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      technologies: ["React.js", "Express.js", "React Native", "Supabase", "Next.js"],
      liveDemo: "#",
      github: "#",
    },
    {
      name: "Dr. Admikew Medical Center",
      description:
        "A comprehensive medical center management system with patient records, appointment scheduling, and doctor-patient communication features.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      technologies: ["React.js", "Express.js", "Supabase"],
      liveDemo: "#",
      github: "#",
    },
  ];

  const getTechColor = (tech) => {
    const colors = {
      "React.js": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      "Express.js": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      "React Native": "bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-200",
      "PostgreSQL": "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
      "Chapa": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      "Supabase": "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200",
      "Next.js": "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
    };
    return colors[tech] || "bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-200";
  };

  return (
    <section id="projects" className="py-16 lg:py-24 bg-white dark:bg-slate-900 px-4">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6" />
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A showcase of my recent work and technical capabilities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              className="bg-slate-50 dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.name} preview`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
                  {project.name}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-1 rounded text-xs font-medium ${getTechColor(tech)}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer"
                    onClick={() => window.open(project.liveDemo, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
