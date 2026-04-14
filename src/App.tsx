import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";

/**
 * Root Application Component
 * Portfolio of Alexey Morozov — Full-Stack Developer
 *
 * Sections:
 * 1. Hero         — greeting and key info
 * 2. About        — about me, interests, values
 * 3. Skills       — tech stack with animated bars
 * 4. Experience   — work history (timeline)
 * 5. Projects     — portfolio cards with modal
 * 6. Contact      — form + social links
 * 7. Footer
 */
export default function App() {
  return (
    <div
      className="min-h-screen antialiased"
      style={{
        fontFamily: "'Inter', sans-serif",
        background: "#0a0a0f",
        color: "#e2e8f0",
      }}
    >
      {/* Scroll progress indicator */}
      <ScrollProgress />

      {/* Fixed navigation */}
      <Navbar />

      <main>
        {/* 1. Hero section */}
        <Hero />

        {/* 2. About section */}
        <About />

        {/* 3. Skills section */}
        <Skills />

        {/* 4. Experience section */}
        <Experience />

        {/* 5. Projects section */}
        <Projects />

        {/* 6. Contact section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
