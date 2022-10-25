import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";

import Header from "../layout/header";
import Background from "../layout/background";
import Body from "../layout/body";
import Floor from "../layout/floor";
import { ProjContext } from "../../App";

const GameOver = () => {
    const navigate = useNavigate()
    let gameContext = useContext(ProjContext)[1]
    gameContext = gameContext.gameStatus

    // To clear display of these elements while on this page
    setTimeout(() => {
        document.getElementById('h-score-sign').style.display= 'none'
        document.getElementById('c-score-sign').style.display= 'none'
    })


    return (
        <div>
            <Header/>
            <Background/>
            <Body/>
            <div id="winning-msg" className="w-50" style={{margin: 'auto', left: '25vw'}}>
                {(gameContext.Pass === true && gameContext.coinsCollected === gameContext.totalCoins) ? (
                    <p id="msg">Congratulations!</p>
                ):(
                    <p id="msg">OH NO!</p>
                )}
                {(gameContext.Pass === true) ? (
                    <p className="fw-bold">You Dodged All Projectiles!</p>
                ):(
                    <p className="fw-bold">You Ran Out Of Lives!</p>
                )}
                {(gameContext.coinsCollected === gameContext.totalCoins) ? (
                    <p className="fw-bold">You Collected All Possible Coins!</p>
                ):(
                    <p className="fw-bold">You Missed Some Coins!</p>
                )}
                <p className="fw-bold">Try Again?</p>
                <button onClick={() => {navigate('/go')}} id="go">Go Bird Go!</button>
            </div>
            <Floor/>
        </div>
    )
}

export default GameOver