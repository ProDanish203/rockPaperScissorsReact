import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { Play } from "./Components/Play";
import { Game } from "./Components/Game";
import { useState } from 'react';

function App() {

  const [choice, setChoice] = useState("")
  const [score, setScore] = useState(0)

  return (
    <>
    <Router>

        <div className="wrapper">

          <Header score={score}/>

          <Routes>
            <Route path='/' element={<Play setChoice={setChoice}/>}></Route>
            <Route path='game' element={<Game choice={choice} score={score} setScore={setScore}/>}></Route>
          </Routes>

        </div>

        <Footer/>



      </Router>
    </>
  );
}

export default App;
