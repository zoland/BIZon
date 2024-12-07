import React from 'react';
import { Thermometer } from 'lucide-react';

interface TemperatureDisplayProps {
  current: number;
  target: number;
}

export function TemperatureDisplay({ current, target }: TemperatureDisplayProps) {
  const isOptimal = Math.abs(current - target) <= 0.5;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Temperature</h2>
        <Thermometer className={`w-6 h-6 ${isOptimal ? 'text-green-500' : 'text-red-500'}`} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Current:</span>
          <span className="text-2xl font-bold">{current.toFixed(1)}°C</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Target:</span>
          <span className="text-lg text-gray-700">{target.toFixed(1)}°C</span>
        </div>
      </div>
    </div>
  );
}