'use client';
import React, { useEffect } from 'react';
import useStore from '@/store/dataPickerStore';
import MiniCalendar from './MiniCalendar';

const VisualPreview = () => {
    const { startDate, endDate, recurrencePattern,interval } = useStore((state) => ({
        startDate: state.startDate,
        endDate: state.endDate,
        recurrencePattern: state.recurrencePattern,
        interval:state.interval || 1
      }));

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold textGradient text-center mb-2">Recurrence Preview</h2>
      <MiniCalendar
        startDate={startDate}
        endDate={endDate}
        recurrencePattern={recurrencePattern}
        interval={interval}
      />
    </div>
  );
};

export default VisualPreview;
