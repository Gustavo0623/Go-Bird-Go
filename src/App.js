import React from 'react';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './components/views/home';
import GameOver from './components/views/game_over';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/:game_over' element={<GameOver/>}/>
    </Routes>
  );
}

export default App;
