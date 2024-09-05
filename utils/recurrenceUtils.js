import { eachDayOfInterval, addDays, addWeeks, addMonths, addYears, isValid } from 'date-fns';

export const generateRecurringDates = (startDate, endDate, pattern, interval) => {
  if (!isValid(startDate)) return [];

  let dates = [];
  let currentDate = new Date(startDate);

  while ((isValid(endDate) && currentDate <= endDate)) {
    dates.push(new Date(currentDate));

    switch (pattern) {
      case 'daily':
        currentDate = addDays(currentDate, interval);
        break;
      case 'weekly':
        currentDate = addWeeks(currentDate, interval);
        break;
      case 'monthly':
        currentDate = addMonths(currentDate, interval);
        break;
      case 'yearly':
        currentDate = addYears(currentDate, interval);
        break;
      default:
        console.error('Unknown recurrence pattern:', pattern);
        return [];
    }
  }

  return dates.filter(date => isValid(date)); // Filter out invalid dates
};
