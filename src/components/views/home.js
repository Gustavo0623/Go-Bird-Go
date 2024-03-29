import React from "react";
import { useNavigate } from "react-router-dom";

// Layout Components
import Background from "../layout/background";
import Floor from "../layout/floor";
import Header from "../layout/header";
import Body from "../layout/body";

// Initial page 
const Home = () => {
    const navigate = useNavigate()

    // To clear display of these elements while on this page
    setTimeout(() => {
        document.getElementById('create').style.display= 'none'
        document.getElementById('edit').style.display= 'none'
        document.getElementById('h-score-sign').style.display= 'none'
        document.getElementById('c-score-sign').style.display= 'none'
    })

    return (
        <div>
            <Header/>
            <Background/>
            <Body/>
            <div id="winning-msg" className="w-50" style={{margin: 'auto', left: '25vw'}}>
                <p id="msg">Welcome!</p>
                <p id="msg-2">Fly: Press + HOLD down "SPACEBAR"</p>
                <p id="msg-3">RELEASE to glide down!</p>
                <p id="msg-4">Avoid the incoming Projectiles!</p>
                <button id="go" onClick={() => {
                    navigate('/map_select')
                }}>
                    Select Map
                </button>
            </div>
            <Floor/>
        </div>
    )
}

// Export
export default Home