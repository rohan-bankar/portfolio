import React from 'react'
import useTheme from '../../context/Theme'
function Card(props) {
  const{themeMode} = useTheme();
  return (
    <>
    <div className='lg:h-[320px] lg:w-[400px] p-5  rounded-md border-solid border-gray-300 hover:shadow-md hover:shadow-sky-500 border  text-center max-sm:mb-5 sm:mx-2'>
        <h1 className={`text-2xl font-bold my-5 ${themeMode === 'light' ? 'text-black' : 'text-white'}`}>{props.title}</h1>
        <hr className='my-7' />
        <p className={`text-xl mt-5 font-thin ${themeMode === 'light' ? 'text-black' : 'text-white'}`}>{props.description}</p>
        <hr className='my-7' />
        <a href={props.link} className='text-sky-500 font-bold text-lg hover:underline hover:text-sky-600 my-5' >{props.linkName}</a>
    </div>
    </>
  )
}

export default Card