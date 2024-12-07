import React from 'react';
import { Droplets } from 'lucide-react';

interface HumidityDisplayProps {
  current: number;
  target: number;
}

export function HumidityDisplay({ current, target }: HumidityDisplayProps) {
  const isOptimal = Math.abs(current - target) <= 3;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Humidity</h2>
        <Droplets className={`w-6 h-6 ${isOptimal ? 'text-green-500' : 'text-red-500'}`} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Current:</span>
          <span className="text-2xl font-bold">{current}%</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Target:</span>
          <span className="text-lg text-gray-700">{target}%</span>
        </div>
      </div>
    </div>
  );
}