import React,{useState} from 'react';
// import photo from '' pass in photo
import {validateEmail, capitalizeFirstLetter} from '../.././utils/helpers';


function Contact(){

    const[fromState, setFormState] = useState({name: '',email:'',message:''});
    return(
        <section className='contact-container'>
            <div>
            {/* <img src={photo} */}
            </div>
            <h2 className='section-title'>Contact Me</h2>


        </section>
    );
};


export default Contact;