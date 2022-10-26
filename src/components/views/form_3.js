import React from "react"
import Header from "../layout/header"
import Body from "../layout/body"
import Background from "../layout/background"
import Floor from "../layout/floor"
import NameForm from "../layout/name_form"

const Form3 = () => {

    // To clear display of these elements while on this page
    setTimeout(() => {
        document.getElementById('h-score-sign').style.display= 'none'
        document.getElementById('c-score-sign').style.display= 'none'
        document.getElementById('background-image').src = '../images/nature-background.png'
        document.getElementById('floor').src = '../images/floor-background.png'
    })

    return (
        <div>
            <Header/>
            <Background/>
            <Body/>
            <NameForm/>
            <Floor/>
        </div>
    )
}

// Export
export default Form3