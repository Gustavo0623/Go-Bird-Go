import React, { useState} from 'react';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './components/views/home';
import GameOver from './components/views/game_over';
import Game from './components/views/game';
import Leaderboard from './components/views/leaderboard';
import Create from './components/views/map_create';
import Edit from './components/views/map_edit';
import DisplayMaps from './components/views/display_map';

// Context for variables that are used between components
export const ProjContext = React.createContext({ projValue: null, setProjValue: () => {} })
export const GameContext = React.createContext({ gameStatus: null, setGameStatus: () => {} })

function App() {
  const[ projValue, setProjValue ] = useState(null)
  const[ gameStatus, setGameStatus ] = useState(null)

  return (
    <ProjContext.Provider value={[{projValue, setProjValue}, {gameStatus, setGameStatus}]}>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/map_select' element={<DisplayMaps/>}/>
      <Route exact path='/go' element={<Game/>}/>
      <Route exact path='/game_over' element={<GameOver/>}/>
      <Route exact path='/high_scores' element={<Leaderboard/>}/>
      <Route exact path='/map_create' element={<Create/>}/>
      <Route exact path='/map_edit' element={<Edit/>}/>
    </Routes>
    </ProjContext.Provider>
  );
}

export default App;
