import React, { useEffect } from 'react'
import 'aos/dist/aos.css';
import Resume from '../resume_/Resume';
import About_Me from '../about_/my_skills/About_Me';
import My_Education from '../about_/education/My_Education';
import Design_Project from '../design_project/Design_Project';
import Software_Project from '../software_project/Software_Project';


const Home = () => {


    return (
        <main >
            <Resume />
            <About_Me   />
            <My_Education />
            <Design_Project />
            <Software_Project />
        </main>

    )
}

export default Home