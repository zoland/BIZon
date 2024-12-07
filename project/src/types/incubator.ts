export interface IncubatorState {
  temperature: number;
  humidity: number;
  eggRotationEnabled: boolean;
  lastRotation: Date;
  eggRotationStartTime: Date | null;
  daysRemaining: number;
  totalEggs: number;
  lightStatus: boolean;
  ventilationEnabled: boolean;
  ventilationStartTime: Date | null;
  ventilationDuration: number; // in minutes
  ventilationOffDuration: number; // in minutes
}

export interface IncubatorSettings {
  targetTemperature: number;
  targetHumidity: number;
  rotationInterval: number; // in hours
  rotationOffDuration: number; // in hours
  defaultVentilationDuration: number; // in minutes
  defaultVentilationOffDuration: number; // in minutes
}