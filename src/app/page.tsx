import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import ResumeButton from '@/components/ResumeButton';

export default function Home() {
  return (
    <main className="bg-white min-h-screen text-black">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />

      <footer className="border-t border-[#e5e5e5] bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-black font-bold text-lg tracking-tight">RS.</span>
            <p className="text-[#bbb] text-xs font-mono tracking-wider">
              &copy; {new Date().getFullYear()} Ravi Sharma. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="mailto:sraa7877@gmail.com"
                className="text-[#aaa] text-xs font-mono hover:text-black transition-colors duration-200"
              >
                Email
              </a>
              <a
                href="https://github.com/RaviSharma7877"
                target="_blank"
                rel="noreferrer"
                className="text-[#aaa] text-xs font-mono hover:text-black transition-colors duration-200"
              >
                GitHub
              </a>
              <ResumeButton className="text-[#aaa] text-xs font-mono hover:text-black transition-colors duration-200" />
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
