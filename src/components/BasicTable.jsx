import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';

const columns = [
  { field: 'lastName', headerName: 'lastName', width: 80 },
  { field: 'firstName', headerName: 'firstName', width: 80 },
  { field: 'startDate', headerName: 'startDate', width: 100 },
  {
    field: 'department',
    headerName: 'Department',
    type: 'string',
    width: 100,
  },
  {
    field: 'dateOfBirth',
    headerName: 'Date of birth',
    description: 'User full name',
    sortable: true,
    width: 130,
  },
  { field: 'street', headerName: 'Street', width: 100 },
  { field: 'city', headerName: 'City', width: 100 },
  { field: 'state', headerName: 'State', width: 100 },
  { field: 'zipCode', headerName: 'Zip code', width: 100 },
];

const rows = [
  {
    id: 1,
    lastName: 'Snow',
    firstName: 'Jon',
    startDate: '01/12/2016',
    department: 'AL',
    dateOfBirth: '22/08/1994',
    street: '20, Rue de test',
    city: 'Alaska',
    state: 'AL',
    zipCode: '11000',
  },
  {
    id: 2,
    lastName: 'Doe',
    firstName: 'Gon',
    startDate: '01/06/2012',
    department: 'AL',
    dateOfBirth: '15/05/1989',
    street: '18, Rue de test',
    city: 'Alaska',
    state: 'AL',
    zipCode: '11000',
  },
];

export const BasicTable = () => {
  const users = useSelector((state) => state.users);

  return (
    <div style={{ height: 300, width: '90%' }}>
      <DataGrid rows={users} columns={columns} pageSize={8} rowsPerPageOptions={[8]} checkboxSelection />
    </div>
  );
};
