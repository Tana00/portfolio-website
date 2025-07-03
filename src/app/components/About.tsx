import React, { useState } from "react";

const About: React.FC = () => {
  const [showFact, setShowFact] = useState(false);

  return (
    <section className="relative w-full text-center bg-surface_1 shadow p-10 mb-20">
      <div className="absolute inset-0 bg-accent/20 pointer-events-none" />
      <div className="max-w-5xl mx-auto sm:px-10 flex flex-col md:flex-row items-center justify-between">
        {/* <section className="w-full max-w-2xl mx-auto bg-surface-1 rounded-xl shadow p-4 sm:p-6 border border-border mb-4"> */}
        <h3 className="text-2xl font-semibold mb-2 text-accent text-center lg:text-left w-full">
          About Me
        </h3>
        <div className="text-left">
          <p className="mb-4 text-text-muted text-center lg:text-left">
            Hi, I&apos;m{" "}
            <span className="font-bold text-accent">Happiness Oyinlola</span>! I
            absolutely love collaborating with creative minds to build
            beautiful, user-centric web experiences.
            <br />
            <br />
            <span className="font-semibold">What drives me:</span>
            <ul className="list-disc list-inside ml-4 sm:ml-6 mt-2 text-left">
              <li>Writing clean, maintainable code</li>
              <li>Designing modern, intuitive interfaces</li>
              <li>Solving real-world problems with technology</li>
            </ul>
            <br />I believe every project is an opportunity to learn, grow, and
            make a positive impact. Let&apos;s create something amazing
            together!
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center lg:justify-start">
            <button
              className="inline-block px-4 py-2 border border-border text-text-muted rounded hover:bg-surface-2 transition"
              onClick={() => setShowFact((prev) => !prev)}
            >
              {showFact ? "Hide Fun Fact" : "Show Fun Fact"}
            </button>
          </div>
          {showFact && (
            <div className="mt-4 p-3 bg-surface-2 rounded text-accent text-sm animate-fade-in text-center lg:text-left">
              🌟 <span className="font-semibold">Fun Fact:</span> I once built
              an app that lets users upload any outfit photo and instantly
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
