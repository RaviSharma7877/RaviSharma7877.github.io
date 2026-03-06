const contacts = [
  {
    label: 'Email',
    value: 'sraa7877@gmail.com',
    href: 'mailto:sraa7877@gmail.com',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+91 7877173859',
    href: 'tel:+917877173859',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'RaviSharma7877',
    href: 'https://github.com/RaviSharma7877',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-[#f9f9f9] border-t border-[#e5e5e5]">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-16">
          <span className="text-[#bbb] text-xs font-mono tracking-[0.2em] uppercase">01</span>
          <span className="w-8 h-px bg-[#ddd]" />
          <span className="text-[#bbb] text-xs font-mono tracking-[0.2em] uppercase">About</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — text */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-black mb-8 leading-tight">
              Building things
              <br />
              <span className="text-[#bbb]">for the web.</span>
            </h2>
            <p className="text-[#666] text-base leading-relaxed mb-5">
              Full Stack Web Developer with hands-on experience building web applications
              using Next.js, React, Prisma, and RESTful APIs. Skilled in developing
              responsive user interfaces, integrating backend services, and working on
              real-world projects across content platforms and AI-driven applications.
            </p>
            <p className="text-[#999] text-base leading-relaxed">
              Strong collaborator with a focus on clean code, scalable design, and
              continuous learning. I care deeply about the details — from pixel-perfect
              UI to robust, maintainable backend architecture.
            </p>
          </div>

          {/* Right — contacts + stats */}
          <div className="flex flex-col justify-between gap-10">
            {/* Contact list */}
            <div>
              <p className="text-[#bbb] text-xs font-mono tracking-[0.2em] uppercase mb-6">
                Get in touch
              </p>
              <div className="flex flex-col gap-4">
                {contacts.map(({ label, value, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noreferrer' : undefined}
                    className="group flex items-center gap-4 py-3 border-b border-[#e5e5e5] hover:border-[#bbb] transition-colors duration-200"
                  >
                    <span className="text-[#bbb] group-hover:text-black transition-colors duration-200">
                      {icon}
                    </span>
                    <div>
                      <p className="text-[#bbb] text-xs font-mono tracking-wider uppercase mb-0.5">
                        {label}
                      </p>
                      <p className="text-[#555] text-sm group-hover:text-black transition-colors duration-200">
                        {value}
                      </p>
                    </div>
                    <svg
                      className="w-3.5 h-3.5 text-[#ccc] ml-auto group-hover:text-black transition-all duration-200 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: '2+', label: 'Years Experience' },
                { number: '5+', label: 'Projects Shipped' },
                { number: '10+', label: 'Technologies' },
                { number: '1', label: 'Happy Developer' },
              ].map(({ number, label }) => (
                <div key={label} className="border border-[#e5e5e5] bg-white p-4">
                  <p className="text-3xl font-black text-black mb-1">{number}</p>
                  <p className="text-[#bbb] text-xs font-mono tracking-wider uppercase">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
