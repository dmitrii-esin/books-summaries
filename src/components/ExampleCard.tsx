"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ExampleCardProps {
  name: string;
  detail: string;
  index: number;
  accentColor?: string;
}

export default function ExampleCard({ name, detail, index, accentColor = '#6366f1' }: ExampleCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="example-card border border-white/[0.06] rounded-xl overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <span
            className="flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center font-mono text-[10px] mt-0.5 border"
            style={{
              borderColor: isOpen ? accentColor : 'rgba(255,255,255,0.1)',
              color: isOpen ? accentColor : '#6b7280',
              backgroundColor: isOpen ? `${accentColor}10` : 'transparent',
            }}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <h4 className="text-white font-medium text-sm break-words pr-2">{name}</h4>
              <motion.span
                className="text-gray-600 text-xs ml-2 flex-shrink-0"
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                ▾
              </motion.span>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0 pl-11 sm:pl-14">
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed break-words">{detail}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
