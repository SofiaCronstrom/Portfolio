import * as React from "react"
import Modal from "./modal-dizzy"
import Modal2 from "./modal-ricola"
import Modal3 from "./modal-habit"
import Modal4 from "./modal-cetriolo"
import useModal from "./button-1"



const ProjectPage = () =>  {


const [isShowing, toggle] = useModal();
const [isShowing2, toggle2] = useModal();
const [isShowing3, toggle3] = useModal();
const [isShowing4, toggle4] = useModal();


return (
<div className="wrapper-projects">
<h1 className="project-head">Projects</h1>
        <div className="container-projects">
            
        
           <button type="button" className="projOne" onClick={toggle} style={{backgroundColor: "#EBE9B7"}}>
                <h1>DIZZY DREAM</h1>
                <Modal
                isShowing={isShowing}
                hide={toggle}/> 
           </button> 
           
           
         
            <button type="button" className="projOne" onClick={toggle2} style={{backgroundColor: "#8FC9B8"}}>
                <h1>RICOLA</h1>
                <Modal2
           isShowing={isShowing2}
           hide={toggle2}/> 
            </button>
           

            <button type="button" className="projOne" onClick={toggle3} style={{backgroundColor: "#FFFA8A"}}>
                <h1>HABIT TRACKER</h1>
                <Modal3
           isShowing={isShowing3}
           hide={toggle3}/> 
            </button >

            <button type="button" className="projOne" onClick={toggle4} style={{backgroundColor: "#AAA1C6"}}>
                <h1>CETRIOLO CLOCK</h1>
                <Modal4
                isShowing={isShowing4}
                hide={toggle4}
                />
            </button>
           
        </div>
</div>

)
}
export default ProjectPage;