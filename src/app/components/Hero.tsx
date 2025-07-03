import React, { useState, useEffect } from "react";
import Starfield from "./Starfield";
import Image from "next/image";

const socialLinks = [
  {
    href: "mailto:happinessblgn0@@gmail.com",
    label: "Email",
    icon: (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75m19.5 0v.243a2.25 2.25 0 01-.876 1.8l-7.125 5.7a2.25 2.25 0 01-2.748 0l-7.125-5.7a2.25 2.25 0 01-.876-1.8V6.75"
        />
      </svg>
    ),
  },
  {
    href: "https://linkedin.com/in/happinessbalogun",
    label: "LinkedIn",
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.966 0-1.75-.79-1.75-1.76 0-.97.784-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.784 1.76-1.75 1.76zm15.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.61z" />
      </svg>
    ),
  },
  {
    href: "https://github.com/tana00",
    label: "GitHub",
    icon: (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"
        />
      </svg>
    ),
  },
];

const Hero: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    // Check scroll position on mount
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="about"
      className="xl:min-h-screen max-w-7xl w-full mx-auto px-4 sm:px-8 pt-10 lg:pt-0 mb-10 flex flex-col lg:flex-row items-center justify-between relative overflow-hidden min-h-[500px]"
    >
      <Starfield />
      {/* Left: Text */}
      <div className="flex-1 flex flex-col justify-center z-10 w-full max-w-xl items-center lg:items-start">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 text-center lg:text-left tracking-tight animate-fadein fadein-delay-1 relative">
          <span className="bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
            Happiness Oyinlola
          </span>
          <span className="block h-0.5 w-24 bg-gradient-to-r from-accent to-accent/70 rounded mt-2 mb-2 mx-auto lg:mx-0" />
        </h1>
        <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 text-text text-center lg:text-left animate-fadein fadein-delay-2">
          Frontend Engineer (React, Next.js, TypeScript)
        </h2>
        <p className="mb-8 text-text-muted max-w-xl text-center lg:text-left leading-relaxed animate-fadein fadein-delay-3">
          Skilled Frontend Developer with expertise in React.js, Next.js, and
          TypeScript, specialising in creating user-centric, responsive web
          applications.
        </p>
        <div className="flex flex-row gap-5 mb-8 items-center justify-center lg:justify-start animate-fadein fadein-delay-4">
          <a
            href="/Happiness_Oyinlola_FE_Engineer_CV.pdf"
            download
            className="inline-block px-8 py-3 border-2 border-accent text-accent font-semibold rounded-lg shadow hover:bg-accent hover:text-bg transition-colors duration-200"
          >
            Download Resume
          </a>
        </div>
      </div>
      {/* Right: Large Image */}
      <div className="flex-1 flex justify-center lg:justify-end items-center w-full h-full mt-2 lg:mt-0 z-10">
        <div className="w-full h-[400px] sm:h-[500px] xl:h-[700px] max-w-[600px] rounded-3xl overflow-hidden shadow-lg bg-gradient-to-br from-accent to-accent/70 relative mx-auto lg:ml-auto">
          <Image
            src="/avatar.png"
            alt="Happiness Oyinlola avatar"
            width={8000}
            height={800}
            className="w-full h-full object-cover rounded-3xl"
            priority
          />
          {/* Subtle color-cast overlay */}
          <div className="absolute inset-0 rounded-3xl bg-accent/20 pointer-events-none" />
        </div>
      </div>
      {/* Social Links Fixed at Bottom Left */}
      <div
        className={`fixed z-50 flex ${
          scrolled
            ? "flex-col bottom-4 left-2 sm:bottom-6 sm:left-8"
            : "flex-row bottom-10 left-4 sm:bottom-12 sm:left-24"
        } gap-4 animate-fadein fadein-delay-4 transition-all duration-500 ease-in-out`}
        style={{ transitionProperty: "bottom, flex-direction" }}
      >
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="text-accent hover:text-accent-hover transition-colors duration-200 text-2xl transform hover:scale-125 focus:scale-125 focus:outline-none"
            style={{ transition: "color 0.2s, transform 0.2s" }}
          >
            {link.icon}
          </a>
        ))}
        {scrolled && (
          <div className="w-px h-8 bg-accent mx-auto mt-2 opacity-40 transition-all duration-500" />
        )}
      </div>
    </section>
  );
};

export default Hero;
