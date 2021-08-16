import * as React from 'react';
import ReactDOM from 'react-dom';
import ImgOne from "../images/modal/cetriolo-1.svg"
import ImgTwo from "../images/modal/cetriolo-2.svg"


const ModalFour = ({ isShowing, hide}) => isShowing ? ReactDOM.createPortal(

  

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
          <h2 className="proj-head">Studdy clock</h2>

          <img src={ImgOne} className="aframe-img" alt="screenshot of the first level of the VR game 'dizzy dreams' pink cylinder on pink background"/>
          <img src={ImgTwo} className="aframe-img" alt="screenshot of the first level of the VR game 'dizzy dreams' pink cylinder on pink background"/>

          <p className="proj-text">
                Curabitur non erat tempor, finibus sem ut, <br/>
                cursus tortor. Nullam tristique nisi quis maximus sagittis.<br/>
                Sed a diam libero. Morbi in purus gravida sapien blandit<br/>
                volutpat posuere id sem. Curabitur libero felis,<br/> 
                interdum dapibus mauris quis, sagittis mollis magna.<br/> 
                Donec egestas feugiat elit, egestas gravida justo hendrerit a.<br/>
                Duis bibendum eros at eros consectetur, id volutpat<br/> 
                diam dignissim. Etiam vel mauris est. Vivamus ut erat tincidunt.<br/>

                <a className="proj-link" href="https://cetriolo-app.netlify.app/">View project</a>
          </p>
        </div>
      </div>
    </div>
  </>, document.body
) : null;
  

 
export default ModalFour;