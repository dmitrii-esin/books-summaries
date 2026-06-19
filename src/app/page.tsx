"use client";

import React from 'react';
import MindMapRenderer from '@/components/MindMapRenderer';
import ReadingProgress from '@/components/ReadingProgress';
import FrameworkHeader from '@/components/FrameworkHeader';
import StatCard from '@/components/StatCard';
import InsightCard from '@/components/InsightCard';
import ExampleCard from '@/components/ExampleCard';
import { frameworks, unifiedSystem } from '@/data/frameworks';
import ReactMarkdown from 'react-markdown';
import { motion, type Variants } from 'framer-motion';

// Per-framework accent colors for consistent theming
const frameworkColors: Record<string, string> = {
  sapolsky: '#3b82f6',
  taleb: '#10b981',
  kahneman: '#d97706',
  csikszentmihalyi: '#10b981',
  newport: '#6366f1',
  oakley: '#d946ef',
};

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

export default function Home() {
  return (
    <div
      data-scroll-container
      className="flex-1 overflow-y-auto overflow-x-hidden px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:p-16 flex flex-col gap-16 sm:gap-20 md:gap-24 lg:gap-32 scroll-smooth bg-[#0a0a0a] text-gray-200"
    >
      <ReadingProgress />

      {/* ── Hero Section: Unified System Map ── */}
      <motion.section
        id="unified-system"
        className="flex flex-col border-b border-white/5 pb-16 sm:pb-20 md:pb-24 lg:pb-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <header className="mb-8 sm:mb-12 md:mb-16 max-w-3xl w-full">
          {/* Tagline */}
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 mb-6"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-glow" />
            <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400/80">6 Frameworks · 1 System</span>
          </motion.div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-4 sm:mb-6 leading-tight text-balance">
            {unifiedSystem.title}
          </h1>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed font-sans max-w-[65ch]">
            {unifiedSystem.description}
          </p>
        </header>

        {/* Unified Diagram */}
        <div className="diagram-container w-full min-h-[240px] sm:min-h-[320px] md:min-h-[420px] lg:min-h-[560px] mb-10 sm:mb-14 md:mb-20 relative rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 bg-[#111] p-2 sm:p-4">
          <div className="absolute top-2 left-2 sm:top-4 sm:left-4 z-10 text-[9px] sm:text-[10px] font-mono text-gray-600 uppercase tracking-widest bg-black/60 px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg backdrop-blur-md border border-white/[0.04]">
            ◈ Unified Model
          </div>
          <MindMapRenderer chart={unifiedSystem.diagram} />
        </div>

        {/* Strategic Alignment */}
        <div className="max-w-3xl w-full">
          <h2 className="text-xs sm:text-sm font-mono tracking-widest uppercase text-gray-500 mb-5 sm:mb-8 flex items-center gap-3 sm:gap-4">
            <span className="w-8 h-[1px] bg-gray-700" />
            Strategic Alignment
          </h2>
          <ul className="space-y-5 sm:space-y-6 md:space-y-8">
            {unifiedSystem.strategicAlignment.map((point, idx) => (
              <motion.li
                key={idx}
                className="flex gap-3 sm:gap-4 md:gap-6 items-start text-gray-300 leading-relaxed text-sm sm:text-base"
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <span className="shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-gray-700 flex items-center justify-center font-mono text-[10px] sm:text-xs text-gray-400">
                  0{idx + 1}
                </span>
                <div className="pt-0.5">
                  <ReactMarkdown components={{ strong: ({ ...props }) => <strong className="font-medium text-white" {...props} /> }}>
                    {point}
                  </ReactMarkdown>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* ── Individual Frameworks ── */}
      {frameworks.map((fw) => {
        const color = frameworkColors[fw.id] || '#10b981';

        return (
          <motion.section
            key={fw.id}
            id={fw.id}
            className="flex flex-col border-b border-white/5 pb-16 sm:pb-20 md:pb-24 lg:pb-32 last:border-b-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
          >
            {/* Header */}
            <FrameworkHeader
              id={fw.id}
              title={fw.title}
              author={fw.author}
              bookReference={fw.bookReference}
              core={fw.core}
              description={fw.description}
              protocol={fw.protocol}
            />

            {/* ── Diagrams ── */}
            <div className={`grid gap-4 sm:gap-6 mb-10 sm:mb-12 md:mb-16 grid-cols-1 ${fw.secondaryDiagram ? 'xl:grid-cols-2' : ''}`}>
              {/* Primary Diagram */}
              <div className="diagram-container w-full min-h-[220px] sm:min-h-[280px] md:min-h-[360px] rounded-xl sm:rounded-2xl border border-white/10 bg-[#111] p-2 sm:p-4 relative overflow-hidden">
                <div className="absolute top-2 left-2 sm:top-4 sm:left-4 z-10 text-[9px] sm:text-[10px] font-mono text-gray-600 uppercase tracking-widest bg-black/60 px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg backdrop-blur-md border border-white/[0.04]">
                  Core Model
                </div>
                <MindMapRenderer chart={fw.diagram} />
              </div>

              {/* Secondary Diagram */}
              {fw.secondaryDiagram && (
                <div className="diagram-container w-full min-h-[220px] sm:min-h-[280px] md:min-h-[360px] rounded-xl sm:rounded-2xl border border-white/10 bg-[#111] p-2 sm:p-4 relative overflow-hidden">
                  <div className="absolute top-2 left-2 sm:top-4 sm:left-4 z-10 text-[9px] sm:text-[10px] font-mono text-gray-600 uppercase tracking-widest bg-black/60 px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg backdrop-blur-md border border-white/[0.04]">
                    {fw.secondaryDiagramTitle || "Extended Model"}
                  </div>
                  <MindMapRenderer chart={fw.secondaryDiagram} />
                </div>
              )}
              
              {/* Tertiary Diagram */}
              {fw.tertiaryDiagram && (
                <div className="diagram-container w-full min-h-[220px] sm:min-h-[280px] md:min-h-[360px] rounded-xl sm:rounded-2xl border border-white/10 bg-[#111] p-2 sm:p-4 relative overflow-hidden xl:col-span-2">
                  <div className="absolute top-2 left-2 sm:top-4 sm:left-4 z-10 text-[9px] sm:text-[10px] font-mono text-gray-600 uppercase tracking-widest bg-black/60 px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg backdrop-blur-md border border-white/[0.04]">
                    {fw.tertiaryDiagramTitle || "Deep Logic Model"}
                  </div>
                  <MindMapRenderer chart={fw.tertiaryDiagram} />
                </div>
              )}
            </div>

            {/* ── Stats ── */}
            {fw.stats && fw.stats.length > 0 && (
              <div className="max-w-4xl w-full mb-10 sm:mb-12 md:mb-16">
                <h3 className="text-xs sm:text-sm font-mono tracking-widest uppercase text-gray-500 mb-5 sm:mb-8 flex items-center gap-3 sm:gap-4 flex-wrap">
                  <span className="w-8 h-[1px] bg-gray-700" />
                  Key Numbers
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  {fw.stats.map((stat, idx) => (
                    <StatCard
                      key={idx}
                      value={stat.value}
                      label={stat.label}
                      accentColor={color}
                      index={idx}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* ── Key Insights ── */}
            {fw.keyInsights && fw.keyInsights.length > 0 && (
              <div className="max-w-3xl w-full mb-10 sm:mb-12 md:mb-16">
                <h3 className="text-xs sm:text-sm font-mono tracking-widest uppercase text-gray-500 mb-5 sm:mb-8 flex items-center gap-3 sm:gap-4 flex-wrap">
                  <span className="w-8 h-[1px] bg-gray-700" />
                  Key Insights
                  <span className="text-[10px] text-gray-700 font-mono">({fw.keyInsights.length})</span>
                </h3>
                <div className="space-y-4">
                  {fw.keyInsights.map((insight, idx) => (
                    <InsightCard
                      key={idx}
                      title={insight.title}
                      text={insight.text}
                      index={idx}
                      accentColor={color}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* ── Real-World Examples ── */}
            {fw.examples && fw.examples.length > 0 && (
              <div className="max-w-3xl w-full mb-10 sm:mb-12 md:mb-16">
                <h3 className="text-xs sm:text-sm font-mono tracking-widest uppercase text-gray-500 mb-5 sm:mb-8 flex items-center gap-3 sm:gap-4 flex-wrap">
                  <span className="w-8 h-[1px] bg-gray-700" />
                  Real-World Examples
                  <span className="text-[10px] text-gray-700 font-mono">({fw.examples.length})</span>
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                  {fw.examples.map((example, idx) => (
                    <ExampleCard
                      key={idx}
                      name={example.name}
                      detail={example.detail}
                      index={idx}
                      accentColor={color}
                    />
                  ))}
                </div>
              </div>
            )}
          </motion.section>
        );
      })}

      {/* ── Footer ── */}
      <footer className="border-t border-white/[0.04] pt-8 sm:pt-10 md:pt-12 pb-4 sm:pb-6 md:pb-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 max-w-3xl w-full">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-gray-600">Cognitive Architecture</div>
            <div className="text-[10px] font-mono text-gray-700 mt-1">{frameworks.length} frameworks · {frameworks.reduce((acc, fw) => acc + fw.keyInsights.length, 0)} insights</div>
          </div>
          <div className="text-[10px] font-mono text-gray-700 leading-relaxed">
            Built with Next.js · Mermaid.js · Framer Motion
          </div>
        </div>
      </footer>
    </div>
  );
}
