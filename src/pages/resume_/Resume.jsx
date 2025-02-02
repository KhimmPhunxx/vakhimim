import React, { useEffect } from 'react'
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import profile from '../../assets/images/profile.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Resume = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);

    return (
        <main className=' h-[600px] w-full max-w-full mx-auto flex justify-between'>
            <div className=' relative justify-center items-center h-full w-[40%] bg-[#4C585B]'>
                <div className='card-profile w-80 h-[400px] bg-[#4C585B] absolute ml-[400px] mt-20 shadow-2xl shadow-gray-400'
                    data-aos='zoom-in'
                >
                    <div className='w-full h-[90%] flex flex-col items-center justify-center'>
                        <div className='w-full h-[50%] flex justify-center items-center'>
                            <img className='w-44 h-44 border-2 border-white rounded-full object-cover hover:scale-110 duration-200 cursor-pointer' src={profile} alt="" />
                        </div>
                        <div className='w-full mt-4 flex flex-col justify-center items-center space-y-4'>
                            <h1 className='text-2xl font-semibold text-gray-100'>IM VAKHIM</h1>
                            <div className='h-1 w-16 bg-gray-100 rounded-2xl'></div>
                            <p className=' text-sm text-gray-300'>
                                Frontend Developer & UI/UX Designer
                            </p>
                        </div>

                    </div>
                    <div className=' w-full h-[15%] bg-white py-5 flex space-x-5 items-center justify-center '>
                        <a href="https://github.com/KhimmPhunxx" target='_blank'>
                            <FaGithub className='text-2xl text-gray-600 duration-200 hover:text-gray-900' />
                        </a>
                        <a href="https://www.linkedin.com/in/imvakhim/" target='_blank'>
                            <FaLinkedin className='text-2xl text-gray-600 duration-200 hover:text-gray-900' />
                        </a>
                        <a href="https://www.instagram.com/khymn._.11/" target='_blank'>
                            <FaInstagram className='text-2xl text-gray-600 duration-200 hover:text-gray-900' />
                        </a>
                        <a href="https://www.youtube.com/@im_vakhim_khodedev" target='_blank'>
                            <FaYoutube className='text-2xl text-gray-600 duration-200 hover:text-gray-900' />
                        </a>
                        <a href="https://web.facebook.com/imvakhim" target='_blank'>
                            <FaFacebookF className='text-2xl text-gray-600 duration-200 hover:text-gray-900' />
                        </a>
                    </div>
                </div>

            </div>
            <div className='w-[50%] justify-center flex-col flex space-y-10' data-aos='zoom-in'>
                <h1 className=' text-7xl font-bold tracking-wide leading-'>
                    Hey World, <br /> I'm Vakhim!
                </h1>
                <div>
                    <button>
                        <a href="https://drive.google.com/drive/u/0/folders/10Ej7wNxWPZJ8GbfnOw0UnFm7hbwrh0rF" target='_blank' className='bg-[#3B6790] text-white px-10 py-3 rounded-full hover:bg-[#2A4365] duration-200'>Download Resume</a>
                    </button>
                </div>
                
                <div className='w-[60%] space-y-5'>
                    <p>I'm Khim is a passionate Frontend Developer with a strong foundation in building modern, user-friendly web applications. I graduated from Royal University of Phnom Penh, where I developed a deep understanding of web technologies and UI/UX principles.</p>
                    <p>About Me I am a passionate Frontend Developer with a strong foundation in building modern, user-friendly web applications.</p>
                </div>
            </div>
        </main>

    )
}

export default Resume