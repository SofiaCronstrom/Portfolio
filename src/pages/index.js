import * as React from "react"
import { Link } from "gatsby"
import Header from "./header"
import About from "./about"
import Projects from './projects';
import Contact from './contact';
import First from './first';
import Icon from '../images/icon.png'
const IndexPage = () => {
  
  
  return (
   <div className="wrapper-index">
     <Header/>
       <First/>
       <div className="border-about"></div> 
      <About/>
      <div className="border-proj"></div> 
      <Projects/>
      <div className="border-contact"></div> 
      <Contact/>
   </div>
  )

}

export default IndexPage;
