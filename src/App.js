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
      <Route path='/' element={<Home/>}/>
      <Route path='/go' element={<Game/>}/>
      <Route path='/game_over' element={<GameOver/>}/>
      <Route path='/high_scores' element={<Leaderboard/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/sign_up' element={<SignUp/>}/>
    </Routes>
  );
}

export default App;
