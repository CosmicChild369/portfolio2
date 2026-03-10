import React from "react";
import { motion, useInView } from "framer-motion";

const skillGroups = [
  {
    category: "Programming Languages",
    color: "green",
    skills: [
      { name: "Python", level: 92, icon: "🐍" },
      { name: "C / C++", level: 85, icon: "⚙️" },
      { name: "MATLAB", level: 75, icon: "📐" },
      { name: "Bash / Shell", level: 72, icon: "💻" },
    ],
  },
  {
    category: "Computer Vision & AI",
    color: "cyan",
    skills: [
      { name: "OpenCV", level: 94, icon: "👁️" },
      { name: "MediaPipe", level: 88, icon: "🖐️" },
      { name: "TensorFlow / Keras", level: 75, icon: "🧠" },
      { name: "AprilTag Detection", level: 90, icon: "🏷️" },
    ],
  },
  {
    category: "Robotics & Embedded",
    color: "green",
    skills: [
      { name: "Arduino", level: 90, icon: "🤖" },
      { name: "Raspberry Pi", level: 88, icon: "🍓" },
      { name: "ROS / ROS2", level: 72, icon: "🔄" },
      { name: "Sensor Integration", level: 85, icon: "📡" },
    ],
  },
  {
    category: "Tools & Platforms",
    color: "cyan",
    skills: [
      { name: "Git / GitHub", level: 88, icon: "🔧" },
      { name: "Linux", level: 85, icon: "🐧" },
      { name: "VS Code / PyCharm", level: 90, icon: "💡" },
      { name: "Docker (basics)", level: 65, icon: "🐳" },
    ],
  },
];

const techTags = [
  "Python", "OpenCV", "C++", "Arduino", "Raspberry Pi", "MediaPipe",
  "TensorFlow", "ROS", "Computer Vision", "Embedded Systems", "AprilTag",
  "NumPy", "Linux", "Git", "MATLAB", "Machine Learning", "Robotics",
];

function SkillBar({ name, level, icon, color, delay }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors flex items-center gap-2">
          <span>{icon}</span> {name}
        </span>
        <span className="text-xs font-mono text-neutral-600">{level}%</span>
      </div>
      <div className="h-1 bg-neutral-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay: delay * 0.08, ease: "easeOut" }}
          className={`h-full rounded-full ${color === "cyan" ? "bg-gradient-to-r from-cyan-500 to-cyan-400" : "bg-gradient-to-r from-green-500 to-green-400"}`}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-32 relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-mono uppercase tracking-widest text-green-400 mb-3">// skills & tools</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Technical Expertise</h2>
        </motion.div>

        {/* Skill bars grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gi * 0.1 }}
              className="p-6 rounded-2xl card-bg border border-neutral-800 hover:border-green-500/20 transition-all"
            >
              <h3 className={`text-sm font-semibold mb-5 font-mono ${group.color === "cyan" ? "text-cyan-400" : "text-green-400"}`}>
                {group.category}
              </h3>
              <div className="space-y-4">
                {group.skills.map((skill, i) => (
                  <SkillBar key={skill.name} {...skill} color={group.color} delay={gi * 4 + i} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          {techTags.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + i * 0.04 }}
              className="px-4 py-2 text-xs font-mono rounded-full border border-neutral-800 text-neutral-400 hover:border-green-500/40 hover:text-green-400 hover:bg-green-500/5 transition-all cursor-default"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
