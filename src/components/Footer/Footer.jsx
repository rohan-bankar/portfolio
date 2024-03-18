import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import useTheme from '../../context/Theme';
library.add(faInstagram,faEnvelope,faXTwitter,faGithub,faLinkedin)
export default function Footer() {
    const { themeMode } = useTheme();
    return (
        <footer id='contact' className={`border-y ${themeMode === 'light' ? 'bg-white border-zinc-800' : 'bg-slate-900 border-white'} `}>
            <div className={`mx-auto w-full max-w-screen-xl p-4 py-2 lg:py-8`}>
                
                     <div className="flex mt-2 space-x-5 max-sm:justify-center sm:justify-center sm:mt-0 ">
                        <Link to="https://www.instagram.com/rohan_bankar_7/" className={`${themeMode === 'light' ? 'text-gray-500' : 'text-white'}`}>
                        <FontAwesomeIcon className='transform hover:rotate-360 hover:-translate-y-full hover:scale-105 transition-transform duration-1000' icon="fa-brands fa-instagram" size="2x" />
                        </Link>
                        <Link to="mailto:rohanbankar011@gmail.com" className={`${themeMode === 'light' ? 'text-gray-500' : 'text-white'}`}>
                        <FontAwesomeIcon className='transform hover:rotate-360 hover:-translate-y-full hover:scale-105 transition-transform duration-1000' icon="fa-regular fa-envelope" size="2xl" />
                        </Link>
                        <Link to="https://twitter.com/Bankar2Rohan" className={`${themeMode === 'light' ? 'text-gray-500' : 'text-white'}`}>
                        <FontAwesomeIcon className='transform hover:rotate-360 hover:-translate-y-full hover:scale-105 transition-transform duration-1000' icon="fa-brands fa-x-twitter" size="2xl" />
                        </Link>
                        <Link to="https://github.com/rohan-bankar" className={`${themeMode === 'light' ? 'text-gray-500' : 'text-white'}`}>
                        <FontAwesomeIcon className='transform hover:rotate-360 hover:-translate-y-full hover:scale-105 transition-transform duration-1000' icon="fa-brands fa-github" size="2xl" />
                        </Link>
                        <Link to="https://www.linkedin.com/in/rohan-bankar/" className={`${themeMode === 'light' ? 'text-gray-500' : 'text-white'}`}>
                        <FontAwesomeIcon className='transform hover:rotate-360 hover:-translate-y-full hover:scale-105 transition-transform duration-1000' icon="fa-brands fa-linkedin" size="2xl" />
                        </Link>
                    </div>
                
                <hr className={`my-6 ${themeMode === 'light' ? 'border-zinc-800' : 'border-white'} sm:mx-auto lg:my-8`} />
                <div className="sm:flex sm:items-center sm:justify-between text-lg font-bold">
                    <span className={`text-sm sm:text-center ${themeMode === 'light' ? 'text-black' : 'text-white'}`}>
                       Copyright © 2024 : 
                        <a href="https://hiteshchoudhary.com/" className=" underline text-sky-800 ml-1">
                             Rohan Bankar
                        </a>
                    </span>
                   
                </div>
            </div>
        </footer>
    );
}
