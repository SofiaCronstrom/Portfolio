import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import ImgOne from '../images/modal/aframe-1.svg';
import ImgTwo from '../images/modal/aframe-2.svg';
import ImgThree from '../images/modal/aframe-3.svg';


const ModalProject = (props) => {
   
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
      }
    
    
      function closeModal() {
        setIsOpen(false);
      }

     

    return (  
        <div className="main">
           <button className="projOne" onClick={openModal} style={{backgroundColor: "#EBE9B7"}}>
                <h1>DIZZY DREAM</h1>
           </button> 
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          style={{backgroundColor: "#e5e5e5"}}
        >
          <div className="modal-aframe">

              <button className="modal-close" onClick={closeModal}>Close</button>

              <h2>Aframe  - webVR/VR game</h2>

              <img src={ImgOne} className="aframe-img"/>
              <img src={ImgTwo} className="aframe-img"/>
              <img src={ImgThree} className="aframe-img"/>
              
              <p classname="aframe-text">
              Curabitur non erat tempor, finibus sem ut, <br/>
              cursus tortor. Nullam tristique nisi quis maximus sagittis.<br/>
              Sed a diam libero. Morbi in purus gravida sapien blandit<br/>
              volutpat posuere id sem. Curabitur libero felis,<br/> 
              interdum dapibus mauris quis, sagittis mollis magna.<br/> 
              Donec egestas feugiat elit, egestas gravida justo hendrerit a.<br/>
              Duis bibendum eros at eros consectetur, id volutpat<br/> 
              diam dignissim. Etiam vel mauris est. Vivamus ut erat tincidunt.<br/> 
              </p>
              <a href="https://sofiacronstrom.github.io/dizzy-dream/">View project</a>
          </div>
        
        </Modal>
      </div>
    );
}
 
export default ModalProject;