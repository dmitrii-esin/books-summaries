"use client";

import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

interface MindMapRendererProps {
  chart: string;
}

export default function MindMapRenderer({ chart }: MindMapRendererProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svgContent, setSvgContent] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

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
        fontSize: '13px',
      },
      securityLevel: 'loose',
      flowchart: {
        curve: 'basis',
        padding: 20,
      },
    });
  }, []);

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
  }, [chart]);

  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center rounded-xl overflow-auto">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="flex items-center gap-3 text-gray-600 text-xs font-mono uppercase tracking-wider">
            <div className="w-4 h-4 border-2 border-gray-700 border-t-gray-400 rounded-full animate-spin" />
            Rendering
          </div>
        </div>
      )}
      {error ? (
        <div className="text-red-400/80 bg-red-950/30 p-5 rounded-lg border border-red-900/30 max-w-lg">
          <div className="text-[10px] font-mono uppercase tracking-widest text-red-500/60 mb-2">
            Diagram Error
          </div>
          <pre className="text-xs whitespace-pre-wrap font-mono text-red-300/70 leading-relaxed">{error}</pre>
        </div>
      ) : (
        <div 
          ref={containerRef}
          className="mermaid-container w-full h-full flex justify-center items-center p-4"
          dangerouslySetInnerHTML={{ __html: svgContent }} 
        />
      )}
    </div>
  );
}
