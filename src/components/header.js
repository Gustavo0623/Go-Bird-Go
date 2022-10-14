import React from "react";
import Score from "./score";
import HighScore from "./highscore";

const Header = () => {
    return (
        <header>
            <div class="title">
                <h1>Go Bird Go!</h1>
                <p id="dev">Developed by Gustavo Martinez</p>
            </div>
        </header>
    )
}

// Export 
export default Header