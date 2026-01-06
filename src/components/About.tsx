'use client';

import { motion } from 'framer-motion';
import { Users, Award, TrendingUp, Cpu, Globe, Shield, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Years of Experience', value: '7+', icon: Award },
    { label: 'Average Annual Return', value: '10-70%', icon: TrendingUp },
    { label: 'Institutional/Individual Clients', value: '5+', icon: Users },
  ];

  const values = [
    {
      icon: Cpu,
      title: 'Innovation',
      description: 'Leveraging cutting-edge machine learning and AI to identify market inefficiencies and execute trades with precision.',
      accent: 'copper'
    },
    {
      icon: Globe,
      title: 'Transparency',
      description: 'Real-time reporting and complete visibility into our trading strategies, performance metrics, and risk management processes.',
      accent: 'gold'
    },
    {
      icon: Shield,
      title: 'Excellence',
      description: 'Continuous improvement and optimization of our strategies to maintain our competitive edge in dynamic markets.',
      accent: 'copper'
    },
    {
      icon: Zap,
      title: 'Cross-Market',
      description: 'Deploying strategies across crypto, equities, and commodities to capture alpha across uncorrelated market regimes.',
      accent: 'gold'
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-24 lg:py-32 bg-terminal-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:80px_80px] opacity-[0.02]"></div>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs text-copper-light/60 tracking-widest">ABOUT_US</span>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-copper-light/20 to-transparent"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light text-white mb-8 max-w-4xl">
            <span className="text-copper-light italic">Walras Research</span>
            <br />
            Quantitative Excellence
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl font-sans leading-relaxed">
            Founded by former quantitative researchers from leading Wall Street firms and top hedge funds,
            with academic advisory support from faculty at HKUST, NUS, and Yale.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-24"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-terminal-darker border border-terminal-border p-8 overflow-hidden hover:border-copper-light/30 transition-all duration-500"
            >
              {/* Geometric Corner Accent */}
              <div className="absolute top-0 right-0">
                <div className="w-16 h-16 border-t-2 border-r-2 border-gold/20 group-hover:border-gold/40 transition-colors duration-500"></div>
                <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-gold/10"></div>
              </div>

              <div className="relative z-10 text-center">
                <div className="w-14 h-14 border border-terminal-border flex items-center justify-center mx-auto mb-6 group-hover:border-copper-light/40 transition-colors duration-500">
                  <stat.icon className="w-7 h-7 text-copper-light" />
                </div>
                <div className="font-mono text-4xl sm:text-5xl text-white mb-4 tracking-tight">
                  {stat.value}
                </div>
                <div className="font-mono text-[11px] text-terminal-muted tracking-widest uppercase">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="border-l-2 border-copper-light/40 pl-8 py-6">
            <h3 className="font-serif text-2xl sm:text-3xl text-white mb-4">
              Our <span className="text-copper-light italic">Mission</span>
            </h3>
            <p className="text-base sm:text-lg text-gray-400 max-w-4xl font-sans leading-relaxed">
              To democratize access to institutional-grade quantitative trading strategies,
              providing our clients with consistent, market-beating returns while maintaining
              the highest standards of risk management and transparency.
            </p>
          </div>
        </motion.div>

        {/* Values Grid - Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {values.map((value, index) => {
            // Create asymmetric layout
            const colSpan = index % 3 === 0 ? 'lg:col-span-7' : 'lg:col-span-5';

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className={`group relative bg-terminal-darker border border-terminal-border p-6 sm:p-8 overflow-hidden hover:border-${value.accent}-light/30 transition-all duration-500 ${colSpan}`}
              >
                {/* Decorative Elements */}
                <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-terminal-border/30 group-hover:border-copper-light/20 transition-colors duration-500"></div>

                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 border border-terminal-border flex items-center justify-center flex-shrink-0 group-hover:border-copper-light/40 transition-colors duration-500">
                      <value.icon className={`w-6 h-6 text-${value.accent}-light`} />
                    </div>
                    <div>
                      <h4 className="font-serif text-xl sm:text-2xl text-white mb-3">{value.title}</h4>
                      <div className="w-16 h-[1px] bg-gradient-to-r from-copper-light/40 to-transparent mb-4"></div>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-gray-400 font-sans leading-relaxed">
                    {value.description}
                  </p>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-copper-light/0 group-hover:bg-copper-light/[0.02] transition-colors duration-500"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
