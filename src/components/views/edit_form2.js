import React, { useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { PushContext } from "../../App"
import Header from "../layout/header"
import Body from "../layout/body"
import Background from "../layout/background"
import Floor from "../layout/floor"

const EditForm2 = () => {

    const navigate = useNavigate()
    const newCoinContext = useContext(PushContext)[2]
    let rangeArr = []
    let range;
    let position;
    let selPosition;
    let sel;
    let selEdit;
    let addButton;
    let editBtn;
    let rangeDisplay;
    let coinLabel;
    let editRangeLabel;
    let allRadioBtns;
    let cNextBtn;

    useEffect(() => {
        document.getElementById('c-cntrlBtn').disabled = true
        document.getElementById('c-edit-btn').disabled = true
        document.getElementById('c-rangeSelEdit').disabled = true
        document.getElementById('c-nextBtn').disabled = true
    }, [])

    const displayControl = () => {
        rangeDisplay.textContent = `Coin ${parseFloat(range.value)} is placed ${rangeArr[parseFloat(range.value) - 1]}`
        editRangeLabel.textContent = `Edit Coin: ${parseFloat(range.value)}`
    }

    const updateRangeArr = () => {
        position = sel.options[sel.selectedIndex].textContent
        rangeArr.push(`${position}`)
        range.min = 1
        range.max = rangeArr.length
        displayControl()
        radioEnable()
        cNextBtn.disabled = false
        coinLabel.textContent = `Number of Coins: ${rangeArr.length}`
        rangeDisplay.textContent = `Coin ${parseFloat(rangeArr.length)} is placed ${position}`
    }

    const radioDisable = () => {
        for (let i=0; i<allRadioBtns.length; i++) {
            allRadioBtns[i].disabled = true
            allRadioBtns[i].checked = false
        }
    }

    const radioEnable = () => {
        for (let i=0; i<allRadioBtns.length; i++) {
            allRadioBtns[i].disabled = false
        }
    }

    const editCheck = () => {
        if (`${selPosition}` === 'Coin Position') {
            editBtn.disabled = true
        } else {
            editBtn.disabled = false
        }
    }

    const remove = () => {
        if (selEdit.disabled === true) {
            range.min = 1
            if(rangeArr.length > 1){
                rangeArr.splice(range.value - 1, 1)
                range.max = rangeArr.length
                displayControl()
                coinLabel.textContent = `Number of Coins: ${rangeArr.length}`
                console.log('good')
            } else {
                range.min = 0
                rangeArr.pop()
                range.max = rangeArr.length
                sel.selectedIndex = 0
                radioDisable()
                addButton.disabled = true
                editBtn.disabled = true
                cNextBtn.disabled = true
                displayControl()
                coinLabel.textContent = `Number of Coins: ${rangeArr.length}`
            }
            
        } else {
            rangeArr.splice(range.value - 1, 1, selEdit.options[selEdit.selectedIndex].textContent)
            displayControl()
        }
    }
    const next = () => {
        let coinString = rangeArr.toString()
        coinString = coinString.toLowerCase()
        newCoinContext.setCoinValue(`${coinString}`)
        navigate('/map_edit_form/3')
    }

    setTimeout(() => {
        document.getElementById('h-score-sign').style.display= 'none'
        document.getElementById('c-score-sign').style.display= 'none'
        document.getElementById('background-image').src = '../images/nature-background.png'
        document.getElementById('floor').src = '../images/floor-background.png'
        cNextBtn = document.getElementById('c-nextBtn')
        addButton = document.getElementById('c-cntrlBtn')
        editBtn = document.getElementById('c-edit-btn')
        addButton.addEventListener('click', updateRangeArr)
        sel = document.getElementById('c-rangeSel')
        selEdit = document.getElementById('c-rangeSelEdit')
        selPosition = selEdit.options[selEdit.selectedIndex].textContent
        selEdit.style.opacity = '.3'
        range = document.getElementById('c-Range')
        rangeDisplay = document.getElementById('coin-text')
        coinLabel = document.getElementById('coinLabel')
        editRangeLabel = document.getElementById('editCoin')
        allRadioBtns = document.querySelectorAll('input[name="flexRadioDefault"]')
        radioDisable()
    })


    return (
        <div>
            <Header/>
            <Background/>
            <Body/>
            <div className="input-group w-50" style={{flexDirection: 'row', left: '25%'}} id="winning-msg">
                <div className="w-75" style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <select className="form-select text-center px-2 w-50" id="c-rangeSel" aria-label="Default select example" onChange={() => {
                        document.getElementById('disable').disabled = true
                        document.getElementById('c-cntrlBtn').disabled = false
                    }}>
                        <option id="disable" value="0">Coin Position</option>
                        <option value="1">High</option>
                        <option value="2">Middle</option>
                        <option value="3">Low</option>
                        <option value="4">Random</option>
                    </select>
                    <button className="btn btn-outline-secondary w-25 control" id="c-cntrlBtn" type="button"  aria-expanded="false">
                        Add
                    </button>
                </div>
                <div className="w-75" style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <p className="fw-bold" id="coinLabel"></p>
                </div>
                <div className="w-75" style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <p id="coin-text"></p>
                </div>
                <div className="w-100" style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <div className="w-50" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <label htmlFor="customRange2" className="form-label" id="editCoin">Edit Coin:</label>
                        <input type="range" className="form-range" min="0" max={rangeArr.length} id="c-Range" onChange={() => {
                        displayControl()
                        }}></input>
                    </div>
                    <div className="px-2" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={()=>{
                                editBtn.textContent = 'Remove'
                                editBtn.disabled = false
                                selEdit.disabled = true
                                selEdit.style.opacity = '.3'
                                selEdit.selectedIndex = 0
                            }}/>
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Remove
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={()=>{
                                editBtn.textContent = 'Replace'
                                selEdit.disabled = false
                                selEdit.style.opacity = '1'
                                selEdit.selectedIndex = 0
                                editCheck()
                            }}/>
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Replace
                            </label>
                        </div>
                    </div>
                </div>
                <div className="w-100" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <div className="w-50">
                        <select className="form-select text-center px-2 w-75" id="c-rangeSelEdit" aria-label="Default select example" onChange={() => {
                            document.getElementById('disable-2').disabled = true
                            editBtn.disabled = false
                        }}>
                            <option id="disable-2" value="0">Coin Position</option>
                            <option value="1">High</option>
                            <option value="2">Middle</option>
                            <option value="3">Low</option>
                            <option value="4">Random</option>
                        </select>
                    </div>
                    <div className="w-25">
                        <button className="btn btn-outline-secondary w-100 control" id="c-edit-btn" type="button"  aria-expanded="false" onClick={()=>{remove()}} >Remove</button>
                    </div>
                </div>
                <button style={{borderRadius: '0.25rem', height: '10%', width: "7%", top: '40%', color:'black'}} className="carousel-control-next" id="c-nextBtn" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" onClick={()=>{next()}}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <Floor/>
        </div>
    )
}

// Export
export default EditForm2