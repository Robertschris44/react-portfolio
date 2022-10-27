import React, {useState} from 'react';
import Project from '../Project';
import imgAbsence from '../../assets/Absence-snippet.jpg'
import imgEmpoloyeetracker from '../../assets/tracker-snippet.jpg'
import imgNewyorktimes from '../../assets/newyork-snippet.jpg'
import imgNotetaker from '../../assets/Note-taker-snippet.jpg'
import imgRunbuddy from '../../assets/Runbuddy-snippet.jpg'
import imgScheduler from '../../assets/Scheduler-screenshot.jpg'


 function Portfolio() {
    const [projects] = useState([
        {
            title: 'Employee Tracker',
            href: 'https://robertschris44.github.io/employee-tracker/',
            image: `${imgEmpoloyeetracker}`,
            github: 'https://github.com/Robertschris44/employee-tracker'
        },
        {
            title: 'Run Buddy',
            href: 'https://robertschris44.github.io/run-buddy/',
            image: `${imgRunbuddy}`,
            github: 'https://github.com/Robertschris44/run-buddy'
        },
        {
            title: 'Absence Reporting',
            href: 'https://absence-reporting.herokuapp.com/',
            image: `${imgAbsence}`,
            github: 'https://github.com/Robertschris44/absence-reporting'
        },
        {
            title: 'New York times',
            href: 'https://robertschris44.github.io/animal-app/',
            image: `${imgNewyorktimes}`,
            github: 'https://github.com/Robertschris44/animal-app'
        },
        {
            title: 'Work Scheduler',
            href: 'https://robertschris44.github.io/workday-scheduler/',
            image: `${imgScheduler}`,
            github: 'https://github.com/Robertschris44/workday-scheduler'
        },
        {
            title: 'Note Taker',
            href: 'https://lit-wave-76729.herokuapp.com/',
            image: `${imgNotetaker}`,
            github: 'https://github.com/Robertschris44/note-taker'
        },
    ])


    return (
        <div>

            <section id='projects'>
                <h1 className='title-project text-center py-3'>Projects</h1>

                <div className='justify-content-between'>
                    
                    {projects.map((project,i) => (
                        <Project
                        title={project.title}
                        href={project.href}
                        imgSrc={project.imgage}
                        gitHub={project.gitHub}
                        />
                    ))}

                </div>



            </section>





        </div>
    )
 }

export default Portfolio;