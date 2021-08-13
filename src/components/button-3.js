import React, { useState } from 'react';




const useModal = () => {
 const [isShowing3, setIsShowing3] = useState(false);

 function toggle3(){
   setIsShowing3(!isShowing3);
 }
  
return{
  isShowing3,
  toggle3,
}
     

};
 
export default useModal;