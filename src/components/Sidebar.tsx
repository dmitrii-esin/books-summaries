"use client";

import React, { useEffect, useState } from 'react';

const navItems = [
  { id: 'unified-system', label: 'Operating System', icon: '◈', color: '#10b981' },
  { id: 'sapolsky', label: 'Determinism', sub: 'Sapolsky', color: '#3b82f6' },
  { id: 'taleb', label: 'Antifragility', sub: 'Taleb', color: '#10b981' },
  { id: 'kahneman', label: 'Dual Systems', sub: 'Kahneman', color: '#d97706' },
  { id: 'csikszentmihalyi', label: 'Flow State', sub: 'Csikszentmihalyi', color: '#10b981' },
  { id: 'newport', label: 'Deep Work', sub: 'Newport', color: '#6366f1' },
  { id: 'oakley', label: 'Learning', sub: 'Oakley', color: '#d946ef' },
];

export default function Sidebar() {
  const [activeId, setActiveId] = useState<string>('unified-system');
  const [scrollProgress, setScrollProgress] = useState(0);

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

  // Track scroll progress
  useEffect(() => {
    const scrollContainer = document.querySelector('main > div');
    if (!scrollContainer) return;

    const handleScroll = () => {
      const el = scrollContainer as HTMLElement;
      const scrollTop = el.scrollTop;
      const scrollHeight = el.scrollHeight - el.clientHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  const activeIndex = navItems.findIndex(item => item.id === activeId);
  const totalFrameworks = navItems.length - 1; // exclude unified system
  const currentFramework = activeIndex > 0 ? activeIndex : 0;

  return (
    <aside className="w-60 h-screen sticky top-0 bg-[#080808] border-r border-white/[0.06] flex flex-col shrink-0 z-50">

      {/* Brand */}
      <div className="px-5 py-6 border-b border-white/[0.06]">
        <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-gray-500">
          Cognitive
        </div>
        <div className="text-sm font-semibold text-white tracking-tight mt-0.5">
          Architecture
        </div>
        <div className="text-[10px] font-mono text-gray-600 mt-2">
          {totalFrameworks} frameworks
        </div>
      </div>

      {/* Scroll Progress */}
      <div className="px-5 py-3 border-b border-white/[0.04]">
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-[10px] font-mono text-gray-600 uppercase tracking-wider">Progress</span>
          <span className="text-[10px] font-mono text-gray-500">{Math.round(scrollProgress)}%</span>
        </div>
        <div className="w-full h-[3px] bg-white/[0.04] rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-300 ease-out"
            style={{
              width: `${scrollProgress}%`,
              background: 'linear-gradient(90deg, #10b981, #6366f1)',
            }}
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
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
                    className={`group flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                      isActive
                        ? 'bg-white/[0.06] text-white'
                        : 'text-gray-500 hover:text-gray-300 hover:bg-white/[0.03]'
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        isActive ? 'scale-125 animate-pulse-glow' : 'group-hover:bg-gray-500'
                      }`}
                      style={{
                        backgroundColor: isActive ? item.color : '#374151',
                      }}
                    />
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

                    {/* Active indicator line */}
                    {isActive && (
                      <div
                        className="ml-auto w-0.5 h-4 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                    )}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Framework counter */}
      <div className="px-5 py-3 border-t border-white/[0.06]">
        <div className="flex items-center justify-between">
          <div className="text-[10px] font-mono text-gray-700 uppercase tracking-widest">
            Section
          </div>
          <div className="text-[10px] font-mono text-gray-500">
            {currentFramework}/{totalFrameworks}
          </div>
        </div>
      </div>

      {/* Keyboard hint */}
      <div className="px-5 py-3 border-t border-white/[0.06]">
        <div className="flex items-center gap-2 text-[10px] text-gray-700">
          <kbd>↑</kbd><kbd>↓</kbd>
          <span className="ml-1">scroll</span>
        </div>
      </div>
    </aside>
  );
}
