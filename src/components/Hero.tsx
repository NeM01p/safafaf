import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Send, Sparkles } from "lucide-react";
import { personalInfo } from "../data/portfolio";

const roles = [
  "Full-Stack Developer",
  "React / Next.js Expert",
  "UI/UX Enthusiast",
  "TypeScript Advocate",
  "Open Source Contributor",
];

// Floating particle component
function Particle({
  x, y, size, color, delay,
}: {
  x: number; y: number; size: number; color: string; delay: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        background: color,
        filter: "blur(1px)",
      }}
      animate={{
        y: [0, -30, 0],
        opacity: [0.2, 0.8, 0.2],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 4 + Math.random() * 4,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );
}

const particles = Array.from({ length: 20 }, (_, i) => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 4 + 2,
  color: i % 3 === 0
    ? "rgba(99,102,241,0.6)"
    : i % 3 === 1
    ? "rgba(139,92,246,0.6)"
    : "rgba(6,182,212,0.6)",
  delay: Math.random() * 3,
}));

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Typewriter effect
  useEffect(() => {
    const fullText = roles[currentRole];
    const speed = isDeleting ? 60 : 100;

    typingRef.current = setTimeout(() => {
      if (!isDeleting && displayText === fullText) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), 1800);
        return;
      }
      if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
        return;
      }
      setDisplayText((prev) =>
        isDeleting ? prev.slice(0, -1) : fullText.slice(0, prev.length + 1)
      );
    }, speed);

    return () => {
      if (typingRef.current) clearTimeout(typingRef.current);
    };
  }, [displayText, isDeleting, currentRole]);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Главная секция"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        aria-hidden="true"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/80 via-[#0a0a0f]/60 to-[#0a0a0f]" aria-hidden="true" />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-40" aria-hidden="true" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {particles.map((p, i) => (
          <Particle key={i} {...p} />
        ))}
      </div>

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-indigo-500/30 text-sm text-indigo-400 mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span>Открыт к новым проектам</span>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            </motion.div>

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-slate-400 text-lg mb-2 font-mono"
            >
              👋 Привет, я
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight"
            >
              {personalInfo.name.split(" ")[0]}{" "}
              <span className="text-gradient">{personalInfo.name.split(" ")[1]}</span>
            </motion.h1>

            {/* Typewriter role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="h-12 flex items-center justify-center lg:justify-start mb-6"
            >
              <p className="text-2xl sm:text-3xl font-bold text-indigo-400 font-mono">
                {displayText}
                <span className="inline-block w-0.5 h-8 bg-indigo-400 ml-1 animate-pulse" />
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
            >
              {personalInfo.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-shadow duration-300"
              >
                <span>⌨</span>
                GitHub профиль
              </motion.a>
              <motion.a
                href={personalInfo.resumeUrl}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl glass border border-indigo-500/30 text-white font-semibold hover:border-indigo-500/60 transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                Скачать резюме
              </motion.a>
              <motion.a
                href={personalInfo.telegram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl border border-cyan-500/30 text-cyan-400 font-semibold hover:border-cyan-500/60 hover:bg-cyan-500/5 transition-all duration-300"
              >
                <Send className="w-5 h-5" />
                Telegram
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center justify-center lg:justify-start gap-8"
            >
              {[
                { value: `${personalInfo.yearsOfExperience}+`, label: "Лет опыта" },
                { value: `${personalInfo.projectsCompleted}+`, label: "Проектов" },
                { value: `${personalInfo.happyClients}+`, label: "Клиентов" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-3xl font-black text-gradient">{stat.value}</p>
                  <p className="text-slate-500 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, transparent, #6366f1, transparent, #8b5cf6, transparent, #06b6d4, transparent)",
                  padding: "2px",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
                aria-hidden="true"
              />

              {/* Outer glow ring */}
              <div
                className="absolute -inset-8 rounded-full opacity-20"
                style={{
                  background: "radial-gradient(circle, rgba(99,102,241,0.5) 0%, transparent 70%)",
                }}
                aria-hidden="true"
              />

              {/* Avatar container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-indigo-500/30 shadow-2xl shadow-indigo-500/20">
                <img
                  src={personalInfo.avatar}
                  alt={`Фотография ${personalInfo.name}`}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                {/* Shimmer overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(135deg, transparent 40%, rgba(99,102,241,0.1) 50%, transparent 60%)",
                  }}
                />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 -right-4 glass px-3 py-2 rounded-xl border border-indigo-500/30 shadow-lg"
                aria-hidden="true"
              >
                <p className="text-xs font-semibold text-indigo-400">⚡ React</p>
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-2 -left-4 glass px-3 py-2 rounded-xl border border-violet-500/30 shadow-lg"
                aria-hidden="true"
              >
                <p className="text-xs font-semibold text-violet-400">🚀 Next.js</p>
              </motion.div>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-1/2 -right-10 glass px-3 py-2 rounded-xl border border-cyan-500/30 shadow-lg"
                aria-hidden="true"
              >
                <p className="text-xs font-semibold text-cyan-400">🔷 TypeScript</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-indigo-400 transition-colors duration-300"
        aria-label="Прокрутить вниз"
      >
        <span className="text-xs font-mono uppercase tracking-widest">Прокрутить</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  );
}
