import React from 'react';

export default props => (
    <table className="table">
        <thead>
            <tr>
                {/* bind сортирует отдельно каждый столбец, если его не использовать будет появляться вся таблица */}
                <th onClick={props.onSort.bind(null, 'id')}>
                    {/* если props.sortField === id то это означает что мы фильтровали именно id, то тогда мы показываем props.sort, а если props.sortField != id то null */}
                    ID { props.sortField === 'id' ? <small>{props.sort}</small> : null } 
                </th>
                <th onClick={props.onSort.bind(null, 'firstName')}>
                    firstName { props.sortField === 'firstName' ? <small>{props.sort}</small> : null } 
                </th>
                <th onClick={props.onSort.bind(null, 'lastName')}>
                    lastName { props.sortField === 'lastName' ? <small>{props.sort}</small> : null } 
                </th>
                <th onClick={props.onSort.bind(null, 'email')}>
                    email { props.sortField === 'email' ? <small>{props.sort}</small> : null } 
                </th>
                <th onClick={props.onSort.bind(null, 'phone')}>
                    phone { props.sortField === 'phone' ? <small>{props.sort}</small> : null } 
                </th>
            </tr>
        </thead>
        <tbody>
            {props.data.map(item => (
                <tr key={item.id + item.phone} onClick={props.onRowSelect.bind(null, item)}>
                    <td>{item.id}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                </tr>
            ))}
        </tbody> 
    </table>     
)