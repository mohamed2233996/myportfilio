"use client";
import { motion } from "framer-motion";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-background text-foreground py-20 px-6 border-t border-black/5 dark:border-white/5 transition-colors duration-500">
            <div className="max-w-7xl mx-auto">

                {/* 1. السطر العلوي: دعوة للعمل (Call to Action) */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-6 block">
                            Have a project in mind?
                        </span>
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.9]">
                            Let's build <br />
                            <span className="text-gray-400 italic">something great.</span>
                        </h2>
                    </motion.div>

                    <a
                        href="mailto:medomano771@gmail.com"
                        className="text-xl md:text-2xl font-bold border-b-2 border-foreground pb-2 hover:text-gray-500 hover:border-gray-500 transition-all duration-300"
                    >
                        Get in touch →
                    </a>
                </div>

                {/* 2. الروابط والمعلومات (Links Grid) */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">

                    {/* روابط التواصل - Social */}
                    <div className="flex flex-col gap-4">
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Social</span>
                        <a
                            href="https://github.com/mohamed2233996"
                            target="_blank"
                            className="font-bold group flex items-center gap-1 hover:italic transition-all"
                        >
                            GitHub <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/mohamed-gamal-001b8b333/"
                            target="_blank"
                            className="font-bold group flex items-center gap-1 hover:italic transition-all"
                        >
                            LinkedIn <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                        </a>
                        <a
                            href="https://www.facebook.com/profile.php?id=61563803120845"
                            target="_blank"
                            className="font-bold group flex items-center gap-1 hover:italic transition-all"
                        >
                            Facebook <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                        </a>
                        <a
                            href="https://www.instagram.com/m7amed_gamal1/"
                            target="_blank"
                            className="font-bold group flex items-center gap-1 hover:italic transition-all"
                        >
                            Instagram <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                        </a>
                    </div>

                    {/* الموقع الجغرافي - Location */}
                    <div className="flex flex-col gap-4">
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Location</span>
                        <p className="font-bold">Menof, Menofia</p>
                        <p className="font-bold italic text-gray-400 dark:text-gray-600">Egypt</p>
                    </div>

                    {/* الوقت المحلي - Local Time */}
                    <div className="flex flex-col gap-4">
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Local Time</span>
                        <p className="font-bold font-mono uppercase tracking-tighter tabular-nums">
                            {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })} GMT+2
                        </p>
                    </div>

                    {/* خريطة الموقع - Sitemap */}
                    <div className="flex flex-col gap-4 md:items-end">
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Navigation</span>
                        <a href="#hero" className="font-bold hover:text-gray-400 transition-colors">Home</a>
                        <a href="#work" className="font-bold hover:text-gray-400 transition-colors">Work</a>
                        <a href="#about" className="font-bold hover:text-gray-400 transition-colors">About</a>
                        <a href="mailto:medomano771@gmail.com" className="font-bold hover:text-gray-400 transition-colors">Contact</a>
                    </div>
                </div>

                {/* 3. السطر الأخير: حقوق النشر (Copyright) */}
                <div className="pt-10 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 opacity-40 text-[10px] font-black uppercase tracking-[0.2em]">
                    <p>© {currentYear} Mohamed Gamal. All rights reserved.</p>
                    <p>Built with Next.js & Tailwind CSS</p>
                    <p className="hidden md:block">Designer & Developer</p>
                </div>

            </div>
        </footer>
    );
}