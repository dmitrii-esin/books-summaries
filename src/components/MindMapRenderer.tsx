"use client";

import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

interface MindMapRendererProps {
  chart: string;
}

function getMermaidFontSize(width: number): string {
  if (width < 480) return '9px';
  if (width < 768) return '10px';
  if (width < 1024) return '11px';
  return '13px';
}

export default function MindMapRenderer({ chart }: MindMapRendererProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svgContent, setSvgContent] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [fontSize, setFontSize] = useState('13px');

  useEffect(() => {
    const updateFontSize = () => {
      setFontSize(getMermaidFontSize(window.innerWidth));
    };

    updateFontSize();
    window.addEventListener('resize', updateFontSize);
    return () => window.removeEventListener('resize', updateFontSize);
  }, []);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme: 'base',
      themeVariables: {
        primaryColor: '#141414',
        primaryTextColor: '#d1d5db',
        primaryBorderColor: '#333333',
        lineColor: '#444444',
        secondaryColor: '#1a1a1a',
        tertiaryColor: '#0d0d0d',
        fontFamily: 'var(--font-geist-mono), ui-monospace, monospace',
        fontSize,
      },
      securityLevel: 'loose',
      flowchart: {
        curve: 'basis',
        padding: 12,
        htmlLabels: true,
      },
    });
  }, [fontSize]);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    const renderChart = async () => {
      try {
        setError(null);
        const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
        const { svg } = await mermaid.render(id, chart);

        if (isMounted) {
          setSvgContent(svg);
          setLoading(false);
        }
      } catch (err: unknown) {
        console.error("Mermaid render error:", err);
        if (isMounted) {
          const errorMessage = err instanceof Error ? err.message : "Failed to render diagram.";
          setError(errorMessage);
          setLoading(false);
        }
      }
    };

    if (chart) {
      renderChart();
    }

    return () => {
      isMounted = false;
    };
  }, [chart, fontSize]);

  return (
    <div className="relative w-full min-h-[220px] sm:min-h-[280px] md:min-h-[340px] lg:min-h-[400px] flex items-center justify-center rounded-xl overflow-x-auto overflow-y-hidden touch-pan-x">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="flex items-center gap-3 text-gray-600 text-xs font-mono uppercase tracking-wider">
            <div className="w-4 h-4 border-2 border-gray-700 border-t-gray-400 rounded-full animate-spin" />
            Rendering
          </div>
        </div>
      )}
      {error ? (
        <div className="text-red-400/80 bg-red-950/30 p-4 sm:p-5 rounded-lg border border-red-900/30 max-w-lg mx-2">
          <div className="text-[10px] font-mono uppercase tracking-widest text-red-500/60 mb-2">
            Diagram Error
          </div>
          <pre className="text-xs whitespace-pre-wrap break-words font-mono text-red-300/70 leading-relaxed">{error}</pre>
        </div>
      ) : (
        <div
          ref={containerRef}
          className="mermaid-container w-full min-w-0 flex justify-center items-center p-2 sm:p-4"
          dangerouslySetInnerHTML={{ __html: svgContent }}
        />
      )}
    </div>
  );
}
