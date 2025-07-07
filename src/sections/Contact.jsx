import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Phone, Send, Github, Linkedin, Twitter } from "lucide-react";
import { SiTelegram } from "react-icons/si";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("pending");
    emailjs
      .sendForm(
        "service_2t9re2o",    // TODO: Replace with your EmailJS service ID
        "template_8aui3rx",   // TODO: Replace with your EmailJS template ID
        form.current,
        "GTTDRyHs5o4WkhVFK"     // TODO: Replace with your EmailJS public key
      )
      .then(
        (result) => {
          setStatus("success");
          form.current.reset();
        },
        (error) => {
          setStatus("error");
        }
      );
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "daniel.ayele@anbesg.com",
      color: "bg-blue-100 text-blue-700",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+251 940 685 349",
      color: "bg-green-100 text-green-700",
    },
    {
      icon: <SiTelegram className="w-5 h-5" />,
      label: "Telegram",
      value: "@Danaye07",
      color: "bg-purple-100 text-purple-700",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "https://twitter.com",
      label: "Twitter",
    },
  ];

  return (
    <section id="contact" className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Ready to work together? Send me a message and let's discuss your next project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-md"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6 text-slate-900 dark:text-white">
              Send Message
            </h3>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-2 w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-2 w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="mt-2 w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="mt-2 w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              >
                <div className="flex items-center justify-center gap-2 text-sm font-medium">
                  <Send className="w-4 h-4" />
                  {status === "pending" ? "Sending..." : "Send Message"}
                </div>
              </button>
            </form>
            {status === "pending" && <p className="text-center text-slate-500 mt-4">Sending...</p>}
            {status === "success" && <p className="text-center text-green-600 mt-4">Message sent successfully!</p>}
            {status === "error" && <p className="text-center text-red-600 mt-4">Failed to send message. Please try again.</p>}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-xl font-semibold mb-6 text-slate-900 dark:text-white">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={`w-12 h-12 flex items-center justify-center rounded-lg ${info.color}`}>
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900 dark:text-white">{info.label}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-300">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4 text-slate-900 dark:text-white">
                Connect With Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-blue-600 hover:text-white transition"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
