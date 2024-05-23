
import React, { useState, createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './page/HomePage';
import SignInPage from './page/SignInPage';
import SignUpPage from './page/SignUpPage';
import TestAppPage from './page/TestAppPage';
import ResultPage from './page/ResultPage';
import AdminPage from './page/AdminPage';
import SignInAdmin from './components/Admin/SignInAdmin';
import AdminDashboard from './components/Admin/AdminDashboard';
import Dashboard from './components/Admin/Dashboard';
import Single from './components/Single/Single';
import { NearMe } from '@mui/icons-material';
import New from './components/new/New';
import CustomerUser from './components/customersUser/CutomerUser';
import { userInputs } from "./formData";

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
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/test" element={<TestAppPage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/admin/signin" element={<AdminPage />} />
          <Route path="/admin/signin" element={<SignInAdmin />} />
          {/* <Route path="/admin/dashboard" element={<AdminDashboard />} /> */}
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/users/:userId" element={<Single />} />
          <Route path="/users/:userId/new" element={<New inputs={userInputs} title="Add New User" />} />
          <Route path='/users/:userId' element={<Single />} />
          <Route path='/users' element={<CustomerUser />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
