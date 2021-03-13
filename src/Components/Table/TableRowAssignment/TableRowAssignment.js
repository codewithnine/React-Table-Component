import React from 'react';
import TableRowStructure from '../TableRowStructure/TableRowStructure';
import faker from 'faker';

const TableRowAssignment = (props) => {
  console.log(props)
    return (
        <TableRowStructure 
          userID      = {faker.random.number()}
          firstName   = {faker.name.firstName()} 
          lastName    = {faker.name.lastName()}
          userName    = {faker.internet.userName()}
          phoneNumber = {faker.phone.phoneNumber()}
        />
    );
};

export default TableRowAssignment;