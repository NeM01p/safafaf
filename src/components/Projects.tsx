import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Code2, Star, X } from "lucide-react";
import { projects, type Project } from "../data/portfolio";

const categories = [
  { key: "all", label: "Все проекты" },
  { key: "fullstack", label: "Full-Stack" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
];

function ProjectCard({ project, onClick }: { project: Project; onClick: (p: Project) => void }) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      onClick={() => onClick(project)}
      className="glass border border-white/5 hover:border-indigo-500/30 rounded-2xl overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10"
      tabIndex={0}
      role="button"
      aria-label={`Открыть детали проекта ${project.title}`}
      onKeyDown={(e) => e.key === "Enter" && onClick(project)}
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#13131a] via-transparent to-transparent" />

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-500/90 backdrop-blur-sm text-white text-xs font-semibold">
            <Star className="w-3 h-3 fill-current" />
            Featured
          </div>
        )}

        {/* Category badge */}
        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full glass border border-white/10 text-slate-300 text-xs font-medium backdrop-blur-sm">
          {project.category === "fullstack" ? "Full-Stack" : project.category.charAt(0).toUpperCase() + project.category.slice(1)}
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-indigo-900/0 group-hover:bg-indigo-900/20 transition-colors duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm font-medium border border-white/30 px-4 py-2 rounded-xl backdrop-blur-sm bg-white/10">
            Подробнее →
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-white font-bold text-lg mb-2 group-hover:text-indigo-400 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Stats */}
        {project.stats && (
          <div className="flex gap-4 mb-4 pb-4 border-b border-white/5">
            {project.stats.map((stat, i) => (
              <div key={i}>
                <p className="text-indigo-400 font-bold text-sm">{stat.value}</p>
                <p className="text-slate-600 text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        )}

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 4).map((tech, i) => (
            <span
              key={i}
              className="text-xs px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-mono"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-xs px-2 py-0.5 rounded-md bg-white/5 text-slate-500 border border-white/5">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 text-sm text-indigo-400 hover:text-indigo-300 transition-colors duration-200 font-medium"
            aria-label={`Открыть демо проекта ${project.title}`}
          >
            <ExternalLink className="w-4 h-4" />
            Demo
          </a>
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors duration-200 font-medium"
            aria-label={`Открыть код проекта ${project.title}`}
          >
            <Code2 className="w-4 h-4" />
            Code
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Детали проекта ${project.title}`}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full max-w-2xl glass border border-indigo-500/20 rounded-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
      >
        {/* Image */}
        <div className="relative aspect-video">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#13131a] to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-lg glass border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors duration-200"
            aria-label="Закрыть"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">{project.title}</h2>
              <span className="text-indigo-400 text-sm font-medium capitalize">
                {project.category === "fullstack" ? "Full-Stack" : project.category}
              </span>
            </div>
            {project.featured && (
              <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-semibold border border-indigo-500/30">
                <Star className="w-3 h-3 fill-current" />
                Featured
              </div>
            )}
          </div>

          <p className="text-slate-300 leading-relaxed mb-6">{project.longDescription}</p>

          {/* Stats */}
          {project.stats && (
            <div className="grid grid-cols-3 gap-3 mb-6">
              {project.stats.map((stat, i) => (
                <div key={i} className="glass-light rounded-xl p-3 text-center">
                  <p className="text-indigo-400 font-bold text-lg">{stat.value}</p>
                  <p className="text-slate-500 text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
          )}

          {/* Technologies */}
          <div className="mb-6">
            <h3 className="text-white font-semibold mb-3 text-sm">Технологии</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-sm font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-4">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-semibold hover:opacity-90 transition-opacity duration-300"
            >
              <ExternalLink className="w-4 h-4" />
              Открыть демо
            </a>
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl glass border border-white/10 text-white font-semibold hover:border-indigo-500/30 transition-all duration-300"
            >
              <Code2 className="w-4 h-4" />
              Исходный код
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="py-24 relative overflow-hidden"
      aria-label="Проекты"
    >
      <div className="absolute inset-0 grid-bg opacity-25" aria-hidden="true" />
      <div
        className="absolute top-1/2 right-0 w-96 h-96 rounded-full pointer-events-none opacity-10"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.5), transparent)" }}
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
            04. Портфолио
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-white mb-4"
          >
            Мои проекты
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
            Отборные проекты, демонстрирующие мои навыки и подход к разработке
          </motion.p>
        </div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
          role="tablist"
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
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

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-2 gap-6"
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onClick={setSelectedProject} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-slate-500 mb-4">Больше проектов на GitHub</p>
          <a
            href="https://github.com/nemo1p"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl glass border border-white/10 text-white font-semibold hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all duration-300"
          >
            <Code2 className="w-5 h-5" />
            Посмотреть на GitHub
          </a>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
