import emailjs from 'emailjs-com';
import React, { useRef, useState } from 'react';
import im from '../../images/undraw_directions_re_kjxs.svg';
import './Contact.css';




const Contact = () => {
    const formRef = useRef();
    const [done , setDone] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        emailjs.sendForm('service_7ag5uup',
         'template_h4ypq7p', 
         formRef.current, 'YOUR_USER_ID')
        .then((result) => {
            setDone(true)
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        
        });

    }
    return (
        <>
           <div className="contact__container">
               <div className="contact__header">
                   <h1>Contact Us</h1>
                   <p>Prepared is me marianne pleasure likewise debating. Wonder an unable except better stairs do ye admire. His secure called esteem praise.</p>
               </div>
               <div className="contact__box">
                   <div className="single-box">
                   <i class="fas fa-phone-alt"></i>
                       <p>+333 123 4565 7898</p>
                       <p>+333 153 4575 7893</p>
                   </div>
                   <div className="single-box">
                   <i class="far fa-envelope-open"></i>
                   <p>iasaraful107@gmail.com</p>
                   <p>iasrafulislam212@gmail.cm</p>
                   </div>
                   <div className="single-box">
                   <i class="fas fa-map-marked-alt"></i>
                        <p>1200, Matijeel Road</p>
                       <p>Dhaka, Bangladesh</p>
                   </div>
               </div>


           <div className="main-c">
           <div className="c-bg">
                 
               </div>
               <div className="c-wrapper">
                       <div className="c-left">
                           
                              <img src={im} alt="imgs" />
                           
                       </div>
                       <div className="c-right">
                           <form ref={formRef} onSubmit={handleSubmit}>

                            <input type="text" placeholder='Name' name="user_name" id="" />
                            <input type="text" placeholder='Subject' name="user_subject" id="" />
                            <input type="email" placeholder='Email' name="user_email" id="" />
                            <textarea name="message" placeholder='Message' id="" cols="30" rows="5"></textarea>
                            <button type="submit">send</button>
                            <p>{
                                done && "thank you "
                                }</p>
                           </form>
                       </div>
                   </div>
           </div>
           </div>
        </>
    );
};

export default Contact;