import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Design_Project = () => {

  useEffect(() => {
    Aos.init({
      duration: 2000
    })
  }, [])

  const listDesignProjects = [
    {
      id: 1,
      name: 'E-Commerce Website',
      description: 'A website that allows users to buy and sell products online.',
      img: 'https://ewm.swiss/application/files/8216/1597/9679/E-commerce_web_design_EWM_SA_Digital_Agency_Geneva.jpg',
      link: 'https://www.figma.com/design/P4be4mmoKjOqMOIu1HMqkG/Untitled?node-id=0-1&p=f&t=gkwWZ4IOSqSZYePY-0'
    },
    {
      id: 2,
      name: 'Company Website',
      description: 'A website that provides information about the company.',
      img: 'https://purisconsulting.com/wp-content/uploads/2019/01/Company-Branding_team-work.png',
      link: 'https://www.figma.com/design/Sp07kiMl0O9twlBS1JcCFg/CAM_Science_Designer?node-id=0-1&p=f&t=qhwB0PryiuvflJss-0'
    },
    {
      id: 3,
      name: 'Movie Website',
      description: 'A website that allows users to watch movies online.',
      img: 'https://images.bauerhosting.com/empire/2022/01/EMPIRE-100-Greatest-Movies-List.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80',
      link: 'https://www.figma.com/design/WQwvZBsZlEEn1qPYfqNgKA/Design_final_project_Website?node-id=0-1&p=f&t=7R2A7dBvFs1tZrTj-0'
    },

  ]


  return (
    <main className=' w-full bg-slate-100 pb-10'>
      <section className=' max-w-7xl mx-auto'>
        <h1 className='text-3xl font-semibold text-center uppercase pt-10'>Design Projects</h1>
        <p className='mx-auto text-lg w-3xl text-gray-600 text-center'>
          Here are some of my design projects that I have done.
        </p>
        <div className='w-full mt-8 border-t border-gray-400'>
          <div className=' py-4 mt-10' >
            <div className='grid md:grid-cols-3 gap-10'
              data-aos="fade-up"
            >
              {
                listDesignProjects.map((project, index) => (
                  <div key={index} className='image-rupp w-full bg-white rounded-lg overflow-hidden
                  hover:shadow-lg duration-300
                  '>
                    <img
                      className='w-full h-64 object-cover cursor-pointer hover:scale-105 duration-200'
                      src={project.img} alt="" />
                    <div className='space-y- p-4'>
                      <p className='text-2xl font-semibold '>{project.name}</p>
                      <p className='text-sm text-gray-600 '>{project.description}</p>
                      <button className='bg-[#3B6790] mt-4 text-white px-10 py-3 rounded-sm hover:bg-[#2A4365] duration-200'>
                        <a href={project.link} target='_blank' >View Project</a>
                      </button>

                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Design_Project