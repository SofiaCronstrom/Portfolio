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

         <div className="img-flex">
          <img src={ImgOne} className="aframe-img" alt="screenshot of the first level of the VR game 'dizzy dreams' pink cylinder on pink background"/>
          <img src={ImgTwo} className="aframe-img" alt="screenshot of the first level of the VR game 'dizzy dreams' pink cylinder on pink background"/>
        </div>

          <p className="proj-text">
          An induvidual project with a purpose to learn the basics of React. It is a
          studdy app width a clock to use when working with the pomodoro technique.<br/> 
          After a part presentation I was
          supposed to add some kind of API and did so by
           adding a todo list to the studdy app.<br/> 
          Because I was the client for this product the design is based on colors that
           soothes me. The name is a play on the word pomodoro (tomato in italian) 
           because the app has e green theme I named it cetriolo (cucumber in italian).<br/> 
           I was also consious in my choices of colors structure and buttons to align with
            the accessibility guidelines of the web.<br/>

                <a className="proj-link" href="https://cetriolo-app.netlify.app/">View project</a>
          </p>
        </div>
      </div>
    </div>
  </>, document.body
) : null;
  

 
export default ModalFour;