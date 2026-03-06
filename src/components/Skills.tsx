const skillCategories = [
  {
    index: '01',
    title: 'Frontend',
    skills: ['Next.js', 'React.js', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
  },
  {
    index: '02',
    title: 'Backend',
    skills: ['Node.js', 'PHP', 'Laravel', 'Spring Boot', 'REST APIs', 'Nest.js'],
  },
  {
    index: '03',
    title: 'Database & ORM',
    skills: ['MySQL', 'Prisma'],
  },
  {
    index: '04',
    title: 'Tools & Concepts',
    skills: ['Git', 'GitHub', 'MVC Architecture', 'Responsive Design', 'API Integration', 'Authentication', 'CRUD Operations', 'Wordpress'],
  },
  {
    index: '05',
    title: 'Soft Skills',
    skills: ['Collaboration', 'Clean Code', 'Scalable Design', 'Continuous Learning'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-white border-t border-[#e5e5e5]">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-16">
          <span className="text-[#bbb] text-xs font-mono tracking-[0.2em] uppercase">02</span>
          <span className="w-8 h-px bg-[#ddd]" />
          <span className="text-[#bbb] text-xs font-mono tracking-[0.2em] uppercase">Skills</span>
        </div>

        <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-black mb-16">
          Technical
          <br />
          <span className="text-[#bbb]">Stack</span>
        </h2>

        <div className="divide-y divide-[#e5e5e5]">
          {skillCategories.map((category) => (
            <div
              key={category.index}
              className="group grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4 md:gap-12 py-8 hover:bg-[#f9f9f9] transition-colors duration-200"
            >
              {/* Category header */}
              <div className="flex md:flex-col gap-3 md:gap-2">
                <span className="text-[#ccc] text-xs font-mono">{category.index}</span>
                <span className="text-black text-sm font-semibold tracking-wide">
                  {category.title}
                </span>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 border border-[#e0e0e0] text-[#888] text-xs font-mono tracking-wide hover:border-black hover:text-black transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
