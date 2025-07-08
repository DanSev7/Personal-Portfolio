import React from "react";
import { motion } from "framer-motion";
import { Code, Users, Rocket } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white dark:bg-slate-800 px-4">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                With a passion for creating robust and scalable applications, I specialize in full-stack development using the MERN stack and React Native for mobile solutions. My journey in software development has been driven by curiosity and a commitment to solving real-world problems through technology.
              </p>

              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                I believe in writing clean, maintainable code and delivering projects that exceed expectations. My approach combines technical expertise with strong communication skills, enabling me to work effectively in team environments and adapt quickly to new challenges and technologies.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                  <div className="text-2xl font-bold text-indigo-600">15+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">3+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">Years Experience</div>
                </div>
              </div>
            </motion.div>

            {/* Image + Icons */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Modern developer workspace"
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-indigo-600/10 p-4 rounded-lg text-center">
                  <Code className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-slate-700 dark:text-slate-300">Clean Code</div>
                </div>
                <div className="bg-green-600/10 p-4 rounded-lg text-center">
                  <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-slate-700 dark:text-slate-300">Teamwork</div>
                </div>
                <div className="bg-purple-600/10 p-4 rounded-lg text-center">
                  <Rocket className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-slate-700 dark:text-slate-300">Innovation</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
