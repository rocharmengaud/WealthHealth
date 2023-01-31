import React from 'react';
import '../styles/Homepage.css';
import { Link } from 'react-router-dom';
import { BasicForm } from '../components/BasicForm';
import { BasicModal } from '../components/BasicModal';

const Homepage = () => {
  return (
    <div className="home-content">
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="home-container">
        {/* <a href="employee-list.html">View Current Employees</a> */}
        <Link to="/employee-list">View Current Employees</Link>
        <BasicForm />
        <BasicModal />
      </div>
    </div>
  );
};

export default Homepage;
