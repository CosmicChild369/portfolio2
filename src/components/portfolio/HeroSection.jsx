import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Terminal, Cpu, Eye } from "lucide-react";

const TYPING_WORDS = ["Computer Systems Engineer", "Robotics Enthusiast", "Computer Vision Developer", "Embedded Systems Builder"];

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = TYPING_WORDS[wordIndex];
    let timeout;
    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % TYPING_WORDS.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIndex]);

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Ambient glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Left: Text */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/5 text-green-400 text-xs font-mono mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-white leading-[0.95]"
          >
            Lindokuhle
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 h-10 flex items-center justify-center lg:justify-start"
          >
            <span className="text-xl sm:text-2xl font-mono gradient-text font-semibold">
              {displayed}
              <span className="animate-pulse text-green-400">|</span>
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 text-neutral-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            Johannesburg, South Africa 🇿🇦 &nbsp;·&nbsp; Building intelligent systems at the intersection of robotics, computer vision, and embedded engineering.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <button
              onClick={() => scrollTo("#projects")}
              className="px-8 py-4 bg-green-500 hover:bg-green-400 text-black font-bold rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-green-500/25 font-mono text-sm"
            >
              &gt; View Projects
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="px-8 py-4 border border-green-500/40 hover:border-green-400 text-green-400 font-semibold rounded-xl transition-all hover:bg-green-500/5 font-mono text-sm"
            >
              Contact Me
            </button>
            <a
              href="https://drive.google.com/file/d/1TU3IhmPbpYGAXvZRwY3eW1niSLuZ_LY3/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-neutral-700 hover:border-neutral-500 text-neutral-400 hover:text-white font-semibold rounded-xl transition-all hover:bg-white/5 font-mono text-sm inline-flex items-center gap-2"
            >
              ↓ View CV
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-16 flex gap-8 justify-center lg:justify-start"
          >
            {[
              { icon: Cpu, label: "Embedded Systems", sub: "Arduino & RPi" },
              { icon: Eye, label: "Computer Vision", sub: "OpenCV & ML" },
              { icon: Terminal, label: "Robotics", sub: "ROS & Control" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center lg:items-start gap-1">
                <s.icon className="w-5 h-5 text-green-400 mb-1" />
                <span className="text-xs font-semibold text-white">{s.label}</span>
                <span className="text-xs text-neutral-500">{s.sub}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Photo card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="flex-shrink-0 relative"
        >
          <div className="relative w-64 h-72 sm:w-80 sm:h-96">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-2xl border border-green-500/30 glow-green" />
            {/* Photo */}
            <div className="w-full h-full rounded-2xl overflow-hidden card-bg border border-green-500/20">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69ac90fd1f1998c49f048116/8f4bda43f_me.jpg"
                alt="Lindokuhle"
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080c10]/60 via-transparent to-transparent" />
            </div>
            {/* Badge */}
            <div className="absolute -bottom-5 -right-5 px-4 py-3 rounded-xl card-bg border border-cyan-500/30 glow-blue text-center">
              <p className="text-cyan-400 font-bold text-lg font-mono">CSE</p>
              <p className="text-neutral-400 text-xs">Graduate</p>
            </div>
            {/* Top badge */}
            <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/30 flex items-center justify-center">
              <Cpu className="w-5 h-5 text-green-400" />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo("#about")}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neutral-600 hover:text-green-400 transition-colors"
      >
        <ArrowDown className="w-5 h-5" />
      </motion.button>
    </section>
  );
}
