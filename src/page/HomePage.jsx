import React from 'react'
import Home from '../components/Home/Home'
import background from "../asset/image/background.webp"

const HomePage = () => {
    //rafce
    return (
      <div style={{backgroundImage: `url(${background})`}} className='h-screen w-full'>
        <Home/>
      </div>
    )
    
}

export default HomePage
