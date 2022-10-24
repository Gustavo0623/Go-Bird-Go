import React, {useContext} from "react"
import { useNavigate } from "react-router-dom"

import Header from "../layout/header"
import Background from "../layout/background"
import Floor from "../layout/floor"
import Bird from "../layout/bird"
import Projectile from "../layout/projectiles"
import Coin from "../layout/coin"
import { ProjContext } from "../../App"

const Game = () => {
    const mapValue = useContext(ProjContext)[0].projValue
    const gameContext = useContext(ProjContext)[1]
    const navigate = useNavigate()
    const high = getVHInPx(.63)
    const mid = getVHInPx(.30)
    const low = getVHInPx(0)
    let direction = null
    let projDirection = null 
    let projY;
    let coinY;
    let random;
    let executed = false;
    let collected = false;
    let gameLength;
    let score = 0
    let lives;
    // arrays to be replaced with data in database 
    // UPDATE: arrays updated
    let yPosition = mapValue.Projectiles_placement.split(',');
    let coinYPosition = mapValue.Coins_placement.split(',');

    const fixValue = (element, i) => {
        if (element[i] === 'mid'){
            element[i] = mid
        } else if (element[i] === 'high'){
            element[i] = high
        } else if (element[i] === 'low'){
            element[i] = low
        } else if (element[i] === 'random'){
            element[i] = random
        }
    }
    const calcLives = () => {
        let calc = gameLength-2000
        if (calc / 2000 <= 3 ) {
        return lives = 1
        }
    }

    if (yPosition.length >= coinYPosition.length) {
        gameLength = yPosition.length * 2000 + 2000
        calcLives()
    } else {
        gameLength = coinYPosition.length * 2000 + 2000
        calcLives()
    }


    const logScore = () => {
        document.getElementById('c-score').innerHTML = `${score}/${coinYPosition.length}`
    }
    logScore()

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
            if (lives <= 0) {
                return
            } else {
                if (yPosition[i] === random) {
                    randomProjPosition()
                    executed = false
                } else {
                    projY = yPosition[i]
                    document.getElementById('projectile').style.left = `${getVWInPx(1)}px`
                    document.getElementById('projectile').style.bottom = `${projY}px`
                    executed = false
                }
            }
        }, i*2000)
    }

    const coinDelay = (i) => {
        setTimeout(() => {
            if (lives <= 0) {
                return
            } else {
                if (coinYPosition[i] === random){  
                    document.getElementById('coin').style.opacity = 1
                    randomPosition()
                    collected = false
                } else {
                    coinY = coinYPosition[i]
                    document.getElementById('coin').style.left = `${getVWInPx(1)}px`
                    document.getElementById('coin').style.bottom = `${coinY}px`
                    document.getElementById('coin').style.opacity = 1
                    collected = false
                }  
            }
        }, i * 2000 + 1000)
    }

    for (let i = 0; i < yPosition.length; i++) {
        if (lives <=0) {
            break
        }
        fixValue(yPosition, i)
        delay(i)
    }
    for (let i = 0; i<coinYPosition.length; i++) {
        if (lives <=0) {
            break
        }
        fixValue(coinYPosition, i)
        coinDelay(i)
    }

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
               x-=7 
        }

        proj.style.left = `${x}px`
    }

    const collisionCheck = () => {
        let birdLeft = parseFloat(document.getElementById('bird').style.left)
        let birdBottom = parseFloat(document.getElementById('bird').style.bottom)
        let birdHeight = parseFloat(document.getElementById('bird').style.height)
        let birdWidth = parseFloat(document.getElementById('bird').style.width)
        let projLeft = parseFloat(document.getElementById('projectile').style.left)
        let projBottom = parseFloat(document.getElementById('projectile').style.bottom)
        let projHeight = parseFloat(document.getElementById('projectile').style.height)
        let projWidth = parseFloat(document.getElementById('projectile').style.width)
        let coinLeft = parseFloat(document.getElementById('coin').style.left)
        let coinBottom = parseFloat(document.getElementById('coin').style.bottom)
        let coinHeight = parseFloat(document.getElementById('coin').style.height)
        let coinWidth = parseFloat(document.getElementById('coin').style.width)

        const execute = () => {
            lives--
            executed = true
        }

        const collectCoin = () => {

            if (birdLeft+birdWidth >= coinLeft && birdLeft <= coinLeft+coinWidth) {
                if (birdBottom+birdHeight >= coinBottom && birdBottom <= coinBottom+coinHeight) {
                    if (collected === true){
                        return
                    } else {
                        document.getElementById('coin').style.opacity = 0
                        score++
                        logScore()
                        collected = true
                        console.log(score)
                    }
                }
            }
        }

        // Bird collide with projectile
        if (birdLeft+birdWidth >= projLeft && birdLeft <= projLeft+projWidth) {
            if (birdBottom+birdHeight >= projBottom && birdBottom <= projBottom+projHeight){
                if (executed === true) {
                    return
                } else {
                    execute()
                }
                
            }
        } else {
            collectCoin()
        }
    }

    let gameTimeout = setTimeout(() => {
        clearInterval(gameInt)
        gameContext.setGameStatus({
            Pass: true,
            coinsCollected: score,
            totalCoins: coinYPosition.length
        })
        navigate('/game_over')
    }, gameLength);// value to be edited

    let gameInt;
    gameInt = setInterval(() => {
        move(document.getElementById('bird'))
        moveProj(document.getElementById('projectile'))
        moveProj(document.getElementById('coin'))
        collisionCheck()
        if (lives <=0) {
            clearTimeout(gameTimeout)
            clearInterval(gameInt)
            gameContext.setGameStatus({
                Pass: false,
                coinsCollected: score,
                totalCoins: coinYPosition.length
            })
            navigate('/game_over')
        }
    }, 10)


    

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