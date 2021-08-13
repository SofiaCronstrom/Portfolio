import * as React from 'react';
import ReactDOM from 'react-dom';
import Img1 from "../images/modal/ricola-1.svg"
import Img2 from "../images/modal/ricola-2.svg"


const ModalTwo = ({isShowing, hide}) => isShowing ? ReactDOM.createPortal(
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
          <h2 className="proj-head">Ricola, sustainable footprints</h2>

          <img src={Img1} className="ricola-img" alt="screenshot of index page of ricola project with a background of a man on a field and four subpage buttons"/>
          <img src={Img2} className="ricola-img" alt="screenshot of sub page from ricola project with a accordion modal window and a legend button, contact form, an animated line with dots"/>

          <p className="proj-text">
                Curabitur non erat tempor, finibus sem ut, <br/>
                cursus tortor. Nullam tristique nisi quis maximus sagittis.<br/>
                Sed a diam libero. Morbi in purus gravida sapien blandit<br/>
                volutpat posuere id sem. Curabitur libero felis,<br/> 
                interdum dapibus mauris quis, sagittis mollis magna.<br/> 
                Donec egestas feugiat elit, egestas gravida justo hendrerit a.<br/>
                Duis bibendum eros at eros consectetur, id volutpat<br/> 
                diam dignissim. Etiam vel mauris est. Vivamus ut erat tincidunt.<br/>
          </p>
        </div>
      </div>
    </div>
  </>, document.body
) : null;
  

 
export default ModalTwo;