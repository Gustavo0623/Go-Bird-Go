import React from "react";
import Background from "./background";
import Floor from "./floor";
import Game from "./game";
import Header from "./header";

// Initial page 
const Home = () => {
    return (
        <div>
            <Header/>
            <Background/>
            <Game/>
            <Floor/>
        </div>
    )
}

// Export
export default Home