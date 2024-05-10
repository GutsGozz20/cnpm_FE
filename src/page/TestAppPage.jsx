import React from 'react';
import TestApp from '../components/TestApp/TestApp'
import background from "../asset/image/background.webp"
const TestAppPage = () => {
    return (
        <div style={{backgroundImage: `url(${background})`}} className='h-screen w-full'>
        <TestApp/>
      </div>
    );
}

export default TestAppPage;

