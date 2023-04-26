import React from 'react'
import { Link } from 'react-router-dom';
import Triangle from "../Images/bg-triangle.svg";
import Paper from "../Images/icon-paper.svg";
import Rock from "../Images/icon-rock.svg";
import Scissors from "../Images/icon-scissors.svg";


export const Play = ({ setChoice }) => {
  
  const choose = (e) => {
    setChoice(e.target.dataset.id);
  }

  return (
    <>
    <div className="play">

    <img src={Triangle} className='triangle' />
      <div className="items">

        <Link to="game">
          <div data-id="paper" onClick={(e) => {choose(e)}} className='icon icon-paper' style={{ backgroundImage: `url(${Paper})`}}>
            
          </div>
        </Link>

        <Link to="game">
        <div data-id="rock" onClick={(e) => {choose(e)}} className='icon icon-rock' style={{ backgroundImage: `url(${Rock})`}}>
       
        </div>
        </Link>

        <Link to="game">
          <div data-id="scissors" onClick={(e) => {choose(e)}} className='icon icon-scissors' style={{ backgroundImage: `url(${Scissors})`}}>
           
          </div>
        </Link>

      </div>
    
    </div>
    </>
  )
}
