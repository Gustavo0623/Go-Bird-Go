import React from "react"
import { useNavigate } from "react-router-dom"

import Header from "../layout/header"
import Background from "../layout/background"
import Floor from "../layout/floor"
import Bird from "../layout/bird"
import Projectile from "../layout/projectiles"

const Game = () => {
    const navigate = useNavigate()
    let direction = null
    let projDirection = null 
    let numProj = 5


    // convert viewwidth and viewheight to pixels
    function getVWInPx(num){
        return document.documentElement.clientWidth * num
    }

    function getVHInPx(num){
        return document.documentElement.clientHeight * num
    }

    function move (element) {
        let y = parseFloat(element.style.bottom)
        
        if(direction === 'north'){
            // fly limit
            if (y >= getVHInPx(.612)){
                direction = null
            } else {
                y+=5
                document.getElementById('bird').src= './images/bird2.png'
            }
        }
        if(direction === 'south'){
            // floor collision  stop
            if (y <= getVHInPx(0)){
                direction = null
            } else {
                y-=5
                document.getElementById('bird').src= './images/bird1.png'
            }
        }
        
        element.style.bottom = `${y}px`

        document.addEventListener('keydown', function(e){
            if(e.repeat) return;
        
            if(e.key === ' '){
                direction = 'north'
            }
        })
        
        document.addEventListener('keyup', function(){
            direction = 'south'
        })
        
    }

    function moveProj (proj) {
        let x = parseFloat(proj.style.left)
        projDirection = 'east'

        if(projDirection === 'east') {
            if( x<=0 ){
                x = getVWInPx(1)
                numProj--
                console.log(numProj)
            } else {
               x-=5 
            }
        }

        proj.style.left = `${x}px`
    }
    
    

    let gameInt;
    gameInt = setInterval(() => {
        move(document.getElementById('bird'))
        moveProj(document.getElementById('projectile'))
    }, 20)

    setTimeout(() => {
        clearInterval(gameInt)
        navigate('/game_over')
    }, 500000);// value to be edited

    return (
        <div>
           <Header/>
            <Background/>
            <div id="game-items">
                {/* <!-- Bird img from https://opengameart.org/content/free-game-asset-grumpy-flappy-bird-sprite-sheets --> */}
                <Bird/>
                <Projectile/>
            </div>
            <Floor/>
        </div>
    )
}

// Export
export default Game