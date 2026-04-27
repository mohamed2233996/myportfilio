import React from 'react';
import { Reveal } from './Reveal';

const About = () => {
    return (
        <section id='about' className="py-32 px-6 bg-background text-foreground border-t border-black/5 dark:border-white/5 transition-colors duration-500">
            <div className="max-w-4xl mx-auto text-center">
                <Reveal>
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-600 dark:text-gray-400 mb-8 block">
                        The Philosophy
                    </span>
                    
                    <h2 className="text-4xl md:text-6xl font-black leading-[1] tracking-tighter uppercase">
                        Merging the precision of 
                        <span className="text-gray-700 dark:text-gray-400 italic font-medium"> Accounting </span> 
                        with the logic of 
                        <span className="text-gray-700 dark:text-gray-400 italic font-medium"> Frontend Engineering</span>
                    </h2>                    
                    
                    <div className="mt-16 h-px w-24 bg-foreground opacity-10 mx-auto"></div>
                    
                    <p className="mt-12 text-xl text-gray-700 dark:text-gray-300 font-medium leading-relaxed max-w-2xl mx-auto tracking-tight">
                        Based in Menof, Egypt, I focus on creating clean, accessible, and results-driven web experiences. 
                        My background in commerce gives me a unique perspective on business logic.
                    </p>
                </Reveal>
            </div>
        </section>
    );
}

export default About;