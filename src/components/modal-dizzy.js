import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';



const ModalProject = (props) => {
   
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
      }
    
    
      function closeModal() {
        setIsOpen(false);
      }
    return (  
        <div>
           <button className="projOne" onClick={openModal} style={{backgroundColor: "#EBE9B7"}}>
                <h1>DIZZY DREAM</h1>
           </button> 
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          <div className="modal-aframe">
          <button className="modal-close" onClick={closeModal}>Close</button>
          <h2>Aframe  - webVR/VR game</h2>
          
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
          </div>
        
        </Modal>
      </div>
    );
}
 
export default ModalProject;