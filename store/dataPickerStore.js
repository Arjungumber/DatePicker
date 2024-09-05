import {create} from 'zustand'
// const now = new Date();

const useStore = create((set) => ({
    startDate: null,
    endDate: null,
    recurrencePattern: 'daily',
    interval:1,
    setDateRange: (startDate, endDate) => set({ startDate, endDate }),
    setRecurrencePattern: (pattern) => set({ recurrencePattern: pattern }),
    setInterval: (interval) => set({ interval }),
}));

export default useStore;
