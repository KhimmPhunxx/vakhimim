import React, { useEffect } from 'react'
import rupp from './../../../assets/images/rupp.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const My_Education = () => {

    const onClickToRuppWeb = () => {
        window.open('https://www.rupp.edu.kh/', '_blank')
    }

    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);

    return (
        <main className=' pb-10 mt-10 max-w-full mx-auto bg-slate-100' >
            <section className=' max-w-7xl mx-auto'>
                <h1 className='text-3xl font-semibold text-center uppercase pt-10'>My Education</h1>
                <p className='mx-auto text-lg w-3xl text-gray-600 text-center'>
                    The Royal University of Phnom Penh (RUPP) <br />
                    Chea Sim Oral High School
                </p>
                <div className='w-full mt-8 border-t border-gray-400'>
                    <div className=' py-4 mt-10' >
                        <div className='grid md:grid-cols-2 gap-10'
                            data-aos="fade-up"
                        >
                            <div onClick={onClickToRuppWeb} className="image-rupp w-full h-[400px]">
                                <img
                                    className='w-full h-full object-cover cursor-pointer'
                                    src={rupp} alt="" />
                            </div>
                            <div className=' space-y-8'>
                                <div className='space-y-2'>
                                    <p className='text-4xl font-semibold'>The Royal University of Phnom Penh (RUPP)</p>
                                    <p className='text-xl text-gray-600'>Bachelor of Computer Science G24 Sine 2020 - 2024</p>
                                </div>
                                <p className=' text-lg text-gray-800'>
                                    I am a student at the Royal University of Phnom Penh (RUPP) majoring in
                                    Computer Science. I have learned many programming languages and frameworks
                                    such as C++, Java, Python, HTML, CSS, JavaScript, React, and Node.js. I have
                                    also learned about data structure and algorithms, software engineering, and
                                    database management systems.
                                </p>
                                <p className=' text-xl'>
                                    <span className=' font-medium'>Location: </span> Phnom Penh, Cambodia
                                    
                                </p>
                            </div>


                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default My_Education