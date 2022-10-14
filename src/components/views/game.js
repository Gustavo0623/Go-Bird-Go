import React from "react"
import Header from "../layout/header"
import Body from "../layout/body"
import Background from "../layout/background"
import Floor from "../layout/floor"

const Game = () => {
    return (
        <div>
            <Header/>
            <Background/>
            <Body/>
            <Floor/>
        </div>
    )
}

// Export
export default Game