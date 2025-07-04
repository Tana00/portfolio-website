"use client";

import "./globals.css";
import { useState, ReactNode } from "react";
import Navbar from "./components/Navbar";
import { ThemeContext } from "@/app/components/theme-context";

export default function RootLayout({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <html lang="en" className={theme}>
      <body className="bg-bg text-text font-sans transition-colors duration-300">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          {children}
        </ThemeContext.Provider>
      </body>
    </html>
  );
}
