import React from "react"
import Header from "../layout/header"
import Background from "../layout/background"
import Floor from "../layout/floor"
import Bird from "../layout/bird"

const Game = () => {
    let direction = null

    // convert viewheight to pixels
    function getVHInPx(num){
        return document.documentElement.clientHeight * num
    }

    function move (element,) {
        let y = parseFloat(element.style.bottom)
        if(direction === 'north'){
            // fly limit
            if (y >= getVHInPx(.612)){
                direction = null
            } else {
                y+=1.2
            }
        }
        if(direction === 'south'){
            // floor collision  stop
            if (y <= getVHInPx(0)){
                direction = null
            } else {
                y-=1.1
            }
        }
        
        element.style.bottom = `${y}px`

        document.addEventListener('keydown', function(e){
            if(e.repeat) return;;
        
            if(e.key === ' '){
                direction = 'north'
            }
        })
        
        document.addEventListener('keyup', function(){
            direction = 'south'
        })
        
    }
    
    

    setInterval(() => {
        move(document.getElementById('bird'))
    }, 10)

    return (
        <div>
            <Header/>
            <Background/>
            <div id="game-items">
                {/* <!-- Bird img from https://opengameart.org/content/free-game-asset-grumpy-flappy-bird-sprite-sheets --> */}
                <Bird/>
            </div>
            <Floor/>
        </div>
    )
}

// Export
export default Game