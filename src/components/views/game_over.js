import React from "react";
import Header from "../layout/header";
import Background from "../layout/background";
import Body from "../layout/body";
import Floor from "../layout/floor";

const GameOver = () => {
    return (
        <div>
            <Header/>
            <Background/>
            <Body/>
            <div id="winning-msg">
                <p id="msg">Game Over</p>
                <p id="msg-2">Your Score Is</p>
                <p id="msg-3">0</p>
                <p id="msg-4">Try Again?</p>
                <button id="go">Go Bird Go!</button>
            </div>
            <Floor/>
        </div>
    )
}

export default GameOver