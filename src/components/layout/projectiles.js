const Projectile = () => {
    let projLeft;
    let projBottom;
    let projHeight;
    let projWidth;

    // convert viewheight and viewwidth to pixels
    function getVWInPx(num){
        return document.documentElement.clientWidth * num
    }
    function getVHInPx(num){
        return document.documentElement.clientHeight * num
    }

    // bird initial position
    const projPosition = () => {
        projLeft = getVWInPx(1)
        projBottom = getVHInPx(.30)
        projHeight = getVHInPx(0.050)
        projWidth = getVWInPx(0.055)
    }

    projPosition()


    const projStyle = {
        position: 'absolute',
        height: `${projHeight}px`,
        width: `${projWidth}px`,
        left: `${projLeft}px`,
        bottom: `${projBottom}px`
    }

    return (
        <img style={projStyle} id="projectile" alt="projectile" src="./images/projectile.png"/>
    )
}

export default Projectile