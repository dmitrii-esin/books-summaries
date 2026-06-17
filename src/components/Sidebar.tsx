"use client";

import React, { useEffect, useState } from 'react';

const navItems = [
  { id: 'unified-system', label: 'Operating System', icon: '◈' },
  { id: 'sapolsky', label: 'Determinism', sub: 'Sapolsky' },
  { id: 'taleb', label: 'Antifragility', sub: 'Taleb' },
  { id: 'kahneman', label: 'Dual Systems', sub: 'Kahneman' },
  { id: 'csikszentmihalyi', label: 'Flow State', sub: 'Csikszentmihalyi' },
  { id: 'newport', label: 'Deep Work', sub: 'Newport' },
  { id: 'oakley', label: 'Learning', sub: 'Oakley' },
];

export default function Sidebar() {
  const [activeId, setActiveId] = useState<string>('unified-system');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="w-56 h-screen sticky top-0 bg-[#080808] border-r border-white/[0.06] flex flex-col shrink-0 z-50">

      {/* Brand */}
      <div className="px-5 py-6 border-b border-white/[0.06]">
        <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-gray-500">
          Cognitive
        </div>
        <div className="text-sm font-semibold text-white tracking-tight mt-0.5">
          Architecture
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-5">
        <ul className="space-y-0.5 px-2">
          {navItems.map((item, i) => {
            const isActive = activeId === item.id;
            const isFirst = i === 0;

            return (
              <li key={item.id}>
                {isFirst && (
                  <div className="px-3 mb-3 pb-3 border-b border-white/[0.04]">
                    <a
                      href={`#${item.id}`}
                      className={`flex items-center gap-2 text-xs font-mono uppercase tracking-wider transition-colors duration-200 ${
                        isActive ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                      }`}
                    >
                      <span className="text-base">{item.icon}</span>
                      {item.label}
                    </a>
                  </div>
                )}
                {!isFirst && (
                  <a
                    href={`#${item.id}`}
                    className={`group flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                      isActive
                        ? 'bg-white/[0.06] text-white'
                        : 'text-gray-500 hover:text-gray-300 hover:bg-white/[0.03]'
                    }`}
                  >
                    <span className={`w-1 h-1 rounded-full transition-all duration-300 ${
                      isActive ? 'bg-emerald-400 scale-150' : 'bg-gray-700 group-hover:bg-gray-500'
                    }`} />
                    <div className="flex flex-col">
                      <span className="font-medium leading-tight">{item.label}</span>
                      {item.sub && (
                        <span className={`text-[10px] font-mono uppercase tracking-wider mt-0.5 transition-colors ${
                          isActive ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {item.sub}
                        </span>
                      )}
                    </div>
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="px-5 py-4 border-t border-white/[0.06]">
        <div className="text-[10px] font-mono text-gray-700 uppercase tracking-widest">
          Antigravity 2.0
        </div>
      </div>
    </aside>
  );
}
