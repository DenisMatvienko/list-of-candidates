import React from 'react'

export default ({person}) => (
    <div>
        <table className="table mt-5">
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
    </div>
)