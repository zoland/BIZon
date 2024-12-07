import { useState, useEffect } from 'react';
import { formatTimeRemaining, calculateTimeRemaining } from '../utils/timeUtils';

export function useTimeRemaining(startTime: Date | null, duration: number) {
  const [timeLeft, setTimeLeft] = useState<string>('');

  useEffect(() => {
    const updateTimeLeft = () => {
      if (!startTime) {
        setTimeLeft('');
        return;
      }

      const remaining = calculateTimeRemaining(startTime, duration);
      setTimeLeft(formatTimeRemaining(remaining));
    };

    updateTimeLeft();
    const interval = setInterval(updateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, [startTime, duration]);

  return timeLeft;
}