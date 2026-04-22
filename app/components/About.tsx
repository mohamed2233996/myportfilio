import React from 'react';
import { Reveal } from './Reveal';

const About = () => {
    return (
        <section id='about' className="py-40 px-6 bg-background text-foreground border-t border-black/5 dark:border-white/5 transition-colors duration-500">
            <div className="max-w-4xl mx-auto text-center">
                <Reveal>
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 dark:text-gray-500 mb-12 block">
                        The Philosophy
                    </span>
                    
                    <h2 className="text-3xl md:text-5xl font-bold leading-[1.1] tracking-tighter uppercase">
                        Merging the precision of 
                        <span className="text-gray-400 dark:text-gray-600 italic"> Accounting </span> 
                        with the logic of 
                        <span className="text-gray-400 dark:text-gray-600 italic"> Frontend Engineering</span>
                    </h2>                    
                    <div className="mt-16 h-px w-20 bg-foreground opacity-20 mx-auto"></div>
                    <p className="mt-12 text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto">
                        Based in Menof, Egypt, I focus on creating clean, accessible, and results-driven web experiences. 
                        My background in commerce gives me a unique perspective on business logic.
                    </p>
                </Reveal>
            </div>
        </section>
    );
}

export default About;