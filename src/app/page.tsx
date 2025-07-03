"use client";

import {
  Hero,
  About,
  Skills,
  Experience,
  Projects,
  Contact,
} from "@/app/components";
import { skills } from "@/app/data/skillsData";

export default function Home() {
  return (
    <main className="min-h-screen w-full mx-auto flex flex-col items-center justify-center gap-12 py-4">
      <Hero />
      <About />
      <Skills skills={skills} />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
