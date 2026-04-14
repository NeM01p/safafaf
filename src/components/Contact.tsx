import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { personalInfo } from "../data/portfolio";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type SubmitStatus = "idle" | "loading" | "success" | "error";

// Social icon components
function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.48 14.48l-2.95-.924c-.64-.204-.654-.64.135-.95l11.57-4.461c.537-.194 1.006.131.827.103z" />
    </svg>
  );
}

function VKIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-.909-1.744-.909-.355 0-.457.102-.457.597v1.575c0 .425-.136.679-1.262.679-1.85 0-3.91-1.12-5.36-3.208C4.948 11.676 4 9.46 4 9.052c0-.254.102-.491.596-.491h1.744c.444 0 .613.203.785.68.866 2.495 2.318 4.68 2.913 4.68.223 0 .324-.102.324-.662V10.97c-.068-1.19-.697-1.29-.697-1.715 0-.203.169-.407.44-.407h2.744c.373 0 .507.203.507.643v3.463c0 .373.169.507.271.507.223 0 .407-.134.813-.54 1.257-1.41 2.15-3.58 2.15-3.58.119-.254.322-.491.762-.491h1.744c.525 0 .643.27.525.643-.22 1.017-2.354 4.03-2.354 4.03-.187.305-.254.44 0 .779.186.254.796.779 1.202 1.254.745.847 1.32 1.558 1.473 2.05.152.488-.086.735-.576.735z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function YandexMusicIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-6V8l6 4-6 4z" />
    </svg>
  );
}

function KinopoiskIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
    </svg>
  );
}

const socialContacts = [
  {
    name: "Telegram",
    handle: "@alex_morozov_dev",
    url: personalInfo.telegram,
    icon: TelegramIcon,
    color: "#229ED9",
    bg: "rgba(34,158,217,0.1)",
    border: "rgba(34,158,217,0.25)",
    description: "Самый быстрый способ связи",
  },
  {
    name: "GitHub",
    handle: "alex-morozov",
    url: personalInfo.github,
    icon: GitHubIcon,
    color: "#ffffff",
    bg: "rgba(255,255,255,0.05)",
    border: "rgba(255,255,255,0.1)",
    description: "Исходный код проектов",
  },
  {
    name: "VK",
    handle: "alex_morozov",
    url: personalInfo.vk,
    icon: VKIcon,
    color: "#0077FF",
    bg: "rgba(0,119,255,0.1)",
    border: "rgba(0,119,255,0.25)",
    description: "ВКонтакте",
  },
  {
    name: "Яндекс Музыка",
    handle: "Моя музыка",
    url: personalInfo.yandexMusic,
    icon: YandexMusicIcon,
    color: "#FFCC00",
    bg: "rgba(255,204,0,0.1)",
    border: "rgba(255,204,0,0.25)",
    description: "Плейлисты для кода",
  },
  {
    name: "Кинопоиск",
    handle: "Мои фильмы",
    url: personalInfo.kinopoisk,
    icon: KinopoiskIcon,
    color: "#FF6600",
    bg: "rgba(255,102,0,0.1)",
    border: "rgba(255,102,0,0.25)",
    description: "Кино и сериалы",
  },
];

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [form, setForm] = useState<FormState>({
    name: "", email: "", subject: "", message: "",
  });
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = () => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = "Введите ваше имя";
    if (!form.email.trim()) {
      newErrors.email = "Введите email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Некорректный email";
    }
    if (!form.subject.trim()) newErrors.subject = "Введите тему";
    if (!form.message.trim()) {
      newErrors.message = "Введите сообщение";
    } else if (form.message.length < 10) {
      newErrors.message = "Сообщение слишком короткое (минимум 10 символов)";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    // Simulate async send
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      aria-label="Контакты"
    >
      <div className="absolute inset-0 grid-bg opacity-25" aria-hidden="true" />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none opacity-10"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.5), transparent)" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-3"
          >
            05. Контакты
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-white mb-4"
          >
            Свяжитесь со мной
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
            Готов к новым проектам и интересным коллаборациям. Напишите мне!
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — contacts info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Direct contacts */}
            <div>
              <h3 className="text-white font-bold text-xl mb-6">Прямые контакты</h3>
              <div className="space-y-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl glass border border-white/5 hover:border-indigo-500/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors duration-300">
                    <Mail className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs mb-0.5">Email</p>
                    <p className="text-white font-medium group-hover:text-indigo-400 transition-colors duration-300">
                      {personalInfo.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl glass border border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs mb-0.5">Локация</p>
                    <p className="text-white font-medium">{personalInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <h3 className="text-white font-bold text-xl mb-6">Социальные сети</h3>
              <div className="grid grid-cols-1 gap-3">
                {socialContacts.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, x: 4 }}
                    className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 border"
                    style={{
                      background: social.bg,
                      borderColor: social.border,
                    }}
                    aria-label={`Перейти в ${social.name}`}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ color: social.color, background: `${social.color}15` }}
                    >
                      <social.icon />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-semibold text-sm">{social.name}</p>
                      <p className="text-slate-500 text-xs truncate">{social.description}</p>
                    </div>
                    <span
                      className="text-xs font-mono px-2 py-0.5 rounded"
                      style={{ color: social.color, background: `${social.color}20` }}
                    >
                      {social.handle}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="glass border border-indigo-500/20 rounded-2xl p-6 sm:p-8">
              <h3 className="text-white font-bold text-xl mb-6">Написать сообщение</h3>

              {/* Success message */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/30 mb-6"
                  role="alert"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <p className="text-green-400 text-sm">
                    Сообщение отправлено! Свяжусь с вами в ближайшее время.
                  </p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Name + Email row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-slate-400 text-sm mb-1.5">
                      Имя <span className="text-indigo-400">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Иван Иванов"
                      className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-slate-600 text-sm form-input transition-all duration-300 ${
                        errors.name ? "border-red-500/50" : "border-white/10"
                      }`}
                      aria-required="true"
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="flex items-center gap-1 text-red-400 text-xs mt-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-slate-400 text-sm mb-1.5">
                      Email <span className="text-indigo-400">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="ivan@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-slate-600 text-sm form-input transition-all duration-300 ${
                        errors.email ? "border-red-500/50" : "border-white/10"
                      }`}
                      aria-required="true"
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="flex items-center gap-1 text-red-400 text-xs mt-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-slate-400 text-sm mb-1.5">
                    Тема <span className="text-indigo-400">*</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Предложение о сотрудничестве"
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-slate-600 text-sm form-input transition-all duration-300 ${
                      errors.subject ? "border-red-500/50" : "border-white/10"
                    }`}
                    aria-required="true"
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                  />
                  {errors.subject && (
                    <p id="subject-error" className="flex items-center gap-1 text-red-400 text-xs mt-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-slate-400 text-sm mb-1.5">
                    Сообщение <span className="text-indigo-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Расскажите о вашем проекте или задаче..."
                    rows={5}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-slate-600 text-sm form-input transition-all duration-300 resize-none ${
                      errors.message ? "border-red-500/50" : "border-white/10"
                    }`}
                    aria-required="true"
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  <div className="flex items-center justify-between mt-1">
                    {errors.message ? (
                      <p id="message-error" className="flex items-center gap-1 text-red-400 text-xs">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </p>
                    ) : (
                      <span />
                    )}
                    <span className="text-slate-600 text-xs">{form.message.length} символов</span>
                  </div>
                </div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-shadow duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  aria-busy={status === "loading"}
                >
                  {status === "loading" ? (
                    <>
                      <span className="w-5 h-5 spinner" />
                      Отправка...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Отправить сообщение
                    </>
                  )}
                </motion.button>

                <p className="text-slate-600 text-xs text-center">
                  Ответ в течение 24 часов · Никакого спама
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
