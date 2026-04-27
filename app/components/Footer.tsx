"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Footer() {
    const [time, setTime] = useState("");

useEffect(() => {
    const updateTime = () => {
        setTime(new Date().toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit', 
            hour12: true 
        }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
}, []);

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-background text-foreground py-20 px-6 border-t border-foreground/5 transition-colors duration-500 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* 1. السطر العلوي: CTA مع أنيميشن هادي عند الظهور */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 mb-6 block">
                            Have a project in mind?
                        </span>
                        <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85]">
                            Let's build <br />
                            <span className="text-gray-500 italic">something great.</span>
                        </h2>
                    </motion.div>

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="mailto:medomano771@gmail.com"
                        className="text-xl md:text-3xl font-bold border-b-4 border-foreground pb-2 hover:text-gray-500 hover:border-gray-400 transition-all duration-300 uppercase tracking-tighter"
                    >
                        Get in touch →
                    </motion.a>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20 border-t border-foreground/5 pt-20">

                    {/* Social */}
                    <div className="flex flex-col gap-4">
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-600">Social</span>
                        {["GitHub", "LinkedIn", "Facebook", "Instagram"].map((social) => (
                            <a key={social} href="#" className="font-bold text-lg hover:italic hover:translate-x-2 transition-all duration-300 w-fit">
                                {social}
                            </a>
                        ))}
                    </div>

                    {/* Location */}
                    <div className="flex flex-col gap-4">
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-600">Location</span>
                        <p className="font-bold text-lg">Menof, Menofia</p>
                        <p className="font-bold italic text-gray-500">Egypt</p>
                    </div>

                    {/* Local Time */}
                    <div className="flex flex-col gap-4">
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-600">Local Time</span>
                        <p className="font-bold font-mono text-xl uppercase tracking-tighter tabular-nums">
                            {time || "00:00 AM"} <span className="text-xs opacity-70 font-sans">GMT+2</span>
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="flex flex-col gap-4 md:items-end">
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-600">Navigation</span>
                        {["Home", "Work", "About", "Contact"].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="font-bold text-lg hover:opacity-50 transition-opacity uppercase tracking-tighter">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>

                {/* 3. حقوق النشر (Copyright) */}
                <div className="pt-10 border-t border-foreground/5 flex flex-col md:flex-row justify-between items-center gap-6 opacity-30 text-[10px] font-black uppercase tracking-[0.3em]">
                    <p>© {currentYear} Mohamed Gamal.</p>
                    <p className="hidden md:block">Built with Next.js & Framer Motion</p>
                    <p>Creative Developer</p>
                </div>

            </div>
        </footer>
    );
}