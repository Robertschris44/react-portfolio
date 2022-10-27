import React, {useState} from 'react';


 function Portfolio() {
    const [projects] = useState([
        {
            title: 'Employee Tracker',
            href: 'https://robertschris44.github.io/employee-tracker/',
            image: 'placehere',
            github: 'https://github.com/Robertschris44/employee-tracker'
        },
        {
            title: 'Run Buddy',
            href: 'https://robertschris44.github.io/run-buddy/',
            image: 'placehere',
            github: 'https://github.com/Robertschris44/run-buddy'
        },
        {
            title: 'Absence Reporting',
            href: 'https://absence-reporting.herokuapp.com/',
            image: 'placehere',
            github: 'https://github.com/Robertschris44/absence-reporting'
        },
        {
            title: 'New York times',
            href: 'https://robertschris44.github.io/animal-app/',
            image: 'placehere',
            github: 'https://github.com/Robertschris44/animal-app'
        },
        {
            title: 'ReadMe Generator',
            href: 'https://robertschris44.github.io/readme-generator/',
            image: 'placehere',
            github: 'https://github.com/Robertschris44/readme-generator'
        },
        {
            title: 'Note Taker',
            href: 'https://lit-wave-76729.herokuapp.com/',
            image: 'placehere',
            github: 'https://github.com/Robertschris44/note-taker'
        },
    ])
 }

export default Portfolio;