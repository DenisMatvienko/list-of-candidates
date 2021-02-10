import React, {useState} from 'react'

export default props => {

    const [value, setValue] = useState('')

    const valueChangeHandler = event => {
        setValue(event.target.value)
    }

    return (
        <div className="input-group mb-5 mt-3">
            <input 
            type="text" 
            className="form-control" 
            placeholder="Recipient's data..." 
            aria-label="Recipient's username" 
            aria-describedby="basic-addon2"
            onChange={valueChangeHandler}
            value={value}
            />
            <div className="input-group-append">
                <button className="btn btn-outline-secondary"
                onClick={() => props.onSearch(value)} >Search</button>
            </div>
        </div>
    )
}