import React from 'react'
import './ModeSelector.css'

export default props => {

    const smallUrl = `http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`

    const bigUrl = `http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`

    return (
        <div className="buttons-main">
            <button onClick={() => props.onSelect(smallUrl)} className="btn btn-success button-main">Загрузить 32 элемента</button>
            <button onClick={() => props.onSelect(bigUrl)} className="btn btn-warning button-main">Загрузить 1к элементов</button>
        </div>
    )
}