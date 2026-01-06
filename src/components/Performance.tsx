'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { performanceData } from '@/lib/data';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Area,
  AreaChart
} from 'recharts';
import { TrendingUp, Award, Target, DollarSign } from 'lucide-react';

const Performance = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const totalReturn = performanceData.reduce((acc, data) => acc + data.returns, 0);
  const averageReturn = totalReturn / performanceData.length;
  const maxReturn = Math.max(...performanceData.map(d => d.returns));
  const averageSharpe = performanceData.reduce((acc, data) => acc + data.sharpeRatio, 0) / performanceData.length;

  const keyMetrics = [
    {
      label: 'Total Annual Return',
      value: `${totalReturn.toFixed(1)}%`,
      icon: TrendingUp,
      color: 'text-green-600'
    },
    {
      label: 'Average Monthly Return',
      value: `${averageReturn.toFixed(1)}%`,
      icon: Target,
      color: 'text-blue-600'
    },
    {
      label: 'Best Month',
      value: `${maxReturn.toFixed(1)}%`,
      icon: Award,
      color: 'text-purple-600'
    },
    {
      label: 'Average Sharpe Ratio',
      value: averageSharpe.toFixed(2),
      icon: DollarSign,
      color: 'text-indigo-600'
    }
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-terminal-black border border-copper-light/40 p-4 shadow-terminal backdrop-blur-sm">
          <p className="font-mono text-xs text-copper-light mb-3 tracking-wider">{`${label}_2024`}</p>
          <div className="space-y-2">
            <p className="font-mono text-sm text-white">
              {`Returns: ${payload[0]?.value?.toFixed(1)}%`}
            </p>
            {payload[1] && (
              <p className="font-mono text-sm text-gray-400">
                {`Benchmark: ${payload[1].value.toFixed(1)}%`}
              </p>
            )}
            {payload[2] && (
              <p className="font-mono text-sm text-gold">
                {`Sharpe: ${payload[2].value.toFixed(2)}`}
              </p>
            )}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <section id="performance" className="py-20 sm:py-24 lg:py-32 bg-terminal-darker relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:60px_60px] opacity-[0.02]"></div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-copper/5 rounded-full blur-[100px]"></div>

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
            <span className="font-mono text-xs text-copper-light/60 tracking-widest">PERFORMANCE_ANALYTICS</span>
            <div className="flex-1 h-[1px] bg-gradient-to-r from-copper-light/20 to-transparent"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light text-white mb-6">
            Data <span className="text-copper-light italic">Excellence</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl font-sans">
            Systematic outperformance across market cycles.
            Quantitative precision meets risk-adjusted returns.
          </p>
        </motion.div>

        {/* Key Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {keyMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-terminal-black border border-terminal-border p-6 overflow-hidden hover:border-copper-light/30 transition-all duration-500"
            >
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-copper-light/10 group-hover:border-copper-light/30 transition-colors duration-500"></div>

              <div className="relative z-10">
                <div className="w-12 h-12 border border-terminal-border flex items-center justify-center mb-6 group-hover:border-copper-light/40 transition-colors duration-500">
                  <metric.icon className={`w-6 h-6 ${metric.color}`} />
                </div>
                <div className="font-mono text-3xl text-white mb-3 tracking-tight">
                  {metric.value}
                </div>
                <div className="font-mono text-[10px] text-terminal-muted tracking-widest uppercase">
                  {metric.label}
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-copper-light/0 group-hover:bg-copper-light/[0.02] transition-colors duration-500"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-terminal-black border border-terminal-border p-6 sm:p-8 relative overflow-hidden group hover:border-copper-light/30 transition-all duration-500"
          >
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-terminal-border">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-terminal-border"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-terminal-border"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-terminal-border"></div>
                </div>
                <span className="font-mono text-xs text-copper-light/60 tracking-wider">RETURNS_ANALYSIS.CHT</span>
              </div>
            </div>

            <h3 className="font-mono text-sm text-gray-400 mb-6 tracking-wider">
              MONTHLY RETURNS VS BENCHMARK
            </h3>
            <div className="h-72" suppressHydrationWarning>
              {mounted ? (
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333333" opacity={0.2} />
                    <XAxis
                      dataKey="month"
                      tick={{ fill: '#666666', fontSize: 11, fontFamily: 'IBM Plex Mono, monospace' }}
                      stroke="#333333"
                    />
                    <YAxis
                      tick={{ fill: '#666666', fontSize: 11, fontFamily: 'IBM Plex Mono, monospace' }}
                      tickFormatter={(value) => `${value}%`}
                      stroke="#333333"
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Line
                      type="monotone"
                      dataKey="returns"
                      stroke="#d4a574"
                      strokeWidth={2.5}
                      dot={{ fill: '#d4a574', strokeWidth: 0, r: 3 }}
                      activeDot={{ r: 5, fill: '#d4a574', stroke: '#d4a574', strokeWidth: 2 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="benchmark"
                      stroke="#666666"
                      strokeWidth={1.5}
                      strokeDasharray="4 4"
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <div className="text-gray-500">Loading chart...</div>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-terminal-black border border-terminal-border p-6 sm:p-8 relative overflow-hidden group hover:border-copper-light/30 transition-all duration-500"
          >
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-terminal-border">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-terminal-border"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-terminal-border"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-terminal-border"></div>
                </div>
                <span className="font-mono text-xs text-copper-light/60 tracking-wider">SHARPE_RATIO.CHT</span>
              </div>
            </div>

            <h3 className="font-mono text-sm text-gray-400 mb-6 tracking-wider">
              SHARPE RATIO PROGRESSION
            </h3>
            <div className="h-72" suppressHydrationWarning>
              {mounted ? (
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={performanceData}>
                    <defs>
                      <linearGradient id="sharpeGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#d4af37" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#d4af37" stopOpacity={0.02}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333333" opacity={0.2} />
                    <XAxis
                      dataKey="month"
                      tick={{ fill: '#666666', fontSize: 11, fontFamily: 'IBM Plex Mono, monospace' }}
                      stroke="#333333"
                    />
                    <YAxis
                      tick={{ fill: '#666666', fontSize: 11, fontFamily: 'IBM Plex Mono, monospace' }}
                      domain={[0, 4]}
                      stroke="#333333"
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Area
                      type="monotone"
                      dataKey="sharpeRatio"
                      stroke="#d4af37"
                      fillOpacity={1}
                      fill="url(#sharpeGradient)"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <div className="text-gray-500">Loading chart...</div>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-terminal-black border border-terminal-border p-6 sm:p-8 relative overflow-hidden group hover:border-copper-light/30 transition-all duration-500"
        >
          {/* Terminal Window Header */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-terminal-border">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-terminal-border"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-terminal-border"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-terminal-border"></div>
              </div>
              <span className="font-mono text-xs text-copper-light/60 tracking-wider">PERFORMANCE_COMP.CHT</span>
            </div>
          </div>

          <h3 className="font-mono text-sm text-gray-400 mb-6 tracking-wider">
            MONTHLY PERFORMANCE COMPARISON
          </h3>
          <div className="h-72" suppressHydrationWarning>
            {mounted ? (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333333" opacity={0.2} />
                  <XAxis
                    dataKey="month"
                    tick={{ fill: '#666666', fontSize: 11, fontFamily: 'IBM Plex Mono, monospace' }}
                    stroke="#333333"
                  />
                  <YAxis
                    tick={{ fill: '#666666', fontSize: 11, fontFamily: 'IBM Plex Mono, monospace' }}
                    tickFormatter={(value) => `${value}%`}
                    stroke="#333333"
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="returns" fill="#d4a574" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="benchmark" fill="#666666" radius={[2, 2, 0, 0]} opacity={0.5} />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="text-gray-500">Loading chart...</div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Summary Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="bg-terminal-black border-2 border-copper-light/20 p-8 sm:p-12 relative overflow-hidden">
            {/* Decorative Corner Elements */}
            <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-copper-light/30"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-copper-light/30"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-mono text-xs text-copper-light tracking-widest">SYSTEM_STATUS: OPTIMAL</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-white mb-6">
                Consistent <span className="text-copper-light italic">Excellence</span>
              </h3>
              <p className="text-base sm:text-lg text-gray-400 mb-10 max-w-3xl font-sans">
                Superior risk-adjusted returns across market cycles.
                Outperforming benchmarks through disciplined quantitative execution.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl">
                {[
                  { value: '100%', label: 'MONTHS_PROFITABLE', color: 'text-green-400' },
                  { value: '2.8x', label: 'AVG_VS_BENCHMARK', color: 'text-copper-light' },
                  { value: '<5%', label: 'MAX_DRAWDOWN', color: 'text-gold' },
                ].map((stat, index) => (
                  <div key={index} className="text-center border-l border-terminal-border pl-6 first:border-l-0 first:pl-0">
                    <div className={`font-mono text-4xl sm:text-5xl mb-3 ${stat.color}`}>
                      {stat.value}
                    </div>
                    <div className="font-mono text-[10px] text-terminal-muted tracking-widest">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Performance;