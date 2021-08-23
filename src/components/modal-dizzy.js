import * as React from 'react';
import ReactDOM from 'react-dom';
import ImgOne from "../images/modal/aframe-1.svg"


const Modal = ({ isShowing, hide}) => isShowing ? ReactDOM.createPortal(

  

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
          <h2 className="proj-head">webVR/VR game</h2>
          <div className="img-flex">
          <img src={ImgOne} className="aframe-img" alt="screenshot of the first level of the VR game 'dizzy dreams' pink cylinder on pink background"/>
          </div>
          <p className="proj-text">
          A project made with the framework Aframe. It is an interactive VR/webVR game with three levels. The theme of the game is dream or more specific a stress dream where the player is supposed to feel disorted and dizzy while trying to solve the task.<br/>
          This game is one level of seven, the other levels is made by my team mates. We all decided on a theme of the game and then created an individual level for the game.<br/>
          <br/>
                <a className="proj-link" href="https://sofiacronstrom.github.io/dizzy-dream/">View project</a>
                <br/>
                <a className="proj-link" href="https://escapefromhyperisland.github.io/world-3/  ">View whole game</a>   
          </p>
        </div>
      </div>
    </div>
  </>, document.body
) : null;
  

 
export default Modal;