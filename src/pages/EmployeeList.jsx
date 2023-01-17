import React from 'react';
import { Link } from 'react-router-dom';

export const EmployeeList = () => {
  return (
    <div>
      <div id="employee-div" class="container">
        <h1>Current Employees</h1>
        <table id="employee-table" class="display"></table>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};
