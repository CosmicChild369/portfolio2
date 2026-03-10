import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/lindokuhle-promise-maphonyane", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/CosmcChild369", label: "GitHub" },
  { icon: Twitter, href: "https://x.com/lindokuhle", label: "X / Twitter" },
  { icon: Mail, href: "mailto:lindokuhlemaphonyane976@gmail.com", label: "Email" },
];

const scrollTo = (id) => {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const NAV = ["#hero", "#about", "#skills", "#projects", "#contact"];
const NAV_LABELS = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Footer() {
  return (
    <footer className="border-t border-neutral-900 bg-[#040608]">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-cyan-400 flex items-center justify-center text-black font-bold text-sm">
                L
              </div>
              <span className="text-lg font-bold text-white">
                Lindokuhle<span className="text-green-400">.</span>
              </span>
            </div>
            <p className="text-sm text-neutral-500 max-w-xs leading-relaxed">
              Computer Systems Engineering · Robotics · Computer Vision<br />
              Johannesburg, South Africa 🇿🇦
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs font-mono text-neutral-600 uppercase tracking-wider mb-4">Navigation</p>
            <div className="flex flex-col gap-2">
              {NAV.map((href, i) => (
                <button
                  key={href}
                  onClick={() => scrollTo(href)}
                  className="text-sm text-neutral-500 hover:text-green-400 transition-colors text-left"
                >
                  {NAV_LABELS[i]}
                </button>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <p className="text-xs font-mono text-neutral-600 uppercase tracking-wider mb-4">Connect</p>
            <div className="flex flex-col gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-neutral-500 hover:text-green-400 transition-colors group"
                >
                  <s.icon className="w-4 h-4 group-hover:text-green-400" />
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-600 font-mono">
            © {new Date().getFullYear()} Lindokuhle. All rights reserved.
          </p>
          <p className="text-xs text-neutral-700 font-mono">
            Built with Python, OpenCV & a passion for engineering 🤖
          </p>
        </div>
      </div>
    </footer>
  );
}
