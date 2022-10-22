import React, { useState} from 'react';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './components/views/home';
import GameOver from './components/views/game_over';
import Game from './components/views/game';
import Leaderboard from './components/views/leaderboard';
import Login from './components/views/login';
import SignUp from './components/views/signup';
import DisplayMaps from './components/views/display_map';

export const ProjContext = React.createContext({ projValue: null, setProjValue: () => {} })

function App() {
  const[ projValue, setProjValue ] = useState(null)


  return (
    <ProjContext.Provider value={{projValue, setProjValue}}>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/map_select' element={<DisplayMaps/>}/>
      <Route exact path='/go' element={<Game/>}/>
      <Route exact path='/game_over' element={<GameOver/>}/>
      <Route exact path='/high_scores' element={<Leaderboard/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/sign_up' element={<SignUp/>}/>
    </Routes>
    </ProjContext.Provider>
  );
}

export default App;
