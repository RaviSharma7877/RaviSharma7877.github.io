const projects = [
  {
    number: '01',
    title: 'SamskritSamhita',
    techstack: ['Next.js', 'Prisma', 'Python'],
    description: [
      'Built a web-based platform for managing and displaying Sanskrit literature content.',
      'Implemented dictionary search and text-based content features using database queries.',
      'Integrated backend services with Next.js frontend using APIs.',
    ],
    link: 'https://samskritsamhita.org',
  },
  {
    number: '02',
    title: 'Actionable',
    techstack: ['Vite.js', 'Bootstrap', 'PHP/Laravel'],
    description: [
      'Developed and maintained web application features using React.js, Vite.js and PHP/Laravel.',
      'Built and integrated RESTful and third-party APIs for data exchange and application functionality.',
      'Implemented responsive UI components in collaboration with designers.',
      'Worked on backend services using Node.js / PHP / Laravel for handling business logic and database operations.',
      'Wrote clean, maintainable code and supported documentation for deployed features.',
      'Participated in debugging, testing, and improving application stability.',
    ],
    link: 'https://actionable.co',
  },
  {
    number: '03',
    title: 'NexAvenir Platform',
    techstack: ['Next.js', 'Prisma ORM', 'TypeScript'],
    description: [
      'Contributed to building a web platform using Next.js and Prisma ORM.',
      'Implemented frontend components and API integrations for content and service modules.',
      'Worked on database-driven features for managing structured application data.',
      'Assisted in improving application performance and UI consistency.',
    ],
    link: 'https://nexavenir.com',
  },
  {
    number: '04',
    title: 'SketchPad',
    techstack: ['Socket.io', 'WebSockets', 'Canvas API', 'Real-time Sync'],
    description: [
      'A professional collaborative whiteboard with an infinite canvas for teams to draw, design, and plan together in real time.',
      'Built real-time collaboration with live cursors and instant state sync via Socket.io — guests join via shareable link with no signup required.',
      'Implemented infinite canvas with zoom from 5% to 3000%, rich shape library (rectangles, ellipses, arrows, freehand, sticky notes), and layer management.',
      'Smart export to PNG, PDF, SVG, and JSON at any resolution, plus one-click version history to snapshot and restore any previous canvas state.',
    ],
    link: 'https://sketchboard.e2shub.com/',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-[#f9f9f9] border-t border-[#e5e5e5]">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-16">
          <span className="text-[#bbb] text-xs font-mono tracking-[0.2em] uppercase">03</span>
          <span className="w-8 h-px bg-[#ddd]" />
          <span className="text-[#bbb] text-xs font-mono tracking-[0.2em] uppercase">Projects</span>
        </div>

        <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-black mb-16">
          Featured
          <br />
          <span className="text-[#bbb]">Projects</span>
        </h2>

        <div className="flex flex-col divide-y divide-[#e5e5e5]">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group grid grid-cols-1 lg:grid-cols-[80px_1fr] gap-6 lg:gap-12 py-12 hover:bg-white transition-colors duration-300"
            >
              {/* Number */}
              <span className="text-[#ddd] text-5xl font-black font-mono leading-none group-hover:text-[#ccc] transition-colors duration-300">
                {project.number}
              </span>

              {/* Content */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                  <h3 className="text-2xl lg:text-3xl font-bold text-black tracking-tight">
                    {project.title}
                  </h3>
                  {/* Arrow icon */}

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 w-10 h-10 border border-[#e0e0e0] flex items-center justify-center group-hover:border-black group-hover:bg-black transition-all duration-300"
                  >
                    <svg
                      className="w-4 h-4 text-[#bbb] group-hover:text-white transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techstack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 border border-[#e0e0e0] text-[#aaa] text-xs font-mono tracking-wider group-hover:border-[#ccc] group-hover:text-[#888] transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <ul className="space-y-3">
                  {project.description.map((desc, i) => (
                    <li key={i} className="flex gap-4 text-[#888] text-sm leading-relaxed">
                      <span className="text-[#ccc] font-mono mt-0.5 flex-shrink-0">—</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
