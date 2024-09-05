'use client'
import React from 'react';
import useStore from '@/store/dataPickerStore';

const Interval = () => {
    const { interval, setInterval } = useStore((state)=>({
        interval:state.interval,
        setInterval:state.setInterval,
      }));
  return (
    <div className='flex flex-col items-center mt-2'>
        <label className='text-xl font-bold textGradient mb-1' htmlFor="interval">Interval</label>
       <input className='block w-24 bg-slate-200 p-2 font-medium rounded-lg' type="number" value={interval} onChange={(e) => setInterval(e.target.value)}/>
    </div>
  )
}

export default Interval