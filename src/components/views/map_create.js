import React from "react"
import Header from "../layout/header"
import Body from "../layout/body"
import Background from "../layout/background"
import Floor from "../layout/floor"
import Form from "../layout/form"

const Create = () => {

    // To clear display of these elements while on this page
    setTimeout(() => {
        document.getElementById('h-score-sign').style.display= 'none'
        document.getElementById('c-score-sign').style.display= 'none'
    })

    return (
        <div>
            <Header/>
            <Background/>
            <Body/>
            <Form/>
            <Floor/>
        </div>
    )
}

// Export
export default Create