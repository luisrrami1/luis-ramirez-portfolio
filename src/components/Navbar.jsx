import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#030712]/80 backdrop-blur-md border-b border-gray-800/50 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tight text-white hover:text-blue-400 transition-colors">
          Luis Ramirez
        </a>
        <div className="flex items-center gap-6">
          <a href="#projects" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            Projects
          </a>
          <a 
            href="./ResumeLuisEnriqueRamirezjr.pdf" 
            download="ResumeLuisEnriqueRamirezjr.pdf"
            className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium bg-white/10 hover:bg-white/20 text-white rounded-full transition-all border border-white/10"
          >
            Resume
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}