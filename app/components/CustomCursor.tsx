"use client";
import { useEffect, useState } from "react";
import { motion, useSpring, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const springConfig = { stiffness: 400, damping: 30, mass: 0.5 };
    const cursorX = useSpring(0, springConfig);
    const cursorY = useSpring(0, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            if (!isVisible) setIsVisible(true);
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        window.addEventListener("mousemove", moveCursor);

        const handleMouseEnter = () => setIsHovered(true);
        const handleMouseLeave = () => setIsHovered(false);

        const targets = document.querySelectorAll("a, button, .interactive, input");
        targets.forEach((target) => {
            target.addEventListener("mouseenter", handleMouseEnter);
            target.addEventListener("mouseleave", handleMouseLeave);
        });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, [cursorX, cursorY, isVisible]);

    if (!isVisible) return null;

    return (
        <div className="fixed top-0 left-0 pointer-events-none z-99999 hidden md:block mix-blend-difference">

            <motion.div
                className="absolute w-8 h-8 border border-white rounded-full"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                    scale: isHovered ? 1.5 : 1,
                    opacity: isHovered ? 0 : 0.5,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
            />

            <motion.div
                className="absolute w-2 h-2 bg-white rounded-full"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                    scale: isHovered ? 4 : 1,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
        </div>
    );
}