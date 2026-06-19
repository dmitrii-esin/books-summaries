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

function NavList({
  activeId,
  onNavigate,
}: {
  activeId: string;
  onNavigate?: () => void;
}) {
  return (
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
                  onClick={onNavigate}
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
                onClick={onNavigate}
                className={`group flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                  isActive
                    ? 'bg-white/[0.06] text-white'
                    : 'text-gray-500 hover:text-gray-300 hover:bg-white/[0.03]'
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-300 ${
                    isActive ? 'scale-125 animate-pulse-glow' : 'group-hover:bg-gray-500'
                  }`}
                  style={{
                    backgroundColor: isActive ? item.color : '#374151',
                  }}
                />
                <div className="flex flex-col min-w-0">
                  <span className="font-medium leading-tight truncate">{item.label}</span>
                  {item.sub && (
                    <span className={`text-[10px] font-mono uppercase tracking-wider mt-0.5 transition-colors ${
                      isActive ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {item.sub}
                    </span>
                  )}
                </div>

                {isActive && (
                  <div
                    className="ml-auto w-0.5 h-4 rounded-full shrink-0"
                    style={{ backgroundColor: item.color }}
                  />
                )}
              </a>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default function Sidebar() {
  const [activeId, setActiveId] = useState<string>('unified-system');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

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

  useEffect(() => {
    const scrollContainer = document.querySelector('[data-scroll-container]');
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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const activeIndex = navItems.findIndex(item => item.id === activeId);
  const totalFrameworks = navItems.length - 1;
  const currentFramework = activeIndex > 0 ? activeIndex : 0;
  const activeItem = navItems.find(item => item.id === activeId);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Mobile header */}
      <header className="lg:hidden fixed top-0 inset-x-0 z-50 h-14 bg-[#080808]/95 backdrop-blur-md border-b border-white/[0.06] flex items-center justify-between px-4 safe-top">
        <div className="min-w-0">
          <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500 leading-none">
            Cognitive
          </div>
          <div className="text-sm font-semibold text-white tracking-tight truncate">
            Architecture
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <span className="text-[10px] font-mono text-gray-600 hidden min-[400px]:inline">
            {Math.round(scrollProgress)}%
          </span>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="flex items-center justify-center w-10 h-10 rounded-lg border border-white/[0.08] bg-white/[0.03] text-gray-300 hover:text-white hover:bg-white/[0.06] transition-colors"
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-[60]">
          <button
            type="button"
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeMenu}
            aria-label="Close navigation menu"
          />
          <aside className="absolute top-0 right-0 h-full w-[min(100vw-3rem,20rem)] bg-[#080808] border-l border-white/[0.06] flex flex-col shadow-2xl">
            <div className="flex items-center justify-between px-4 py-4 border-b border-white/[0.06]">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500">Navigate</div>
                <div className="text-sm font-semibold text-white mt-0.5">{activeItem?.label}</div>
              </div>
              <button
                type="button"
                onClick={closeMenu}
                className="flex items-center justify-center w-9 h-9 rounded-lg border border-white/[0.08] text-gray-400 hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="px-4 py-3 border-b border-white/[0.04]">
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

            <nav className="flex-1 overflow-y-auto py-4">
              <NavList activeId={activeId} onNavigate={closeMenu} />
            </nav>

            <div className="px-4 py-3 border-t border-white/[0.06]">
              <div className="flex items-center justify-between">
                <div className="text-[10px] font-mono text-gray-700 uppercase tracking-widest">Section</div>
                <div className="text-[10px] font-mono text-gray-500">{currentFramework}/{totalFrameworks}</div>
              </div>
            </div>
          </aside>
        </div>
      )}

      {/* Mobile horizontal quick nav */}
      <nav
        className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-[#080808]/95 backdrop-blur-md border-t border-white/[0.06] safe-bottom"
        aria-label="Quick section navigation"
      >
        <div className="flex overflow-x-auto gap-1 px-3 py-2 scrollbar-none">
          {navItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`shrink-0 px-3 py-1.5 rounded-full text-[11px] font-mono uppercase tracking-wide transition-colors ${
                  isActive
                    ? 'bg-white/[0.08] text-white border border-white/[0.1]'
                    : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                {item.id === 'unified-system' ? 'System' : item.label.split(' ')[0]}
              </a>
            );
          })}
        </div>
      </nav>

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex w-60 h-[100dvh] sticky top-0 bg-[#080808] border-r border-white/[0.06] flex-col shrink-0 z-50">
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

        <nav className="flex-1 overflow-y-auto py-4">
          <NavList activeId={activeId} />
        </nav>

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

        <div className="px-5 py-3 border-t border-white/[0.06]">
          <div className="flex items-center gap-2 text-[10px] text-gray-700">
            <kbd>↑</kbd><kbd>↓</kbd>
            <span className="ml-1">scroll</span>
          </div>
        </div>
      </aside>
    </>
  );
}
