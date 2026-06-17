"use client";

import React from 'react';
import MindMapRenderer from '@/components/MindMapRenderer';
import { frameworks, unifiedSystem } from '@/data/frameworks';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';

export default function Home() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const childVariant = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="flex-1 overflow-y-auto p-8 lg:p-16 flex flex-col space-y-40 scroll-smooth bg-[#0a0a0a] text-gray-200">
      
      {/* Hero Section: Unified System Map */}
      <motion.section 
        id="unified-system" 
        className="flex flex-col border-b border-white/5 pb-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <header className="mb-16 max-w-3xl">
          <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-6 leading-tight">
            {unifiedSystem.title}
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed font-sans">
            {unifiedSystem.description}
          </p>
        </header>
        
        <div className="w-full min-h-[600px] mb-20 relative rounded-2xl overflow-hidden border border-white/10 bg-[#111] p-4">
          <MindMapRenderer chart={unifiedSystem.diagram} />
        </div>

        <div className="max-w-3xl">
          <h2 className="text-sm font-mono tracking-widest uppercase text-gray-500 mb-8 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-gray-700"></span>
            Strategic Alignment
          </h2>
          <ul className="space-y-10">
            {unifiedSystem.strategicAlignment.map((point, idx) => (
              <li key={idx} className="flex gap-6 items-start text-gray-300 leading-relaxed text-lg">
                <span className="flex-shrink-0 w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center font-mono text-xs text-gray-400">
                  0{idx + 1}
                </span>
                <div className="pt-0.5">
                  <ReactMarkdown components={{ strong: ({node, ...props}) => <strong className="font-medium text-white" {...props} /> }}>
                    {point}
                  </ReactMarkdown>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Individual Frameworks */}
      {frameworks.map((fw) => (
        <motion.section 
          key={fw.id} 
          id={fw.id} 
          className="flex flex-col border-b border-white/5 pb-32 last:border-b-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          {/* Header */}
          <header className="mb-14 max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-4">
              {fw.title}
            </h2>
            <div className="text-sm font-mono text-emerald-400/80 mb-6 uppercase tracking-wider">
              {fw.core}
            </div>
            <div className="text-xl text-gray-300 leading-relaxed font-serif italic mb-8 border-l-2 border-white/20 pl-6 py-1">
              <ReactMarkdown>{fw.description}</ReactMarkdown>
            </div>
            
            {fw.protocol && (
              <div className="mt-8 bg-white/[0.02] border border-white/10 rounded-xl p-6 lg:p-8 backdrop-blur-md">
                <h3 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  My Protocol
                </h3>
                <p className="text-gray-200 font-mono text-sm leading-relaxed whitespace-pre-wrap">
                  {fw.protocol}
                </p>
              </div>
            )}
          </header>

          {/* Primary Diagram */}
          <div className="w-full min-h-[400px] rounded-2xl border border-white/10 bg-[#111] p-4 relative overflow-hidden mb-16">
            <div className="absolute top-4 right-4 z-10 text-[10px] font-mono text-gray-600 uppercase tracking-widest bg-black/40 px-2 py-1 rounded backdrop-blur-md">
              Core Model
            </div>
            <MindMapRenderer chart={fw.diagram} />
          </div>

          {/* Secondary Diagram */}
          {fw.secondaryDiagram && (
            <div className="w-full min-h-[400px] rounded-2xl border border-white/10 bg-[#111] p-4 relative overflow-hidden mb-16">
              <div className="absolute top-4 right-4 z-10 text-[10px] font-mono text-gray-600 uppercase tracking-widest bg-black/40 px-2 py-1 rounded backdrop-blur-md">
                {fw.secondaryDiagramTitle || "Extended Model"}
              </div>
              <MindMapRenderer chart={fw.secondaryDiagram} />
            </div>
          )}

          {/* Key Insights */}
          {fw.keyInsights && fw.keyInsights.length > 0 && (
            <motion.div 
              className="max-w-3xl mb-16"
              variants={staggerChildren}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-mono tracking-widest uppercase text-gray-500 mb-8 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-gray-700"></span>
                Key Insights
              </h3>
              <div className="space-y-6">
                {fw.keyInsights.map((insight, idx) => (
                  <motion.div 
                    key={idx} 
                    className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-6 hover:bg-white/[0.04] transition-colors duration-300"
                    variants={childVariant}
                  >
                    <h4 className="text-white font-medium text-base mb-2">{insight.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      <ReactMarkdown components={{ em: ({node, ...props}) => <em className="text-gray-300 not-italic font-medium" {...props} /> }}>
                        {insight.text}
                      </ReactMarkdown>
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Examples */}
          {fw.examples && fw.examples.length > 0 && (
            <motion.div 
              className="max-w-3xl mb-16"
              variants={staggerChildren}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-mono tracking-widest uppercase text-gray-500 mb-8 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-gray-700"></span>
                Real-World Examples
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {fw.examples.map((example, idx) => (
                  <motion.div 
                    key={idx} 
                    className="border border-white/[0.06] rounded-xl p-5 hover:border-white/[0.12] transition-colors duration-300"
                    variants={childVariant}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded border border-gray-700 flex items-center justify-center font-mono text-[10px] text-gray-500 mt-0.5">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <h4 className="text-white font-medium text-sm">{example.name}</h4>
                    </div>
                    <p className="text-gray-400 text-xs leading-relaxed pl-9">{example.detail}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Stats */}
          {fw.stats && fw.stats.length > 0 && (
            <div className="max-w-3xl">
              <h3 className="text-sm font-mono tracking-widest uppercase text-gray-500 mb-8 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-gray-700"></span>
                Key Numbers
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {fw.stats.map((stat, idx) => (
                  <div key={idx} className="border border-white/[0.06] rounded-xl p-4 text-center">
                    <div className="text-xl font-semibold text-white mb-1 font-mono">{stat.value}</div>
                    <div className="text-[11px] text-gray-500 uppercase tracking-wider leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.section>
      ))}

    </div>
  );
}
