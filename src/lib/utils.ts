export function convertTime(ms: number): string {

  let days: number = Math.floor(ms / 1440);
  let hours: number = Math.floor(ms / 60);
  let mins: number = ms % 60;
  let diff: string = '';

  if (days > 0) {
    return days === 1 ? `${days} day` : `${days} days`;
  } else if (hours > 0) {
    return hours === 1 ? `${hours} hour` : `${hours} hours`
  }

  return mins === 1 ? `${mins} minute` : `${mins} minutes`
}