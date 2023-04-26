import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

import paper from "../Images/icon-paper.svg";
import rock from "../Images/icon-rock.svg";
import scissors from "../Images/icon-scissors.svg";

export const Game = ({ choice, score, setScore}) => {

  const [house, setHouse] = useState("");
  const [playerWin, setPlayerWin] = useState("");
  const [pickedImage, setPickedImage] = useState();
  const [houseImage, setHouseImage] = useState();
  const [counter, setCounter] = useState(3)


  const newHousePick = () => {
    const choices = ["rock", "paper", "scissors"];
    setHouse(choices[Math.floor(Math.random() * 3)]);
    chosenImage();
  }

  useEffect(() => {
    newHousePick();
  }, [])

  const result = () => {

    if(choice === "rock" && house === "scissors"){
      setPlayerWin("win")
      setScore(score + 1);
    }
    else if(choice === "rock" && house === "paper"){
      setPlayerWin("lose")
      setScore(score - 1);
    }
    else if(choice === "scissors" && house === "paper"){
      setPlayerWin("win")
      setScore(score + 1);
    }
    else if(choice === "scissors" && house === "rock"){
      setPlayerWin("lose")
      setScore(score - 1);
    }
    else if(choice === "paper" && house === "rock"){
      setPlayerWin("win")
      setScore(score + 1);
    }
    else if(choice === "paper" && house === "scissors"){
      setPlayerWin("lose")
      setScore(score - 1);
    }else{
      setPlayerWin("draw");
    }

  }

  const chosenImage = () => {
    if(choice == "paper"){
      setPickedImage(paper);
    }
    else if(choice == "rock"){
      setPickedImage(rock)
    }
    else if(choice == "scissors"){
      setPickedImage(scissors);
    }
  }

  const houseImg = () => {
    if(house == "paper"){
      setHouseImage(paper);
    }
    else if(house == "rock"){
      setHouseImage(rock)
    }
    else if(house == "scissors"){
      setHouseImage(scissors);
    }
  }

  

  useEffect(() => {

    const timer = counter > 0 ? setInterval(() => {

      setCounter(counter-1)

    }, 1000) : result(); 
    houseImg();    
    
    return () => {
      clearInterval(timer)
    }


  }, [counter, house])

  return (
    <>
      <div className="game">

        <div className="team you">

          <span>you Picked</span>
          <div className={`icon icon-${choice} ${playerWin == "win" ? 'icon-win' : ""}`} style={{ backgroundImage: `url(${pickedImage})`}}></div>

        </div>

        <div className="result-container">
          {
            playerWin == "win" && 
            <div className="result">
                <h3>You Win</h3>
              <Link to="/" className='play-again' onClick={() => {setHouse("")}}>
                <button className="btn">Play Again</button>
              </Link>
            </div>
          }
          {
            playerWin == "lose" &&
            <div className="result">
                <h3>You Lose</h3>
              <Link to="/" className='play-again' onClick={() => {setHouse("")}}>
                <button className="btn">Play Again</button>
              </Link>
            </div>
          }
          {
            playerWin == "draw" &&
            <div className="result">
                <h3>It's a Draw</h3>
              <Link to="/" className='play-again' onClick={() => {setHouse("")}}>
                <button className="btn">Play Again</button>
              </Link>
            </div>
          }
          
        </div>

        <div className="team house">

          <span>House Picked</span>
          {
            counter == 0 ? 
            <div className={`icon icon-${house} ${playerWin == "lose" ? 'icon-win' : ""}`} style={{ backgroundImage: `url(${houseImage})`}}></div>  
            : 
            <div className="counter">{counter}</div>

          }
          
        </div>

        

      </div>
    </>
  )
}
