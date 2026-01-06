'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#about' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' }
    ],
    services: [
      { name: 'Trading Strategies', href: '#services' },
      { name: 'Performance', href: '#performance' },
      { name: 'Risk Management', href: '#' },
      { name: 'Institutional Services', href: '#' }
    ],
    resources: [
      { name: 'Research Papers', href: '#' },
      { name: 'Market Analysis', href: '#' },
      { name: 'Educational Content', href: '#' },
      { name: 'FAQ', href: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Risk Disclosure', href: '#' },
      { name: 'Compliance', href: '#' }
    ]
  };


  return (
    <footer className="bg-terminal-black text-gray-300 border-t border-terminal-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-serif text-copper-light mb-4">
                Walras Research
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed font-sans">
                Pioneering quantitative trading strategies in cryptocurrency markets, 
                delivering exceptional returns through advanced algorithmic systems.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center text-gray-400 font-sans">
                  <Mail className="w-5 h-5 mr-3 text-copper-light" />
                  <span>contact@walras-research.com</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xs font-mono text-copper-light/70 tracking-widest mb-6">COMPANY</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-copper-light transition-colors duration-200 font-sans"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xs font-mono text-copper-light/70 tracking-widest mb-6">SERVICES</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-copper-light transition-colors duration-200 font-sans"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xs font-mono text-copper-light/70 tracking-widest mb-6">RESOURCES</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-copper-light transition-colors duration-200 font-sans"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xs font-mono text-copper-light/70 tracking-widest mb-6">LEGAL</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-copper-light transition-colors duration-200 font-sans"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-terminal-border/60 pt-8 mt-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-terminal-muted mb-4 md:mb-0 font-sans">
              <p>&copy; {currentYear} Walras Research. All rights reserved.</p>
              <p className="text-sm mt-1">
                Investment involves risk. Past performance does not guarantee future results.
              </p>
            </div>
            
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
