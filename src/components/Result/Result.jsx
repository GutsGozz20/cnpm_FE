import React from 'react';

import { useNavigate } from 'react-router-dom';
const Result = () => {
  const navigate = useNavigate(); // Using useNavigate hook instead of useHistory

  const handleStartClick = () => {
        navigate('/');
    };
  return (
<div className="container mx-auto max-w-sm">
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-3xl font-bold text-gray-800">Finger Math</h1>
        <div className='flex justify-center items-center gap-4 mt-4'>
                <div className='group/item'>
                    <button className='w-max-content text-[30px] group-hover/item:translate-y-[-2px]'>Tutorial</button>
                    <div className='border-[3px] border-b border-black rounded-md invisible group-hover/item:visible'></div>
                </div>
                <div className='group/item'>
                    <button className='w-max-content text-[30px] group-hover/item:translate-y-[-2px]' >Play</button>
                    <div className='border-[3px] border-b border-black rounded-md invisible group-hover/item:visible'></div>
                </div>
            </div>
      </div>

      <div className="mt-16 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-gray-800">Congrats Cat</h2>
        <p className="mt-2 text-gray-600">You got 0/100</p>
      </div>

      <div className="mt-16 flex flex-col items-center " onClick={handleStartClick}>
        <p className="text-gray-600">Not enough to receive a reward</p>
        <button className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded">Finish</button>
      </div>
    </div>
  );
};

export default Result;
