import React, { useState, useContext } from 'react';
import GlobalStateContext  from '../../GlobalStateContext';
import { createQuestion } from "../../helper/createQuestion";
import button from "../../asset/image/button.webp";

const TestApp = () => {
  const globalState = useContext(GlobalStateContext)
  const[currentQuestion, setCurrentQuestion] = useState('');
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [display, setDisplay] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [count, setCount] = useState('1');

    // Hiển thị câu hỏi mặc định khi component được render
    useState(() => {
      const { question } = createQuestion(globalState.operatorCount, globalState.selectedOperator, globalState.digitNumber);
      setCurrentQuestion(question );
      setDisplay(question + ' = ');
    }, [count]);

  const handleNumberClick = (number) => {
    setInputValue(prevValue => prevValue + number);
  };


  const handleSubmit = () => {
    // Chekc phát coi hắn nhận chưa này, log cả 4 cái ra ma nhìn
   // console.log(createQuestion(globalState.operatorCount, globalState.selectedOperator, globalState.digitNumber))
   const{question,answer} = createQuestion(globalState.operatorCount, globalState.selectedOperator, globalState.digitNumber)
   setCurrentQuestion(question);
   setCurrentQuestion(answer);
   setDisplay(`${question} = ${answer}`);
  };
  const handleNext = () => {
    // Khi ấn next, tạo câu hỏi mới và hiển thị
    const { question} = createQuestion(globalState.operatorCount, globalState.selectedOperator, globalState.digitNumber);
    setCurrentQuestion(question);
    setDisplay(question + ' =');
    setCount(prevCount => prevCount + 1); // tăng chỉ số câu hỏi 
    // Đặt lại giá trị của input nếu cần
    setInputValue('');
  };

 
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTime((prevTime) => {
  //       if (prevTime > 0) {
  //         return prevTime - 1;
  //       } else {
  //         clearInterval(interval);
  //         return 0;
  //       }
  //     });
  //   }, 1000);
  //   return () => clearInterval(interval);
  //   // Khi câu hỏi thay đỏi thì set lại cái time nên m truyền cái count vô đây
  //   // Ví dụ nha
  // }, [count]);



  return (
    <div className="container mx-auto px-4 pb-24">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-semibold text-black mb-4">Finger Math</h1>
        <p className="text-3xl font-semibold text-black mb-8">Tutorial Play</p>
      </div>


    <div className="container mx-auto">
      <div className="flex flex-col items-center mb-8">
      {/* <p className='text-2xl text-black mb-4'>{currentQuestion}</p> */}
        <p className='text-2xl text-black mb-4'>{display}</p>
        <p className="text-2xl font-semibold text-black mb-4"> {currentAnswer}</p>
        <div className="flex items-center">
          <p className="text-2xl font-semibold text-black mr-4"></p>
          <div className="flex items-center bg-white rounded-md border border-gray-400 px-4 py-2">
              <input type="number" className="w-12 text-center" value={inputValue}   />
          </div>
        </div>
        <div className="flex items-center mt-4 space-x-4">
        <div className="flex items-center mt-4">
          <p className="text-lg font-bold text-gray-800 mr-4">Score:</p>
          <p className="text-lg font-semibold text-gray-800">0/100</p>
        </div>
        <div className="flex items-center mt-4">
          <p className="text-lg font-bold text-gray-800 mr-4">Time:</p>
          <p className="text-lg font-semibold text-gray-800">{globalState.time} s</p>
        </div>

        </div>
      </div>
    </div>

      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 'D', 0, 'C'].map((number) => (
              <button key={number} className="w-16 h-16 bg-gray-200 text-red-500 font-bold rounded-md text-lg md:text-xl lg:text-2xl" onClick={() => handleNumberClick(number)}>
                {number}
              </button>
            ))}
          </div>
        </div>
      </div>


      <div className="flex flex-wrap justify-center mt-16 ">
        <div className='relative mr-8'>
            <img src={button} alt="" className='w-[100px] h-[48px] '/>
            <span className='text-[20px]  hover:text-red-600 font-semibold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' onClick={handleSubmit}>Submit</span>
        </div>
        
        <div className='relative'>
            <img src={button} alt="" className='w-[100px] h-[48px]  '/>
            <span className='text-[20px] hover:text-red-600 font-semibold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' onClick={handleNext}>Next</span>
        </div>
      </div>
    </div>
  );
};

export default TestApp;

