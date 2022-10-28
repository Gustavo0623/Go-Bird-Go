import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MapListContext } from "../../App";
import { PushContext } from "../../App";

const NameForm = () => {
    const navigate = useNavigate()
    const newMap = useContext(PushContext)
    const idContext = useContext(PushContext)[0]
    const mapContext = useContext(MapListContext).mapList
    const updateContext = useContext(MapListContext).setMapList
    const nameContext = useContext(PushContext)[3]
    let nameText;
    let newMapObj;
    const [name, setName] = useState('')
    const nameCheck = () => {
        if (name === '') {
            document.getElementById('button-addon2').disabled = true
        } else {
            document.getElementById('button-addon2').disabled = false
        }
    }

    setTimeout(()=>{
        nameCheck()
        createMap() 
    })

    const createMap = () => {
        idContext.setMapId(mapContext.length + 1)
        nameContext.setMapName(name)
    }
    
        

    const sendData = () => {
        if (nameContext.mapName != null) {
            newMapObj = {
                id: parseFloat(idContext.mapId),
                Projectiles_placement: `${newMap[1].newProjValue}`,
                Coins_placement: `${newMap[2].coinValue}`,
                Map_Name: `${nameContext.mapName}`
            } 
            updateContext(mapContext.concat(newMapObj))

            fetch('http://localhost:5000/maps/new-map', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newMapObj),
            }) 
            .then(res => {
                console.log(res.data)
            }) 
            .catch( err => {
                console.log(err)
            })
        } 
    }


    return(
        <div className="w-50" id="winning-msg" style={{left: '25%'}}>
            <h4 className="fw-bold">Set Map Name</h4>
            <div className="input-group mb-3 w-75 d-grid gap-3" style={{display: 'flex', flexDirection: 'column', justifyContent: "spaceEvenly"}}>
                <input type="text" id="map-name" className="form-control w-100 rounded text-center" placeholder="Map Name" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={()=> {
                    nameText = document.getElementById('map-name')
                    setName(nameText.value)
                }}/>
                <button className="btn btn-outline-secondary rounded" type="button" id="button-addon2" onClick={()=>{ 
                    document.getElementById('button-addon2').disabled = true
                    sendData()
                    setTimeout(()=>{navigate('/')})
                }}>
                    Create Map!
                </button>
            </div>
        </div>
    )
}

export default NameForm