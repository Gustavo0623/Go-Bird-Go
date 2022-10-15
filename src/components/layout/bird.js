const Bird = () => {
    let birdLeft;
    let birdBottom;
    let birdHeight;
    let birdWidth;

    // convert viewheight and viewwidth to pixels
    function getVWInPx(num){
        return document.documentElement.clientWidth * num
    }
    function getVHInPx(num){
        return document.documentElement.clientHeight * num
    }

    // bird initial position
    const birdPosition = () => {
        birdLeft = getVWInPx(.35)
        birdBottom = getVHInPx(.30)
        birdHeight = getVHInPx(0.065)
        birdWidth = getVWInPx(0.045)
    }

    birdPosition()


    const birdStyle = {
        position: 'absolute',
        height: `${birdHeight}px`,
        width: `${birdWidth}px`,
        left: `${birdLeft}px`,
        bottom: `${birdBottom}px`
    }

    return (
        <img style={birdStyle} id="bird" alt="bird" src="./images/bird1.png"/>
    )
}

export default Bird