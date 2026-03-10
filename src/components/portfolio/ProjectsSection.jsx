import React, { useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Play, X, ExternalLink, Github, ChevronRight } from "lucide-react";

const projectGroups = [
  {
    id: "apriltag",
    category: "Fiducial Marker Systems",
    color: "green",
    projects: [
      {
        title: "AprilTag Detection",
        description: "Real-time detection and identification of AprilTag fiducial markers using a camera feed. Computes tag ID, position, and orientation for robotic localisation and navigation.",
        tech: ["Python", "OpenCV", "AprilTag Library", "Camera Calibration"],
        shareUrl: "https://1drv.ms/v/c/85e339f1d11c0823/IQBEPuCFkq_oRIDO08ulKQ6tAQGAWO3Fe-uUmWGUxpWqccg?e=DWBK4m",
      },
      {
        title: "AprilTag Tracking",
        description: "Continuous tracking of AprilTag markers across frames, computing 6-DOF pose estimation for integration with robotic control systems and AR overlays.",
        tech: ["Python", "OpenCV", "Pose Estimation", "NumPy"],
        shareUrl: "https://1drv.ms/v/c/85e339f1d11c0823/IQCVcxpbHFxYR4bCuiPwWeO3AQ5yu5RP8dY8_6pfXS2zHjI?e=I9W5JC",
      },
    ],
  },
  {
    id: "gesture",
    category: "Gesture & Hand Control",
    color: "cyan",
    projects: [
      {
        title: "Hand Gesture Control",
        description: "A computer vision system that detects and classifies hand gestures in real-time, enabling touchless control of applications, robots, or interfaces using finger positions and hand landmarks.",
        tech: ["Python", "OpenCV", "MediaPipe", "Gesture Recognition"],
        shareUrl: "https://1drv.ms/f/c/85e339f1d11c0823/IgDpEFlYi8WcQK9qVa3VWGDFAUoWre_V5Whu25yyyWB47g8?e=LGL4Cl",
      },
      {
        title: "Virtual Mouse Control",
        description: "A touchless mouse control system using hand tracking with MediaPipe. Index finger controls cursor position, pinch gesture triggers clicks — no physical mouse needed.",
        tech: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI"],
        shareUrl: "https://1drv.ms/v/c/85e339f1d11c0823/IQDdOsq7bCH4TYqqkpmLBoJWASMEmB1TZbZCe57nXyE6ZAc?e=i07YZt",
      },
      {
        title: "Touch Control Interface",
        description: "Virtual touch surface that detects finger-based interactions via webcam. Enables interaction with on-screen elements through gesture proximity detection.",
        tech: ["Python", "OpenCV", "MediaPipe", "Contour Analysis"],
        shareUrl: "https://1drv.ms/v/c/85e339f1d11c0823/IQDx9ih_AnUASKg2cUeDj1HSAU4tao_zjH3HWUffuVVbTi0?e=VzWb9D",
      },
    ],
  },
  {
    id: "vision",
    category: "Vision Analysis & Detection",
    color: "green",
    projects: [
      {
        title: "Shape Detection",
        description: "Detects and classifies geometric shapes (circles, triangles, rectangles, polygons) in live video using contour analysis and approximation algorithms.",
        tech: ["Python", "OpenCV", "Contour Detection", "Polygon Approximation"],
        shareUrl: "https://1drv.ms/v/c/85e339f1d11c0823/IQBIfi2UHs9uTZSUWoriMX2mAbQ9U6MYTgNUI7P8bvbZuTg?e=Fs7Y44",
      },
      {
        title: "Color & Angle Calculation",
        description: "Detects colored objects in a scene and computes their angular orientation relative to the camera frame, useful for robotic arm alignment and sorting tasks.",
        tech: ["Python", "OpenCV", "HSV Color Segmentation", "Geometry"],
        shareUrl: "https://1drv.ms/v/c/85e339f1d11c0823/IQCVcxpbHFxYR4bCuiPwWeO3AQ5yu5RP8dY8_6pfXS2zHjI?e=MqSpvd",
      },
      {
        title: "Visual Calculator",
        description: "A computer vision-powered calculator that reads handwritten digits and operators displayed to the camera, parses the expression, and computes the result in real time.",
        tech: ["Python", "OpenCV", "OCR", "Image Processing"],
        shareUrl: "https://1drv.ms/v/c/85e339f1d11c0823/IQCYCJiNfuXtRY1k9komEl3dAT83XPh9Q6_7jolX3NuBL1Q?e=YMTR2g",
      },
    ],
  },
  {
    id: "face",
    category: "Facial Recognition & Expression",
    color: "cyan",
    projects: [
      {
        title: "Facial Expression Recognition I",
        description: "Detects faces and classifies emotional expressions (happy, sad, surprised, neutral, etc.) in real-time using facial landmark analysis and trained classification models.",
        tech: ["Python", "OpenCV", "Deep Learning", "Face Detection"],
        shareUrl: "https://1drv.ms/v/c/85e339f1d11c0823/IQD5T-gEaTi4QZs6ggl9rD5-ASOK2hCX6MosAK6ZcZbX_gE?e=ato4o4",
      },
      {
        title: "Facial Expression Recognition II",
        description: "Enhanced version featuring improved accuracy, multi-face tracking, expression intensity scoring, and real-time emotion overlay annotations on the video stream.",
        tech: ["Python", "OpenCV", "MediaPipe", "Neural Network"],
        shareUrl: "https://1drv.ms/v/c/85e339f1d11c0823/IQBczNBVcSPeSZ2pP5btrtnjAenkoLDT5I3QkZxy-NyqEY4?e=8NYf1R",
      },
    ],
  },
  {
    id: "nlp",
    category: "Recognition & NLP Vision",
    color: "green",
    projects: [
      {
        title: "Letter Recognition",
        description: "Recognises individual handwritten or displayed letters in real-time from a camera feed using contour analysis and trained classifiers, enabling live character identification.",
        tech: ["Python", "OpenCV", "CNN", "Character Recognition"],
        shareUrl: "https://1drv.ms/v/c/85e339f1d11c0823/IQC50l_fXlL4QYEkN-RLxMfpAY8z3GNxT6UeUstWJodQX14?e=gCXHC3",
      },
      {
        title: "Writing Names (Vision Input)",
        description: "A system that reads written name text displayed in front of a camera and recognises the characters, demonstrating real-world OCR and name identification in Python.",
        tech: ["Python", "OpenCV", "OCR", "Text Recognition"],
        shareUrl: "https://1drv.ms/v/c/85e339f1d11c0823/IQCEQxMeDu72TLLH6DNJ5bc6ATAQNJwo9tPDQVKcyIDFxB0?e=xGjfjg",
      },
    ],
  },
  {
    id: "it",
    category: "IT & Web Applications",
    color: "cyan",
    projects: [
      {
        title: "Risk Insight Dashboard",
        description: "A no-code web app for risk assessment and control weakness scanning. Upload CSV/Excel data for automatic detection of duplicates, outliers, missing approvals, and suspicious patterns. Features interactive visual charts, risk scoring, and professional audit-style reports with findings and recommendations.",
        tech: ["Data Analysis", "Anomaly Detection", "Risk Scoring", "Audit Reports", "Zite AI"],
        liveUrl: "https://riskinsightapp.zite.so",
        featured: true,
      },
      {
        title: "Incident/Case Management Tracker",
        description: "A CRM-style web app for logging, tracking, and reporting on incidents or cases. Features user auth, case creation/editing (ID, title, type, date, status, priority, evidence attachments), chronological update timeline, search/filter by status/priority/keyword, and exportable PDF/CSV reports.",
        tech: ["Case Management", "Workflow Tracking", "Evidence Handling", "PDF/CSV Export", "Zite AI"],
        liveUrl: "https://incidenttrackercaseapp.zite.so",
      },
      {
        title: "Crime Intelligence Pattern Analysis Dashboard",
        description: "Analyzes uploaded mock crime/incident data (CSV/Excel) to identify trends over time, geographic hotspots (by province/city), crime type correlations, and emerging patterns. Features interactive charts, flagged high-risk alerts, summary statistics, and exportable intelligence reports with resource allocation recommendations. Includes user authentication and saved analysis history.",
        tech: ["Pattern Recognition", "Trend Analysis", "Data Visualization", "Intelligence Reports", "Zite AI"],
        liveUrl: "https://crimeintelligenceapp.zite.so",
        featured: true,
      },
    ],
  },
  {
    id: "waste",
    category: "Robotics & Automation",
    color: "cyan",
    projects: [
      {
        title: "Automated Waste Sorting Robot",
        description: "An intelligent waste classification and sorting system combining computer vision with a robotic actuator. Detects waste type by colour/shape and routes items to the correct bin — showcasing real-world robotics integration.",
        tech: ["Python", "OpenCV", "Arduino", "Servo Control", "Color Segmentation"],
        shareUrl: "https://1drv.ms/v/c/85e339f1d11c0823/IQD5T-gEaTi4QZs6ggl9rD5-ASOK2hCX6MosAK6ZcZbX_gE?e=ato4o4",
        featured: true,
      },
      {
        title: "JetMax Robot Arm",
        description: "HiWonder JetMax — a powerful six-axis collaborative robot arm designed for precision manipulation, computer vision integration, and advanced automation tasks. Ideal for research, prototyping, and educational robotics projects with ML capabilities.",
        tech: ["Robotic Arm", "6-Axis Control", "Computer Vision", "HiWonder SDK", "Collaboration"],
        imageUrl: "http://www.hiwonder.com/cdn/shop/products/2.1_9407d046-fba5-470a-aa62-14f945753bc4.jpg?v=1663902784",
        featured: true,
      },
    ],
  },
];

function VideoEmbed({ shareUrl, title }) {
  return (
    <a
      href={shareUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="relative w-full aspect-video bg-neutral-900 rounded-xl overflow-hidden flex items-center justify-center cursor-pointer group/play border border-neutral-800 hover:border-green-500/40 transition-all block"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-cyan-500/5" />
      {/* Scan lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,128,0.08) 2px, rgba(0,255,128,0.08) 4px)" }} />
      <div className="flex flex-col items-center gap-3 z-10 px-4 text-center">
        <div className="w-16 h-16 rounded-full bg-green-500/20 border-2 border-green-500/50 flex items-center justify-center group-hover/play:bg-green-500/35 group-hover/play:scale-110 group-hover/play:border-green-400 transition-all duration-300">
          <Play className="w-7 h-7 text-green-400 ml-1" fill="currentColor" />
        </div>
        <span className="text-xs text-neutral-400 font-mono group-hover/play:text-green-400 transition-colors">▶ Watch Demo on OneDrive</span>
      </div>
    </a>
  );
}

function ProjectCard({ project, index, color }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`rounded-2xl card-bg border transition-all duration-300 overflow-hidden group ${
        project.featured
          ? "border-green-500/40 hover:border-green-400/60 shadow-lg shadow-green-500/10"
          : "border-neutral-800 hover:border-green-500/20"
      }`}
    >
      {project.featured && (
        <div className="px-4 py-2 bg-green-500/10 border-b border-green-500/20">
          <span className="text-xs font-mono text-green-400">★ Featured Project</span>
        </div>
      )}

      {/* Video or Live App preview */}
      {project.liveUrl ? (
        <div className="p-4 pb-0">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-full aspect-video bg-neutral-900 rounded-xl overflow-hidden flex items-center justify-center cursor-pointer group/play border border-neutral-800 hover:border-cyan-500/40 transition-all block"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-green-500/5" />
            <div className="absolute inset-0 opacity-10 pointer-events-none"
              style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,212,255,0.08) 2px, rgba(0,212,255,0.08) 4px)" }} />
            <div className="flex flex-col items-center gap-3 z-10 px-4 text-center">
              <div className="w-16 h-16 rounded-full bg-cyan-500/20 border-2 border-cyan-500/50 flex items-center justify-center group-hover/play:bg-cyan-500/35 group-hover/play:scale-110 group-hover/play:border-cyan-400 transition-all duration-300">
                <ExternalLink className="w-7 h-7 text-cyan-400" />
              </div>
              <span className="text-xs text-neutral-400 font-mono group-hover/play:text-cyan-400 transition-colors">↗ Visit Live App</span>
            </div>
          </a>
        </div>
      ) : project.imageUrl ? (
        <div className="p-4 pb-0">
          <div className="relative w-full aspect-video bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 hover:border-green-500/40 transition-all">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ) : (
        <div className="p-4 pb-0">
          <VideoEmbed shareUrl={project.shareUrl} title={project.title} />
        </div>
      )}

      {/* Content */}
      <div className="p-5">
        <h3 className={`text-base font-bold text-white mb-2 group-hover:${color === "cyan" ? "text-cyan-400" : "text-green-400"} transition-colors`}>
          {project.title}
        </h3>
        <p className="text-sm text-neutral-400 leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className={`px-2.5 py-1 text-[11px] font-mono rounded-full border ${
                t === "OpenCV"
                  ? "border-green-500/50 bg-green-500/10 text-green-400"
                  : t === "MediaPipe"
                  ? "border-cyan-500/50 bg-cyan-500/10 text-cyan-400"
                  : "border-neutral-700 bg-neutral-800/50 text-neutral-400"
              }`}
            >
              {t}
            </span>
          ))}
        </div>
        {project.liveUrl || project.shareUrl ? (
          <a
            href={project.liveUrl || project.shareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-500 hover:text-green-400 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            {project.liveUrl ? "Visit Live App" : "View on OneDrive"}
          </a>
        ) : project.imageUrl ? (
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-500">
            <span>Featured Project</span>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeGroup, setActiveGroup] = useState("all");

  const allGroups = projectGroups;
  const filteredGroups = activeGroup === "all"
    ? allGroups
    : allGroups.filter(g => g.id === activeGroup);

  const totalCount = allGroups.reduce((sum, g) => sum + g.projects.length, 0);

  return (
    <section id="projects" className="py-32 relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-xs font-mono uppercase tracking-widest text-green-400 mb-3">// projects</p>
          <div className="flex flex-col sm:flex-row sm:items-end gap-4 justify-between">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Computer Vision & Robotics
                <span className="gradient-text"> Demos</span>
              </h2>
              <p className="text-neutral-500 mt-2 text-sm">{totalCount} projects across {allGroups.length} categories</p>
            </div>
          </div>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          <button
            onClick={() => setActiveGroup("all")}
            className={`px-4 py-2 text-xs font-mono rounded-lg border transition-all ${
              activeGroup === "all"
                ? "border-green-500/50 bg-green-500/10 text-green-400"
                : "border-neutral-800 text-neutral-500 hover:border-neutral-600 hover:text-neutral-300"
            }`}
          >
            All ({totalCount})
          </button>
          {allGroups.map(g => (
            <button
              key={g.id}
              onClick={() => setActiveGroup(g.id)}
              className={`px-4 py-2 text-xs font-mono rounded-lg border transition-all ${
                activeGroup === g.id
                  ? g.color === "cyan"
                    ? "border-cyan-500/50 bg-cyan-500/10 text-cyan-400"
                    : "border-green-500/50 bg-green-500/10 text-green-400"
                  : "border-neutral-800 text-neutral-500 hover:border-neutral-600 hover:text-neutral-300"
              }`}
            >
              {g.category}
            </button>
          ))}
        </motion.div>

        {/* Project groups */}
        <div className="space-y-20">
          {filteredGroups.map((group, gi) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className={`w-2 h-6 rounded-full ${group.color === "cyan" ? "bg-cyan-400" : "bg-green-400"}`} />
                <h3 className={`text-lg font-bold font-mono ${group.color === "cyan" ? "text-cyan-400" : "text-green-400"}`}>
                  {group.category}
                </h3>
                <span className="text-xs text-neutral-600 font-mono">({group.projects.length} demos)</span>
              </div>

              <div className={`grid gap-6 ${
                group.projects.length === 1
                  ? "lg:grid-cols-1 max-w-2xl"
                  : group.projects.length === 2
                  ? "sm:grid-cols-2"
                  : "sm:grid-cols-2 lg:grid-cols-3"
              }`}>
                {group.projects.map((project, pi) => (
                  <ProjectCard key={project.title} project={project} index={pi} color={group.color} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
