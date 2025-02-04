import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navigationbar = () => {

    const [shadow, setShadow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const onClickResume = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Enables smooth scrolling
        });
    }

    const onClickAboutMe = () => {
        window.scrollTo({
            top: 700,
            behavior: "smooth" // Enables smooth scrolling
        });
    };

    const onClickSoftwareProject = () => {
        window.scrollTo({
            top: 3000,
            behavior: "smooth" // Enables smooth scrolling
        });
    }
    return (
        <nav
            className={`sticky z-20 top-0  left-0 w-full transition-shadow duration-300 ${shadow ? "shadow-md bg-white z-20" : "z-20 shadow-none bg-transparent"
                }`}
        >
            <div className=' max-w-7xl mx-auto py-3 flex justify-between items-center'>
                <div className="logo cursor-pointer ">
                    <h1 className=' text-2xl font-semibold flex'>
                        <div className='h-3 w-3 bg-[#3B6790] mt-2.5 mr-2'></div>
                        KHYM CD
                        <p className=' text-sm font-medium text-gray-500 mt-2 ml-1'>/ RUPP - Computer Science '24</p>
                    </h1>
                </div>
                <div className="ment">
                    <ul className=' flex justify-center items-center uppercase'>
                        <NavLink onClick={onClickResume} className=' font-medium text-gray-600 hover:text-gray-900 px-2 py-2'>Resume</NavLink>
                        <NavLink onClick={onClickAboutMe} className='font-medium text-gray-600 hover:text-gray-900 px-2 py-2'>About</NavLink>
                        <NavLink onClick={onClickSoftwareProject} className='font-medium text-gray-600 hover:text-gray-900 px-2 py-2'>design project</NavLink>
                        <NavLink to='/contact' className='font-medium text-gray-600 hover:text-gray-900 px-2 py-2'>Software project </NavLink>
                       {/* create a button contact */}
                        <button className='bg-[#3B6790] ml-4 hover:bg-[#2A4365] duration-300 py-2 px-4 rounded-sm cursor-pointer'>
                            <NavLink className='font-medium text-gray-100 hover:text-gray-200'>Contact</NavLink>
                        </button>


                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigationbar