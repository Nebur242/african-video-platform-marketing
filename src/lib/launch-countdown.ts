export const LAUNCH_TARGET = new Date("2026-05-01T08:00:00Z");

export type TimeRemaining = {
  complete: boolean;
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

export function getTimeRemaining(
  target: Date,
  now = Date.now(),
): TimeRemaining {
  const difference = target.getTime() - now;

  if (difference <= 0) {
    return {
      complete: true,
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };
  }

  const totalSeconds = Math.floor(difference / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    complete: false,
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
}
