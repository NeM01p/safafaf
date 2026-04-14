import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] h-0.5 origin-left"
      style={{
        background: "linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4)",
        transform: `scaleX(${progress / 100})`,
        transformOrigin: "left",
        transition: "transform 0.1s linear",
      }}
      aria-hidden="true"
    />
  );
}
