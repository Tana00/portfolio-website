import React from "react";

const Projects: React.FC = () => (
  <section
    id="projects"
    className="w-full max-w-7xl text-left bg-surface-1 rounded-xl shadow p-6 border border-border mb-20"
  >
    <h3 className="text-2xl font-semibold mb-2 text-accent">Projects</h3>
    <ul className="space-y-6">
      <li className="bg-surface-2 rounded-lg p-4">
        <strong className="text-accent">Microsoft Word Add-In Developer</strong>
        <p className="text-text-muted mt-1">
          Built a Word add-in for the Nigerian Bar Association using React and
          Office JS API, automating seal/stamp application and improving
          document processing speed by 70%.
        </p>
      </li>
      <li className="bg-surface-2 rounded-lg p-4">
        <strong className="text-accent">Web Developer, Delore Care</strong>
        <p className="text-text-muted mt-1">
          Redesigned an in-home care provider portal with Next.js and Tailwind
          CSS, boosting engagement and job applications, and streamlining
          communication with SendGrid.
        </p>
      </li>
      <li className="bg-surface-2 rounded-lg p-4">
        <strong className="text-accent">Web Developer, JVAS Property</strong>
        <p className="text-text-muted mt-1">
          Designed a responsive landing page for an Airbnb apartment, increasing
          booking inquiries and organic search traffic through improved SEO and
          functionality.
        </p>
      </li>
    </ul>
  </section>
);

export default Projects;
