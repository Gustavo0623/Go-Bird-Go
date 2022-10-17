import React from "react"
import { useNavigate } from "react-router-dom"

import Header from "../layout/header"
import Background from "../layout/background"
import Floor from "../layout/floor"
import Bird from "../layout/bird"
import Projectile from "../layout/projectiles"
import Coin from "../layout/coin"

const Game = () => {
    const navigate = useNavigate()
    const high = getVHInPx(.63)
    const mid = getVHInPx(.30)
    const low = getVHInPx(0)
    let direction = null
    let projDirection = null 
    let projY;
    let random;
    let yPosition = [random, high, low, mid, random, random, random, random, random];
    let coinY;
    let coinYPosition = [random, high, low, mid, random, random, random, random, random]

    function getRandomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        Math.floor(Math.random() * (max - min + 1) + min);
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    function randomPosition () {
        let randomPos = getRandomNumber(0, 63);
        document.getElementById('coin').style.left = `${getVWInPx(1)}px`
        document.getElementById('coin').style.bottom = `${getVHInPx(randomPos/100)}px`
    }

    function randomProjPosition () {
        let randomPos = getRandomNumber(0, 63);
        document.getElementById('projectile').style.left = `${getVWInPx(1)}px`
        document.getElementById('projectile').style.bottom = `${getVHInPx(randomPos/100)}px`
    }

    const delay = (i) => {
        setTimeout(()=> {
            if (yPosition[i] === random) {
                randomProjPosition()
            } else {
                projY = yPosition[i]
                document.getElementById('projectile').style.left = `${getVWInPx(1)}px`
                document.getElementById('projectile').style.bottom = `${projY}px`
            }
        }, i*2000)
    }

    const coinDelay = (i) => {
        setTimeout(() => {
            if (coinYPosition[i] === random){
                randomPosition()
            } else {
                coinY = coinYPosition[i]
                document.getElementById('coin').style.left = `${getVWInPx(1)}px`
                document.getElementById('coin').style.bottom = `${coinY}px`
            }
        }, i * 2000 + 1000)
    }

    for (let i = 0; i < yPosition.length; i++) {
        delay(i)
        coinDelay(i)
    }
    
    //const  numProj = 5




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
               x-=8 
        }

        proj.style.left = `${x}px`
    }
    
    /*let replaceInt = setInterval(()=> {
        document.getElementById('projectile').style.left = `${getVWInPx(1)}px`
        document.getElementById('projectile').style.bottom = `${projY}px`
    }, 3000)*/
    

    
    setTimeout(() => {
        //clearInterval(replaceInt)
        clearInterval(gameInt)
        navigate('/game_over')
    }, 30000);// value to be edited

    let gameInt;
    gameInt = setInterval(() => {
        move(document.getElementById('bird'))
        moveProj(document.getElementById('projectile'))
        moveProj(document.getElementById('coin'))
    }, 20)

    

    return (
        <div>
           <Header/>
            <Background/>
            <div id="game-items">
                {/* <!-- Bird img from https://opengameart.org/content/free-game-asset-grumpy-flappy-bird-sprite-sheets --> */}
                <Bird/>
                <Coin/>
                <Projectile/>
            </div>
            <Floor/>
        </div>
    )
}

// Export
export default Game