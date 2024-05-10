import React from 'react'
import Result from '../components/Result/Result'
import background from "../asset/image/background.webp"
const ResultPage = () => {
  return (
    <div style={{backgroundImage: `url(${background})`}} className='h-screen w-full'>
      <Result/>
    </div>
  )
}

export default ResultPage
