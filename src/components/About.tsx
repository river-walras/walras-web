'use client';

import { motion } from 'framer-motion';
import { Users, Award, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Years of Experience', value: '7+', icon: Award },
    { label: 'Average Annual Return', value: '10-70%', icon: TrendingUp },
    { label: 'Institutional/Individual Clients', value: '5+', icon: Users },
    
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="gradient-text">Walras Research</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
            Founded by former quantitative researchers from leading Wall Street firms and top hedge funds, with academic advisory support from faculty at PKU, HKUST, NUS, and Yale.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-primary-600" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h3>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto px-4 sm:px-0">
              To democratize access to institutional-grade quantitative trading strategies, 
              providing our clients with consistent, market-beating returns while maintaining 
              the highest standards of risk management and transparency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 sm:p-6 lg:p-8"
            >
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4">Innovation</h4>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Leveraging cutting-edge machine learning and AI to identify market inefficiencies 
                and execute trades with precision.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 sm:p-6 lg:p-8"
            >
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4">Transparency</h4>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Real-time reporting and complete visibility into our trading strategies, 
                performance metrics, and risk management processes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 sm:p-6 lg:p-8"
            >
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4">Excellence</h4>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Continuous improvement and optimization of our strategies to maintain 
                our competitive edge in dynamic markets.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 sm:p-6 lg:p-8"
            >
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4">Cross-Market</h4>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Deploying strategies across crypto, equities, and commodities to capture alpha across uncorrelated market regimes.
              </p>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
