
import React, { useState, createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './page/HomePage';
import SignInPage from './page/SignInPage';
import SignUpPage from './page/SignUpPage';
import TestAppPage from './page/TestAppPage';
import ResultPage from './page/ResultPage';

// Tạo Context
export const AppContext = createContext();

const App = () => {
  // Xử lí state global ở đây, truyền vô những cái con

  // const homepageProps = {
  //   operatorCount,
  //   setOperatorCount,
  //   selectedOperator,
  //   setSelectedOperator,
  //   digitNumber,
  //   setDigitNumber,
  // };

  // const  testAppPageProps = {
  //   operatorCount,
  //   selectedOperator,
  //   digitNumber
  // };
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/test" element={<TestAppPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
