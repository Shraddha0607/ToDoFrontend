import React , {useState}from 'react'
import './UpdatePopup.css'

// const UpdatePopup = () => {
//     console.log("Clicked");
//   return (
//     <div>
//       <h1>Hello</h1>
//       <button>Close</button>
//     </div>
//   )
// }

// export default UpdatePopup


const UpdatePopup = () => {
    
  
    return (
      <div className='popup'>
        <button onClick={togglePopup}>Open Popup</button>
        {isOpen && (
          <div className="popup">
            <button onClick={togglePopup}>Close</button>
            <p>This is a simple popup!</p>
          </div>
        )}
      </div>
    );
  };
  
  export default UpdatePopup;