import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../layout/header";
import Background from "../layout/background";
import Floor from "../layout/floor";
import Body from "../layout/body";
import {ProjContext} from "../../App";

const DisplayMaps = () => {

    const projContext = useContext(ProjContext)[0]
    let map;

    const navigate = useNavigate()

    const [gameMap, setGameMap] = useState(null)
  
    useEffect(() => {
        getGameMap()
    }, [])

    // To fetch data Fron Database
    const getGameMap = () => {

        // To clear display of these elements while on this page
        document.getElementById('h-score-sign').style.display= 'none'
        document.getElementById('c-score-sign').style.display= 'none'

        return fetch('http://localhost:5000/maps', {method: 'GET'})
        .then(response=> {
                return response.text();
        })
        .then(data=> {
            setGameMap(JSON.parse(data))
        })
        .catch(error => {
            console.log(error)
        })
    } 
    
    // To set Context of map that is selected to Game page to use to 
    // initialize game based on the map values
    function changeMap (sel) {
        map = sel.options[sel.selectedIndex].value
        map = JSON.parse(map)
        projContext.setProjValue(gameMap[map])
        let projectiles = gameMap[map].Projectiles_placement.split(',')
        let coins = gameMap[map].Coins_placement.split(',')
        document.getElementById('msg-3').textContent = `Projectiles: ${projectiles.length}`
        document.getElementById('msg-4').textContent = `Coins: ${coins.length}`
        document.getElementById('go').style.display= `inline`
    }



    return (
        <div>
            <Header/>
            <Background/>
            <Body/>
            {(!gameMap) ? (
                <div id="winning-msg" className="w-50" style={{margin: 'auto', left: '25vw'}}>
                    <p id='msg'>Loading...</p>
                </div>
            ): (
                <div id="winning-msg" className="w-50" style={{margin: 'auto', left: '25vw'}}>
                    <select style={{backgroundColor: "#FFF8.5"}} className='fs-5 fw-bold w-50 text-center px-2 form-select' id='select' onChange={()=> {
                        changeMap(document.getElementById('select'))
                        document.getElementById('disable').disabled = true
                        }}>
                        <option value={''} id={'disable'} key={0}>Choose Map</option>
                        { gameMap.map((map, i) => {
                            return <option value={i} key={i + 1}>
                                {map.Map_Name}
                            </option>
                        })}
                    </select>
                    <p id='msg-3'></p>
                    <p id='msg-4'></p>
                    <button style={{display: 'none'}} id="go" onClick={() => {
                        navigate('/go')
                    }}>
                        Go Bird Go!
                    </button>
                </div>
            )}
            <Floor/>
        </div>
    )
}

export default DisplayMaps