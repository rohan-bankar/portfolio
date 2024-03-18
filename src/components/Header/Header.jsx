import React, { useEffect, useState } from 'react'
import { Link,NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faSun } from '@fortawesome/free-regular-svg-icons';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import useTheme from '../../context/Theme';
import { animateScroll as scroll } from 'react-scroll';
library.add(faGithub,faSun,faMoon,faBars)

export default function Header({toggleTheme}) {
    const {themeMode} = useTheme();
    const [isMenuOpen,setIsMenuOpen] = useState(false);

    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen);
    }
    const scrollToDiv = (id) =>{
        scroll.scrollTo(id,{
            duration:800,
            smooth: "easeInOutQuart",
        })
    }
    return (
        <header className= "shadow sticky z-50 top-0 ">
            <nav className={`px-4 lg:px-6 py-4 font-bold ${themeMode === 'light' ? 'bg-white text-black' : 'bg-slate-900  text-white border-gray-200'}`}>
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center text-xl " onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} >
                        Rohan Bankar
                    </Link>
                    <div className="flex items-center lg:order-2 ">
        
                        <button className={`p-1 mr-2 rounded-full text-sky-500 ${themeMode === 'light' ? 'hover:bg-slate-200' : 'hover:bg-slate-700'}`} onClick={toggleTheme}>
                            <FontAwesomeIcon icon={themeMode === 'dark' ? "fa-regular fa-moon" : "fa-regular fa-sun"} size="xl" />
                        </button>
                        
                        <Link to="https://github.com/rohan-bankar" className={` p-1 rounded-full text-sky-500 ${themeMode === 'light' ? 'hover:bg-slate-200' : 'hover:bg-slate-700'}`}>
                        <FontAwesomeIcon icon="fa-brands fa-github" size="xl" />
                        </Link>

                        <div className='max-md:hidden lg:hidden max-sm:block ml-5'>
                        <FontAwesomeIcon icon="fa-solid fa-bars" size="xl" onClick={toggleMenu} />
                        </div>
        
                    </div>
                    <div
                        className={`justify-between items-center w-full lg:flex lg:w-auto lg:order-1  ${isMenuOpen ? 'block' : 'hidden'}`}
                        id="mobile-menu-2"
                    >
                        <ul className={`flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 max-sm:text-center sm:text-center`}>
                            <li>
                                <NavLink to="/"
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${themeMode === 'light' ? 'text-black hover:bg-slate-100' : 'text-white lg:hover:bg-slate-800 '}  border-b border-gray-100   rounded-xl lg:border-0  lg:p-1.5 max-sm:border-b-0 sm:border-b-0 font-bold `
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/"
                                    onClick={() => window.scrollTo({ top: document.getElementById('about').offsetTop, behavior: 'smooth' })}
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${themeMode === 'light' ? 'text-black hover:bg-slate-100' : 'text-white lg:hover:bg-slate-800 '} border-b border-gray-100  rounded-xl lg:border-0  lg:p-1.5 max-sm:border-b-0 sm:border-b-0 font-bold`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            
                            <li>
                                <NavLink to="/"
                                    onClick={() => window.scrollTo({ top: document.getElementById('project').offsetTop, behavior: 'smooth' })}
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${themeMode === 'light' ? 'text-black hover:bg-slate-100' : 'text-white lg:hover:bg-slate-800 '} border-b border-gray-100  rounded-xl lg:border-0  lg:p-1.5 max-sm:border-b-0 sm:border-b-0 font-bold`
                                    }
                                >
                                    Projects
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/"
                                onClick={() => window.scrollTo({ top: document.getElementById('contact').offsetTop, behavior: 'smooth' })}
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200  border-b ${themeMode === 'light' ? 'text-black hover:bg-slate-100' : 'text-white lg:hover:bg-slate-800 '} border-gray-100  rounded-xl lg:border-0  lg:p-1.5 max-sm:border-b-0 sm:border-b-0 font-bold`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>

                            <li>
                                <a href="./src/assets/resume.pdf" className={`block py-2 pr-4 pl-3 duration-200 ${themeMode === 'light' ? 'text-black hover:bg-slate-100' : 'text-white lg:hover:bg-slate-800 '} border-b border-gray-100  rounded-xl lg:border-0 max-sm:border-b-0  sm:border-b-0 lg:p-1.5 font-bold`}>Resume</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
            <hr />
        </header>
    
    );
}
