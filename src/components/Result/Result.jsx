import React from 'react';
import button from "../../asset/image/button.webp";
import { useLocation, useNavigate } from 'react-router-dom';
const Result = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {score} = location.state;

  const handleStartClick = () => {
        navigate('/');
    };
  return (
<div className="container mx-auto max-w-sm">
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-5xl font-bold text-gray-800">Finger Math</h1>
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

      <div className="mt-64 flex flex-col items-center">
        <h2 className="text-5xl font-bold text-gray-800 mb-5">Congrats You</h2>
        <p className="text-5xl font-bold text-gray-800">You got {score}/100</p>
      </div>

      <div className="mt-32 flex flex-col items-center " onClick={handleStartClick}>
        <p className="text-gray-900 text-2xl mb-5">Not enough to receive a reward</p>
        <div className='relative'>
            <img src={button} alt="" className='w-[200px] h-[48px]'/>
            <span className='text-[20px] hover:text-red-600 font-semibold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>Finish</span>
        </div>
                   

      </div>
    </div>
  );
};

export default Result;
