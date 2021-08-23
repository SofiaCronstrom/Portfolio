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
          <div className="img1-flex">
          <img src={Img1} className="ricola-img" alt="screenshot of index page of ricola project with a background of a man on a field and four subpage buttons"/>
          <img src={Img2} className="ricola-img" alt="screenshot of sub page from ricola project with a accordion modal window and a legend button, contact form, an animated line with dots"/>
          </div>
          <p className="proj-text">
          A collaborative project between the frontend class and the user experience class of Hyper Island. The client was Ricola and there case was an website to show the company sustainability footsteps in an easy and comprehensible way.<br/>
          In this project we worked with SCRUM as our work method and the frame work/language we coded in was React and we used Gatsby as the site generator.<br/>
          We tackled the case by doing a map over the different sustainability footsteps wich made it easier for the user to navigate through the information. We also made it possible for the user to send in there own suggestion on actions the company could take towards reaching the sustainble goals (this was a wish from the company).<br/>
          </p>
        </div>
      </div>
    </div>
  </>, document.body
) : null;
  

 
export default ModalTwo;