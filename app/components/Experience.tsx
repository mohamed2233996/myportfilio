"use client";
import { motion } from "framer-motion";

export default function Experience() {
    const experiences = [
        {
            company: "Independent Contractor",
            role: "Senior Frontend Engineer",
            period: "(2021 — PRESENT)",
            description: "Specializing in Next.js ecosystems. Architecting high-performance web platforms with a focus on UX and clean code standards."
        },
        {
            company: "Digital Solutions Lab",
            role: "Frontend Developer",
            period: "(2019 — 2021)",
            description: "Delivered responsive web applications for diverse clients, mastering the bridge between design and technical implementation."
        },
        {
            company: "Self-Initiated Projects",
            role: "Junior Developer",
            period: "(2018 — 2019)",
            description: "Started the journey by building core foundational projects while completing university studies in commerce."
        }
    ];

    return (
        <section className="bg-background text-foreground py-20 px-6 transition-colors duration-500">
            <div className="max-w-7xl mx-auto">

                <motion.h2 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-[10vw] font-black leading-[0.8] tracking-tighter uppercase mb-24"
                >
                    RELEVANT <br /> EXPERIENCE
                </motion.h2>

                <div className="space-y-0">
                    {experiences.map((exp, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="border-t border-black/10 dark:border-white/10 py-12 group cursor-pointer relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-black/2 dark:bg-white/2 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

                            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-8">
                                <div className="flex-1">
                                    <h3 className="text-4xl md:text-5xl font-bold tracking-tight uppercase transition-all duration-500 group-hover:pl-4 group-hover:text-gray-500">
                                        {exp.company}
                                    </h3>
                                    
                                    <div className="mt-4 flex flex-col gap-1">
                                        <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">
                                            {exp.role}
                                        </span>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xl mt-4 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="text-right">
                                    <span className="font-mono text-sm opacity-40 group-hover:opacity-100 transition-opacity">
                                        {exp.period}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Education Section */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-32 border-t-4 border-foreground pt-10"
                >
                    <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-4 text-gray-400">Credentials</h4>
                    <div className="flex flex-col md:flex-row justify-between items-end gap-4">
                        <span className="text-2xl font-bold uppercase">Bachelor of Commerce</span>
                        <span className="text-gray-500 font-medium">Menoufia University • Class of 2024</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}