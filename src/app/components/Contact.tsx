import React from "react";

const Contact: React.FC = () => (
  <section
    id="contact"
    className="w-full bg-surface-1 rounded-xl shadow p-8 flex flex-col items-center justify-center"
  >
    <div className="w-full max-w-5xl flex flex-col md:flex-row gap-12">
      {/* Left: Contact Info */}
      <div className="flex-1 flex flex-col justify-center gap-6">
        <h2 className="text-4xl font-bold mb-2">Get in touch</h2>
        <div className="mb-2">
          <div className="text-sm text-text-muted">Email:</div>
          <div className="text-lg font-medium">happinessblgn0@gmail.com</div>
        </div>
        <div className="mb-2">
          <div className="text-sm text-text-muted">Phone:</div>
          <div className="text-lg font-medium">+447888897773</div>
        </div>
        <div className="mb-2">
          <div className="text-sm text-text-muted">Address:</div>
          <div className="text-lg font-medium leading-snug">
            Derby,
            <br />
            United Kingdom
          </div>
        </div>
      </div>
      {/* Right: Contact Form */}
      <div className="flex-1 flex flex-col justify-center">
        <form className="flex flex-col gap-4 bg-surface-2 rounded-xl p-6 shadow">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Your full name"
              className="flex-1 bg-surface-1 border border-border rounded px-4 py-2 text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-surface-1 border border-border rounded px-4 py-2 text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <textarea
            placeholder="Write something...."
            rows={5}
            className="bg-surface-1 border border-border rounded px-4 py-2 text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <button
            type="submit"
            className="w-full mt-2 px-6 py-3 bg-accent text-bg rounded font-semibold shadow hover:bg-accent-hover transition-colors text-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default Contact;
