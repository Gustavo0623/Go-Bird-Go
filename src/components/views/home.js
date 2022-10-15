import React from "react";
import { useNavigate } from "react-router-dom";

// Layout Components
import Background from "../layout/background";
import Floor from "../layout/floor";
import Header from "../layout/header";
import Body from "../layout/body";
import ClickBtn from "../mechanics/button_click";

// Initial page 
const Home = () => {
    const navigate = useNavigate()

    return (
        <div>
            <Header/>
            <Background/>
            <Body/>
            <div id="winning-msg">
                <p id="msg">Welcome!</p>
                <p id="msg-2">Fly: Press + HOLD down "SPACEBAR"</p>
                <p id="msg-3">RELEASE to glide down!</p>
                <p id="msg-4">Avoid the incoming tubes!</p>
                <button id="go" onClick={() => {
                    navigate('/go')
                    ClickBtn()
                }}>
                    Go Bird Go!
                </button>
            </div>
            <Floor/>
        </div>
    )
}

// Export
export default Home