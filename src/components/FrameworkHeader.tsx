"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

// Per-framework accent colors
const frameworkColors: Record<string, string> = {
  sapolsky: '#3b82f6',
  taleb: '#10b981',
  kahneman: '#d97706',
  csikszentmihalyi: '#10b981',
  newport: '#6366f1',
  oakley: '#d946ef',
};

interface FrameworkHeaderProps {
  id: string;
  title: string;
  author: string;
  bookReference?: {
    title: string;
    summary: string;
  };
  core: string;
  description: string;
  protocol?: string;
}

export default function FrameworkHeader({ id, title, author, bookReference, core, description, protocol }: FrameworkHeaderProps) {
  const color = frameworkColors[id] || '#10b981';

  return (
    <header className="mb-8 sm:mb-10 md:mb-14 max-w-3xl w-full">
      <div className="flex flex-wrap items-center gap-3 mb-6">
        {/* Author tag */}
        <motion.div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.02]"
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
          <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400">{author}</span>
        </motion.div>

        {/* Book Reference tag */}
        {bookReference && (
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.04] bg-white/[0.01]"
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400 truncate max-w-[12rem] sm:max-w-none">{bookReference.title}</span>
          </motion.div>
        )}
      </div>

      {/* Book Summary Card */}
      {bookReference && (
        <motion.div 
          className="mb-8 p-4 rounded-xl border border-white/[0.04] bg-[#0d0d0d]"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <p className="text-xs text-gray-400 leading-relaxed font-sans">
            <strong className="text-gray-300 font-medium">Book Summary:</strong> {bookReference.summary}
          </p>
        </motion.div>
      )}

      {/* Title */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-3 sm:mb-4 text-balance">
        {title}
      </h2>

      {/* Core thesis — highlighted */}
      <div
        className="text-xs sm:text-sm font-mono mb-4 sm:mb-6 uppercase tracking-wider px-3 py-2 rounded-lg border inline-block max-w-full break-words"
        style={{
          color: color,
          borderColor: `${color}30`,
          backgroundColor: `${color}08`,
        }}
      >
        {core}
      </div>

      {/* Description blockquote */}
      <div className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6 sm:mb-8 border-l-2 pl-4 sm:pl-6 py-1 max-w-[65ch]" style={{ borderColor: `${color}40` }}>
        <ReactMarkdown
          components={{
            em: ({ ...props }) => <em className="text-gray-200 font-medium" {...props} />,
          }}
        >
          {description}
        </ReactMarkdown>
      </div>

      {/* Protocol card */}
      {protocol && (
        <motion.div
          className="mt-6 sm:mt-8 border rounded-xl p-4 sm:p-6 lg:p-8 backdrop-blur-md"
          style={{
            backgroundColor: `${color}04`,
            borderColor: `${color}18`,
          }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-2">
            <svg className="w-4 h-4" style={{ color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            My Protocol
          </h3>
          <p className="text-gray-200 font-mono text-xs sm:text-sm leading-relaxed whitespace-pre-wrap break-words">
            {protocol}
          </p>
        </motion.div>
      )}
    </header>
  );
}
