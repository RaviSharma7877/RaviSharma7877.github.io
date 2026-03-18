import ResumeButton from './ResumeButton';

const contactItems = [
  {
    label: 'Email',
    value: 'sraa7877@gmail.com',
    href: 'mailto:sraa7877@gmail.com',
    description: 'Drop me a message anytime',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+91 7877173859',
    href: 'tel:+917877173859',
    description: 'Available Mon–Fri, 9am–6pm IST',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'RaviSharma7877',
    href: 'https://github.com/RaviSharma7877',
    description: 'Check out my open source work',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-[#f9f9f9] border-t border-[#e5e5e5]">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-16">
          <span className="text-[#bbb] text-xs font-mono tracking-[0.2em] uppercase">05</span>
          <span className="w-8 h-px bg-[#ddd]" />
          <span className="text-[#bbb] text-xs font-mono tracking-[0.2em] uppercase">Contact</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — heading */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-black mb-6 leading-tight">
              Let&apos;s work
              <br />
              <span className="text-[#bbb]">together.</span>
            </h2>
            <p className="text-[#999] text-base leading-relaxed mb-10 max-w-sm">
              Open to full-time roles, freelance projects, and collaboration.
              Feel free to reach out through any of the channels below.
            </p>

            {/* Resume download */}
            <ResumeButton className="group inline-flex items-center gap-3 px-6 py-3 bg-black text-white text-sm font-semibold tracking-wide hover:bg-[#222] transition-colors duration-200">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Resume
            </ResumeButton>
          </div>

          {/* Right — contact cards */}
          <div className="flex flex-col gap-0 divide-y divide-[#e5e5e5]">
            {contactItems.map(({ label, value, href, description, icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className="group flex items-center gap-5 py-6 hover:bg-white transition-colors duration-200 px-4 -mx-4"
              >
                {/* Icon box */}
                <div className="flex-shrink-0 w-11 h-11 border border-[#e5e5e5] flex items-center justify-center text-[#bbb] group-hover:border-black group-hover:text-black transition-all duration-200">
                  {icon}
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p className="text-[#bbb] text-[10px] font-mono tracking-[0.2em] uppercase mb-0.5">
                    {label}
                  </p>
                  <p className="text-black text-sm font-semibold truncate">{value}</p>
                  <p className="text-[#bbb] text-xs mt-0.5">{description}</p>
                </div>

                {/* Arrow */}
                <svg
                  className="w-4 h-4 text-[#ccc] flex-shrink-0 group-hover:text-black transition-all duration-200 group-hover:translate-x-1"
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
      </div>
    </section>
  );
}
