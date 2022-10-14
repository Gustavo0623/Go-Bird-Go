const newBird = (url) => {
    let bird = document.createElement('img')
    bird.src = url
    bird.style.position = 'absolute'
    if(parseFloat(screen.width) <= 785){
        bird.style.height = getVHInPx(0.053) + 'px'
    } else {
        bird.style.height = getVHInPx(0.065) + 'px'
    }
    if(parseFloat(screen.width) <= 785){
        bird.style.width = getVWInPx(0.105) + 'px'
    } else {
        bird.style.width = getVWInPx(0.045) + 'px'
    }

    document.getElementById('game-items').append(bird)
    return bird
}

export default newBird