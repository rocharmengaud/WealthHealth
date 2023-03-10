import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';

const columns = [
  { field: 'lastName', headerName: 'Last name', width: 90 },
  { field: 'firstName', headerName: 'First name', width: 90 },
  { field: 'startDate', headerName: 'Start date', width: 100 },
  {
    field: 'dateOfBirth',
    headerName: 'Date of birth',
    description: 'User full name',
    sortable: true,
    width: 130,
  },
  { field: 'street', headerName: 'Street', type: 'string', width: 100 },
  { field: 'city', headerName: 'City', width: 100 },
  { field: 'state', headerName: 'State', width: 100 },
  { field: 'zipcode', headerName: 'Zip code', width: 100 },
  {
    field: 'department',
    headerName: 'Department',
    type: 'string',
    width: 100,
  },
];

// const fakeUser = [
//   {
//     id: 1,
//     lastName: 'Snow',
//     firstName: 'Jon',
//     startDate: '01/12/2016',
//     department: 'AL',
//     dateOfBirth: '22/08/1994',
//     street: '20, Rue de test',
//     city: 'Alaska',
//     state: 'AL',
//     zipCode: '11000',
//   },
// ];

// This component is a table that is not used anymore for this project

export const BasicTable = () => {
  const users = useSelector((state) => state.users);

  return (
    <div style={{ height: 300, width: '90%' }}>
      <DataGrid rows={users} columns={columns} pageSize={8} rowsPerPageOptions={[8]} checkboxSelection />
    </div>
  );
};
