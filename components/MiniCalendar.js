import React from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isToday,
  isSameDay,
  isValid,
} from "date-fns";
import { generateRecurringDates } from "../utils/recurrenceUtils";

const MiniCalendar = ({ startDate, endDate, recurrencePattern, interval }) => {
  // Validate startDate and endDate
  if (!isValid(startDate)) {
    console.error("Invalid startDate:", startDate);
    return <div className="p-4">Invalid start date</div>;
  }

  if (endDate && !isValid(endDate)) {
    console.error("Invalid endDate:", endDate);
    return <div className="p-4">Invalid end date</div>;
  }

  const monthStart = startOfMonth(startDate);
  const monthEnd = endOfMonth(startDate);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  // Generate recurring dates
  const recurringDates = generateRecurringDates(
    startDate,
    endDate,
    recurrencePattern,
    interval
  );

  return (
    <div className="p-2 border rounded w-90 lg:w-96 sm:mx-auto">
      <h3 className="text-lg font-bold text-slate-600 text-center">{format(startDate, "MMMM yyyy")}</h3>
      <div className="grid grid-cols-7 gap-1 mt-2 text-center">
        {daysInMonth.map((day) => (
          <div
            key={day}
            className={`p-1 border rounded ${
              isToday(day) ? "bg-blue-300" : ""
            } ${
              recurringDates.some((date) => isSameDay(date, day))
                ? "bg-red-300"
                : ""
            }`}
          >
            {format(day, "d")}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiniCalendar;
