import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, Calendar, Coffee, Heart, Zap, Globe } from "lucide-react";
import { personalInfo } from "../data/portfolio";

const facts = [
  { icon: MapPin, label: "Локация", value: personalInfo.location },
  { icon: Calendar, label: "Опыт", value: `${personalInfo.yearsOfExperience}+ лет в разработке` },
  { icon: Coffee, label: "Кофе/день", value: "3-4 чашки ☕" },
  { icon: Heart, label: "Любимый стек", value: "React + TypeScript" },
  { icon: Zap, label: "Фокус", value: "Производительность и UX" },
  { icon: Globe, label: "Языки", value: "Русский, English (B2)" },
];

const interests = [
  "🎮 Игровая разработка",
  "🎵 Электронная музыка",
  "📚 Технические книги",
  "🏃 Бег и фитнес",
  "✈️ Путешествия",
  "🎬 Кино и сериалы",
  "🔧 Open Source",
  "🤖 AI / ML",
];

function FadeInWhenVisible({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 relative overflow-hidden"
      aria-label="Обо мне"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 grid-bg opacity-30" aria-hidden="true" />
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none opacity-10"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.5) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-3"
          >
            01. Обо мне
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-white mb-4"
          >
            Кто я такой?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={inView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-full mx-auto"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column — photo + interests */}
          <div className="space-y-6">
            <FadeInWhenVisible delay={0.1}>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/60 to-transparent" />
                {/* Status badge */}
                <div className="absolute bottom-4 left-4 right-4 glass rounded-xl px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-sm text-green-400 font-medium">Доступен для работы</span>
                  </div>
                  <span className="text-slate-500 text-xs">🕒 МСК</span>
                </div>
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.2}>
              <div>
                <h3 className="text-white font-semibold mb-3">Увлечения</h3>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg glass border border-white/10 text-slate-400 text-sm hover:border-indigo-500/30 hover:text-indigo-400 transition-colors duration-200 cursor-default"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </FadeInWhenVisible>
          </div>

          {/* Right column — info */}
          <div className="space-y-8">
            {/* Main bio */}
            <FadeInWhenVisible delay={0.15}>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">
                  Привет! Меня зовут{" "}
                  <span className="text-gradient">{personalInfo.name}</span>
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  Я Full-Stack разработчик с{" "}
                  <span className="text-indigo-400 font-semibold">5+ годами опыта</span> создания
                  современных веб-приложений. Специализируюсь на React/Next.js экосистеме и Node.js
                  backend разработке.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  Моя страсть — создавать <span className="text-violet-400 font-semibold">быстрые</span>,{" "}
                  <span className="text-cyan-400 font-semibold">доступные</span> и визуально
                  привлекательные продукты, которые решают реальные задачи бизнеса и радуют пользователей.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  Окончил МГУ по специальности «Прикладная математика и информатика». Постоянно изучаю
                  новые технологии и слежу за трендами в области веб-разработки и AI.
                </p>
              </div>
            </FadeInWhenVisible>

            {/* Facts grid */}
            <FadeInWhenVisible delay={0.25}>
              <div>
                <h3 className="text-white font-semibold mb-4">Факты обо мне</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {facts.map((fact, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-3 p-3.5 rounded-xl glass border border-white/5 hover:border-indigo-500/20 transition-all duration-300"
                    >
                      <div className="w-9 h-9 rounded-lg bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                        <fact.icon className="w-4 h-4 text-indigo-400" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-slate-500 text-xs">{fact.label}</p>
                        <p className="text-white text-sm font-medium truncate">{fact.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeInWhenVisible>

            {/* Values */}
            <FadeInWhenVisible delay={0.35}>
              <div>
                <h3 className="text-white font-semibold mb-4">Мои принципы</h3>
                <div className="space-y-3">
                  {[
                    { title: "Clean Code", desc: "Читаемый, поддерживаемый и хорошо структурированный код", emoji: "✨" },
                    { title: "Performance First", desc: "Каждый миллисекунд важен для пользователя", emoji: "⚡" },
                    { title: "User-Centric", desc: "Продукт должен решать проблемы реальных людей", emoji: "❤️" },
                  ].map((v, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl glass-light">
                      <span className="text-2xl flex-shrink-0">{v.emoji}</span>
                      <div>
                        <p className="text-white font-semibold text-sm">{v.title}</p>
                        <p className="text-slate-500 text-sm">{v.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </div>
    </section>
  );
}
