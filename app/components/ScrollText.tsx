"use client";
import { motion } from "framer-motion";

const words = ["Frontend Developer", "UI/UX Designer", "Next.js Expert", "Music Producer", "Digital Artist"];

export default function ScrollingText() {
    return (
        <section className="py-12 overflow-hidden bg-background opacity-30 hover:opacity-100 transition-opacity duration-700">
            <div className="flex whitespace-nowrap mb-2">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="flex gap-10"
                >
                    {Array(4).fill(words).flat().map((word, i) => (
                        <span key={i} className="text-[8vw] font-black uppercase tracking-tighter leading-none">
                            {word} —
                        </span>
                    ))}
                </motion.div>
            </div>

            <div className="flex whitespace-nowrap">
                <motion.div
                    animate={{ x: [-1000, 0] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="flex gap-10"
                >
                    {Array(4).fill(words).flat().map((word, i) => (
                        <span key={i} className="text-[8vw] font-black uppercase tracking-tighter leading-none italic text-gray-600/20" style={{ WebkitTextStroke: '1px white' }}>
                            {word} —
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}