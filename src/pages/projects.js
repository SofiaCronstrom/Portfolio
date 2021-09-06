import * as React from "react"
import Modal from "../components/modal-dizzy"
import Modal2 from "../components/modal-ricola"
import Modal3 from "../components/modal-habit"
import Modal4 from "../components/modal-cetriolo"
import Modal5 from '../components/modal-face'
import Modal6 from '../components/modal-slow'
import useModal from "../components/button-1"



const ProjectPage = () =>  {


const [isShowing, toggle] = useModal();
const [isShowing2, toggle2] = useModal();
const [isShowing3, toggle3] = useModal();
const [isShowing4, toggle4] = useModal();
const [isShowing5, toggle5] = useModal();
const [isShowing6, toggle6] = useModal();

return (
<div className="wrapper-projects">
<h1 className="project-head">PROJECTS</h1>
        <div className="container-projects">
            
        <div className="proj">
           <button type="button" className="projOne" onClick={toggle}>
                <h1>DIZZY DREAM</h1>
                <Modal
                isShowing={isShowing}
                hide={toggle}/> 
           </button> 
           </div>
           
           <div className="proj">
            <button type="button" className="projOne" onClick={toggle2} >
                <h1>RICOLA</h1>
                <Modal2
           isShowing={isShowing2}
           hide={toggle2}/> 
            </button>
            </div>

            <div className="proj">
            <button type="button" className="projOne" onClick={toggle3} >
                <h1>HABIT TRACKER</h1>
                <Modal3
           isShowing={isShowing3}
           hide={toggle3}/> 
            </button >
            </div>

            <div className="proj">
            <button type="button" className="projOne" onClick={toggle4}>
                <h1>CETRIOLO CLOCK</h1>
                <Modal4
                isShowing={isShowing4}
                hide={toggle4}
                />
            </button>
           </div>
            <div className="proj">
            <button type="button" className="projOne" onClick={toggle5}>
                <h1>MOOD CHECKER</h1>
                <Modal5
                isShowing={isShowing5}
                hide={toggle5}
                />
            </button>
            </div>
            <div className="proj">
            <button type="button" className="projOne" onClick={toggle6}>
                <h1>SLOW STUDIO</h1>
                <Modal6
                isShowing={isShowing6}
                hide={toggle6}
                />
            </button>
            </div>
        </div>
</div>

)
}
export default ProjectPage;