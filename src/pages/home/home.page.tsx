import { useState } from 'react';

import { useInterval } from '@/hooks/use-interval';

export const HomePage = () => {
  const [counter, setCounter] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useInterval(() => setCounter(counter + 1), isRunning ? 1000 : undefined);

  const handleStart = () => {
    setIsRunning((prevState) => !prevState);
  };

  const handleReset = () => {
    setIsRunning(false);
    setCounter(0);
  };

  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content flex-col lg:flex-row'>
        <img
          src='https://placeimg.com/260/400/arch'
          className='max-w-sm rounded-lg shadow-2xl'
          alt='random image'
        />
        <div className='space-y-6'>
          <h1 className='text-5xl font-bold'>Counter</h1>
          <p className='text-5xl font-bold'>{counter}</p>
          <div className='space-x-2'>
            <button className='btn btn-secondary' onClick={handleReset}>
              Reset
            </button>
            <button className='btn btn-primary' onClick={handleStart}>
              {isRunning ? 'Stop' : 'Start'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
