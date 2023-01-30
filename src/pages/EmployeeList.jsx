import React from 'react';
import { Link } from 'react-router-dom';
// import { BasicTable } from '../components/BasicTable';
import { TableFiltering } from '../components/TableFiltering';

const EmployeeList = () => {
  return (
    <div>
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        {/* <BasicTable /> */}
        <TableFiltering />
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default EmployeeList;
