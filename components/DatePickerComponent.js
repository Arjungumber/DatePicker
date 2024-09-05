"use client";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useStore from "@/store/dataPickerStore";

const DatePickerComponent = () => {
  const { startDate, endDate, setDateRange } = useStore((state) => ({
    startDate: state.startDate,
    endDate: state.endDate,
    setDateRange: state.setDateRange,
  }));
  const handleStartDateChange = (date) => {
    // checking if date is valid
    if (date && (endDate === null || date <= endDate)) {
      setDateRange(date, endDate); // update only startDate
    }
  };
  const handleEndDateChange = (date) => {
    // checking if date is valid
    if (date && (endDate === null || date <= endDate)) {
      setDateRange(startDate, date); // update only startDate
    }
  };
  return (
    <div className="p-2">
      <h2 className="text-xl font-bold mb-2 textGradient text-center">Select Dates</h2>
      <div className="flex gap-4 sm:justify-center sm:gap">
        <div className="">
          <label className="block text-sm font-medium text-gray-500 mb-2">
            Start Date :
          </label>
          <DatePicker
            className="border font-medium rounded-lg w-36 sm:w-40 bg-slate-200"
            showIcon
            toggleCalendarOnIconClick
            selected={startDate}
            onChange={(date) => handleStartDateChange(date)}
          />
        </div>
        <div className="">
          <label className="block text-sm font-medium text-gray-500 mb-2">
            End Date :
          </label>
          <DatePicker
            className="border font-medium rounded-lg w-36 md:w-40 bg-slate-200"
            showIcon
            toggleCalendarOnIconClick
            selected={endDate}
            onChange={(date) => handleEndDateChange(date)}
          />
        </div>
      </div>

    </div>
  );
};

export default DatePickerComponent;
