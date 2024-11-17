"use client";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';



export default function Home() {
  return (
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-center">
        <h1 className="text-4xl font-bold sm:text-5xl">Kent Rattley</h1>
        <p className="text-center xs:text-center text-sm xs:text-xl">
          Second year Computer Science student at The University of Adelaide.
        </p>

        <div className="flex gap-12">
          <a href="https://github.com/kentr88" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-2">
          <FontAwesomeIcon icon={faGithub} size="2x" />
            
          </a>
          <a href="https://www.linkedin.com/in/kent-rattley-772769305/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-2">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
      </main>
  );
}
