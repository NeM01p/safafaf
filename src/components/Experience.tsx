import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, GraduationCap, Code } from "lucide-react";
import { experiences, type Experience } from "../data/portfolio";

const typeConfig = {
  work: {
    icon: Briefcase,
    color: "indigo",
    bgClass: "bg-indigo-500/10",
    borderClass: "border-indigo-500/30",
    textClass: "text-indigo-400",
    dotClass: "bg-indigo-500",
    label: "Работа",
  },
  freelance: {
    icon: Code,
    color: "violet",
    bgClass: "bg-violet-500/10",
    borderClass: "border-violet-500/30",
    textClass: "text-violet-400",
    dotClass: "bg-violet-500",
    label: "Фриланс",
  },
  education: {
    icon: GraduationCap,
    color: "cyan",
    bgClass: "bg-cyan-500/10",
    borderClass: "border-cyan-500/30",
    textClass: "text-cyan-400",
    dotClass: "bg-cyan-500",
    label: "Образование",
  },
};

function ExperienceCard({ exp, index }: { exp: Experience; index: number }) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const config = typeConfig[exp.type];
  const Icon = config.icon;
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative flex items-start gap-6 md:gap-0">
      {/* Desktop layout */}
      <div className="hidden md:flex w-full items-start">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`w-5/12 ${isLeft ? "pr-8 text-right" : "pr-8 opacity-0 pointer-events-none"}`}
        >
          {isLeft && (
            <CardContent exp={exp} config={config} Icon={Icon} />
          )}
        </motion.div>

        {/* Center timeline */}
        <div className="flex-shrink-0 w-2/12 flex flex-col items-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2, type: "spring", bounce: 0.5 }}
            className={`w-12 h-12 rounded-xl ${config.bgClass} border ${config.borderClass} flex items-center justify-center z-10 relative shadow-lg`}
          >
            <Icon className={`w-5 h-5 ${config.textClass}`} />
          </motion.div>
        </div>

        {/* Right content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`w-5/12 ${!isLeft ? "pl-8" : "pl-8 opacity-0 pointer-events-none"}`}
        >
          {!isLeft && (
            <CardContent exp={exp} config={config} Icon={Icon} />
          )}
        </motion.div>
      </div>

      {/* Mobile layout */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="md:hidden flex gap-4 w-full"
      >
        <div className="flex flex-col items-center">
          <div
            className={`w-10 h-10 rounded-xl ${config.bgClass} border ${config.borderClass} flex items-center justify-center flex-shrink-0`}
          >
            <Icon className={`w-4 h-4 ${config.textClass}`} />
          </div>
          <div className="w-px flex-1 mt-3 bg-gradient-to-b from-indigo-500/30 to-transparent" />
        </div>
        <div className="flex-1 pb-8">
          <CardContent exp={exp} config={config} Icon={Icon} />
        </div>
      </motion.div>
    </div>
  );
}

function CardContent({
  exp,
  config,
}: {
  exp: Experience;
  config: typeof typeConfig[keyof typeof typeConfig];
  Icon: React.ElementType;
}) {
  return (
    <div className="glass border border-white/5 hover:border-indigo-500/20 rounded-2xl p-5 transition-all duration-300 group">
      {/* Type badge + period */}
      <div className="flex items-center gap-2 mb-3 flex-wrap">
        <span className={`text-xs px-2.5 py-1 rounded-full ${config.bgClass} ${config.textClass} border ${config.borderClass} font-medium`}>
          {config.label}
        </span>
        <span className="text-slate-500 text-xs font-mono">{exp.period}</span>
      </div>

      {/* Position */}
      <h3 className="text-white font-bold text-base mb-1 group-hover:text-indigo-400 transition-colors duration-300">
        {exp.position}
      </h3>
      <p className={`${config.textClass} font-medium text-sm mb-3`}>{exp.company}</p>

      {/* Description */}
      <p className="text-slate-400 text-sm leading-relaxed mb-4">{exp.description}</p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5">
        {exp.technologies.map((tech, i) => (
          <span
            key={i}
            className="text-xs px-2 py-0.5 rounded-md bg-white/5 text-slate-400 border border-white/5 font-mono"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="experience"
      className="py-24 relative overflow-hidden"
      aria-label="Опыт работы"
    >
      <div className="absolute inset-0 grid-bg opacity-20" aria-hidden="true" />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none opacity-10"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.4), transparent)" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16" ref={ref}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-3"
          >
            03. Опыт
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-white mb-4"
          >
            Мой путь
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={inView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-full mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-slate-400 max-w-xl mx-auto"
          >
            От студента до Senior разработчика — история профессионального роста
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line (desktop) */}
          <div
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px"
            style={{
              background: "linear-gradient(to bottom, transparent, rgba(99,102,241,0.4) 10%, rgba(99,102,241,0.4) 90%, transparent)",
            }}
            aria-hidden="true"
          />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
