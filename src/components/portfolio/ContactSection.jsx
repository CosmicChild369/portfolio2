import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Mail, MapPin, Phone, Loader2, CheckCircle2, Github, Linkedin, Twitter } from "lucide-react";
import { base44 } from "@/api/base44Client";

const socials = [
  { icon: Github, href: "https://github.com/CosmcChild369", label: "GitHub", color: "hover:text-white hover:border-neutral-400" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/lindokuhle-promise-maphonyane", label: "LinkedIn", color: "hover:text-blue-400 hover:border-blue-400" },
  { icon: Twitter, href: "https://x.com/lindokuhle", label: "X / Twitter", color: "hover:text-sky-400 hover:border-sky-400" },
];

export default function ContactSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await base44.integrations.Core.SendEmail({
      to: "lindokuhlemaphonyane976@gmail.com",
      subject: `Portfolio Contact from ${form.name}`,
      body: `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`,
    });
    setSending(false);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-green-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-mono uppercase tracking-widest text-green-400 mb-3">// contact</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Let's build something
              <span className="gradient-text"> amazing</span>
              <span className="text-green-400">.</span>
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-10 text-base">
              Whether you have a robotics challenge, a computer vision problem to solve, 
              an internship or collaboration opportunity — I'd love to hear from you.
            </p>

            <div className="space-y-5 mb-10">
              <a href="mailto:lindokuhlemaphonyane976@gmail.com" className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-xl border border-green-500/30 bg-green-500/5 flex items-center justify-center group-hover:border-green-400/60 transition-colors">
                  <Mail className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <p className="text-[11px] text-neutral-600 uppercase tracking-wider font-mono">Email</p>
                  <p className="text-sm font-medium text-neutral-200 group-hover:text-green-400 transition-colors">lindokuhlemaphonyane976@gmail.com</p>
                </div>
              </a>
              <a href="tel:0659880436" className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-xl border border-green-500/30 bg-green-500/5 flex items-center justify-center group-hover:border-green-400/60 transition-colors">
                  <Phone className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <p className="text-[11px] text-neutral-600 uppercase tracking-wider font-mono">Phone</p>
                  <p className="text-sm font-medium text-neutral-200 group-hover:text-green-400 transition-colors">065 988 0436</p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl border border-cyan-500/30 bg-cyan-500/5 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <p className="text-[11px] text-neutral-600 uppercase tracking-wider font-mono">Location</p>
                  <p className="text-sm font-medium text-neutral-200">Johannesburg, South Africa 🇿🇦</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="text-xs text-neutral-600 font-mono uppercase tracking-wider mb-4">Find me on</p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className={`w-11 h-11 rounded-xl flex items-center justify-center text-neutral-500 border border-neutral-800 transition-all ${s.color}`}
                  >
                    <s.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="p-8 rounded-2xl card-bg border border-neutral-800 hover:border-green-500/20 transition-colors space-y-5"
          >
            <div>
              <label className="block text-xs font-mono text-neutral-500 uppercase tracking-wider mb-2">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl bg-neutral-900/60 border border-neutral-800 text-white placeholder:text-neutral-600 focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/20 transition-all text-sm font-mono"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-neutral-500 uppercase tracking-wider mb-2">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl bg-neutral-900/60 border border-neutral-800 text-white placeholder:text-neutral-600 focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/20 transition-all text-sm font-mono"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-neutral-500 uppercase tracking-wider mb-2">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project or opportunity..."
                className="w-full px-4 py-3 rounded-xl bg-neutral-900/60 border border-neutral-800 text-white placeholder:text-neutral-600 focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/20 transition-all resize-none text-sm font-mono"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full py-4 rounded-xl bg-green-500 hover:bg-green-400 text-black font-bold flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed font-mono text-sm shadow-lg shadow-green-500/20"
            >
              {sending ? (
                <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
              ) : sent ? (
                <><CheckCircle2 className="w-4 h-4" /> Message Sent!</>
              ) : (
                <><Send className="w-4 h-4" /> Send Message</>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
