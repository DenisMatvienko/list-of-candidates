import React from 'react'

export default ({person}) => (
    <div>
        <table className="table">
            <thead>
                <tr>
                    <th>Выбран пользователь:</th>
                    <th>Описание:</th>
                    <th>Адрес проживания:</th>
                    <th>Город:</th>
                    <th>Провинция/штат:</th>
                    <th>Индекс:</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{person.firstName + ' ' + person.lastName}</td>
                    <td>{person.description}</td>
                    <td>{person.address.streetAddress}</td>
                    <td>{person.address.city}</td>
                    <td>{person.address.state}</td>
                    <td>{person.address.zip}</td>
                </tr>
            </tbody>
        </table>




{/* 
        <p>Выбран пользователь:</p> <b>{person.firstName + ' ' + person.lastName}</b>
        <p>Описание:</p>
        <textarea defaultValue={person.description} />
        <p>Адрес проживания:</p>
        <b>9792 Mattis Ct</b>
        <p>Город:</p>
        <b>Waukesha</b>
        <p>Провинция/штат:</p>
        <b>WI</b>
        <p>Индекс:</p>
        <b>22178</b> */}
    </div>
)