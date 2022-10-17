const Coin = () => {
    let coinLeft;
    let coinBottom;
    let coinHeight;
    let coinWidth;

    // convert viewheight and viewwidth to pixels
    function getVWInPx(num){
        return document.documentElement.clientWidth * num
    }
    function getVHInPx(num){
        return document.documentElement.clientHeight * num
    }

    // bird initial position
    const coinPosition = () => {
        coinLeft = getVWInPx(2)
        coinBottom = getVHInPx(.30)
        coinHeight = getVHInPx(0.050)
        coinWidth = getVWInPx(0.03)
    }

    coinPosition()


    const coinStyle = {
        position: 'absolute',
        height: `${coinHeight}px`,
        width: `${coinWidth}px`,
        left: `${coinLeft}px`,
        bottom: `${coinBottom}px`
    }

    return (
        <img style={coinStyle} id="coin" alt="2D coin" src="./images/coin.PNG"/>
    )
}

export default Coin