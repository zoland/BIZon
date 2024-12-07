import React from 'react';
import { Timer, Egg } from 'lucide-react';

interface IncubatorStatusProps {
  daysRemaining: number;
  totalEggs: number;
}

export function IncubatorStatus({ daysRemaining, totalEggs }: IncubatorStatusProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Timer className="w-6 h-6 text-blue-500 mr-2" />
            <span className="text-gray-600">Days Left</span>
          </div>
          <span className="text-2xl font-bold text-gray-800">{daysRemaining}</span>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <Egg className="w-6 h-6 text-blue-500 mr-2" />
            <span className="text-gray-600">Total Eggs</span>
          </div>
          <span className="text-2xl font-bold text-gray-800">{totalEggs}</span>
        </div>
      </div>
    </div>
  );
}