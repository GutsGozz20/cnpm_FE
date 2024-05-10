import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../router/userRouter';
import background from "../../asset/image/LOGOLEFT.png";
import logoKT from "../../asset/image/logo-kt.png";

const SignIn = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState(false);

    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    const handleSubmit = async(event) => {
      event.preventDefault();
      try {
        const {data} = await axios.post(login, {email, password});
        console.log(data);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    };

    return (
        <div className="min-h-screen flex justify-end items-center" style={{ background: `url(${background}) no-repeat `, backgroundSize: 'cover' }}>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg px-12 py-10 mr-[30px] ">
                <div className="text-center">
                    <img src={logoKT} alt="" className="w-30 h-auto" />
                    <h1 className="text-3xl font-bold text-center mt-8 mb-8 animate-pulse">Sign In FingerMath</h1>
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
                {message && <p>Mật khẩu hoặc email sai</p>}
                <div className="flex items-center justify-between">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Sign In
                    </button>
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                        Forgot Password?
                    </a>
                </div>
                <div className="block text-gray-700 text-sm font-bold mt-6 mb-2">
                    <p>Don't have an account? <a href="/signup" className="text-blue-500 hover:text-blue-800">SignUp</a></p>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
