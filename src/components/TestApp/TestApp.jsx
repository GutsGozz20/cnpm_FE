import React, { useState, useContext } from 'react';
import GlobalStateContext  from '../../GlobalStateContext';
import { createQuestion } from "../../helper/createQuestion";
import button from "../../asset/image/button.webp";


const TestApp = () => {
  const globalState = useContext(GlobalStateContext)

//   const [expression, setExpression] = useState('1 + 6 ='); // Phép toán 
//   const [answerState, setAnswer] = useState('0'); // Đáp án
//   const [answerResult, setAnswerResult] = useState('Chưa trả lời'); // Kết quả
//   const [history, setHistory] = useState([]); // Lịch sử phép tính
// // trạng thái của câu hỏi, tăng dần từ 0 -10, 
//   const [count, setCount] = useState(1)
//   const calculateResult = () => {
//     try {
//       const [leftOperand, operator, rightOperand] = expression.split(/[\+\-\*\/]/);
//       if (isNaN(leftOperand) || isNaN(rightOperand)) {
//         throw new Error('Biểu thức không hợp lệ');
//       }
//       const result = eval(`${leftOperand} ${operator} ${rightOperand}`);
//       return result;
//     } catch (error) {
//       console.error('Error:', error);
//       return null;
//     }
//   };

  const handleSubmit = () => {
    // Chekc phát coi hắn nhận chưa này, log cả 4 cái ra ma nhìn
    console.log(createQuestion())
    // const result = calculateResult();
    // if (result === null) {
    //   setAnswerResult('Lỗi phép tính!');
    // } else {
    //   setAnswerResult(result === parseInt(answerState) ? 'Đúng' : 'Sai');
    // }

    // // Cập nhật lịch sử phép tính
    // const newHistoryItem = {
    //   expression: expression,
    //   answer: answerState,
    //   result: result === parseInt(answerState) ? 'Đúng' : 'Sai',
    // };
    // setHistory([...history, newHistoryItem]);

    // // Tạo phép tính ngẫu nhiên mới
    // setExpression(generateRandomExpression());
    // setAnswer('0'); // Đặt lại giá trị của input
    // setCount(prev => prev + 1)
    // Set lại timer á
    // Hiểu chí Là hắn chạy thôi-ok ukm
    // Coi mấy cái nại dừ làm ok đi rồi t chỉ cho tiếp, làm đi
  };

  // const generateRandomExpression = () => {
  //   const operands = [Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1];
  //   const operators = ['+', '-', '*'];
  //   const randomOperator = operators[Math.floor(Math.random() * operators.length)];
  //   const expression = `${operands[0]} ${randomOperator} ${operands[1]} =`;
  //   return expression;
  // };

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
        <div className="flex items-center">
          <p className="text-2xl font-semibold text-black mr-4"></p>
          <div className="flex items-center bg-white rounded-md border border-gray-400 px-4 py-2">
            <input type="number" className="w-12 text-center"  />
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
              <button key={number} className="w-16 h-16 bg-gray-200 text-red-500 font-bold rounded-md text-lg md:text-xl lg:text-2xl">
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
            <span className='text-[20px] hover:text-red-600 font-semibold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>Next</span>
        </div>
      </div>
    </div>
  );
};

export default TestApp;

