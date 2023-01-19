import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'firstName', headerName: 'firstName', width: 100 },
  { field: 'lastName', headerName: 'lastName', width: 100 },
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
  { id: 1, lastName: 'Snow', firstName: 'Jon', department: 'Alaska' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', department: 'New York' },
];

export const BasicTable = () => {
  return (
    <div style={{ height: 300, width: '90%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={8} rowsPerPageOptions={[8]} checkboxSelection />
    </div>
  );
};
