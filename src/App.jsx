import React, { useState } from "react";
import Navbar from "./components/Navbar";
import libbot from "./assets/libbot.png";
import botreal from "./assets/realbot.jpeg";

function App() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 antialiased selection:bg-blue-500/30 selection:text-blue-200">
      <Navbar />

      {/* Hero Section */}
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

      {/* Projects Section */}
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
          
          {/* Dual Media Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col items-center justify-center bg-slate-900/40 rounded-xl p-6 border border-slate-800/30 min-h-[280px]">
              <span className="text-[10px] font-mono tracking-wider text-slate-500 uppercase mb-4">Physical Hardware Build</span>
              <img src={botreal} alt="Combat Robot Real Life Build" className="max-h-[220px] object-contain rounded-lg drop-shadow-2xl" />
            </div>

            <div className="flex flex-col items-center justify-center bg-slate-900/40 rounded-xl p-6 border border-slate-800/30 min-h-[280px]">
              <span className="text-[10px] font-mono tracking-wider text-slate-500 uppercase mb-4">Onshape CAD Assembly</span>
              <img src={libbot} alt="Combat Robotics CAD Design" className="max-h-[220px] object-contain mix-blend-lighten drop-shadow-2xl" />
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-8 pt-6 border-t border-slate-900">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-5">
                <span className="text-[11px] font-medium px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/15 tracking-wide">Robotics</span>
                <span className="text-[11px] font-medium px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700/50 tracking-wide">Mechanical Design</span>
                <span className="text-[11px] font-medium px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/15 tracking-wide">Electronics Packaging</span>
                <span className="text-[11px] font-medium px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/15 tracking-wide">3D Printing</span>
              </div>
              <h4 className="text-2xl md:text-3xl font-bold text-white tracking-tight pt-1">
                Combat Robotics — One-Pound BattleBot
              </h4>
            </div>
            
            <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-4xl font-normal">
              A competitive 1 lb combat robot engineered for high-impact performance. Built around an active vertical spinning weapon system, an FDM-printed structural PLA chassis, and a dual-wheel brushed drivetrain. My central focus involved designing the complete physical architecture in Onshape, optimizing component packaging within tight dimensional constraints, and managing the internal electronics layout including custom soldering, wire routing, and reliable power configuration.
            </p>

            {/* Interactive Learn More Button */}
            <div className="pt-2">
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="group flex items-center gap-2 text-sm font-semibold text-white hover:text-blue-400 transition-colors bg-slate-800/80 border border-slate-700 px-4 py-2.5 rounded-lg"
              >
                <span>{showDetails ? "Hide Detailed Breakdown" : "View Technical Documentation & Specs"}</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={`w-4 h-4 transition-transform duration-200 ${showDetails ? "rotate-180" : ""}`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
            </div>

            {/* Expandable Project Documentation Section */}
            {showDetails && (
              <div className="space-y-12 pt-10 border-t border-slate-800 animate-fadeIn">
                
                {/* Section 1: Overview & Weapon System */}
                <div className="space-y-4">
                  <h5 className="text-lg font-bold text-white tracking-tight">Weapon Dynamics & Core Architecture</h5>
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                    The assembly is optimized around a high-torque vertical spinning system, which required strict allocation of the limited 453.59g weight budget. By leveraging lightweight FDM-printed PLA components for structural housing, the system isolates high-impact stress lines while leaving a 64.39g engineering safety margin for modular frame adjustments.
                  </p>
                  
                  {/* Grid blocks for key calculations */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
                    <div className="bg-slate-950/40 p-4 rounded-xl border border-slate-800 text-left">
                      <span className="block text-[10px] font-mono tracking-wider text-slate-500 uppercase">Weight Limit</span>
                      <span className="block text-xl font-bold text-white mt-1">453.59g</span>
                    </div>
                    <div className="bg-slate-950/40 p-4 rounded-xl border border-slate-800 text-left">
                      <span className="block text-[10px] font-mono tracking-wider text-slate-500 uppercase">Weapon Motor</span>
                      <span className="block text-xl font-bold text-blue-400 mt-1">1400KV</span>
                    </div>
                    <div className="bg-slate-950/40 p-4 rounded-xl border border-slate-800 text-left">
                      <span className="block text-[10px] font-mono tracking-wider text-slate-500 uppercase">Assembled Mass</span>
                      <span className="block text-xl font-bold text-white mt-1">394.43g</span>
                    </div>
                    <div className="bg-slate-950/40 p-4 rounded-xl border border-slate-800 text-left">
                      <span className="block text-[10px] font-mono tracking-wider text-slate-500 uppercase">Remaining Margin</span>
                      <span className="block text-xl font-bold text-emerald-400 mt-1">64.39g</span>
                    </div>
                  </div>
                </div>

                {/* Section 2: Detailed Specs Split */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                  {/* Mass Budget Table */}
                  <div className="space-y-4">
                    <h5 className="text-xs font-bold tracking-wider text-slate-400 uppercase font-mono">Mass Budget & Allocation</h5>
                    <div className="overflow-hidden border border-slate-800 rounded-xl bg-slate-950/20">
                      <table className="w-full text-left border-collapse text-sm text-slate-300">
                        <thead>
                          <tr className="border-b border-slate-800 bg-slate-900/40 text-slate-400 font-mono text-[11px]">
                            <th className="p-3">Subsystem / Component</th>
                            <th className="p-3 text-right">Mass</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-900 font-normal">
                          <tr><td className="p-3">Electronics & Drivetrain (inc. wheels)</td><td className="p-3 text-right font-mono">169.61g</td></tr>
                          <tr><td className="p-3">Main Structural Frame (PLA)</td><td className="p-3 text-right font-mono">155.00g</td></tr>
                          <tr><td className="p-3">Active Vertical Weapon Blade</td><td className="p-3 text-right font-mono">29.00g</td></tr>
                          <tr><td className="p-3">Frame Protective Top Cover</td><td className="p-3 text-right font-mono">25.00g</td></tr>
                          <tr><td className="p-3">Dual Weapon Support Rails</td><td className="p-3 text-right font-mono">6.00g</td></tr>
                          <tr><td className="p-3">Weapon System Housing Cover</td><td className="p-3 text-right font-mono">2.82g</td></tr>
                          <tr><td className="p-3">Drive Mount Alignment Caps</td><td className="p-3 text-right font-mono">2.00g</td></tr>
                          <tr className="bg-blue-500/5 font-semibold text-white border-t border-slate-800">
                            <td className="p-3">Total Assembled Weight</td><td className="p-3 text-right font-mono text-blue-400">394.43g</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Bill of Materials / Internals */}
                  <div className="space-y-4">
                    <h5 className="text-xs font-bold tracking-wider text-slate-400 uppercase font-mono">Key Build Components</h5>
                    <div className="bg-slate-950/20 border border-slate-800 rounded-xl p-5 space-y-4 text-sm text-slate-300">
                      <div>
                        <span className="block text-[11px] font-mono text-blue-400 uppercase tracking-wider mb-1">Drivetrain System</span>
                        <p className="leading-relaxed">Dual <strong className="text-white font-medium">N20 Micro Brushed Gearmotors</strong> (9.53g each) Driven via a <strong className="text-white font-medium">Budget Ant Dual Drive Brushed ESC</strong> (7g with harness).</p>
                      </div>
                      <div>
                        <span className="block text-[11px] font-mono text-blue-400 uppercase tracking-wider mb-1">Weapon Package</span>
                        <p className="leading-relaxed"><strong className="text-white font-medium">D2826 1400KV Brushless Outrunner Motor</strong> (90g) regulated by a <strong className="text-white font-medium">30A Favourite BLHeli ESC</strong> (9g).</p>
                      </div>
                      <div>
                        <span className="block text-[11px] font-mono text-blue-400 uppercase tracking-wider mb-1">Power Delivery & RF Link</span>
                        <p className="leading-relaxed"><strong className="text-white font-medium">FingerTech Power Switch</strong> (2.15g), <strong className="text-white font-medium">Flysky FS2A Receiver</strong> (2g), and a <strong className="text-white font-medium">2S 75C 450mAh LiPo</strong> battery (37g).</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            )}

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