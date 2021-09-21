import * as React from 'react';
import ReactDOM from 'react-dom';
import ImgOne from "../images/modal/faceApi.png"
import ImgTwo from "../images/modal/faceApi2.png"


const ModalFive = ({ isShowing, hide}) => isShowing ? ReactDOM.createPortal(

  

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
          <h2 className="proj-head">Face API</h2>

         <div className="img-flex">
          <img src={ImgOne} style={{width: 200}} className="face-img" alt="screenshot of me in a videocall with the face expression recognition on"/>
          <img src={ImgTwo} className="face-img" alt="A evalutaion log of ten different moods, counted from the face expression recognition"/>
        </div>

          <p className="proj-text">
            This was a team project and the brief was to use an API for a project.<br/> 
            My team wanted to do a project using a face-api that detects facial expression.<br/> 
            Our scope was to develp a tool for teachers, who during the pandemic,had to have there classes online<br/> 
            We develped a mock-up video call room, by pressing the evaluation button the teacher would get a bundled evaluation at four different times during there lecture of the whole class mood and engagement based on facial expression. This is a first develop of a project, if we hade more time we would have found a solution to make this product more anonymous, as it is now even if the teacher is getting a gathered evaluation of all pupils the facial-expression mesh on the video makes it possible to target each individual pupil.<br/>
          </p>
        </div>
      </div>
    </div>
  </>, document.body
) : null;
  

 
export default ModalFive;