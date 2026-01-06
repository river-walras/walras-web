'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home', code: '01' },
    { href: '#about', label: 'About', code: '02' },
    { href: '#services', label: 'Services', code: '03' },
    { href: '#contact', label: 'Contact', code: '04' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-terminal-black/95 backdrop-blur-xl border-b border-terminal-border shadow-terminal'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="w-10 h-10 border border-copper-light/40 flex items-center justify-center">
              <Terminal className="w-5 h-5 text-copper-light" />
            </div>
            <div className="flex flex-col">
              <h1 className="font-serif text-xl text-white tracking-tight">Walras Research</h1>
              <span className="font-mono text-[10px] text-copper-light/60 tracking-widest">QUANT_SYSTEMS</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group relative px-5 py-2 font-mono text-xs tracking-wider text-gray-400 hover:text-copper-light transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-terminal-muted text-[10px] mr-2">{link.code}</span>
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-copper-light group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}

              {/* CTA Button */}
              <a
                href="#contact"
                className="ml-4 px-6 py-2.5 bg-copper/20 border border-copper-light/30 text-copper-light font-mono text-xs tracking-wider hover:bg-copper/30 hover:border-copper-light/50 transition-all duration-300"
              >
                CONNECT
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 border border-terminal-border hover:border-copper-light/30 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-5 w-5 text-copper-light" />
              ) : (
                <Menu className="h-5 w-5 text-copper-light" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-terminal-border bg-terminal-black/98 backdrop-blur-xl">
          <div className="px-4 pt-4 pb-6 space-y-3">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="group flex items-center gap-3 px-4 py-3 border border-terminal-border hover:border-copper-light/30 hover:bg-terminal-gray/30 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                <span className="font-mono text-xs text-terminal-muted">{link.code}</span>
                <span className="font-mono text-sm text-gray-400 group-hover:text-copper-light transition-colors">
                  {link.label}
                </span>
              </a>
            ))}

            <a
              href="#contact"
              className="block mt-4 px-4 py-3 bg-copper/20 border border-copper-light/30 text-copper-light font-mono text-sm tracking-wider text-center hover:bg-copper/30 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              CONNECT
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;