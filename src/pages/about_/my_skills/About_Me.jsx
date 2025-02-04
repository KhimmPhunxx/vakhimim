import React, { useEffect, useState } from 'react'
import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaVuejs,
    FaBootstrap
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Modal } from 'antd';
import { FaNodeJs } from 'react-icons/fa6';
import { SiExpress, SiMongodb, SiMysql } from 'react-icons/si';

const About_Me = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedSkill, setSelectedSkill] = useState(null);

    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);


    // Function to open modal with selected skill details
    const showModal = (skill) => {
        setSelectedSkill(skill);
        setIsModalOpen(true);
    };

    // Function to close modal
    const handleCancel = () => {
        setIsModalOpen(false);
        setSelectedSkill(null);
    };



    const skillList_ = [
        {
            skill: 'HTML',
            icon: <FaHtml5 />,
            color: 'text-[#E44D26]',
            desc: 'HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.',
            link_web: 'https://www.w3schools.com/html/'
        },
        {
            skill: 'CSS',
            icon: <FaCss3 />,
            color: 'text-[#1572B6]',
            desc: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.',
            link_web: 'https://www.w3schools.com/css/'
        },
        {
            skill: 'JavaScript',
            icon: <FaJs />,
            color: 'text-yellow-500',
            desc: 'JavaScript is a high-level, often just-in-time compiled, and multi-paradigm programming language. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.',
            link_web: 'https://www.w3schools.com/js/'
        },
        {
            skill: 'React',
            icon: <FaReact />,
            color: 'text-[#61DAFB]',
            desc: 'React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.',
            link_web: 'https://reactjs.org/'
        },
        {
            skill: 'Next.js',
            icon: <RiNextjsFill />,
            color: 'text-gray-900',
            desc: 'Next.js is an open-source React front-end development web framework that enables functionality such as server-side rendering and generating static websites for React based web applications.',
            link_web: 'https://nextjs.org/'
        },
        {
            skill: 'Vue.js',
            icon: <FaVuejs />,
            color: 'text-[#42b883]',
            desc: 'Vue.js is an open-source model-view-viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members.',
            link_web: 'https://vuejs.org/'
        },
        {
            skill: 'Tailwind CSS',
            icon: <RiTailwindCssFill />,
            color: 'text-[#38BDF8]',
            desc: 'Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces. It is a highly customizable low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.',
            link_web: 'https://tailwindcss.com/'
        },
        {
            skill: 'Bootstrap',
            icon: <FaBootstrap />,
            color: 'text-[#563D7C]',
            desc: 'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.',
            link_web: 'https://getbootstrap.com/'
        },
        {
            skill: 'Node.js',
            icon: <FaNodeJs />,
            color: 'text-[#68A063]',
            desc: 'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.',
            link_web: 'https://nodejs.org/'
        },
        {
            skill: 'Express.js',
            icon: <SiExpress />,
            color: 'text-[#000000]',
            desc: 'Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs.',
            link_web: 'https://expressjs.com/'
        },
        {
            skill: 'MongoDB',
            icon: <SiMongodb />,
            color: 'text-[#4DB33D]',
            desc: 'MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.',
            link_web: 'https://www.mongodb.com/'
        },
        {
            skill: 'MySQL',
            icon: <SiMysql />,
            color: 'text-[#00758F]',
            desc: 'MySQL is an open-source relational database management system. Its name is a combination of "My", the name of co-founder Michael Widenius’s daughter, and "SQL", the abbreviation for Structured Query Language.',
            link_web: 'https://www.mysql.com/'
        }
    ]

    return (
        <main className="max-w-7xl mx-auto mt-20">
            <h1 className="text-3xl font-semibold text-center uppercase">My Skills</h1>
            <p className="mx-auto text-lg w-2xl text-gray-600 text-center">
                I am a Frontend Developer with experience in modern web technologies. Here are my skills.
            </p>
            <div className="w-full mt-8 border-t border-gray-400">
                <div className="grid md:grid-cols-4 gap-10 py-4 mt-5" data-aos="fade-up">
                    {/* Skill Cards */}
                    {skillList_.map((skill, index) => (
                        <div
                            key={index}
                            className="flex h-64 hover:scale-105 justify-center space-y-4 
                            cursor-pointer bg-slate-100 border-gray-100 duration-300 
                            flex-col items-center rounded-md hover:shadow-sm"
                            onClick={() => showModal(skill)}
                        >
                            <div className={` ${skill.color} text-8xl flex justify-center items-center`}>
                                {skill.icon}
                            </div>
                            <div className="flex justify-center items-center">
                                <h3 className="text-2xl text-gray-700 font-semibold">{skill.skill}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal for Skill Description */}
            <Modal
                style={{
                    fontFamily: 'Poppins',
                }}
                title={selectedSkill?.skill}
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
            >
                <div className="flex flex-col space-y-4 ">
                    <div className={`${selectedSkill?.color} text-8xl`}>{selectedSkill?.icon}</div>
                    <p className="text-gray-600 text-lg ">{selectedSkill?.desc}</p>
                </div>

                {/* create button read more */}

                <div className=' flex justify-end mt-5'>
                    <button
                        className={`not-last-of-type:mt-4  cursor-pointer
                     px-10 py-3 rounded-full  duration-200 
                    bg-[#3B6790] text-white hover:bg-[#2A4365]
                     `}
                    >
                        <a className='text-gray-100' href={selectedSkill?.link_web} target="_blank">
                            <p className='text-white'>
                                Read More
                            </p>
                        </a>
                    </button>
                </div>



            </Modal>
        </main>
    )
}

export default About_Me

