const timeline = [
  {
    type: 'work',
    period: '2024 — 2026',
    title: 'Full Stack Developer',
    org: 'Crackerdigital Media',
    bullets: [
      'Developed and maintained web application features using React.js, Vite and JavaScript.',
      'Built and integrated RESTful and third-party APIs for data exchange and application functionality.',
      'Worked on backend services using Node.js / PHP / Laravel for handling business logic.',
    ],
  },
  {
    type: 'education',
    period: '2024 — 2026',
    title: 'Master of Computer Applications',
    org: 'Indira Gandhi National Open University',
    bullets: [
      'Pursuing MCA with a specialization focus in Artificial Intelligence and Machine Learning.',
      'Studying core AI/ML concepts including supervised learning, neural networks, and data modeling.',
      'Applying ML techniques to real-world problems through coursework and projects.',
    ],
  },
  {
    type: 'education',
    period: '2023 — 2024',
    title: 'Web Development',
    org: 'Masai School',
    bullets: [],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-white border-t border-[#e5e5e5]">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-16">
          <span className="text-[#bbb] text-xs font-mono tracking-[0.2em] uppercase">04</span>
          <span className="w-8 h-px bg-[#ddd]" />
          <span className="text-[#bbb] text-xs font-mono tracking-[0.2em] uppercase">Experience</span>
        </div>

        <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-black mb-16">
          Journey &
          <br />
          <span className="text-[#bbb]">Education</span>
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-[#e5e5e5]" />

          <div className="flex flex-col gap-0">
            {timeline.map((item, index) => (
              <div key={index} className="group relative pl-8 pb-14 last:pb-0">
                {/* Dot */}
                <div
                  className={`absolute left-[-4px] top-2 w-2 h-2 rounded-full border transition-all duration-300 ${item.type === 'work'
                    ? 'bg-black border-black group-hover:shadow-[0_0_8px_rgba(0,0,0,0.3)]'
                    : 'bg-white border-[#ccc] group-hover:border-black'
                    }`}
                />

                {/* Period */}
                <p className="text-[#bbb] text-xs font-mono tracking-[0.15em] uppercase mb-3">
                  {item.period}
                </p>

                {/* Card */}
                <div className="border border-[#e5e5e5] bg-white p-6 group-hover:border-[#bbb] transition-colors duration-300">
                  {/* Type badge */}
                  <span className="inline-block text-[#bbb] text-[10px] font-mono tracking-[0.2em] uppercase border border-[#e5e5e5] px-2 py-0.5 mb-4">
                    {item.type === 'work' ? 'Experience' : 'Education'}
                  </span>

                  <h3 className="text-xl font-bold text-black mb-1 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-[#999] text-sm font-mono mb-5">{item.org}</p>

                  {item.bullets.length > 0 && (
                    <ul className="space-y-3">
                      {item.bullets.map((bullet, bi) => (
                        <li key={bi} className="flex gap-4 text-[#888] text-sm leading-relaxed">
                          <span className="text-[#ccc] font-mono mt-0.5 flex-shrink-0">—</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
