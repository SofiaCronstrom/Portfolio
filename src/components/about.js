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
                My name is Sofia and I am currently studying at Hyper Island to be a frontend developer. I have a background in the fine art and crafts and I am a textile artist. I also have long work experience with customer service from working at two culture institutions in Stockholm. 
                <br/>
                The interest for code began when I stumbled upon a free introduction course in JavaScript only two years ago and after that I was hooked. 
              </p>

          </div>
          
        </div>
    </div> 

  )
}

export default About;