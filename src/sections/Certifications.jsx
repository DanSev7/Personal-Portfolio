import React from "react";
import { motion } from "framer-motion";
import { Award, Trophy, Code, Smartphone, Download, ExternalLink } from "lucide-react";

export default function Certifications() {
  const certifications = [
    {
      title: "Meta Frontend Developer Certification",
      issuer: "Meta (Facebook) • 2023",
      description:
        "Comprehensive certification covering React, HTML, CSS, JavaScript, and modern frontend development practices.",
      icon: <Award className="h-6 w-6" />,
      color: "text-indigo-600",
      certificateUrl: "#",
      hasFile: true,
    },
    {
      title: "Hackathon Winner - 2023",
      issuer: "Ethiopian Tech Challenge • 2023",
      description:
        "First place in national hackathon for developing innovative fintech solution using React Native and blockchain technology.",
      icon: <Trophy className="h-6 w-6" />,
      color: "text-green-600",
      certificateUrl: "#",
      hasFile: true,
    },
    {
      title: "Full Stack Web Development",
      issuer: "FreeCodeCamp • 2022",
      description:
        "300+ hour certification program covering full-stack development with JavaScript, Node.js, and database management.",
      icon: <Code className="h-6 w-6" />,
      color: "text-purple-600",
      certificateUrl: "https://freecodecamp.org/certification/example",
      hasFile: false,
    },
    {
      title: "React Native Specialist",
      issuer: "Expo & React Native Community • 2023",
      description:
        "Advanced certification in React Native development covering navigation, state management, and native module integration.",
      icon: <Smartphone className="h-6 w-6" />,
      color: "text-indigo-600",
      certificateUrl: "#",
      hasFile: true,
    },
  ];

  const handleDownloadCertificate = (certTitle) => {
    const link = document.createElement("a");
    link.href = "data:application/pdf;base64,";
    link.download = `${certTitle.replace(/\s+/g, "_")}_Certificate.pdf`;
    link.click();
  };

  const handleViewCertificate = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section
      id="certifications"
      className="py-16 lg:py-24 bg-white dark:bg-slate-800 px-4"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              Certifications & Achievements
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                className="bg-slate-50 dark:bg-slate-700 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <div className={`mr-4 ${cert.color}`}>{cert.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                  {cert.description}
                </p>

                <div className="flex">
                  {cert.hasFile ? (
                    <button
                      onClick={() => handleDownloadCertificate(cert.title)}
                      className="flex items-center text-xs font-medium px-3 py-2 rounded-md border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-600 transition w-full justify-center"
                    >
                      <Download className="w-3 h-3 mr-2" />
                      Download
                    </button>
                  ) : (
                    <button
                      onClick={() => handleViewCertificate(cert.certificateUrl)}
                      className="flex items-center text-xs font-medium px-3 py-2 rounded-md border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-600 transition w-full justify-center"
                    >
                      <ExternalLink className="w-3 h-3 mr-2" />
                      View Online
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
