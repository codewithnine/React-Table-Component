import React from 'react';

const TableRowStructure = (props) => {
  console.log(props)
    return (
        <tr>
          <th scope="row">{props.userID}</th>
          <td>{props.firstName}</td>
          <td>{props.lastName}</td>
          <td><a href="/">{props.userName}</a></td>
          <td>{props.phoneNumber}</td>
        </tr>
    );
};

export default TableRowStructure;