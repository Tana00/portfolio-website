import React, { useState } from "react";

const About: React.FC = () => {
  const [showFact, setShowFact] = useState(false);

  return (
    <section className="relative w-full text-center bg-surface_1 shadow p-10 mb-20">
      <div className="absolute inset-0 bg-accent/20 pointer-events-none" />
      <div className="max-w-5xl mx-auto px-10 flex items-center justify-between">
        <h3 className="text-2xl font-medium mb-2 text-accent w-full">
          About Me
        </h3>
        <div className="text-left">
          <div className="mb-4 text-text leading-relaxed">
            <span>
              Hi, I&apos;m{" "}
              <span className="font-bold text-accent">Happiness Oyinlola</span>!
              I absolutely love collaborating with creative minds to build
              beautiful, user-centric web experiences.
            </span>
            <br />
            <br />
            <span className="font-semibold">What drives me:</span>
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>Writing clean, maintainable code</li>
              <li>Designing modern, intuitive interfaces</li>
              <li>Solving real-world problems with technology</li>
            </ul>
            <br />
            <span>
              I believe every project is an opportunity to learn, grow, and make
              a positive impact. Let&apos;s create something amazing together!
            </span>
          </div>
          <button
            className="inline-block mt-2 px-4 py-2 border border-border text-text-muted rounded hover:bg-surface_2 transition cursor-pointer"
            onClick={() => setShowFact((prev) => !prev)}
          >
            {showFact ? "Hide Fun Fact" : "Show Fun Fact"}
          </button>
          {showFact && (
            <div className="mt-4 p-3 bg-surface-2 rounded text-accent text-sm animate-fade-in">
              🌟 <span className="font-semibold">Fun Fact:</span> I once built a
              mobile app that lets users upload any outfit photo and instantly
              connects them with talented fashion designers who can bring that
              style to life!
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
