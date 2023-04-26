import React from 'react'
import rules from "../Images/image-rules.svg";

export const Modal = ({ toggle}) => {
  return (
    <>
    <div className="modal-container">
    <div className="close" onClick={toggle}>
      <i className='fas fa-times'></i>
    </div>
    <div className="modal">
      <img src={rules} alt="rules" />
    </div>
    </div>
    </>
  )
}
