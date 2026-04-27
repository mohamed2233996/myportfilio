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

  const [openProjectId, setOpenProjectId] = useState<number | null>(null);

  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const springConfig = { stiffness: 150, damping: 20, mass: 0.5 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);
  const [isOpen, setIsOpen] = useState(false); // حالة لفتح الصورة في الموبايل


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
    <section className="py-20 bg-background text-foreground transition-colors duration-500" id="work">
      <div className="max-w-7xl mx-auto px-6">

        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 mb-8 block">
          Portfolio Archive
        </span>

        <h2 className="text-[10vw] font-black leading-[0.8] tracking-tighter uppercase mb-20">
          Selected <br /> <span className="dark:text-gray-600 text-gray-500 italic">Work</span>
        </h2>

        <div className="border-t border-foreground/10">
          {projects?.map((project: Project, index: number) => {
            const isThisOpen = openProjectId === project.id;
            return (
              <motion.div
                key={project.id}
                className="border-b border-foreground/10"
              >
                <motion.a
                  href={project.link || "#"}
                  target="_blank"
                  onMouseEnter={() => setHoveredProject(project.imgLink)}
                  onMouseLeave={() => setHoveredProject(null)}
                  whileTap={{ scale: 0.98 }}
                  className="group flex flex-col md:flex-row justify-between items-start md:items-center py-12 md:py-16 transition-all px-4 relative overflow-visible cursor-default"
                >
                  <div className="z-10 w-full md:w-auto">
                    <span className="text-[10px] font-mono opacity-70 mb-3 block">
                      {index < 9 ? `0${index + 1}` : index + 1}
                    </span>
                    <h3 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter group-hover:translate-x-4 transition-transform duration-500 wrap-break-word">
                      {project.name}
                    </h3>
                  </div>

                  <div className="flex flex-col md:items-end gap-4 z-10 mt-4 md:mt-0 w-full md:w-auto">
                    <p className="text-gray-600 dark:text-gray-500 max-w-sm text-xs leading-relaxed md:text-right opacity-80">
                      {project.disc}
                    </p>

                    {/* زرار "مشاهدة" للموبايل فقط بيظهر بشكل شيك */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenProjectId(isThisOpen ? null : project.id);
                      }}
                      className="md:hidden text-[10px] font-black uppercase tracking-widest border-b border-foreground/30 self-start mt-2 pb-1"
                    >
                      {isOpen ? "Close Preview —" : "View Preview +"}
                    </button>

                    <div className="hidden md:flex gap-2">
                      <span className="text-[10px] font-bold border border-foreground/20 px-2 py-1 rounded-full opacity-50 uppercase">
                        Build 2026
                      </span>
                    </div>
                  </div>

                  <div className="hidden md:flex w-12 h-12 rounded-full border border-foreground/10 items-center justify-center opacity-0 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-500">
                    <span className="text-2xl">→</span>
                  </div>
                </motion.a>

                <AnimatePresence>
                  {isThisOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="md:hidden overflow-hidden px-4"
                    >
                      <div className="pb-8">
                        <img
                          src={project.imgLink}
                          className="w-full h-64 object-cover rounded-2xl grayscale-[0.5] contrast-[1.2]"
                          alt=""
                        />
                        <a
                          href={project.link}
                          target="_blank"
                          className="block text-center mt-4 text-[10px] font-black uppercase tracking-[0.3em] bg-foreground text-background py-4 rounded-full"
                        >
                          Visit Live Site
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
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
              className="fixed top-0 left-0 pointer-events-none z-100 w-75 h-100 rounded-2xl overflow-hidden shadow-2xl hidden md:block"
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