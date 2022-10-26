import React, { useState } from "react";

const NameForm = () => {
    let nameText;
    const [name, setName] = useState('')
    const nameCheck = () => {
        if (name === '') {
            document.getElementById('button-addon2').disabled = true
        } else {
            document.getElementById('button-addon2').disabled = false
        }
    }

    const createMap = () => {
        
    }


    setTimeout(() => {
        console.log(name)
        nameCheck()
    })


    return(
        <div className="w-50" id="winning-msg" style={{left: '25%'}}>
            <h4 className="fw-bold">Set Map Name</h4>
            <div className="input-group mb-3 w-75 d-grid gap-3" style={{display: 'flex', flexDirection: 'column', justifyContent: "spaceEvenly"}}>
                <input type="text" id="map-name" className="form-control w-100 rounded text-center" placeholder="Map Name" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={()=> {
                    nameText = document.getElementById('map-name')
                    setName(nameText.value)
                }}/>
                <button className="btn btn-outline-secondary rounded" type="button" id="button-addon2">Create Map!</button>
            </div>
        </div>
    )
}

export default NameForm