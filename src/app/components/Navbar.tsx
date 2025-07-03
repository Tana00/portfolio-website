"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full flex items-center justify-between px-8 pt-4 shadow-sm transition-colors duration-300 ${
        scrolled ? "bg-surface-2/90 backdrop-blur" : "bg-surface-2"
      }`}
    >
      <div className="font-bold text-lg tracking-tight text-accent flex items-center gap-2">
        <Image
          src="/logo.png"
          alt="Happiness Oyinlola Logo"
          width={80}
          height={80}
          priority
        />
      </div>
      <div className="flex items-center gap-8">
        <ul className="flex gap-8 text-base font-medium">
          <li>
            <a href="#about" className="hover:text-accent transition-colors">
              About
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="hover:text-accent transition-colors"
            >
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-accent transition-colors">
              Projects
            </a>
          </li>
          <li className="cursor-pointer">
            <button
              onClick={toggleTheme}
              className="cursor-pointer"
              aria-label="Toggle dark/light mode"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
          </li>
        </ul>
        <a
          href="#contact"
          className="ml-6 px-5 py-2 rounded-lg bg-accent text-surface_1 font-semibold shadow hover:bg-accent-hover transition-colors border-2 border-accent hover:border-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
        >
          Contact
        </a>
      </div>
      <div className="absolute -z-10 top-[-80px] left-[-80px] opacity-40 pointer-events-none">
        <svg width="340" height="340" viewBox="0 0 340 340" fill="none">
          <ellipse
            cx="170"
            cy="170"
            rx="170"
            ry="170"
            fill="url(#paint0_radial)"
          />
          <defs>
            <radialGradient
              id="paint0_radial"
              cx="0"
              cy="0"
              r="1"
              gradientTransform="translate(170 170) scale(170)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5BA3F7" />
              <stop offset="1" stopColor="#5BA3F7" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
