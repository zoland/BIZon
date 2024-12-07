export function formatTimeRemaining(milliseconds: number): string {
  if (milliseconds <= 0) return 'Complete';
  
  const minutes = Math.floor(milliseconds / 60000);
  const seconds = Math.floor((milliseconds % 60000) / 1000);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

export function calculateTimeRemaining(startTime: Date | null, duration: number): number {
  if (!startTime) return 0;
  
  const endTime = new Date(startTime.getTime() + duration * 60000);
  const now = new Date();
  return Math.max(0, endTime.getTime() - now.getTime());
}