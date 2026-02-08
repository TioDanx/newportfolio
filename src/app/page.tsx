"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Zap,
  Palette,
  ArrowDown,
  Menu,
  X,
  Sun,
  Moon,
  Sparkles,
  Terminal,
  Globe,
} from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Work" },
    { id: "contact", label: "Contact" },
  ];

  const skills = [
    {
      name: "Next.js",
      level: 100,
      icon: Code,
      color: "from-gray-600 to-gray-800",
    },
    {
      name: "React.js",
      level: 100,
      icon: Zap,
      color: "from-blue-500 to-cyan-600",
    },

    {
      name: "TailwindCSS",
      level: 100,
      icon: Palette,
      color: "from-cyan-500 to-blue-600",
    },
    {
      name: "TypeScript",
      level: 100,
      icon: Terminal,
      color: "from-blue-600 to-indigo-600",
    },
    {
      name: "Framer Motion",
      level: 100,
      icon: Sparkles,
      color: "from-yellow-500 to-orange-600",
    },
  ];

  const projects = [
    {
      title: "AI CV Generator",
      description:
        "AI-driven web application built with the Gemini API to generate personalized, ATS-optimized resumes in professional PDF format using jsPDF. Currently using it to craft my own job applications.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Gemini API", "Auth0"],
      link: "https://cvai-campuzano.vercel.app",
      github: "https://github.com/TioDanX/CVAI",
      gradient: "from-purple-500 to-indigo-600",
    },
    {
      title: "Flowbase – AI SaaS Landing",
      description:
        "High-converting, mobile-first landing page for an AI-powered workflow automation SaaS. Built with a minimalist dark UI, smooth Framer Motion animations, and strong performance optimization across all browsers, including Safari.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      link: "https://saasexample-kohl.vercel.app/",
      gradient: "from-emerald-500 to-green-600",
    },
    {
      title: "Law Firm Landing Page",
      description:
        "Professional, performance-optimized landing page for a law firm. Designed with a mobile-first approach, clean and minimalist UI, fast load times, and clear CTAs focused on converting visitors into client inquiries.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      link: "https://lawyerlanding.vercel.app/",
      gradient: "from-slate-500 to-gray-700",
    },
    {
      title: "PsicoAI Chatbot",
      description:
        "AI-powered therapy chat that simulates a psychologist conversation, featuring Google authentication and Firestore storage.",
      tech: ["Next.js", "Tailwind CSS", "Firestore", "Gemini API", "Auth0"],
      link: "https://psicoai-tan.vercel.app/",
      github: "https://github.com/TioDanX/psicoai",
      gradient: "from-pink-500 to-rose-600",
    },
    {
      title: "React Tetris",
      description:
        "Classic Tetris game built with React, featuring smooth animations, keyboard controls, and fully custom game logic.",
      tech: ["React", "TypeScript", "CSS Modules"],
      link: "https://react-tetris.vercel.app",
      github: "https://github.com/TioDanx/tetris-app",
      gradient: "from-emerald-500 to-teal-600",
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-3xl animate-pulse"
          style={{
            left: `${mousePosition.x * 0.05}px`,
            top: `${mousePosition.y * 0.05}px`,
            transform: "translate(-50%, -50%)",
          }}
        />
        <div
          className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-400/20 blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl z-50 border-b border-white/10 dark:border-slate-800/50"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-light tracking-tight text-slate-900 dark:text-white"
            >
              <span className="font-medium">Daniel</span> Campuzano
            </motion.div>

            <div className="hidden md:flex items-center space-x-12">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative text-sm font-light tracking-wide transition-all duration-300 hover:text-slate-900 dark:hover:text-white cursor-pointer ${
                    activeSection === item.id
                      ? "text-slate-900 dark:text-white"
                      : "text-slate-500 dark:text-slate-400"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    />
                  )}
                </motion.button>
              ))}
              {mounted && (
                <motion.button
                  initial={{ opacity: 0, rotate: -180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ delay: 0.4 }}
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all duration-300"
                  aria-label="Toggle theme"
                >
                  <motion.div
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                  </motion.div>
                </motion.button>
              )}
            </div>

            <div className="md:hidden flex items-center space-x-4">
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              )}
              <button
                className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-t border-white/10 dark:border-slate-800/50"
            >
              <div className="px-6 py-4 space-y-2">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-4 py-3 text-sm font-light rounded-lg transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-800 ${
                      activeSection === item.id
                        ? "text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800"
                        : "text-slate-500 dark:text-slate-400"
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 pt-20 relative"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto text-center z-10 pt-10"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 mb-8 shadow-lg"
            >
              <img
                src="/logo.png"
                alt="Daniel Campuzano Logo"
                className="w-12 h-12 rounded-lg object-cover"
              />
            </motion.div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl font-light tracking-tight text-slate-900 dark:text-white mb-6"
          >
            Hi, I'm{" "}
            <span className="font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Daniel Campuzano
            </span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl font-light text-slate-600 dark:text-slate-300 mb-8"
          >
            Frontend Developer
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Crafting exceptional digital experiences with modern web
            technologies. Specialized in building fast, accessible, and
            beautiful applications using Next.js and Tailwind CSS.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 rounded-full px-8 py-3 text-base font-light"
              >
                View My Work
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full px-8 py-3 text-base font-light"
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6"
          >
            {[
              { icon: Github, href: "https://github.com/TioDanx" },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/daniel-campuzano-7149552b7/",
              },
              { icon: Mail, href: "mailto:danicampu56@gmail.com" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ArrowDown
              className="text-slate-400 dark:text-slate-500"
              size={20}
            />
          </motion.div>
        </motion.div>
      </section>

      <section id="about" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-slate-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                I'm a Frontend Developer passionate about building clean,
                scalable, and mobile-first web applications. I care deeply about
                writing code that’s easy to maintain and ensuring a smooth
                experience on every device.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                I take pride in crafting thoughtful user interfaces that combine
                modern design with solid performance. My approach focuses on
                clean architecture, simplicity, and long-term quality.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                I'm currently looking to join a company where I can keep
                growing, learn from talented people, and contribute to
                meaningful projects while continuing to push my skills forward.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-light text-slate-900 dark:text-white mb-8">
                Technical Expertise
              </h3>
              <div className="space-y-6">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-8 h-8 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center`}
                          >
                            <Icon size={16} className="text-white" />
                          </div>
                          <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                            {skill.name}
                          </span>
                        </div>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="py-24 px-6 bg-gradient-to-b from-transparent to-slate-50/50 dark:to-slate-900/50"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-slate-900 dark:text-white mb-4">
              Personal Projects
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                  <CardContent className="p-8">
                    <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border-0"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex space-x-6">
                      <motion.a
                        href={project.link}
                        target="blank"
                        className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
                        whileHover={{ x: 5 }}
                      >
                        <ExternalLink size={16} />
                        <span className="text-sm font-light">Live Demo</span>
                      </motion.a>
                      {project.github && <motion.a
                        href={project.github}
                        className="flex items-center space-x-2 text-slate-600 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors group"
                        whileHover={{ x: 5 }}
                      >
                        <Github size={16} />
                        <span className="text-sm font-light">Code</span>
                      </motion.a>}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="py-24 px-6 relative min-h-[100dvh] flex justify-center items-center"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-slate-900 dark:text-white mb-6">
              Let's Create Something Amazing
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              I'm always excited to work on new projects and collaborate with
              creative minds. Whether you have a specific project in mind or
              just want to chat about technology, I'd love to hear from you.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="mailto:danicampu56@gmail.com">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 rounded-full px-8 py-4 text-base font-light"
                  >
                    <Mail className="mr-3" size={20} />
                    Mail
                  </Button>
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="https://www.linkedin.com/in/daniel-campuzano-7149552b7/"
                  target="blank"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full px-8 py-4 text-base font-light"
                  >
                    <Linkedin className="mr-3" size={20} />
                    LinkedIn
                  </Button>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-slate-950 backdrop-blur-sm text-white py-12 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-2 mb-4"
          >
            <Sparkles size={16} className="text-blue-400" />
            <p className="text-slate-400 font-light">
              © 2025 Daniel Campuzano. Crafted with passion and modern web
              technologies.
            </p>
            <Sparkles size={16} className="text-purple-400" />
          </motion.div>
          <p className="text-slate-500 text-sm font-light">
            Built with Next.js, Tailwind CSS, and lots of ☕
          </p>
        </div>
      </footer>
    </div>
  );
}
