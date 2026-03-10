import React from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, MapPin, Cpu, Eye, Zap, Code2, Briefcase, Car } from "lucide-react";

const highlights = [
  { icon: GraduationCap, label: "Qualification", value: "Adv. Dip. CS Engineering", sub: "TUT · Final Year 2025–2026" },
  { icon: MapPin, label: "Location", value: "Johannesburg, SA 🇿🇦", sub: "Open to remote" },
  { icon: Briefcase, label: "Work Experience", value: "TUT 4IR Research Lab", sub: "Robotics & IoT Engineer" },
  { icon: Car, label: "Driver's Licence", value: "Code 10", sub: "Age 24" },
];

const passions = [
  { icon: Eye, text: "Computer Vision & OpenCV" },
  { icon: Cpu, text: "Robotics Hardware/Software Integration" },
  { icon: Zap, text: "Real-world Problem Solving" },
  { icon: Code2, text: "Embedded Systems Programming" },
];

export default function AboutSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      {/* Subtle separator line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs font-mono uppercase tracking-widest text-green-400 mb-3">
            // about_me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Bridging the gap between
            <span className="gradient-text"> code and the physical world</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 space-y-6"
          >
            <p className="text-neutral-400 leading-relaxed text-lg">
              I'm <span className="text-green-400 font-semibold">Lindokuhle</span>, 24, a Computer Systems Engineering student at TUT, Johannesburg, South Africa — currently in my final year completing an Advanced Diploma. My work centres around robotics, computer vision (primarily with OpenCV), and embedded systems.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              From gesture-controlled interfaces to intelligent waste-sorting robots and facial expression recognition, 
              I enjoy applying engineering principles to solve tangible, impactful problems. I work comfortably across 
              the full stack from hardware (Arduino, Raspberry Pi) to high-level computer vision algorithms in Python.
            </p>

            {/* Education & Experience Timeline */}
            <div className="mt-4 space-y-3">
              <p className="text-xs font-mono uppercase tracking-widest text-green-400">// education & experience</p>

              {[
                {
                  period: "2025 – 2026",
                  title: "Advanced Diploma in Computer Systems Engineering",
                  sub: "Tshwane University of Technology · Part-Time · Final Year",
                  accent: "green",
                },
                {
                  period: "Completed 2025",
                  title: "Diploma in Computer Systems Engineering",
                  sub: "Tshwane University of Technology",
                  accent: "green",
                },
                {
                  period: "2024 – Present",
                  title: "Robotics & IoT Engineer",
                  sub: "TUT 4IR Research Lab · Smart Library Automation (Embedded & Robotics Support)",
                  accent: "cyan",
                },
                {
                  period: "Matric",
                  title: "Eketsang Secondary School",
                  sub: "National Senior Certificate",
                  accent: "neutral",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.25 + i * 0.08 }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex flex-col items-center pt-1">
                    <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${item.accent === "cyan" ? "bg-cyan-400" : item.accent === "green" ? "bg-green-400" : "bg-neutral-600"}`} />
                    {i < 3 && <div className="w-px flex-1 bg-neutral-800 mt-1 min-h-[20px]" />}
                  </div>
                  <div className="pb-3">
                    <span className={`text-[10px] font-mono uppercase tracking-wider ${item.accent === "cyan" ? "text-cyan-500" : item.accent === "green" ? "text-green-500" : "text-neutral-600"}`}>{item.period}</span>
                    <p className="text-sm font-semibold text-white leading-snug">{item.title}</p>
                    <p className="text-xs text-neutral-500 mt-0.5">{item.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 mt-6">
              {passions.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border border-neutral-800 hover:border-green-500/30 bg-white/[0.02] hover:bg-green-500/5 transition-all"
                >
                  <p.icon className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-sm text-neutral-300">{p.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats grid + Graduation photos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Graduation photos */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl overflow-hidden border border-green-500/20 aspect-[3/4]">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69ac90fd1f1998c49f048116/2b11abe54_1myGraduation.jpg"
                  alt="Graduation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-green-500/20 aspect-[3/4]">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69ac90fd1f1998c49f048116/d26252319_2myGraduation.jpg"
                  alt="Graduation with family"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="text-xs text-center text-neutral-600 font-mono">🎓 TUT Graduation — 2025</p>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl card-bg border border-neutral-800 hover:border-green-500/30 transition-all group"
                >
                  <h.icon className="w-5 h-5 text-green-400 mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-[11px] text-neutral-500 uppercase tracking-wider font-mono mb-1">{h.label}</p>
                  <p className="text-sm font-semibold text-white leading-tight">{h.value}</p>
                  <p className="text-xs text-neutral-500 mt-0.5">{h.sub}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
