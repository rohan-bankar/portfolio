import React from 'react'
import useTheme from '../../context/Theme'
function Card(props) {
  const{themeMode} = useTheme();
  return (
    <>
    <div className='lg:h-[220px] lg:w-[400px] rounded-md border-solid border-gray-300 hover:shadow-md hover:shadow-sky-500 border p-2 text-center max-sm:mb-5 sm:mx-2 '>
        <h1 className={`text-xl font-bold mt-2 ${themeMode === 'light' ? 'text-black' : 'text-white'}`}>{props.title}</h1>
        <hr />
        <p className={`text-lg mt-5 font-thin ${themeMode === 'light' ? 'text-black' : 'text-white'}`}>{props.description}</p>
        <hr className='my-2' />
        <a href={props.link} className='text-sky-500 font-bold hover:underline hover:text-sky-600' >github link</a>
    </div>
    </>
  )
}

export default Card