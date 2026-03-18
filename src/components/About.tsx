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

          {/* Right — stats */}
          <div className="flex items-center">
            <div className="grid grid-cols-2 gap-4 w-full">
              {[
                { number: '2+', label: 'Years Experience' },
                { number: '4+', label: 'Projects Shipped' },
                { number: '10+', label: 'Technologies' },
                { number: '1', label: 'Happy Developer' },
              ].map(({ number, label }) => (
                <div key={label} className="border border-[#e5e5e5] bg-white p-6">
                  <p className="text-4xl font-black text-black mb-2">{number}</p>
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
