import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../../asset/image/logo.webp";
import footer from "../../asset/image/footer.png";
import button from "../../asset/image/button.webp";
import banner from "../../asset/image/banner.webp";

const Home = () => {
    const [selected, setSelected] = useState(1);
    const navigate = useNavigate();

    const handleStartClick = () => {
        navigate('/test');
    };

    return (
        <div>
            <div className='flex justify-center items-center'>
                <img src={logo} alt=""/>
            </div>
            <div className='flex justify-center items-center gap-4 mt-4'>
                <div className='group/item'>
                    <button className='w-max-content text-[30px] group-hover/item:translate-y-[-2px]' onClick={() => setSelected(2)}>Tutorial</button>
                    <div className='border-[3px] border-b border-black rounded-md invisible group-hover/item:visible'></div>
                </div>
                <div className='group/item'>
                    <button className='w-max-content text-[30px] group-hover/item:translate-y-[-2px]' onClick={() => setSelected(1)}>Play</button>
                    <div className='border-[3px] border-b border-black rounded-md invisible group-hover/item:visible'></div>
                </div>
            </div>

            {selected === 1 &&
                <>
                    <div className='text-[60px] font-semibold text-black text-center w-full mt-10 mb-10'>Please choose a game mode</div>
                    <div className='grid grid-rows-4 gap-4 w-full'>
                        <div className='flex justify-center items-center w-full gap-64'>
                            <div className='font-semibold text-[30px] max-w-sm w-[300px]'>Time</div>
                            <div>
                                <form className="max-w-sm mx-auto w-[640px] font-semibold">
                                    <select style={{fontSize: "24px", backgroundColor: "#1dd1a1"}} id="countries" className="text-[24px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option selected value="" className='font-semibold text-[24px]'>10s/question</option>
                                        <option value="CA" className='font-semibold text-[24px]'>20s/question</option>
                                        <option value="FR" className='font-semibold text-[24px]'>60s/question</option>
                                        <option value="DE" className='font-semibold text-[24px]'>180s/question</option>
                                    </select>
                                </form>
                            </div>
                        </div>

                        <div className='flex justify-center items-center w-full gap-64'>
                            <div className='font-semibold text-[30px] max-w-sm w-[300px]'>No of Operator</div>
                            <div>
                                <form className="max-w-sm mx-auto w-[640px] font-semibold">
                                    <select style={{fontSize: "24px", backgroundColor: "#1dd1a1"}} className="text-[24px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option selected value=""  className='font-semibold text-[24px]'>One(1)</option>
                                        <option value="CA" className='font-semibold text-[24px]'>Two(2)</option>
                                    </select>
                                </form>
                            </div>
                        </div>

                        <div className='flex justify-center items-center w-full gap-64'>
                            <div className='font-semibold text-[30px] max-w-sm w-[300px]'>Operator</div>
                            <div>
                                <form className="max-w-sm mx-auto w-[640px] font-semibold">
                                    <select style={{fontSize: "24px", backgroundColor: "#1dd1a1"}} id="countries" className="text-[24px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option selected value="" className='font-semibold text-[24px]'>Addition(+)</option>
                                        <option value="CA" className='font-semibold text-[24px]'>Subtraction(-)</option>
                                        <option value="FR" className='font-semibold text-[24px]'>Multiplication(*)</option>
                                        <option value="DE" className='font-semibold text-[24px]'>Division(/)</option>
                                    </select>
                                </form>
                            </div>
                        </div>

                        <div className='flex justify-center items-center w-full gap-64'>
                            <div className='font-semibold text-[30px] max-w-sm w-[300px]'>Digit number</div>
                            <div>
                                <form className="max-w-sm mx-auto w-[640px] font-semibold">
                                    <select style={{fontSize: "24px", backgroundColor: "#1dd1a1"}} id="countries" className="text-[24px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option selected value="" className='font-semibold text-[24px]'>One(1)</option>
                                        <option value="CA" className='font-semibold text-[24px]'>Two(2)</option>
                                    </select>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-center mt-12' onClick={handleStartClick}>
                        <div className='relative'>
                            <img src={button} alt="" className='w-[200px] h-[48px]'/>
                            <span className='text-[20px] hover:text-red-600 font-semibold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>Start</span>
                        </div>
                    </div>
                </>
            }
            
            {selected === 2 &&
                <>
                    <div className='flex justify-center items-center w-full'>
                        <div className='w-[600px] overflow-y-auto text-[20px] h-[166px] font-semibold'>
                            <p>Finger Math is a mathematical technique that uses fingers as a visual aid for performing calculations. 
                                It is commonly used as a tool to teach basic arithmetic concepts, particularly addition and subtraction, to young children.
                            </p>
                            <p>
                                Finger Math helps children develop number sense, improve their counting skills, and gain a conceptual understanding of basic arithmetic operations. 
                                It engages their tactile and visual senses, making math more tangible and accessible. It is often used as a foundational learning tool before children progress to mental math strategies.
                            </p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <img src={banner} alt="" className='w-[440px] mt-[40px] border-[1px] border-black' />
                    </div>
                </>
            }

            <div className='flex items-end justify-center'>
                <img src={footer} alt="" className='w-[250px]'/>
            </div>
        </div>
    );
}

export default Home;
