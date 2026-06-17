"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface StatCardProps {
  value: string;
  label: string;
  accentColor?: string;
  index: number;
}

export default function StatCard({ value, label, accentColor = '#10b981', index }: StatCardProps) {
  return (
    <motion.div
      className="stat-card border border-white/[0.06] rounded-xl p-5 text-center relative z-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className="text-2xl font-semibold mb-1.5 font-mono tracking-tight"
        style={{ color: accentColor }}
      >
        {value}
      </div>
      <div className="text-[11px] text-gray-500 uppercase tracking-wider leading-tight font-mono">
        {label}
      </div>
    </motion.div>
  );
}
