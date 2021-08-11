import * as React from "react"
import Modal1 from "./modal-dizzy"
const ProjectPage = () =>  {


return (
<div className="wrapper-projects">
<h1 className="project-head">Projects</h1>
        <div className="container-projects">
            
           <Modal1/>
           
            <div className="projOne" style={{backgroundColor: "#8FC9B8"}}>
                <h1>RICOLA</h1>
            </div>
            <div className="projOne" style={{backgroundColor: "#FFFA8A"}}>
                <h1>HABIT TRACKER</h1>
            </div>
            <div className="projOne" style={{backgroundColor: "#AAA1C6"}}>
                <h1>CETRIOLO CLOCK</h1>
            </div>
           
        </div>
</div>

)
}
export default ProjectPage;