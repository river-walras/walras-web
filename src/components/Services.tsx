'use client';

import { motion } from 'framer-motion';
import { tradingStrategies } from '@/lib/data';
import {
  Scale,
  TrendingUp,
  Coins,
  Link,
  BarChart3,
  Shield,
  Zap
} from 'lucide-react';

const iconMap = {
  'balance-scale': Scale,
  'trending-up': TrendingUp,
  'coins': Coins,
  'link': Link,
};

const Services = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Real-time market analysis and sentiment tracking across multiple data sources',
      metric: '1M+',
      metricLabel: 'DATA_POINTS/SEC'
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Sophisticated risk controls with dynamic position sizing and stop-loss mechanisms',
      metric: '<2%',
      metricLabel: 'AVG_VOLATILITY'
    },
    {
      icon: Zap,
      title: 'High-Frequency Execution',
      description: 'Sub-millisecond execution across 3+ exchanges for optimal price discovery',
      metric: '<50ms',
      metricLabel: 'EXECUTION_TIME'
    }
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low':
        return 'text-green-400 bg-green-400/10 border-green-400/30';
      case 'Medium':
        return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
      case 'High':
        return 'text-orange-400 bg-orange-400/10 border-orange-400/30';
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  };

  return (
    <section id="services" className="py-20 sm:py-24 lg:py-32 bg-terminal-darker relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-[0.02]"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-copper/5 rounded-full blur-[100px]"></div>

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
            <span className="font-mono text-xs text-copper-light/60 tracking-widest">TRADING_STRATEGIES</span>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-copper-light/20 to-transparent"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light text-white mb-8">
            Strategic <span className="text-copper-light italic">Systems</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl font-sans">
            Diversified portfolio of quantitative strategies engineered to maximize returns
            while managing risk across different market conditions.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-terminal-black border border-terminal-border p-6 overflow-hidden hover:border-copper-light/30 transition-all duration-500"
            >
              {/* Metric Display - Top Right */}
              <div className="absolute top-4 right-4 text-right">
                <div className="font-mono text-xl text-copper-light">{feature.metric}</div>
                <div className="font-mono text-[9px] text-terminal-muted tracking-widest">{feature.metricLabel}</div>
              </div>

              <div className="mt-8">
                <div className="w-12 h-12 border border-terminal-border flex items-center justify-center mb-6 group-hover:border-copper-light/40 transition-colors duration-500">
                  <feature.icon className="w-6 h-6 text-copper-light" />
                </div>
                <h3 className="font-serif text-xl text-white mb-3">
                  {feature.title}
                </h3>
                <div className="w-12 h-[1px] bg-gradient-to-r from-copper-light/40 to-transparent mb-4"></div>
                <p className="text-sm text-gray-400 font-sans leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Corner Accent */}
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-terminal-border/20 group-hover:border-copper-light/20 transition-colors duration-500"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trading Strategies */}
        <div className="space-y-6">
          {tradingStrategies.slice(0, 3).map((strategy, index) => {
            const IconComponent = iconMap[strategy.icon as keyof typeof iconMap];
            let strategyName = strategy.name;
            let riskLevel = strategy.riskLevel;
            let description = strategy.description;

            // Update strategy details
            if (index === 0) {
              strategyName = 'Market Neutral Arbitrage';
              riskLevel = 'Low';
              description = 'Exploits price discrepancies between related securities while maintaining market neutrality. This strategy provides consistent returns with minimal market exposure.';
            } else if (index === 1) {
              strategyName = 'Statistical Arbitrage';
              riskLevel = 'Medium';
              description = 'Uses advanced statistical models to identify and capitalize on mean-reverting relationships between assets. Combines quantitative analysis with systematic execution.';
            } else if (index === 2) {
              strategyName = 'CTA Strategy';
              riskLevel = 'High';
              description = 'Commodity Trading Advisor strategy that leverages trend-following algorithms across futures markets. Designed to capture momentum in various asset classes.';
            }

            const strategyMetrics = [
              { sharpe: 3.11, maxDrawdown: 0.8 },
              { sharpe: 2.82, maxDrawdown: 1.2 },
              { sharpe: 2.22, maxDrawdown: 3.12 },
            ];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-terminal-black border border-terminal-border overflow-hidden hover:border-copper-light/30 transition-all duration-500"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Left: Strategy Info */}
                  <div className="lg:col-span-8 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-terminal-border">
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="w-14 h-14 border border-terminal-border flex items-center justify-center flex-shrink-0 group-hover:border-copper-light/40 transition-colors duration-500">
                          {IconComponent && <IconComponent className="w-7 h-7 text-copper-light" />}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="font-mono text-[10px] text-terminal-muted tracking-widest">STRATEGY_{String(index + 1).padStart(2, '0')}</span>
                            <div className="w-12 h-[1px] bg-terminal-border"></div>
                          </div>
                          <h3 className="font-serif text-2xl sm:text-3xl text-white mb-4">
                            {strategyName}
                          </h3>
                          <p className="text-sm sm:text-base text-gray-400 font-sans leading-relaxed">
                            {description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Risk & Metrics */}
                  <div className="lg:col-span-4 p-6 sm:p-8 bg-terminal-darker/50">
                    <div className="space-y-6">
                      {/* Risk Badge */}
                      <div>
                        <div className="font-mono text-[10px] text-terminal-muted tracking-widest mb-3">RISK_PROFILE</div>
                        <span className={`inline-flex items-center gap-2 px-4 py-2 border font-mono text-xs tracking-wider ${getRiskColor(riskLevel)}`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse"></span>
                          {riskLevel.toUpperCase()}_RISK
                        </span>
                      </div>

                      {/* Metrics */}
                      <div>
                        <div className="font-mono text-[10px] text-terminal-muted tracking-widest mb-3">KEY_METRICS</div>
                        <div className="space-y-3">
                          <div className="flex justify-between items-baseline border-b border-terminal-border pb-2">
                            <span className="font-mono text-xs text-gray-400" title="Sharpe Ratio (risk-adjusted return).">SHARPE_RATIO</span>
                            <span className="font-mono text-sm text-white" title="Sharpe Ratio (risk-adjusted return).">
                              {strategyMetrics[index].sharpe.toFixed(2)}
                            </span>
                          </div>
                          <div className="flex justify-between items-baseline border-b border-terminal-border pb-2">
                            <span className="font-mono text-xs text-gray-400" title="Peak-to-trough loss, expressed as a percentage.">MAX_DRAWDOWN (%)</span>
                            <span className="font-mono text-sm text-white" title="Peak-to-trough loss, expressed as a percentage.">
                              {strategyMetrics[index].maxDrawdown.toFixed(2)}%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-copper-light/10 group-hover:border-copper-light/20 transition-colors duration-500"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
