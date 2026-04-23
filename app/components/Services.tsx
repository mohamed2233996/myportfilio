"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const services = [
    {
        id: "01",
        title: "Web Development",
        description: "بناء مواقع فائقة السرعة باستخدام Next.js و React. تركيزي الأساسي على الأداء (Performance) والـ SEO عشان موقعك يتصدر نتائج البحث.",
        tags: ["Next.js", "React", "Supabase", "API Integration"]
    },
    {
        id: "02",
        title: "UI/UX Design",
        description: "تصميم واجهات مستخدم عصرية (Minimalist) تركز على سهولة الاستخدام. بحول الأفكار المعقدة لتصاميم بسيطة ومريحة للعين.",
        tags: ["Figma", "Visual Identity", "Prototyping"]
    },
];

export default function Services() {
    const [expanded, setExpanded] = useState<string | null>(null);

    return (
        <section className="py-20 bg-background text-foreground" id="services">
            <div className="max-w-7xl mx-auto px-6">

                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 mb-8 block">
                    How I can help
                </span>

                <h2 className="text-[8vw] md:text-[5vw] font-black leading-[0.9] tracking-tighter uppercase mb-20">
                    Services <br /> <span className="text-gray-400 italic">& Solutions</span>
                </h2>

                <div className="border-t border-foreground/10">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className={`border-b border-foreground/10 transition-colors duration-500 ${expanded === service.id ? "bg-foreground/[0.02]" : ""
                                }`}
                            onMouseEnter={() => window.innerWidth > 768 && setExpanded(service.id)}
                            onMouseLeave={() => window.innerWidth > 768 && setExpanded(null)}
                            onClick={() => window.innerWidth <= 768 && setExpanded(expanded === service.id ? null : service.id)}
                        >
                            <div className="py-10 md:py-16 flex flex-col md:flex-row md:items-center justify-between gap-8 px-2">
                                <div className="flex items-start gap-6 md:gap-8">
                                    <span className="text-xs font-mono opacity-40 mt-2">{service.id}</span>
                                    <div className="flex flex-col gap-2">
                                        <h3 className={`text-3xl md:text-6xl font-bold uppercase tracking-tighter transition-all duration-500 ${expanded === service.id ? "italic translate-x-2" : ""
                                            }`}>
                                            {service.title}
                                        </h3>
                                        {!expanded && (
                                            <span className="md:hidden text-[8px] font-black uppercase tracking-[0.2em] text-gray-400">
                                                Tap to explore +
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="md:hidden absolute right-6 top-12">
                                    <motion.div
                                        animate={{ rotate: expanded === service.id ? 45 : 0 }}
                                        className="text-2xl font-light opacity-50"
                                    >
                                        +
                                    </motion.div>
                                </div>

                                <div className={`hidden md:flex flex-wrap gap-2 md:justify-end max-w-xs transition-opacity ${expanded === service.id ? "opacity-100" : "opacity-30"
                                    }`}>
                                    {service.tags.map(tag => (
                                        <span key={tag} className="text-[9px] font-bold border border-foreground/10 px-2 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <AnimatePresence>
                                {expanded === service.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pb-12 md:pl-20 max-w-2xl">
                                            <p className="text-lg md:text-2xl text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                                                {service.description}
                                            </p>
                                            <motion.button
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="mt-8 text-xs font-black uppercase tracking-widest border-b-2 border-foreground pb-1"
                                            >
                                                Start a Project —
                                            </motion.button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}