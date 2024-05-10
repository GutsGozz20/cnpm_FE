import React, { useState, useEffect } from 'react';

const TestApp = () => {
  const [expression, setExpression] = useState('1 + 6 ='); // Phép toán
  const [answerState, setAnswer] = useState('0'); // Đáp án
  const [answerResult, setAnswerResult] = useState('Chưa trả lời'); // Kết quả
  const [history, setHistory] = useState([]); // Lịch sử phép tính

  const calculateResult = () => {
    try {
      const [leftOperand, operator, rightOperand] = expression.split(/[\+\-\*\/]/);
      if (isNaN(leftOperand) || isNaN(rightOperand)) {
        throw new Error('Biểu thức không hợp lệ');
      }
      const result = eval(`${leftOperand} ${operator} ${rightOperand}`);
      return result;
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  };

  const handleSubmit = () => {
    const result = calculateResult();
    if (result === null) {
      setAnswerResult('Lỗi phép tính!');
    } else {
      setAnswerResult(result === parseInt(answerState) ? 'Đúng' : 'Sai');
    }

    // Cập nhật lịch sử phép tính
    const newHistoryItem = {
      expression: expression,
      answer: answerState,
      result: result === parseInt(answerState) ? 'Đúng' : 'Sai',
    };
    setHistory([...history, newHistoryItem]);

    // Tạo phép tính ngẫu nhiên mới
    setExpression(generateRandomExpression());
    setAnswer('0'); // Đặt lại giá trị của input
  };

  const generateRandomExpression = () => {
    const operands = [Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1];
    const operators = ['+', '-', '*'];
    const randomOperator = operators[Math.floor(Math.random() * operators.length)];
    const expression = `${operands[0]} ${randomOperator} ${operands[1]} =`;
    return expression;
  };

  useEffect(() => {
    setExpression(generateRandomExpression()); // Tạo phép tính ngẫu nhiên khi khởi tạo app
  }, []);

  return (
    <div className="container mx-auto px-4 pb-24">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold text-black mb-4">Finger Math</h1>
        <p className="text-gray-600 mb-8">Tutorial Play</p>
      </div>

      <div className="flex flex-col items-center mb-8">
        <div className="flex items-center">
          <p className="text-2xl font-semibold text-black mr-4">{expression}</p>
          <div className="flex items-center bg-white rounded-md border border-gray-400 px-4 py-2">
            <input type="number" className="w-12 text-center" value={answerState} onChange={(e) => setAnswer(e.target.value)} />
          </div>
        </div>
        <div className="flex items-center mt-4">
          <p className="text-gray-600 mr-4">Score:</p>
          <p className="text-lg font-semibold text-gray-800">0/100</p>
        </div>
        <div className="flex items-center mt-4">
          <p className="text-gray-600 mr-4">Time:</p>
          <p className="text-lg font-semibold text-gray-800">178 s</p>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9,'D', 0 , 'C'].map((number) => (
              <button key={number} className="w-16 h-16 bg-gray-200 text-gray-800 font-bold rounded-md" onClick={() => number === 'C' ? setAnswer('0') : number === 'D' ? setExpression(expression.slice(0, -1)) : setAnswer(prev => prev === '0' ? number.toString() : prev + number)}>
                {number}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center mt-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md mr-4" onClick={handleSubmit}>Submit</button>
        <button className="bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded-md">Next</button>
      </div>
    </div>
  );
};

export default TestApp;
