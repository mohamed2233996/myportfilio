import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
    return (

        <section className="bg-background min-h-screen text-foreground flex flex-col items-center pt-20 px-6 transition-colors duration-500">
            <Navbar />

            {/* Main Title - الـ Typography الجريء */}
            <div className="text-center mb-16">
                <h1 className="text-[10vw] md:text-[12vw] leading-[0.85] font-black uppercase tracking-tighter">
                    FRONTEND <br />
                    DEVELOPER <br />
                    <span>DESIGNER©</span>
                </h1>

                {/* Info Line */}
                <div className="flex justify-between mt-8 text-[11px] md:text-[13px] font-bold uppercase tracking-widest w-full max-w-4xl mx-auto px-4 opacity-80">
                    <span className="text-left max-w-37.5">Currently crafting experiences at Egypt</span>
                    <span>(2024 — Present)</span>
                </div>
            </div>

            {/* Profile Image */}
            <div className="w-full max-w-md aspect-4/5 rounded-[60px] overflow-hidden bg-gray-300 dark:bg-[#1a1a1a] transition-colors duration-500 border border-black/5 dark:border-white/5">
                <img
                    src="/Me.png"
                    alt="M. Gamal"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700 dark:opacity-80 dark:hover:opacity-100"
                />
            </div>
        </section>
    );
}

export default Hero;