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
    let coinY;
    let random;
    let executed = false;
    let collected = false;
    let score = 0
    let lives = 5
    //arrays to be replaced with data in database
    let yPosition = [random, high, low, mid, random];
    
    let coinYPosition = [random, high, low, mid, random, random, random, random, random];

    let gameLength;

    /*const [gameMap, setGameMap] = useState()
  
    useEffect(() => {
        getGameMap()
    }, [])


    const getGameMap = () => {
    const removeBrackets = (object) => {
        object = object.replace("{", "")
        object = object.replace("}", "")
        object = object.replace('"', '')
        object = object.replace('"', '')
        object = object.replace('"', '')
        object = object.replace('"', '')
        object = object.split(':')
        object = object[1].split(',')
        return object
    }

    return fetch('http://localhost:5000/maps/1', {method: 'GET'})
        .then(response=> {
            return response.text();
        })
        .then(data=> {
            setGameMap(removeBrackets(data));
        })
    }*/

    if (yPosition.length >= coinYPosition.length) {
        gameLength = yPosition.length * 2000 + 2000
        console.log('running based off projectile numbers ' + gameLength)
    } else {
        gameLength = coinYPosition.length * 2000 + 2000
        console.log('running based off coin numbers' + gameLength)
    }

    const logScore = () => {
        // add data to array

        // reset data

        collected = 0
        lives = 5
    }

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
                executed = false
            } else {
                projY = yPosition[i]
                document.getElementById('projectile').style.left = `${getVWInPx(1)}px`
                document.getElementById('projectile').style.bottom = `${projY}px`
                executed = false
            }
        }, i*2000)
    }

    const coinDelay = (i) => {
        setTimeout(() => {
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
        }, i * 2000 + 1000)
    }

    for (let i = 0; i < yPosition.length; i++) {
        delay(i)
    }
    for (let i = 0; i<coinYPosition.length; i++) {
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
               x-=6 
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
            console.log (lives)
        }

        const collectCoin = () => {

            if (birdLeft+birdWidth >= coinLeft && birdLeft <= coinLeft+coinWidth) {
                if (birdBottom+birdHeight >= coinBottom && birdBottom <= coinBottom+coinHeight) {
                    if (collected === true){
                        return
                    } else {
                        document.getElementById('coin').style.opacity = 0
                        score++
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

    setTimeout(() => {
        clearInterval(gameInt)
        navigate('/game_over')
        logScore()
    }, gameLength);// value to be edited

    let gameInt;
    gameInt = setInterval(() => {
        move(document.getElementById('bird'))
        moveProj(document.getElementById('projectile'))
        moveProj(document.getElementById('coin'))
        collisionCheck()
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