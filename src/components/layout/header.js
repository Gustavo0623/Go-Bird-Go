import React from "react";
import Score from "./score";
import HighScore from "./highscore";

const Header = () => {
    return (
        <header>
            <HighScore/>
            <div className="title">
                <h1>Go Bird Go!</h1>
                <p id="dev">Developed by Gustavo Martinez</p>
            </div>
            <Score/>
        </header>
    )
}

// Export 
export default Header