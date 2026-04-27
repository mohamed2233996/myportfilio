"use client";
import { motion } from "framer-motion";
import { useSupabase } from "../Hooks/useSupabase";

interface Achievement {
    id: number;
    title: string;
    cont: number;
}

export default function Achievements() {
    const { data: achievements, loading } = useSupabase('myDone');

    if (loading) return null; 

    return (
        <section className="py-20 bg-background border-y border-foreground/5 transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-24">
                    {achievements?.map((item: Achievement, index: number) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className="flex flex-col gap-2"
                        >
                            <h4 className="text-6xl md:text-8xl font-black tracking-tighter tabular-nums">
                                {item.cont}<span className="text-gray-500 dark:text-gray-600">+</span>
                            </h4>

                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 leading-none">
                                {item.title}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}