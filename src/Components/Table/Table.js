import React from 'react';
import { Table } from 'reactstrap';
import TableRowAssignment from './TableRowAssignment/TableRowAssignment';

const Example = (props) => {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>UserID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        <TableRowAssignment />
        <TableRowAssignment />
        <TableRowAssignment />

      </tbody>
    </Table>
  );
}

export default Example;