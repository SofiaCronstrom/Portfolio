import * as React from "react"
import Modal1 from "../components/modal-project"
const ProjectPage = () =>  {


return (
<div className="wrapper-projects">
<h1 className="project-head">Projects</h1>
        <div className="container-projects">
            
            <div className="projOne" style={{backgroundColor: "#EBE9B7"}}><Modal1/></div> 
            <div className="projOne" style={{backgroundColor: "#FFFA8A"}}>2</div>
            <div className="projOne" style={{backgroundColor: "#AAA1C6"}}>3</div>
            <div className="projOne" style={{backgroundColor: "#FFFA8A"}}>4</div>
            <div className="projOne" style={{backgroundColor: "#8FC9B8"}}>5</div>
            <div className="projOne" style={{backgroundColor: "#e5e5e5"}}>6</div>
        </div>
</div>

)
}
export default ProjectPage;