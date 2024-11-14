import Image from "next/image";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-4 pb-10 gap-8 sm:p-10 font-[family-name:var(--font-geist-sans)] text-center">
      <header className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between w-full mb-8 pt-6 sm:pt-6">
        <h3 className="text-2xl font-bold sm:text-3xl">
          LOGO
        </h3>
        <nav className="flex gap-4">
          <a href="#about" className="hover:underline">About</a>
          <a href="#resume" className="hover:underline">Resume</a>
          <a href="#projects" className="hover:underline">Projects</a>
        </nav>
      </header>
      
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-center">
        <h1 className="text-4xl font-bold sm:text-5xl">Kent Rattley</h1>
        <p className="text-center xs:text-center text-sm xs:text-xl">
          Second year Computer Science student at The University of Adelaide.
        </p>

        <div className="flex gap-4">
          <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-2">
          <FontAwesomeIcon icon={faGithub} size="2x" />
            
          </a>
          <a href="https://www.linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-2">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
      </main>

      <footer className="flex gap-6 flex-wrap items-center justify-center mt-8">
        <p className="text-xs text-center sm:text-center">
          © {new Date().getFullYear()} Kent Rattley. Powered by 
          <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
            <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="hover:underline">Next.js</a>
          </code>
        </p>
      </footer>
    </div>
  );
}
