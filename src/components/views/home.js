import React from "react";
import Background from "../layout/background";
import Floor from "../layout/floor";
import Header from "../layout/header";
import Body from "../layout/body";

// Initial page 
const Home = () => {
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
                <button id="go">Go Bird Go!</button>
            </div>
            <Floor/>
        </div>
    )
}

// Export
export default Home