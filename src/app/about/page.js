"use client";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';



export default function Home() {
  return (
    <main className="flex flex-col gap-8 items-center p-4 ms:p-10 w-full mt-6">
      <h1 className="text-4xl font-bold">About Me</h1>
      <div className="flex flex-col gap-12 w-full max-w-4xl">
          
          <div className="border-t pt-8">
              <div className="gap-8 text-left">
                  <h2 className="text-2xl font-semibold">Introduction</h2>
                  <p className="mt-2 text-md">
                    Hi, my name is Kent Rattley, I am a second year Computer Science student at the University of Adelaide.
                    I am interested in machine learning, software and web development.
                  </p>
              </div>
          </div>

          <div className="border-t pt-8">
              <div className="gap-8 text-left">
                  <h2 className="text-2xl font-semibold">Education</h2>
                  <p className="mt-2 text-md">
                    <b>Bachelor of Computer Science</b> - University of Adelaide (2023 - 2025)
                  </p>
              </div>
          </div>

          <div className="border-t pt-8">
              <div className="gap-8 text-left">
                  <h2 className="text-2xl font-semibold">Past Employment</h2>
                  <p className="mt-2 text-md">
                    <b>Office Administrator (Certificate 3 in Business)</b> - Rice Electrical Contractors (2022)<br/>
                  </p>
              </div>
          </div>
          
      </div>
    </main>
  );
}
