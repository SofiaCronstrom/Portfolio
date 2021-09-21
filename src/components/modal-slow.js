import * as React from 'react';
import ReactDOM from 'react-dom';
import ImgOne from "../images/modal/slowStudio.png"



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
          <h2 className="proj-head">Slow studio</h2>

         <div className="img-flex">
       
          <img src={ImgOne} className="slow-img" alt="screenshot of slow studio SPA"/>
          
        </div>

          <p className="proj-text">
          Team project during our design module. The client was a new company called "Slow Studio", a interior design company that also sold art and craft.<br/> 
          The client wanted a webiste and online shop.<br/> 
          We designed and developed the website in close communication with the client and after the clients needs.<br/> 
           Because the company did not have any developers they wanted the website and shop to be developed in an CMS, this so they could add and change images and handle the shop them self. The CMS we used was WIX new CMS called EditorX.<br/>
          </p>
        </div>
      </div>
    </div>
  </>, document.body
) : null;
  

 
export default ModalFour;