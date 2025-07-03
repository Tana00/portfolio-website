"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change or scroll
  useEffect(() => {
    if (!menuOpen) return;
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener("resize", closeMenu);
    window.addEventListener("scroll", closeMenu);
    return () => {
      window.removeEventListener("resize", closeMenu);
      window.removeEventListener("scroll", closeMenu);
    };
  }, [menuOpen]);

  return (
    <nav
      className={`max-w-7xl mx-auto sticky top-0 z-50 w-full flex items-center justify-between px-4 md:px-8 pt-4 shadow-sm transition-colors duration-300 ${
        scrolled ? "bg-surface-2/90 backdrop-blur" : "bg-surface-2"
      }`}
    >
      <div className="font-bold text-lg tracking-tight text-accent flex items-center gap-2">
        <Image
          src="/logo.png"
          alt="Happiness Oyinlola Logo"
          width={48}
          height={48}
          priority
          className="w-10 h-10 md:w-20 md:h-20 object-contain"
        />
      </div>
      {/* Overlay for mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-30 md:hidden"
          aria-hidden="true"
          onClick={() => setMenuOpen(false)}
        />
      )}
      {/* Hamburger for mobile */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none z-40"
        aria-label="Toggle navigation menu"
        onClick={() => setMenuOpen((open) => !open)}
        style={{
          position: menuOpen ? "fixed" : "static",
          right: menuOpen ? "1rem" : undefined,
          top: menuOpen ? "1rem" : undefined,
        }}
      >
        <span
          className={`block w-6 h-0.5 bg-accent mb-1 transition-transform duration-300 ${
            menuOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-accent mb-1 transition-opacity duration-300 ${
            menuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-accent transition-transform duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        ></span>
      </button>
      {/* Nav links */}
      <div
        className={`flex-col md:flex-row md:flex items-center gap-8 absolute md:static top-full left-0 w-full md:w-auto bg-surface-2 md:bg-transparent shadow md:shadow-none transition-all duration-300 z-40 ${
          menuOpen ? "flex" : "hidden md:flex"
        }`}
      >
        <ul className="flex flex-col md:flex-row gap-6 md:gap-8 text-base font-medium items-center md:items-stretch py-4 md:py-0">
          <li>
            <a
              href="#about"
              className="hover:text-accent transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="hover:text-accent transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-accent transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
          </li>
          <li className="cursor-pointer">
            <button
              onClick={() => {
                toggleTheme();
                setMenuOpen(false);
              }}
              className="cursor-pointer"
              aria-label="Toggle dark/light mode"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
          </li>
        </ul>
        <a
          href="#contact"
          className="block md:inline ml-0 md:ml-6 mt-2 md:mt-0 px-5 py-2 rounded-lg bg-accent text-surface_1 font-semibold shadow hover:bg-accent-hover transition-colors border-2 border-accent hover:border-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          onClick={() => setMenuOpen(false)}
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
