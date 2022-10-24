import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate()

    return(
        <div className="flex-column" id="nav">
        <ul className="nav flex-column">
            <li className="nav-item rounded">
                <p className="nav-link active rounded fw-bold" aria-current="page" style={{color: 'black', backgroundColor: '#FFF6'}} onClick={()=>{navigate('/')}} >Home</p>
            </li>
            <li className="nav-item rounded">
                <p className="nav-link rounded fw-bold" style={{color: 'black', backgroundColor: '#FFF6'}} onClick={()=>{navigate('/map_select')}} >Map Select</p>
            </li>
            <li className="nav-item rounded">
                <p className="nav-link rounded fw-bold" style={{color: 'black', backgroundColor: '#FFF6'}} onClick={()=>{navigate('/map_create')}} >Create</p>
            </li>
            <li className="nav-item rounded">
                <p className="nav-link rounded fw-bold" style={{color: 'black', backgroundColor: '#FFF6'}} onClick={()=>{navigate('/map_edit')}} >Edit/Delete</p>
            </li>
        </ul>
        </div>
    )
}

export default Navbar