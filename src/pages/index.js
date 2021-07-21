import * as React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Backgroundimage from "../images/bronze.svg"
import About from "../components/about"
import Projects from '../components/projects';
import Contact from '../components/contact';

const IndexPage = () => {
  
  
  return (
   <div className="wrapper">
     <Header/>
     <h1 className="name">Sofia Cronström<br/></h1>
      <h2>code and creativity</h2>
      <About/>
      <Projects/>
      <Contact/>
   </div>
  )

}

export default IndexPage;
