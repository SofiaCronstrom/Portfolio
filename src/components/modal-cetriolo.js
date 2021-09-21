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
          <img src={ImgOne} className="aframe-img" alt="cetriolo clock and buttons to choose study+rest time, start stop and reset button on a green background and a pattern of cucumbers"/>
          <img src={ImgTwo} className="aframe-img" alt="todo list form input field to add todos. List of todos delete and change button on a green background and a pattern of cucumbers"/>
        </div>

          <p className="proj-text">
          An induvidual project with a purpose to learn the basics of React. It is a
          studdy app with a clock to use when working using the pomodoro technique.<br/> 
          After a part presentation I was
          supposed to add some sort of API that resulted in a todo list.<br/> 
          Because I was the client for this product the design is based on a layout and color theme that I find calming. The name is a play on the word pomodoro (tomato in italian) 
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