import React from "react";

const Experience: React.FC = () => (
  <section
    id="experience"
    className="relative w-full text-left shadow py-16 px-6 mb-20"
  >
    <div className="absolute inset-0 bg-surface_3/20 pointer-events-none" />
    <div className="max-w-5xl mx-auto">
      <h3 className="text-2xl font-semibold mb-2 text-accent">Experience</h3>
      <ul className="space-y-6">
        <li className="bg-surface-2 rounded-lg p-4">
          <strong className="text-accent">Frontend Developer, Clouddley</strong>{" "}
          <span className="text-text-muted">(11/2022 - Current)</span>
          <p className="text-text-muted mt-1">
            Led frontend development for a SaaS cloud management platform using
            React, Next.js, Tailwind CSS, MUI, and Redux. Improved conversion
            rates, integrated social login, and optimized performance and
            testing.
          </p>
        </li>
        <li className="bg-surface-2 rounded-lg p-4">
          <strong className="text-accent">Frontend Developer, Settl.me</strong>{" "}
          <span className="text-text-muted">(03/2022 - 10/2022)</span>
          <p className="text-text-muted mt-1">
            Built a consumer lifestyle web app for food ordering and service
            booking. Integrated payment gateways, live notifications, feature
            flags, and implemented robust testing and monitoring.
          </p>
        </li>
        <li className="bg-surface-2 rounded-lg p-4">
          <strong className="text-accent">
            Frontend Developer, Optisource Technology Solutions
          </strong>{" "}
          <span className="text-text-muted">(11/2020 - 03/2022)</span>
          <p className="text-text-muted mt-1">
            Modernized an ASP.Net accounting software to React.js, led website
            redesigns, and established CI/CD pipelines for smooth deployments.
          </p>
        </li>
      </ul>
    </div>
  </section>
);

export default Experience;
