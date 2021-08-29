import * as React from "react"
import Profile from '../images/profile.jpg'
const About = () => {

  return (

   <div className="wrapper-about">
      
       <div className="text-container">
         <div className="profile-container">
         <img src={Profile} className="profile" alt="profile picture of me looking straight into the camera with a smile"/>
         </div>
         <div className="text-head">
           <h2>Hi!</h2>
              <p>
              My name is Sofia and I am a 34 year old woman based in Stockholm, Sweden.<br/> After studying and practicing art for some years I embarked on a new path in life as an aspiring coder, studying frontend development at Hyper Island. 
              <br/>
              What drives me in my work is curiosity, learning new things, creativity, design and exploration.  
              </p>

          </div>
          
        </div>
    </div> 

  )
}

export default About;