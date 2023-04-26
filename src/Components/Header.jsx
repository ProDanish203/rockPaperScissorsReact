import React from 'react'
import logo from "../Images/logo.svg"

export const Header = ({ score }) => {
  return (
    <>

    <div className="header">
      <div>

        <img src={logo} alt="logo" className='logo' />
      </div>
      <div className="score">
        <span>Score</span>
        <h2>{score}</h2>
      </div>
    </div>

  
    </>
  )
}
