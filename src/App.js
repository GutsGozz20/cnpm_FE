import React,{Fragment} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route,Switch  } from 'react-router-dom';
import HomePage from './page/HomePage';
import SignInPage from './page/SignInPage';
// import SignIn from './components/SignIn/SignIn';
import SignUpPage from './page/SignUpPage';
import TestAppPage from './page/TestAppPage';
import ResultPage from './page/ResultPage';


const App = () =>{
  return(
    <BrowserRouter>
    <div className="app">
      <Routes> 
        <Route path="/" element={<HomePage/>} />
        <Route path="/signin" element={<SignInPage/>} />
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/" component={HomePage} />
        <Route path="/test" element = {<TestAppPage/>} />
        <Route path="/result" element = {<ResultPage/>}/>
      </Routes>
    </div>
  </BrowserRouter>
  )
}
export default App;
