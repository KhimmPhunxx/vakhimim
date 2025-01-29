import React, { useEffect } from 'react'
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import profile from '../../assets/images/profile.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);
    
    return (
        <main className=' h-[600px] w-full max-w-full mx-auto'>
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
        </main>
    )
}

export default Home