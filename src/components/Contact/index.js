import React,{useState} from 'react';
// import photo from '' pass in photo
import {validateEmail, capitalizeFirstLetter} from '../.././utils/helpers';


function Contact(){

    const[formState, setFormState] = useState({name: '',email:'',message:''});
    const {name, email, message} = formState;
    const[errorMessage, setErrorMessage] =useState('');

    function handleSubmit(event){
        event.preventDefault();
        if(!errorMessage){
            setFormState({[event.target.name]:event.target.value})
            console.log('Form', formState);
        }
    };
    

    function handleChange(event){
        if(event.target.name === 'email'){
            const isValid = validateEmail(event.target.value);
            console.log(isValid);
            if(!isValid){
                setErrorMessage('Not a valid email');
            }
            else{
                setErrorMessage('');
            }
            }
            else {
                if(!event.target.value.length){
                    setErrorMessage(capitalizeFirstLetter((`${event.target.name} is required`)));
                }
                else {
                    setErrorMessage('');
                }
            }
            if(!errorMessage){setFormState({...formState,[event.target.name]:(event.target.value).trim()})}
        }
    
    return(
        <section className='contact-container'>
            <h1 className='section-title'>Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Your Name:</label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange}></input>
                </div>
                <div>
                    <label htmlFor='email'>Your email address:</label>
                    <input type="email" name='email' defaultValue={email} onBlur={handleChange}></input>
                </div>
                <div>
                    <label htmlFor='message'>Message:</label>
                    <textarea name='message' rows="4" defaultValue={message} onBlur={handleChange}></textarea>
                </div>

                <div className=''> 
                    <button className='contactBtn' type='submit'>Submit</button>
                </div>
                
                {errorMessage && (
                <div>
                    <p className='error-text'>{errorMessage}</p>
                </div>)}
               

            </form>
            

        </section>
    )};
                



export default Contact;