'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Shield, Target, Terminal } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-terminal-black">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 sm:py-32">
        {/* Terminal Header */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-3 mb-12 font-mono text-copper-light text-sm"
        >
          <Terminal className="w-4 h-4" />
          <span className="opacity-60">WALRAS_RESEARCH/</span>
          <span className="text-gold">QUANTITATIVE_TRADING</span>
          <span className="inline-block w-2 h-4 bg-copper-light animate-terminal-blink ml-1"></span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Main Content (Asymmetric) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6 leading-[1.1]">
                <span className="block text-copper-light italic">Precision</span>
                <span className="block">Trading</span>
                <span className="block text-gold/80 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-mono mt-4">
                  CRYPTO × MARKETS
                </span>
              </h1>

              <div className="w-24 h-[2px] bg-gradient-to-r from-copper-light to-transparent my-8"></div>

              <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed font-sans">
                Institutional-grade algorithmic strategies engineered for exceptional performance.
                Combining quantitative rigor with systematic execution across cryptocurrency and traditional markets.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mt-10"
            >
              <a
                href="#contact"
                className="group relative px-8 py-4 bg-copper text-white font-mono text-sm tracking-wider overflow-hidden transition-all duration-300 hover:shadow-copper"
              >
                <span className="relative z-10">INITIATE_INVESTMENT</span>
                <div className="absolute inset-0 bg-gold transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </a>
              <a
                href="#about"
                className="px-8 py-4 border border-copper-light/30 text-copper-light font-mono text-sm tracking-wider hover:bg-copper-light/5 transition-all duration-300 hover:border-copper-light/60"
              >
                EXPLORE_STRATEGY
              </a>
            </motion.div>
          </div>

          {/* Right: Stats Terminal (Asymmetric) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="bg-terminal-darker border border-terminal-border shadow-terminal p-6 sm:p-8 relative overflow-hidden">
              {/* Terminal Header Bar */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-terminal-border">
                <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
                <span className="ml-3 font-mono text-xs text-terminal-muted">performance_metrics.log</span>
              </div>

              {/* Stats Grid */}
              <div className="space-y-6">
                {[
                  { icon: TrendingUp, label: 'MULTI_STRATEGY_RETURN', value: '10-70%', unit: 'ANNUAL', color: 'text-green-400' },
                  { icon: Shield, label: 'RISK_MANAGEMENT', value: '3.12%', unit: 'MAX_DRAWDOWN', color: 'text-blue-400' },
                  { icon: Target, label: 'AI_PRECISION', value: '99.7%', unit: 'UPTIME', color: 'text-copper-light' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    className="flex items-start gap-4 group hover:bg-terminal-gray/30 p-3 -mx-3 transition-colors duration-300"
                  >
                    <div className="w-10 h-10 border border-terminal-border flex items-center justify-center mt-1 group-hover:border-copper-light/40 transition-colors">
                      <stat.icon className={`w-5 h-5 ${stat.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="font-mono text-xs text-terminal-muted mb-1">{stat.label}</div>
                      <div className="flex items-baseline gap-2">
                        <span className={`font-mono text-2xl ${stat.color}`}>{stat.value}</span>
                        <span className="font-mono text-xs text-terminal-muted">{stat.unit}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Terminal Footer */}
              <div className="mt-8 pt-6 border-t border-terminal-border">
                <div className="font-mono text-xs text-terminal-muted flex items-center gap-2">
                  <span className="text-green-400">●</span>
                  <span>SYSTEMS_OPERATIONAL</span>
                  <span className="ml-auto text-copper-light/60">LAST_UPDATE: REAL_TIME</span>
                </div>
              </div>

              {/* Decorative Corner Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-copper-light/10"></div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="font-mono text-xs text-terminal-muted tracking-wider">SCROLL</span>
            <div className="w-[1px] h-16 bg-gradient-to-b from-copper-light/60 to-transparent animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
