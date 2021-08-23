import * as React from "react"
import Profile from '../images/profile.jpg'
const About = () => {

  return (

   <div className="wrapper-about">
      
       <div className="text-container">
         <img src={Profile} className="profile" alt="profile picture of me looking straight into the camera with a smile"/>
         
         <div className="text-head">
           <h2>Hi!</h2>
              <p>
              My name is Sofia and I am a 34 year old woman based in Stockholm, Sweden. After studying and practicing art for some years I embarked on a new path in life as an aspiring coder, studying frontend development at Hyper Island. 
              <br/>
              What drives me in my work is curiosity, learning new things, creativity and the importance of accessibility on the web.  
              </p>

          </div>
          
        </div>
    </div> 

  )
}

export default About;