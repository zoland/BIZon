import React from 'react';
import { RotateCw } from 'lucide-react';
import { useTimeRemaining } from '../hooks/useTimeRemaining';

interface EggRotationControlProps {
  enabled: boolean;
  lastRotation: Date;
  startTime: Date | null;
  interval: number;
  offInterval: number;
  onToggle: () => void;
  onManualRotate: () => void;
}

export function EggRotationControl({
  enabled,
  lastRotation,
  startTime,
  interval,
  offInterval,
  onToggle,
  onManualRotate,
}: EggRotationControlProps) {
  const timeLeft = useTimeRemaining(startTime, (enabled ? interval : offInterval) * 60); // Convert hours to minutes

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Egg Rotation</h2>
        <RotateCw className={`w-6 h-6 ${enabled ? 'text-green-500' : 'text-gray-400'}`} />
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Auto Rotation:</span>
          <div className="flex items-center space-x-2">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={enabled}
                onChange={onToggle}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
            <span className={`text-sm font-medium ${enabled ? 'text-green-600' : 'text-gray-600'}`}>
              {enabled ? 'ON' : 'OFF'}
            </span>
          </div>
        </div>

        {startTime && (
          <div className="flex items-center justify-between">
            <span className="text-gray-600">
              Time until {enabled ? 'rotation' : 'next cycle'}:
            </span>
            <span className={`text-lg font-semibold ${
              enabled ? 'text-green-600' : 'text-blue-600'
            }`}>
              {timeLeft}
            </span>
          </div>
        )}

        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>Last rotation:</span>
          <span>{lastRotation.toLocaleTimeString()}</span>
        </div>

        <button
          onClick={onManualRotate}
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Rotate Now
        </button>
      </div>
    </div>
  );
}