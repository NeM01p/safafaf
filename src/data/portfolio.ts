// Portfolio Data — все данные портфолио в одном месте

export const personalInfo = {
  name: "Кальмбах Ярослав",
  nameEn: "Kalmbah Yaroslav",
  description:
  location: "Сочи, Россия",
  email: "kalmbaharoslav@gmail.com",
  telegram: "t.me",
  github: "github",
  vk: "vk",
  max: "",
  avatar: "/images/avatar.jpg",
  resumeUrl: "#",
  yearsOfExperience: 1,
  projectsCompleted: 1,
  happyClients: 1,
};

export type Skill = {
  name: string;
  level: number; // 0–100
  category: "frontend" | "backend" | "devops" | "tools";
  icon: string;
};

export const skills: Skill[] = [
  // Frontend
  { name: "React / Next.js", level: 95, category: "frontend", icon: "⚛️" },
  { name: "TypeScript", level: 90, category: "frontend", icon: "🔷" },
  { name: "JavaScript (ES2024+)", level: 95, category: "frontend", icon: "🟨" },
  { name: "Tailwind CSS", level: 92, category: "frontend", icon: "🎨" },
  { name: "HTML5 / CSS3", level: 95, category: "frontend", icon: "🌐" },
  { name: "Redux / Zustand", level: 85, category: "frontend", icon: "🗃️" },
  { name: "Three.js / WebGL", level: 70, category: "frontend", icon: "🎮" },
  { name: "React Native", level: 72, category: "frontend", icon: "📱" },

  // Backend
  { name: "Node.js / Express", level: 88, category: "backend", icon: "🟢" },
  { name: "NestJS", level: 80, category: "backend", icon: "🐦" },
  { name: "PostgreSQL", level: 82, category: "backend", icon: "🐘" },
  { name: "MongoDB", level: 78, category: "backend", icon: "🍃" },
  { name: "REST API / GraphQL", level: 88, category: "backend", icon: "🔗" },
  { name: "Redis", level: 72, category: "backend", icon: "🔴" },

  // DevOps
  { name: "Docker", level: 80, category: "devops", icon: "🐳" },
  { name: "CI/CD (GitHub Actions)", level: 78, category: "devops", icon: "⚙️" },
  { name: "Linux / Bash", level: 75, category: "devops", icon: "🐧" },
  { name: "Nginx", level: 70, category: "devops", icon: "🔧" },

  // Tools
  { name: "Git / GitHub", level: 95, category: "tools", icon: "📦" },
  { name: "Figma", level: 80, category: "tools", icon: "🎭" },
  { name: "Jest / Vitest", level: 82, category: "tools", icon: "✅" },
  { name: "Webpack / Vite", level: 85, category: "tools", icon: "⚡" },
];

export type Experience = {
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
  type: "work" | "freelance" | "education";
};

export const experiences: Experience[] = [
  {
    company: "Стартап «FinTech Hub»",
    position: "Middle Frontend Developer",
    period: "2020 — 2022",
    description:
      "Создание финтех-приложения для управления инвестициями. Реализовал систему real-time графиков, интеграцию с биржевыми API, оптимизировал производительность до 95+ в Lighthouse.",
    technologies: ["React", "Redux", "WebSocket", "Chart.js", "SCSS"],
    type: "work",
  },
  {
    company: "Freelance",
    position: "Web Developer",
    period: "2019 — 2020",
    description:
      "Разработка веб-сайтов и интернет-магазинов для малого и среднего бизнеса. Более 15 успешно сданных проектов.",
    technologies: ["React", "Node.js", "MongoDB", "WordPress", "CSS3"],
    type: "freelance",
  },
  {
    company: "МГУ им. Ломоносова",
    position: "Факультет ВМК — Прикладная математика и информатика",
    period: "2015 — 2019",
    description:
      "Бакалавриат по специальности «Прикладная математика и информатика». Диплом с отличием. Курсовые работы по алгоритмам и машинному обучению.",
    technologies: ["C++", "Python", "Algorithms", "ML", "Mathematics"],
    type: "education",
  },
];

export type Project = {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: "fullstack" | "frontend" | "backend" | "mobile";
  demoUrl: string;
  codeUrl: string;
  featured: boolean;
  stats?: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Полнофункциональная платформа электронной коммерции с CMS, аналитикой и обработкой платежей.",
    longDescription:
      "Масштабируемая B2C платформа с административной панелью, системой управления товарами, интеграцией платёжных шлюзов (Stripe, ЮKassa), системой аналитики в реальном времени и PWA.",
    image: "/images/project1.jpg",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Stripe", "Redis", "Docker"],
    category: "fullstack",
    demoUrl: "https://demo.example.com",
    codeUrl: "https://github.com/alex-morozov/ecommerce",
    featured: true,
    stats: [
      { label: "Пользователей", value: "10K+" },
      { label: "Lighthouse", value: "97/100" },
      { label: "Конверсия", value: "+34%" },
    ],
  },
  {
    id: 2,
    title: "Real-Time Chat App",
    description:
      "Мессенджер с поддержкой групповых чатов, медиафайлами и end-to-end шифрованием.",
    longDescription:
      "Полнофункциональный мессенджер с WebSocket-соединением, групповыми чатами, поддержкой медиафайлов, уведомлениями, поиском по истории и E2E-шифрованием сообщений.",
    image: "/images/project2.jpg",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "JWT", "AWS S3"],
    category: "fullstack",
    demoUrl: "https://chat.example.com",
    codeUrl: "https://github.com/yaroslav/chat-app",
    featured: true,
    stats: [
      { label: "Активных чатов", value: "500+" },
      { label: "Задержка", value: "<50ms" },
      { label: "Uptime", value: "99.9%" },
    ],
  },
  {
    id: 3,
    title: "AI Task Manager",
    description:
      "Умный таск-менеджер с ИИ-приоритизацией задач, Kanban-доской и аналитикой продуктивности.",
    longDescription:
      "Productivity-приложение с AI-ассистентом для приоритизации задач, Kanban и Gantt досками, командной работой, интеграцией с GitHub/Jira и детальной аналитикой производительности.",
    image: "/images/project3.jpg",
    technologies: ["Next.js", "OpenAI API", "TypeScript", "Supabase", "Tailwind CSS", "Framer Motion"],
    category: "fullstack",
    demoUrl: "https://tasks.example.com",
    codeUrl: "https://github.com/yaroslav/ai-tasks",
    featured: true,
    stats: [
      { label: "Задач создано", value: "50K+" },
      { label: "Точность ИИ", value: "87%" },
      { label: "Оценка", value: "4.9★" },
    ],
  },
  {
    id: 4,
    title: "Weather Analytics",
    description:
      "Приложение прогноза погоды с красивой визуализацией данных и историческими графиками.",
    longDescription:
      "Веб-приложение с интеграцией OpenWeatherMap API, интерактивными картами, анимированными виджетами погоды, историческими графиками и уведомлениями о неблагоприятных явлениях.",
    image: "/images/project4.jpg",
    technologies: ["React", "TypeScript", "Chart.js", "OpenWeatherMap API", "Leaflet", "PWA"],
    category: "frontend",
    demoUrl: "https://weather.example.com",
    featured: false,
    stats: [
      { label: "Городов", value: "195+" },
      { label: "Точность", value: "95%" },
      { label: "PWA Score", value: "100/100" },
    ],
  },
];

export const techStack = [
  "React", "Next.js", "TypeScript", "Node.js", "PostgreSQL",
  "Docker", "Redis", "GraphQL", "Tailwind CSS", "Figma",
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/yaroslav",
    icon: "github",
    color: "#ffffff",
    description: "Мой код",
  },
  {
    name: "Telegram",
    url: "https://t.me/yaroslav_dev",
    icon: "telegram",
    color: "#229ED9",
    description: "Написать мне",
  },
  {
    name: "VK",
    url: "https://vk.com/nonv",
    icon: "vk",
    color: "#0077FF",
    description: "ВКонтакте",
  },
  {
    name: "MAX",
    url: "https://max.ru",
    icon: "max",
    color: "#FF5A5F",
    description: "MAX",
  },
  {
    name: "Яндекс Музыка",
    url: "https://music.yandex.ru",
    icon: "yandexmusic",
    color: "#FFCC00",
    description: "Моя музыка",
  },
  {
    name: "Кинопоиск",
    url: "https://www.kinopoisk.ru",
    icon: "kinopoisk",
    color: "#FF6600",
    description: "Мои фильмы",
  },
];
