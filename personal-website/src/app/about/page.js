"use client";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';



export default function Home() {
  return (
      <main className="flex flex-col gap-8 items-center p-4 ms:p-10 w-full mt-6">
        <h1 className="text-4xl font-bold sm:text-5xl">About Me</h1>
        <p className="text-center xs:text-center text-sm xs:text-xl">
          Second year Computer Science student at The University of Adelaide.
        </p>
        <p>This is the About page content.</p>
        
      </main>
  );
}
