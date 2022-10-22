import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../layout/header";
import Background from "../layout/background";
import Floor from "../layout/floor";
import Body from "../layout/body";
import { ProjContext } from "../../App";

const DisplayMaps = () => {
    const projContext = useContext(ProjContext)
    let map;

    const navigate = useNavigate()

    const [gameMap, setGameMap] = useState(null)
  
    useEffect(() => {
        getGameMap()
    }, [])


    const getGameMap = () => {

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
    if (gameMap) {
        console.log(gameMap[0].id)

    }
    

    function changeMap (sel) {
        map = sel.options[sel.selectedIndex].value
        map = JSON.parse(map)
        projContext.setProjValue(gameMap[map])
        let projectiles = gameMap[map].Projectiles_placement.split(',')
        let coins = gameMap[map].Coins_placement.split(',')
        document.getElementById('msg-3').textContent = `Projectiles: ${projectiles.length}`
        document.getElementById('msg-4').textContent = `Coins: ${coins.length}`
    }



    return (
        <div>
            <Header/>
            <Background/>
            <Body/>
            {(!gameMap) ? (
                <div id="winning-msg">
                    <p id='msg'>Loading...</p>
                </div>
            ): (
                <div id="winning-msg">
                    <select id='select' onChange={()=> {changeMap(document.getElementById('select'))}}>
                        { gameMap.map((map, i) => {
                            return <option value={i} id={(map.id === 1)?(`msg-2`):(`msg-${map.id}`)} key={i}>
                                {map.Map_Name}
                            </option>
                        })}
                    </select>
                    <p id='msg-3'></p>
                    <p id='msg-4'></p>
                    <button id="go" onClick={() => {
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