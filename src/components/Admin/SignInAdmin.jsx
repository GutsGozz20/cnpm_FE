import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import background from "../../asset/image/LOGOLEFT.png";
import logoKT from "../../asset/image/logo-kt.png";
import isEmpty from "validator/lib/isEmpty";

const SignInAdmin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('dien20@gmail.com');
    const [password, setPassword] = useState('dien20');
    const [showPassword, setShowPassword] = useState(false);
    const [validationMsg, setValidationMsg] = useState('');

    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const isValid = validateAll();
        if (!isValid) return;

        try {
            if (email === 'dien20@gmail.com' && password === 'dien20') {
                navigate('/admin/dashboard');
            } else {
                setValidationMsg('Invalid email or password');
            }
        } catch (error) {
            console.error('An error occurred:', error);
            setValidationMsg('An error occurred. Please try again.');
        }
    };

    const validateAll = () => {
        const msg = {};
        if (isEmpty(email)) {
            msg.email = "Please input your Email";
        }
        if (isEmpty(password)) {
            msg.password = "Please input your Password";
        }
        setValidationMsg(msg);
        if (Object.keys(msg).length > 0) return false;
        return true;
    };

    return (
        <div className="min-h-screen flex justify-end items-center" style={{ background: `url(${background}) no-repeat `, backgroundSize: 'cover' }}>
            <form onSubmit={handleSubmit} noValidate className="bg-white shadow-md rounded-lg px-12 py-10 mr-[70px]">

                <div className="text-center">
                    <img src={logoKT} alt="" className="w-30 h-auto" />
                    <h1 className="text-3xl font-bold text-center mt-8 mb-8 animate-pulse">Admin Sign In</h1>
                </div>
                <div className="mb-6 relative">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder='your-email@gmail.com'
                    />
                </div>
                <div className="mb-6 relative">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Password
                    </label>
                    <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={handlePasswordChange}
                        required
                        className="appearance-none border rounded w-full py-2 px-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder='*****'
                    />
                    <button
                        type="button"
                        className="absolute inset-y-0 right-0 px-3 py-2"
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-gray-700"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 12l2-2m0 0l2-2m-2 2l2 2m-2-2l2 2m7 4l-7-4-7 4v-2l7-4 7 4v2z"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-9 w-9 text-gray-500 mt-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 17l5-5-5-5M6 12h12"
                                />
                            </svg>
                        )}
                    </button>
                </div>
                <div className="block text-red-700 text-sm mb-2 ">
                    <p className='text-red-400 text-xs italic'>{
                    validationMsg}</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  focus:outline-none focus:shadow-outline">
                            Sign In
                        </button>
                    </div>
                    
                </form>
            </div>
        );
    };
    
    export default SignInAdmin;
    