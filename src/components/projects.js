import * as React from "react"
import Modal from "./modal-dizzy"
import useModal from "./modal"

const ProjectPage = () =>  {
const {isShowing, toggle} = useModal();

return (
<div className="wrapper-projects">
<h1 className="project-head">Projects</h1>
        <div className="container-projects">
            
        
           <button className="projOne" onClick={toggle} style={{backgroundColor: "#EBE9B7"}}>
                <h1>DIZZY DREAM</h1>
           </button> 
           <Modal
           isShowing={isShowing}
           hide={toggle}/> 
           
         
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