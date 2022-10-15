import React from 'react';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './components/views/home';
import GameOver from './components/views/game_over';
import Game from './components/views/game';
import Leaderboard from './components/views/leaderboard';
import Login from './components/views/login';
import SignUp from './components/views/signup';


function App() {

  return (
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/go' element={<Game/>}/>
      <Route exact path='/game_over' element={<GameOver/>}/>
      <Route exact path='/high_scores' element={<Leaderboard/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/sign_up' element={<SignUp/>}/>
    </Routes>
  );
}

export default App;
