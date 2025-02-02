import React, { useEffect } from 'react'
import 'aos/dist/aos.css';
import Resume from '../resume_/Resume';
import About_Me from '../about_/my_skills/About_Me';
import My_Education from '../about_/education/My_Education';


const Home = () => {


    return (
        <main >
            <Resume />
            <About_Me   />
            <My_Education />
        </main>

    )
}

export default Home