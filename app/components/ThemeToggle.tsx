"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isRotating, setIsRotating] = useState(false);

    useEffect(() => setMounted(true), []);

    const playClick = () => {
        const audio = new Audio('/click.wav');
        audio.volume = 0.5; //
        audio.play();
    };

    const toggleTheme = () => {
        if (isRotating) return;

        playClick();
        setIsRotating(true); // بدء الأنيميشن
        setTheme(theme === "dark" ? "light" : "dark");

        setTimeout(() => setIsRotating(false), 400);
    };

    if (!mounted) return null;

    return (
        <button
            onClick={toggleTheme}
            className={`fixed bottom-8 right-8 z-100 transition-all active:scale-90 group`}
        >
            <div
                className={`w-12 h-12 rounded-full border border-black/20 dark:border-white/20 flex overflow-hidden shadow-md hover:shadow-xl transition-transform duration-500 ease-in-out ${
                    isRotating ? 'rotate-135' : 'rotate-300' 
                }`}
            >
                <div className="w-1/2 h-full bg-black dark:bg-black/80 transition-colors" />
                
                <div className="w-1/2 h-full bg-white dark:bg-white/90 transition-colors" />
            </div>

            <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-bold tracking-tighter uppercase opacity-0 group-hover:opacity-100 dark:text-white text-black transition-opacity whitespace-nowrap">
                {theme === 'dark' ? 'LIGHT MODE' : 'DARK MODE'}
            </span>
        </button>
    );
}