import moment from 'moment';

export function formatTime(minutes: number | null): string {
  if (!minutes) {
    return 'null';
  }
  const hours: number = Math.floor(minutes / 60);
  const remainingMinutes: number = minutes % 60;

  const formattedTime = `${hours}h ${remainingMinutes}m`;
  return formattedTime;
}

export const formatDate = (date: string | null): string => {
  if (!date) {
    return 'null';
  }

  return moment(date).format('MMMM, Do YYYY');
};
