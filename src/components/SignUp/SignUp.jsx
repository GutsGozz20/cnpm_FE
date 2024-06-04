import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { register } from '../../router/userRouter';import background from "../../asset/image/LOGOLEFT.png"
import logoKT from "../../asset/image/logo-kt.png"


const SignUp = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);
    const [message, setMessage] = useState(false);

    const handleNameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const value = {
            username,
            email,
            password,
        }
        try {
            const { data } = await axios.post(register, value);
            console.log(data);
            setIsRegistered(true);
            setMessage(false);
            navigate('/signin');
        } catch (error) {
            console.log(error);
            if (error.response && error.response.status === 409) {
                setMessage(true);
            }
        }
        // cái ni của user, admin cái khác
    };

    return (
        <div className="min-h-screen flex justify-end items-center" style={{ background: `url(${background}) no-repeat `, backgroundSize: 'cover'}}>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg px-12 py-10 mr-[30px] ">
            <div className="text-center">
                <img src={logoKT} alt="" className="w-30 h-auto" />
                <h1 className="text-3xl font-bold text-center mt-8 mb-8 animate-pulse">Sign Up FingerMath</h1>
            </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={username}
                        onChange={handleNameChange}
                        required
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder='your-name'
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder='your-email@gmail.com'
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder='your-password'
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button type="submit" className=" w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline">
                        Sign Up
                    </button>
                    
                </div>
                {message && <p>Người dùng đã tồn tại</p>}
                {isRegistered && (
                    <p className="text-green-500 mt-4 text-center">Đăng ký thành công! Bạn có thể sử dụng tài khoản này để đăng nhập.</p>
                )}
                <div className="mt-6">
                    <hr />
                    <p className="text-gray-700 text-sm font-bold text-center">Already have an account? <a href="/signin" className="text-blue-500 hover:text-blue-800">Sign In</a></p>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
