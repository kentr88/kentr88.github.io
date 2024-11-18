"use client";

import "./globals.css"; // Import global styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

import localFont from "next/font/local";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



export default function RootLayout({ children }) {
  const [theme, setTheme] = useState("light");

  // Load theme from localStorage on initial render
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);

  // Toggle theme and save to localStorage
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
        <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-4 pb-10 gap-8 sm:p-10 font-[family-name:var(--font-geist-sans)] text-center bg-white dark:bg-gray-900 text-black dark:text-white">
          <header className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between w-full mb-8 pt-6 sm:pt-6">
            <a href="/"><h3 className="text-2xl font-bold sm:text-3xl">
              KR
            </h3>
            </a>
            <nav className="flex gap-4">
              <a href="/about" className="hover:underline">About</a>
              <a href="/Kent Resume.pdf" className="hover:underline">Resume</a>
              <a href="/projects" className="hover:underline">Projects</a>
            <button onClick={toggleTheme} className="ml-2 px-2 border rounded text-sm border-none bg-transparent">
                {theme === "light" ? <FontAwesomeIcon icon={faSun} size="lg"/> : <FontAwesomeIcon icon={faMoon} size="lg"/>}
            </button>
            </nav>
          </header>
          {children}
          <footer className="flex gap-6 flex-wrap items-center justify-center mt-8">
          <p className="text-xs text-center sm:text-center">
            © {new Date().getFullYear()} Kent Rattley. Powered by 
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="hover:underline">Next.js</a>
            </code>
          </p>
        </footer>
      </div>
      </body>
    </html>
  );
}
