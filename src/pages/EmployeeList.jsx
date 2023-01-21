import React from 'react';
import { Link } from 'react-router-dom';
import { BasicTable } from '../components/BasicTable';

export const EmployeeList = () => {
  return (
    <div>
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        <BasicTable />
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};
