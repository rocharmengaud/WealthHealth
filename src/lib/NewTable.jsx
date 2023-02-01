import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { useSelector } from 'react-redux';
import '../lib/Newtable.css';

const NewTable = () => {
  const users = useSelector((state) => state.users);

  // const mockedData = [
  //   {
  //     firstName: 'John',
  //     lastName: 'Doe',
  //     dateOfBirth: '06-10-10',
  //     startDate: '01-22-2022',
  //     street: '20, Test street',
  //     city: 'Testcity',
  //     state: 'Alabama',
  //     zipcode: '15000',
  //     department: 'Sales',
  //   },
  // ];

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
