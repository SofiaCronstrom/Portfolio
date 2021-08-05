import * as React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import About from "../components/about"
import Projects from '../components/projects';
import Contact from '../components/contact';
import First from '../components/first';
const IndexPage = () => {
  
  
  return (
   <div className="wrapper-index">
     <Header/>
       <First/> 
      <About/>
      <Projects/>
      <Contact/>
   </div>
  )

}

export default IndexPage;
