import * as React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Backgroundimage from "../images/bronze.svg"
const IndexPage = () => {
  
  
  return (
   <div className="main">
     <Header/>
     <img src={Backgroundimage}/>
     <h1 className="portfolio">PORTFOLIO</h1>
     <h1 className="name">Sofia Cronström<br/>
      Frontend developer</h1>
      
   </div>
  )

}

export default IndexPage
