import React from "react";
import Navbar from "./components/Navbar";
import libbot from "./assets/libbot.png";
import botreal from "./assets/realbot.jpeg";

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 antialiased selection:bg-blue-500/30 selection:text-blue-200">
      <Navbar />

      {/* Hero Section — Spaced & Elegant */}
      <main className="max-w-5xl mx-auto px-8 pt-48 pb-32 text-left">
        <div className="space-y-12 max-w-3xl">
          <div className="space-y-5">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
              Luis Ramirez
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-blue-400 tracking-wide">
              Electrical Engineering & Computer Science at UC Berkeley
            </h2>
          </div>

          <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl font-normal">
            I am an EECS student focused on robotics, software engineering, 
            and hardware design. I enjoy building high-performance systems that seamlessly combine 
            mechanical design, electronics, and software.
          </p>

          {/* Fixed Button Spacing — Increased gap from gap-4 to gap-8 */}
          <div className="flex flex-wrap items-center gap-8 pt-4">
            <a 
              href="#projects" 
              className="px-6 py-3.5 text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white rounded-lg shadow-lg shadow-blue-600/10 transition-all duration-200 hover:-translate-y-0.5"
            >
              Browse Projects
            </a>
            <a 
              href="https://www.linkedin.com/in/luiseramirezjr/" 
              target="_blank" 
              rel="noreferrer" 
              className="px-6 py-3.5 text-sm font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg border border-slate-700 transition-all duration-200 hover:-translate-y-0.5"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </main>

      {/* Projects Section — Clean Presentation */}
      <section id="projects" className="max-w-5xl mx-auto px-8 py-28 border-t border-slate-800/60">
        <div className="space-y-4 mb-16">
          <h2 className="text-xs font-semibold tracking-widest text-blue-400 uppercase">
            Selected Work
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Engineering Projects
          </h3>
        </div>

        {/* Large Spaced-Out Project Layout */}
        <div className="bg-slate-950/40 border border-slate-800/80 rounded-2xl p-8 md:p-12 space-y-12 hover:border-slate-700/60 transition-all duration-300 shadow-2xl shadow-black/10">
          
          {/* Dual Media Grid: Physical Bot + CAD Model Side-by-Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Box: Real-Life Build */}
            <div className="flex flex-col items-center justify-center bg-slate-900/40 rounded-xl p-6 border border-slate-800/30 min-h-[280px]">
              <span className="text-[10px] font-mono tracking-wider text-slate-500 uppercase mb-4">Physical Hardware Build</span>
              <img 
                src={botreal} 
                alt="Combat Robot Real Life Build" 
                className="max-h-[220px] object-contain rounded-lg drop-shadow-2xl"
              />
            </div>

            {/* Right Box: Onshape CAD Model */}
            <div className="flex flex-col items-center justify-center bg-slate-900/40 rounded-xl p-6 border border-slate-800/30 min-h-[280px]">
              <span className="text-[10px] font-mono tracking-wider text-slate-500 uppercase mb-4">Onshape CAD Assembly</span>
              <img 
                src={libbot} 
                alt="Combat Robotics CAD Design" 
                className="max-h-[220px] object-contain mix-blend-lighten drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Project Details Description Section */}
          <div className="space-y-8 pt-6 border-t border-slate-900">
            <div className="space-y-4">
              {/* Fixed Badge Spacing — Changed from gap-2.5 to gap-5 */}
              <div className="flex flex-wrap gap-5">
                <span className="text-[11px] font-medium px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/15 tracking-wide">
                  Robotics
                </span>
                <span className="text-[11px] font-medium px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700/50 tracking-wide">
                  Onshape CAD
                </span>
                <span className="text-[11px] font-medium px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/15 tracking-wide">
                  Hardware
                </span>
              </div>
              
              <h4 className="text-2xl md:text-3xl font-bold text-white tracking-tight pt-1">
                Combat Robotics — One-Pound BattleBot
              </h4>
            </div>
            
            <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-4xl font-normal">
              Designed the complete mechanical assembly of a one-pound combat robot in Onshape, 
              leading the CAD development and overall design process. Manufactured and assembled the 
              robot using 3D-printed components, integrated the electronic systems through soldering 
              and wiring, and collaborated with teammates to iterate the design for competition-ready performance.
            </p>

            {/* Removed Hashtags & Added Clean Spacing — Changed gap and font weight */}
            <div className="flex flex-wrap items-center gap-8 text-xs font-mono text-slate-500 pt-4 tracking-wide">
              <span>Mechanical Design</span>
              <span>Embedded Systems</span>
              <span>Prototyping</span>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default App;