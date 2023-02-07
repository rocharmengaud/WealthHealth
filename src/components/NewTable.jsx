import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { useSelector } from 'react-redux';
import '../styles/NewTable.css';

// This component is a data table.
// It is the only table used for the project due to easy modifications with the API.
const NewTable = () => {
  const users = useSelector((state) => state.users);

  const columns = useMemo(
    () => [
      {
        accessorKey: 'firstName',
        header: 'First Name',
        size: 50,
      },
      {
        accessorKey: 'lastName',
        header: 'Last Name',
        size: 50,
      },
      {
        accessorKey: 'dateOfBirth',
        header: 'Date of birth',
        size: 50,
      },
      {
        accessorKey: 'startDate',
        header: 'Start date',
        size: 50,
      },
      {
        accessorKey: 'street',
        header: 'Street',
        size: 50,
      },
      {
        accessorKey: 'city',
        header: 'City',
        size: 50,
      },
      {
        accessorKey: 'state',
        header: 'State',
        size: 50,
      },
      {
        accessorKey: 'zipcode',
        header: 'Zip code',
        size: 50,
      },
      {
        accessorKey: 'department',
        header: 'Department',
        size: 50,
      },
    ],
    []
  );

  return (
    <div className="table">
      <MaterialReactTable columns={columns} data={users} />
    </div>
  );
};

export default NewTable;
