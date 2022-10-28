import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MapListContext } from "../../App";
import { PushContext , EditContext} from "../../App";
import Header from "../layout/header"
import Body from "../layout/body"
import Background from "../layout/background"
import Floor from "../layout/floor"


const EditForm3 = () => {
    const editContext = useContext(EditContext).editName
    const navigate = useNavigate()
    const newMap = useContext(PushContext)
    const idContext = useContext(PushContext)[0]
    const mapContext = useContext(MapListContext).mapList
    const updateContext = useContext(MapListContext).setMapList
    const nameContext = useContext(PushContext)[3]
    console.log(newMap)
    console.log(mapContext)
    console.log(idContext)
    console.log(nameContext)
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
        document.getElementById('h-score-sign').style.display= 'none'
        document.getElementById('c-score-sign').style.display= 'none'
        document.getElementById('background-image').src = '../images/nature-background.png'
        document.getElementById('floor').src = '../images/floor-background.png'
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

            fetch('http://localhost:5000/maps/' + editContext, {
                method: 'PUT',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newMapObj),
            }) 
            .then(response=> {
                return response.text();
            })
            .then(data=> {
                console.log(data)
            })
            .catch(error => {
                console.log(error)
            })
        } 
    }   

    return (
        <div>
            <Header/>
            <Background/>
            <Body/>
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
                    Edit Map!
                </button>
            </div>
        </div>
            <Floor/>
        </div>
    )
}

// Export
export default EditForm3