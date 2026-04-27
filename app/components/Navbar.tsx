import React from 'react';

const Navbar = () => {
    return (
        <nav className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6 mb-20 md:mb-32 text-[11px] md:text-[13px] font-medium uppercase tracking-tighter transition-colors duration-500">
            
            {/* Left Side: Name & Main Links */}
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12">
                <span className="font-bold text-sm md:text-base text-foreground">MOHAMED GAMAL</span>
                <div className="flex gap-6 text-gray-600 dark:text-gray-500">
                    <a href="#about" className="hover:text-foreground border-b border-foreground pb-1 transition-colors">ABOUT</a>
                    <a href="#" className="hover:text-foreground transition-colors">WORK</a>
                </div>
            </div>

            {/* Right Side: Email & Connect */}
            <div className="flex items-center gap-4">
                <span className="hidden sm:inline text-gray-500 dark:text-gray-600">LET'S CONNECT</span>
                
                <div className="bg-foreground dark:bg-white/5 px-3 py-2 md:px-4 md:py-2 rounded-full border border-black/10 dark:border-white/10 flex items-center gap-2 lowercase text-[10px] md:text-sm shadow-sm transition-all">
    <span className="truncate max-w-30 md:max-w-none text-background dark:text-foreground opacity-90">
        medomano771@gmail.com
    </span>
    <span className="text-gray-500 cursor-pointer hover:text-white dark:hover:text-white transition">❐</span>
</div>
            </div>
            
        </nav>
    );
}

export default Navbar;