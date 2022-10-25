const Form = () => {

    return (
        <div className="input-group w-50" id="winning-msg" style={{flexDirection: 'row', left: '25%'}}>
            <div className="w-75" style={{display: 'flex', flexDirection: 'row', }}>
                <button className="btn btn-outline-secondary w-25" type="button"  aria-expanded="false">Remove</button>
                <select className="form-select" aria-label="Default select example">
                    <option selected>Projectile Position</option>
                    <option value="1">High</option>
                    <option value="2">Middle</option>
                    <option value="3">Low</option>
                </select>
                <button className="btn btn-outline-secondary w-25" type="button"  aria-expanded="false">Add</button>
            </div>
        </div>
    )
}

export default Form