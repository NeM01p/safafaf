import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skills, type Skill } from "../data/portfolio";

const categories = [
  { key: "all", label: "Все" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "devops", label: "DevOps" },
  { key: "tools", label: "Инструменты" },
] as const;

type Category = "all" | "frontend" | "backend" | "devops" | "tools";

function SkillBar({ skill, inView, index }: { skill: Skill; inView: boolean; index: number }) {
  const getLevelLabel = (level: number) => {
    if (level >= 90) return "Expert";
    if (level >= 80) return "Advanced";
    if (level >= 70) return "Intermediate";
    return "Learning";
  };

  const getLevelColor = (level: number) => {
    if (level >= 90) return "from-indigo-500 to-violet-500";
    if (level >= 80) return "from-violet-500 to-purple-600";
    if (level >= 70) return "from-cyan-500 to-indigo-500";
    return "from-emerald-500 to-cyan-500";
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group p-4 rounded-xl glass border border-white/5 hover:border-indigo-500/20 transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2.5">
          <span className="text-xl" role="img" aria-label={skill.name}>
            {skill.icon}
          </span>
          <span className="text-white font-medium text-sm">{skill.name}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            {getLevelLabel(skill.level)}
          </span>
          <span className="text-slate-500 text-sm font-mono">{skill.level}%</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${getLevelColor(skill.level)}`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: 0.3 + index * 0.05, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const filteredSkills = activeCategory === "all"
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  return (
    <section
      id="skills"
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, transparent 0%, rgba(99,102,241,0.03) 50%, transparent 100%)" }}
      aria-label="Навыки"
    >
      {/* BG glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none opacity-5"
        style={{ background: "radial-gradient(circle, #6366f1, transparent)" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref={ref}>
        {/* Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-3"
          >
            02. Технологии
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-white mb-4"
          >
            Мой технический стек
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
            Инструменты и технологии, с которыми я работаю каждый день
          </motion.p>
        </div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
          role="tablist"
          aria-label="Фильтр навыков по категории"
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key as Category)}
              role="tab"
              aria-selected={activeCategory === cat.key}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.key
                  ? "bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/25"
                  : "glass border border-white/10 text-slate-400 hover:text-white hover:border-indigo-500/30"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {filteredSkills.map((skill, i) => (
            <SkillBar key={skill.name} skill={skill} inView={inView} index={i} />
          ))}
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: "22+", label: "Технологий в стеке", gradient: "from-indigo-500 to-violet-600" },
            { value: "5+", label: "Лет опыта", gradient: "from-violet-500 to-purple-600" },
            { value: "30+", label: "Проектов сдано", gradient: "from-cyan-500 to-indigo-500" },
            { value: "∞", label: "Желания учиться", gradient: "from-pink-500 to-violet-600" },
          ].map((stat, i) => (
            <div
              key={i}
              className="glass border border-white/5 rounded-2xl p-6 text-center hover:border-indigo-500/20 transition-all duration-300"
            >
              <p className={`text-4xl font-black text-gradient mb-2`}>{stat.value}</p>
              <p className="text-slate-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
