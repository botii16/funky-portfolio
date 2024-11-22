"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const FunkyPortfolio = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 overflow-hidden">
      <Header />
      <AnimatedBackground mousePosition={mousePosition} />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default FunkyPortfolio;

const Header = () => (
  <header className="p-4 flex justify-between items-center">
    <motion.h1
      className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-500"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Funky Dev
    </motion.h1>
    <nav>
      <ul className="flex space-x-4">
        {["Projects", "About", "Contact"].map((item) => (
          <motion.li
            key={item}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href={`#${item.toLowerCase()}`}
              className="text-gray-800 hover:text-pink-500 transition-colors"
            >
              {item}
            </a>
          </motion.li>
        ))}
      </ul>
    </nav>
  </header>
);

const AnimatedBackground = ({
  mousePosition,
}: {
  mousePosition: { x: number; y: number };
}) => (
  <div className="fixed inset-0 pointer-events-none">
    <svg width="100%" height="100%">
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <motion.circle
        cx={mousePosition.x}
        cy={mousePosition.y}
        r="100"
        fill="none"
        stroke="url(#gradient)"
        strokeWidth="2"
        filter="url(#glow)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      />
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ff00ff" />
        <stop offset="100%" stopColor="#00ffff" />
      </linearGradient>
    </svg>
  </div>
);

const Hero = () => (
  <motion.section
    className="text-center py-20"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h2 className="text-6xl font-bold mb-4 relative inline-block">
      Welcome to the Funk Zone
      <Sparkles className="absolute -top-4 -right-4 text-yellow-400" />
    </h2>
    <p className="text-xl text-gray-700 mb-8">
      Where code meets creativity in a neon-lit digital playground
    </p>
    <motion.button
      className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-blue-600 transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Explore the Funk
    </motion.button>
  </motion.section>
);

const Projects = () => (
  <section id="projects" className="py-20">
    <h3 className="text-4xl font-bold mb-10 text-center">Funky Projects</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-lg"
          whileHover={{ scale: 1.05, rotate: 2 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <h4 className="text-2xl font-semibold mb-2">Project {i}</h4>
          <p className="text-gray-700">
            A funky description for this amazing project goes here.
          </p>
        </motion.div>
      ))}
    </div>
  </section>
);

const Contact = () => (
  <motion.section
    id="contact"
    className="py-20 text-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.5 }}
  >
    <h3 className="text-4xl font-bold mb-10">Get in Touch</h3>
    <p className="text-xl mb-8">
      Ready to add some funk to your project? Let's collaborate!
    </p>
    <motion.a
      href="mailto:ujviboti@gmail.com"
      className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
      whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255, 0, 255, 0.5)" }}
      whileTap={{ scale: 0.95 }}
    >
      Send a Message
    </motion.a>
  </motion.section>
);
