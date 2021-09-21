import * as React from 'react';
import ReactDOM from 'react-dom';
import ImgOne from "../images/modal/habit-1.svg"
import ImgTwo from "../images/modal/habit-2.svg"

const ModalThree = ({ isShowing, hide}) => isShowing ? ReactDOM.createPortal(

  

  <>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modal">
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
         <div className="modal-content">
          <h2 className="proj-head">Habit</h2>
          <div className="img-flex">
          <img src={ImgOne} className="aframe-img" alt="first page of habit tracker displaying cards with different habits in use biege background white cards and a green animated plant on each card"/>
          <img src={ImgTwo} className="aframe-img" alt="a form to add a new habit, name and duration of that habit on a olive green background"/>
          </div>
          <p className="proj-text">
          A habit tracker coded in html css and vanilla JavaScript. The main purpose of this project where to learn and use local storage.<br/> 
          My team developed an interactive, mobile first, habit tracker where the user could add a habit and for each time the user made progress the plant would grow.<br/> This is the first team project we did on my frontend developer education. We where all involved in the whole process from design, wireframing to mobcoding the site.<br/> 
           <br/>
                <a className="proj-link" href="https://elinordin.github.io/habit-tracker/">View project</a>
          </p>
        </div>
      </div>
    </div>
  </>, document.body
) : null;
  

 
export default ModalThree;