"use client";

import React, { useState } from 'react';

export default function ProtocolTracker() {
  const [log, setLog] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logged input:", log);
    setLog('');
    // TODO: Connect to Supabase when MCP is available
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-5 mb-6 shadow-sm">
      <h2 className="text-lg font-semibold text-white mb-3">Daily Protocol Log</h2>
      <form onSubmit={handleSubmit} className="flex gap-3">
        <input 
          type="text"
          value={log}
          onChange={(e) => setLog(e.target.value)}
          placeholder="Log your cognitive state or action..."
          className="flex-1 bg-gray-950 border border-gray-700 rounded-lg px-4 py-2 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
        />
        <button type="submit" className="px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
          Commit Log
        </button>
      </form>
    </div>
  );
}
