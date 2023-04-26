import React, { useState } from 'react'
import { Modal } from "./Modal";


export const Footer = () => {

  const [modal, setModal] = useState(false)
  const toggleModal = () => {
    setModal(prev => !prev);
  }

  return (
    <>
    <footer>
      <div></div>
      <p>Made with <span>❤</span> by <span>Danish Siddiqui.</span></p>
      <button className='btn rule-btn' onClick={toggleModal}>Rules</button>
    </footer>

    {
      modal ?
      <Modal toggle={toggleModal}/>
      : null
    }

    </>
  )
}
