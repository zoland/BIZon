import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface LightControlProps {
  isOn: boolean;
  onToggle: () => void;
}

export function LightControl({ isOn, onToggle }: LightControlProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Light Control</h2>
        {isOn ? (
          <Sun className="w-6 h-6 text-yellow-500" />
        ) : (
          <Moon className="w-6 h-6 text-gray-600" />
        )}
      </div>
      <button
        onClick={onToggle}
        className={`w-full py-3 px-4 rounded-md transition-colors ${
          isOn
            ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
            : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
        }`}
      >
        {isOn ? 'Turn Off Light' : 'Turn On Light'}
      </button>
    </div>
  );
}