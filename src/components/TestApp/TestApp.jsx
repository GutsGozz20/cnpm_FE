import React, { useState, useContext ,useEffect } from 'react';
import * as math from "mathjs"
import GlobalStateContext  from '../../GlobalStateContext';
import { createQuestion } from "../../helper/createQuestion";
import button from "../../asset/image/button.webp";
import { useNavigate } from 'react-router-dom';

const TestApp = () => {
  const navigate = useNavigate();
  const globalState = useContext(GlobalStateContext)
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(1);
  const [score, setScore] = useState(0);
  const [questionAnswered, setQuestionAnswered] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [timer, setTimer] = useState(Number(globalState.time));
  // const [updateCount, setUpdateCount] = useState(0); 
  const [showModal, setShowModal] = useState(false);

  const handleNumberClick = (number) => {
    setInputValue(prevValue => prevValue + number);
  };


  const handleSubmit = () => {
    if (!inputValue) {
      setShowModal(true);
      return;
    }
    if(isSubmit) return;
    const expression = globalState.currentQuestion.split("=")
    const evaluateExpression = math.evaluate(expression[0])

    if (evaluateExpression === Number(inputValue)) {
      console.log("Done!!")
      if(!questionAnswered){
        setScore(prevScore => prevScore + 10);
        setCurrentAnswer(evaluateExpression);
      }
    } else {
       console.log("Ngu dốt!!")
       setCurrentAnswer(evaluateExpression);
    }
    // setCurrentAnswer(evaluateExpression);
    setIsSubmit(true);
  };
  
  const handleNext = () => {
    if (!inputValue) {
      setShowModal(true);
      // setTimer(timer);
      // setTimer(Number(globalState.time));
      return;
    }

    if(count === 10){
      navigate('/result',{state: {score}});
    }else{
      globalState.setCurrentQuestion(createQuestion(globalState.operatorCount, globalState.selectedOperator, globalState.digitNumber));
      setCurrentAnswer('');
      setCount(prevCount => prevCount + 1); 
      setInputValue('');
      setQuestionAnswered(false);
      setIsSubmit(false);
      setTimer(Number(globalState.time));
    }
  };

  const handleSaveChanges = () => {
    if (!inputValue) {
      // setShowModal(false);
      handleNext();
      // return;
    }
    setCurrentAnswer(true);
    setIsSubmit(true);
    setShowModal(false);
  };

  // Timer.
  useEffect(() => {
    const countTimer = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    const outTimer = setTimeout(() => {
      handleNext();
    }, globalState.time * 1000);

    // Cleanup Function
    return () => {
      clearInterval(countTimer);
      clearTimeout(outTimer);
    };
  }, [count]);


  return (
    <div className="container mx-auto px-4 pb-24">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-semibold text-black mb-4">Finger Math</h1>
        <p className="text-3xl font-semibold text-black">Tutorial Play</p>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-2xl font-semibold text-black"> Question No {count}</h1>
          <div className='flex items-center'>
            <p className='text-2xl font-bold text-gray-800 mb-0 mt-4 mr-4'>{globalState.currentQuestion}</p>
            <p className="text-2xl font-semibold text-black mb-0 mt-4"> {currentAnswer}</p>
          </div>

        <div className="flex items-center">
          <p className="text-2xl font-semibold text-black mr-4"></p>
          <div className="flex items-center bg-white rounded-md border border-gray-400 px-4 py-2">
              <input type="number" className="w-12 text-center" value={inputValue}  readOnly/>
          </div>
        </div>
        <div className="flex items-center mt-4 space-x-4">
        <div className="flex items-center mt-4">
          <p className="text-lg font-bold text-gray-800 mr-4">Score:</p>
          <p className="text-lg font-semibold text-gray-800">{score}/100</p>
        </div>
        <div className="flex items-center mt-4">
          <p className="text-lg font-bold text-gray-800 mr-4">Time:</p>
          <p className="text-lg font-semibold text-gray-800">{timer} s</p>
        </div>

        </div>
      </div>
    </div>

      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          <div className="grid grid-cols-3 gap-4 text-2xl ">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 'D', 0, 'C'].map((number) => (
              <button 
                key={number} 
                className=" rounded-full w-20 h-20 bg-gray-200 text-red-500 font-bold text-lg md:text-xl lg:text-2xl"
                onClick={() => handleNumberClick(number)}
                //  disabled={isSubmit}
                >
                {number}
              </button>
            ))}
          </div>
        </div>
      </div>


      <div className="flex flex-wrap justify-center mt-8 ">
        <div className='relative mr-8' disabled={isSubmit} onClick ={() => handleSubmit()}>
            <img src={button} alt="" className='w-[100px] h-[48px] ' />
            <button className='text-[20px]  hover:text-red-600 font-semibold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' >Submit</button>
        </div>
        
        <div className='relative' onClick={handleNext}>
            <img src={button} alt="" className='w-[100px] h-[48px]  '/>
            <span className='text-[20px] hover:text-red-600 font-semibold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' >
                Next
            </span>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg max-w-md w-full">
          <div className="flex justify-between items-center p-4 border-b">
            <h5 className="text-2xl font-bold">Submit Record</h5>
            <button className="text-black text-2xl font-bold hover:bg-red-500 w-10 h-10" onClick={() => setShowModal(false)} aria-label="Close">
              ×
            </button>
          </div>
          <div className="p-4 mb-4">
            <h5 className='mb-4 font-bold text-xl text-center'>Are you sure to next without submit?</h5>
            <p className='font-medium text-lg text-center'>This action cannot be Undone</p>
          </div>
          <div className="flex justify-center p-4 border-t">
            <button
              type="button"
              className="bg-red-500 text-white px-6 py-3 rounded mr-8 hover:bg-sky-700"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
            <button
              type="button"
              className="bg-yellow-400 text-white px-4 py-2 rounded hover:bg-green-700"
              onClick={handleSaveChanges}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
      
      )}

    </div>
  );
};

export default TestApp;

