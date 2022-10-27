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
import Form2 from './components/views/form_2';
import Form3 from './components/views/form_3';

// Context for variables that are used between components
export const ProjContext = React.createContext({ projValue: null, setProjValue: () => {} })
export const GameContext = React.createContext({ gameStatus: null, setGameStatus: () => {} })
export const PushContext = React.createContext([{ newProjValue: null, setNewProjValue: () => {} }, { coinValue: null, setCoinValue: () => {} }, {mapName: null, setMapName: () => {} }, { mapId: null, setMapId: () => {} }])
export const MapListContext = React.createContext({ mapList: null, setMapList: ()=> {} })

function App() {
  const[ projValue, setProjValue ] = useState(null)
  const[ gameStatus, setGameStatus ] = useState(null)
  const[ newProjValue, setNewProjValue] = useState(null)
  const[ coinValue, setCoinValue ] = useState(null)
  const[ mapName, setMapName ] = useState(null)
  const[ mapId, setMapId ] = useState(null)
  const[ mapList, setMapList ] = useState(null)

  return (
    <MapListContext.Provider value={{mapList, setMapList}}>
      <ProjContext.Provider value={[{projValue, setProjValue}, {gameStatus, setGameStatus}]}>
        <PushContext.Provider value={[{mapId, setMapId}, {newProjValue, setNewProjValue}, {coinValue, setCoinValue}, {mapName, setMapName}]}>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/map_select' element={<DisplayMaps/>}/>
            <Route exact path='/go' element={<Game/>}/>
            <Route exact path='/game_over' element={<GameOver/>}/>
            <Route exact path='/high_scores' element={<Leaderboard/>}/>
            <Route exact path='/map_create' element={<Create/>}/>
            <Route exact path='/map_create/2' element={<Form2/>}/>
            <Route exact path='/map_create/3' element={<Form3/>}/>
            <Route exact path='/map_edit' element={<Edit/>}/>
          </Routes>
        </PushContext.Provider>
      </ProjContext.Provider>
    </MapListContext.Provider>
    
      
  );
}

export default App;
