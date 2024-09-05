'use client'
import React from 'react';
import useStore from '@/store/dataPickerStore';


const RecurrenceOptions = () => {
  const { recurrencePattern, setRecurrencePattern } = useStore((state)=>({
    recurrencePattern:state.recurrencePattern,
    setRecurrencePattern:state.setRecurrencePattern,
  }));

  return (
    <div className="p-1 text-center">
      <h2 className="text-xl font-bold textGradient mb-1">Recurrence Options</h2>
      <select
        value={recurrencePattern || 'daily'}
        onChange={(e) => setRecurrencePattern(e.target.value)}
        className="p-2 border rounded-lg font-medium bg-slate-200"
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
    </div>
  );
};

export default RecurrenceOptions;
