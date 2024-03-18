import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
import { faSquareXTwitter } from '@fortawesome/free-brands-svg-icons'
import Card from '../Card/Card'
import useTheme from '../../context/Theme'
library.add(faSquareGithub,faSquareInstagram,faSquareXTwitter)
function Home() {
    const {themeMode} = useTheme();
    const data = [
        {title:"Web Base Ledgering Portal",description:"web application for colleges to manage financial records and streamline approval process.",link:"https://github.com/rohan-bankar/web-based-ledgering-portal"},
        {title:"Currency Converter",description:"A Currency Converter web app is a tool that allows users to convert between different currencies.",link:"https://github.com/rohan-bankar/Currency-Converter"},
        {title:"To Do List",description:"A To-Do List web app is a productivity tool that helps users manage their tasks and organize their daily activities.",link:"https://github.com/rohan-bankar/TO-Do-List-Task1/tree/main/To%20do%20list"}
    ];
  return (
    <>
    <div className={`lg:px-20 max-sm:px-6 sm:px-6 ${themeMode === 'light' ? 'bg-white' : 'bg-slate-900'}`}>
        <div className='flex flex-row justify-center max-sm:flex-col lg:py-24 max-sm:py-20 max-sm:text-center'>
            <div className=''>
                <img src="./src/assets/Me.png" alt=""  className='w-96'/>
            </div>
            <div className='relative lg:top-32 max-sm:top-25 sm:top-32'>
            <h1 className={`${themeMode === 'light' ? 'text-black' : 'text-white'} font-bold lg:text-5xl sm:text-5xl max-sm:text-4xl `}>👋 <span className='text-sky-500'>I'm</span> Rohan</h1>
            <p className={`${themeMode === 'light' ? 'text-black' : 'text-white'} mt-3 `}>
                a Developer and a Pro Gamer :)
            </p>
            </div>
        </div>

        <div id='about' className='text-white'>
            <p className={`font-bold lg:text-4xl sm:text-4xl max-sm:text-3xl ${themeMode === 'light' ? 'text-black' : 'text-white'}`}><span className='text-sky-500'>Portfolio</span>.json</p>
            <pre  className=' bg-black lg:p-10 sm:p-10 max-sm:p-2 my-5 rounded-xl lg:text-xl max-sm:text-xs'>
            &#123;
                <br />
                <div className='lg:ml-5 max-sm:ml-2 max-sm:text-xs'>
                    "node_id": "MDQ6VXNlcjQ3NDI2NjE2",<br />    
                    "name": "Rohan Bankar",<br />
                    "social-medias": &#91;<br />
                    <a href="https://github.com/rohan-bankar" className='ml-5'>" <FontAwesomeIcon icon="fa-brands fa-square-github" size="lg" /> <span className='text-blue-400'>GitHub</span>",</a><br />
                    <a href="https://www.instagram.com/rohan_bankar_7/" className='ml-5'>" <FontAwesomeIcon icon="fa-brands fa-square-instagram" size="lg" /><span className='text-blue-400'> Instagram</span>",</a><br />
                    <a href="https://www.linkedin.com/in/rohan-bankar/" className='ml-5'>" <FontAwesomeIcon icon="fa-brands fa-linkedin" size="lg" /><span className='text-blue-400'> LinkedIn</span>",</a><br />
                    <a href="https://twitter.com/Bankar2Rohan" className='ml-5'>" <FontAwesomeIcon icon="fa-brands fa-square-x-twitter" size="lg" /><span className='text-blue-400'> Twitter</span>",</a><br />
                    &#93;,<br /><br />
                    "About Me": <span className='whitespace-pre-wrap max-w-[auto]'>
                    "Passionate about building cool stuff and turning lifeless sheets 
                    of Figma into beautiful and Interactive user interface portals to 
                    endless possibilities",
                        </span> 
                    <br /><br />
                    "skills": &#91; <br />
                        "Javascript",<br />
                        "CSS3",<br />
                        "HTML",<br />
                    &#93;, <br />
                    "frameworks": &#91;<br />
                    "ReactJS",<br />
                    "bootstrap"<br />
                    &#93;,<br /> 
                    "Ui-Libraries": &#91;<br />
                    "tailwindcss"<br />
                    &#93;, <br />
                    "DB": &#91;<br />
                    "mySql"<br />
                    &#93;, <br />
                    "location": "Pune, MH, IND" <br />
                </div>
            &#125;
            </pre>
        </div>

        <div className='text-white py-20'>
            <p className={`lg:text-4xl sm:text-4xl max-sm:text-3xl text-center font-bold ${themeMode === 'light' ? 'text-black' : 'text-white'}`}>Projects</p>
            <div id='project' className='flex lg:flex-row max-sm:flex-col lg:justify-evenly mt-10'>
                {data.map((item,index)=>(
                    <Card key={index} title={item.title} description={item.description} link={item.link}/>
                ))}
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Home