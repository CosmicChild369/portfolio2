import React, { useState, useEffect } from "react";
import Navbar from "@/components/portfolio/Navbar";

export default function Layout({ children }) {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored) return stored === "dark";
      return true; // default dark for tech vibe
    }
    return true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <div className="min-h-screen bg-[#080c10] dark:bg-[#080c10] text-neutral-100 transition-colors duration-300">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap');
        * { font-family: 'Inter', system-ui, sans-serif; }
        code, .mono { font-family: 'JetBrains Mono', monospace; }
        html { scroll-behavior: smooth; }
        ::selection { background: rgba(0,255,128,0.25); }

        .neon-green { color: #00ff80; }
        .neon-blue { color: #00d4ff; }
        .neon-border { border-color: rgba(0,255,128,0.3); }

        .glow-green {
          box-shadow: 0 0 20px rgba(0,255,128,0.15), 0 0 60px rgba(0,255,128,0.05);
        }
        .glow-blue {
          box-shadow: 0 0 20px rgba(0,212,255,0.15), 0 0 60px rgba(0,212,255,0.05);
        }
        .card-bg {
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(10px);
        }
        .gradient-text {
          background: linear-gradient(135deg, #00ff80, #00d4ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .grid-bg {
          background-image: 
            linear-gradient(rgba(0,255,128,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,128,0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #080c10; }
        ::-webkit-scrollbar-thumb { background: rgba(0,255,128,0.3); border-radius: 10px; }
      `}</style>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      {children}
    </div>
  );
}
