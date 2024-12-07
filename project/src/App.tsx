import React, { useState } from 'react';
import { TemperatureDisplay } from './components/TemperatureDisplay';
import { HumidityDisplay } from './components/HumidityDisplay';
import { EggRotationControl } from './components/EggRotationControl';
import { IncubatorStatus } from './components/IncubatorStatus';
import { LightControl } from './components/LightControl';
import { VentilationControl } from './components/VentilationControl';
import type { IncubatorState, IncubatorSettings } from './types/incubator';

function App() {
  const [settings] = useState<IncubatorSettings>({
    targetTemperature: 37.5,
    targetHumidity: 55,
    rotationInterval: 6,
    rotationOffDuration: 6, // Added to match the on duration
    defaultVentilationDuration: 10,
    defaultVentilationOffDuration: 30,
  });

  const [state, setState] = useState<IncubatorState>({
    temperature: 37.3,
    humidity: 54,
    eggRotationEnabled: true,
    lastRotation: new Date(),
    eggRotationStartTime: new Date(),
    daysRemaining: 18,
    totalEggs: 12,
    lightStatus: false,
    ventilationEnabled: false,
    ventilationStartTime: null,
    ventilationDuration: settings.defaultVentilationDuration,
    ventilationOffDuration: settings.defaultVentilationOffDuration,
  });

  const handleRotationToggle = () => {
    setState(prev => ({
      ...prev,
      eggRotationEnabled: !prev.eggRotationEnabled,
      eggRotationStartTime: new Date(),
    }));
  };

  const handleManualRotation = () => {
    setState(prev => ({
      ...prev,
      lastRotation: new Date(),
      eggRotationStartTime: new Date(),
    }));
  };

  const handleLightToggle = () => {
    setState(prev => ({
      ...prev,
      lightStatus: !prev.lightStatus,
    }));
  };

  const handleVentilationToggle = () => {
    setState(prev => ({
      ...prev,
      ventilationEnabled: !prev.ventilationEnabled,
      ventilationStartTime: new Date(),
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Incubator Control Panel
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TemperatureDisplay
            current={state.temperature}
            target={settings.targetTemperature}
          />
          <HumidityDisplay
            current={state.humidity}
            target={settings.targetHumidity}
          />
          <EggRotationControl
            enabled={state.eggRotationEnabled}
            lastRotation={state.lastRotation}
            startTime={state.eggRotationStartTime}
            interval={settings.rotationInterval}
            offInterval={settings.rotationOffDuration}
            onToggle={handleRotationToggle}
            onManualRotate={handleManualRotation}
          />
          <LightControl
            isOn={state.lightStatus}
            onToggle={handleLightToggle}
          />
          <VentilationControl
            enabled={state.ventilationEnabled}
            startTime={state.ventilationStartTime}
            duration={state.ventilationDuration}
            offDuration={state.ventilationOffDuration}
            onToggle={handleVentilationToggle}
          />
        </div>
        
        <div className="mt-6">
          <IncubatorStatus
            daysRemaining={state.daysRemaining}
            totalEggs={state.totalEggs}
          />
        </div>
      </div>
    </div>
  );
}

export default App;