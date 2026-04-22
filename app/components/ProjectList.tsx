"use client";
import { motion, AnimatePresence, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import { useSupabase } from "../Hooks/useSupabase";

interface Project {
  id: number;
  name: string;
  disc: string;
  link: string;
  imgLink: string;
}

export default function ProjectList() {
  const { data: projects, loading, error } = useSupabase('projects');
  
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const springConfig = { stiffness: 150, damping: 20, mass: 0.5 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 150); 
      mouseY.set(e.clientY - 200);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // 2. حالة التحميل
  if (loading) return (
    <div className="py-40 text-center font-mono text-[10px] uppercase tracking-[0.5em] opacity-30">
      Loading Projects...
    </div>
  );

  // 3. حالة الخطأ
  if (error) return (
    <div className="py-20 text-center text-red-500 font-mono text-xs">
      SYSTEM ERROR: {error}
    </div>
  );

  return (
    <section className="py-32 bg-background text-foreground transition-colors duration-500" id="work">
      <div className="max-w-7xl mx-auto px-6">
        
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-8 block">
          Portfolio Archive
        </span>

        <h2 className="text-[10vw] font-black leading-[0.8] tracking-tighter uppercase mb-20">
          Selected <br /> <span className="dark:text-gray-600 text-gray-400 italic">Work</span>
        </h2>

        <div className="border-t border-foreground/10">
          {projects?.map((project: Project, index: number) => (
            <motion.a
              key={project.id}
              href={project.link || "#"}
              target="_blank"
              onMouseEnter={() => setHoveredProject(project.imgLink)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group flex flex-col md:flex-row justify-between items-start md:items-center py-16 border-b border-foreground/10 hover:bg-foreground/[0.01] transition-all px-4 relative overflow-visible cursor-none md:cursor-default"
            >
              <div className="z-10">
                <span className="text-xs font-mono opacity-40 mb-3 block">
                  {index < 9 ? `0${index + 1}` : index + 1}
                </span>
                <h3 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter group-hover:translate-x-4 transition-transform duration-500">
                  {project.name}
                </h3>
              </div>

              <div className="flex flex-col md:items-end gap-4 z-10 mt-6 md:mt-0">
                <p className="text-gray-500 dark:text-gray-400 max-w-[280px] text-sm leading-relaxed md:text-right">
                  {project.disc}
                </p>
                <div className="flex gap-2">
                  <span className="text-[10px] font-bold border border-foreground/20 px-2 py-1 rounded-full opacity-50 uppercase">
                    Build 2026
                  </span>
                </div>
              </div>

              <div className="hidden md:flex w-12 h-12 rounded-full border border-foreground/10 items-center justify-center opacity-0 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-500">
                <span className="text-2xl">→</span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Floating Image Container */}
        <AnimatePresence>
          {hoveredProject && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              style={{
                translateX: mouseX,
                translateY: mouseY,
              }}
              className="fixed top-0 left-0 pointer-events-none z-[100] w-[300px] h-[400px] rounded-2xl overflow-hidden shadow-2xl hidden md:block"
            >
              <img
                src={hoveredProject}
                className="w-full h-full object-cover grayscale-[0.2] contrast-[1.1]"
                alt="Preview"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}