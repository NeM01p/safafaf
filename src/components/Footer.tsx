import { motion } from "framer-motion";
import { Heart, Code2, ArrowUp } from "lucide-react";
import { personalInfo } from "../data/portfolio";

const footerLinks = [
  { label: "Главная", href: "#hero" },
  { label: "Обо мне", href: "#about" },
  { label: "Навыки", href: "#skills" },
  { label: "Опыт", href: "#experience" },
  { label: "Проекты", href: "#projects" },
  { label: "Контакты", href: "#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollTo = (href: string) => {
    const id = href.slice(1);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="relative pt-16 pb-8 overflow-hidden"
      style={{ borderTop: "1px solid rgba(99,102,241,0.15)" }}
      role="contentinfo"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, transparent 0%, rgba(99,102,241,0.03) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-bold text-white text-lg">
                <span className="text-gradient">Alex</span>.dev
              </p>
              <p className="text-slate-500 text-xs">Full-Stack Developer</p>
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Ссылки в футере">
            {footerLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-slate-500 hover:text-indigo-400 text-sm transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Scroll to top */}
          <motion.button
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="w-11 h-11 rounded-xl glass border border-indigo-500/20 flex items-center justify-center text-indigo-400 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-300"
            aria-label="Прокрутить вверх"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Tech stack marquee */}
        <div className="overflow-hidden mb-10">
          <div className="flex gap-3 animate-[marquee_20s_linear_infinite]">
            {[...Array(2)].map((_, setIdx) => (
              ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Docker", "Redis", "GraphQL", "Tailwind", "Figma", "Jest", "AWS"].map((tech, i) => (
                <span
                  key={`${setIdx}-${i}`}
                  className="flex-shrink-0 px-4 py-1.5 rounded-full glass border border-white/5 text-slate-500 text-xs font-mono whitespace-nowrap"
                >
                  {tech}
                </span>
              ))
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm text-center sm:text-left">
            © {currentYear} {personalInfo.name}. Все права защищены.
          </p>
          <p className="flex items-center gap-1.5 text-slate-600 text-sm">
            Сделано с{" "}
            <Heart className="w-4 h-4 text-red-500 fill-current" aria-label="любовью" />{" "}
            на{" "}
            <span className="text-indigo-400 font-medium">React + TypeScript</span>
          </p>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </footer>
  );
}
