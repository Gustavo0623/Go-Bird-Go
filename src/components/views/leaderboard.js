import React from "react"
import Header from "../layout/header"
import Body from "../layout/body"
import Background from "../layout/background"
import Floor from "../layout/floor"


// To be implemented at a later time
 
const Leaderboard = () => {
    return (
        <div>
            <Header/>
            <Background/>
            <Body/>
            <div id='winning-msg'></div>
            <Floor/>
        </div>
    )
}

// Export
export default Leaderboard