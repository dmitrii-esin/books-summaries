"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

interface InsightCardProps {
  title: string;
  text: string;
  index: number;
  accentColor?: string;
}

export default function InsightCard({ title, text, index, accentColor = '#10b981' }: InsightCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Show first 120 chars by default, full text when expanded
  const isLongText = text.length > 120;
  const displayText = isExpanded || !isLongText ? text : text.slice(0, 120) + '…';

  return (
    <motion.div
      className="insight-card bg-white/[0.02] border border-white/[0.06] rounded-xl p-4 sm:p-6 cursor-pointer"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => isLongText && setIsExpanded(!isExpanded)}
    >
      <div className="flex items-start gap-3">
        <div
          className="w-1 h-6 rounded-full shrink-0 mt-0.5"
          style={{ backgroundColor: accentColor, opacity: 0.6 }}
        />
        <div className="flex-1 min-w-0">
          <h4 className="text-white font-medium text-sm sm:text-base mb-1.5 sm:mb-2 break-words">{title}</h4>
          <AnimatePresence mode="wait">
            <motion.div
              key={isExpanded ? 'expanded' : 'collapsed'}
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 1 }}
              className="text-gray-400 text-sm leading-relaxed"
            >
              <ReactMarkdown
                components={{
                  em: ({ ...props }) => <em className="text-gray-300 not-italic font-medium" {...props} />,
                  strong: ({ ...props }) => <strong className="text-white font-medium" {...props} />,
                }}
              >
                {displayText}
              </ReactMarkdown>
            </motion.div>
          </AnimatePresence>

          {isLongText && (
            <button
              className="text-[11px] font-mono text-gray-600 hover:text-gray-400 mt-2 transition-colors uppercase tracking-wider"
              onClick={(e) => { e.stopPropagation(); setIsExpanded(!isExpanded); }}
            >
              {isExpanded ? '— Collapse' : '+ Read more'}
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
