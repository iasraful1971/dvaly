import AOS from 'aos';
import "aos/dist/aos.css";
import React, { useEffect, useState } from 'react';
import im from '../../images/undraw_directions_re_kjxs.svg';
import './Contact.css';




const Contact = () => {
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);
const [success, setSuccess] = useState('');
const [error, setError] = useState("");
const [userData, setUserData] = useState({
    name: "",
    email:"",
    subject:"",
    message:"",

});

let name, value ;

const postUserData =(event)=> {
    name =event.target.name;
    value=event.target.value;

    setUserData({
        ...userData, [name]:value
    })

}
//connect with firebase
const submitData = async (e) => {
    e.preventDefault();
    const {name ,email, subject, message}= userData;
    if(name && email && subject &&  message){

  

     const res = fetch('https://fir-contact-a32e9-default-rtdb.firebaseio.com/userDataRecords.json',{

     
     method: "POST",
     headers: {
         "content-Type":"application/json",
     },
     body:JSON.stringify({
        name ,email, subject, message
     })
    }
     );
     if(res){
         setUserData({
            name: "",
            email:"",
            subject:"",
            message:"",
         })
      
            console.log('submitted')
            setSuccess("You've successfully sent your messages");
            setError("")
     }else{

         setError("There was something error");
         setSuccess("")
     }
    }else{
        console.log('error')
        setError("There was something wrong");
        setSuccess("")
    }
}
    return (
        <>
           <div className="contact__container" id="contact">
               <div className="contact__header">
                   <h1>Contact Us</h1>
                   <p>Prepared is me marianne pleasure likewise debating. Wonder an unable except better stairs do ye admire. His secure called esteem praise.</p>
               </div>
               <div className="contact__box">
                   <div className="single-box" data-aos="flip-right">
                   <i class="fas fa-phone-alt"></i>
                       <p>+333 123 4565 7898</p>
                       <p>+333 153 4575 7893</p>
                   </div>
                   <div className="single-box" data-aos="flip-right">
                   <i class="far fa-envelope-open"></i>
                   <p>iasaraful107@gmail.com</p>
                   <p>iasrafulislam212@gmail.cm</p>
                   </div>
                   <div className="single-box" data-aos="flip-right">
                   <i class="fas fa-map-marked-alt"></i>
                        <p>1200, Matijeel Road</p>
                       <p>Dhaka, Bangladesh</p>
                   </div>
               </div>


           <div className="main-c">
           <div className="c-bg">
                 
               </div>
               <div className="c-wrapper">
                       <div className="c-left" data-aos="fade-right">
                           
                              <img src={im} alt="imgs" />
                           
                       </div>
                       <div className="c-right" data-aos="fade-left">
                           <form  method='POST'>

                            <input type="text"
                             placeholder='Name' 
                             name="name"
                             value={userData.name}
                             onChange={postUserData}
                              id=""
                          
                                 />

                                  <input type="email"
                            value={userData.email}
                            onChange={postUserData}
                             placeholder='Email'
                              name="email"
                               id="" />
                               
                            <input type="text"
                             placeholder='Subject'
                              name="subject"
                              value={userData.subject}
                              onChange={postUserData}
                               id="" />
                               

                          
                            <textarea 
                            value={userData.message}
                            onChange={postUserData}
                            name="message"
                            placeholder='Message' 
                            id="" cols="30" rows="5">

                            </textarea>
                            <button type="submit" onClick={submitData}>send</button>
                       
                           </form>
                           {
                               success && <p style={{color:'green'}}>{success}</p>

                           }
                            {
                                error && <p style={{color:'red'}}>{error}</p>
                            }

                       </div>
                   </div>
           </div>
           </div>
        </>
    );
};

export default Contact;