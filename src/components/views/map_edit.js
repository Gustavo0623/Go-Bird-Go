import React from "react"
import Header from "../layout/header"
import Body from "../layout/body"
import Background from "../layout/background"
import Floor from "../layout/floor"

const Edit = () => {

    setTimeout(() => {
        document.getElementById('h-score-sign').style.display= 'none'
        document.getElementById('c-score-sign').style.display= 'none'
    })

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
export default Edit