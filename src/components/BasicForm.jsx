import React from 'react';
import '../styles/Homepage.css';
import { States } from './States';
import { CustomDatePicker } from './CustomDatePicker';
import { SaveButton } from './SaveButton';
import { setToggle } from '../services/toggleSlice';
import { addUser } from '../services/usersSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

export const BasicForm = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [dateOfBirth, setdateOfBirth] = useState();

  const handleSubmit = () => {
    dispatch(setToggle());
    dispatch(addUser({ firstName, lastName, dateOfBirth }));
  };

  return (
    <>
      <h2>Create Employee</h2>
      <form action="#" id="create-employee">
        <label htmlFor="first-name">First Name</label>
        <input
          type="text"
          id="first-name"
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
        />

        <label htmlFor="last-name">Last Name</label>
        <input
          type="text"
          id="last-name"
          onChange={(event) => {
            setLastName(event.target.value);
          }}
        />

        <label htmlFor="date-of-birth">Date of Birth</label>
        <CustomDatePicker
          onChange={(event) => {
            setdateOfBirth(event.target.value);
          }}
        />

        <label htmlFor="start-date">Start Date</label>
        <input id="start-date" type="text" />

        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input id="street" type="text" />

          <label htmlFor="city">City</label>
          <input id="city" type="text" />

          <States />

          <label htmlFor="zip-code">Zip Code</label>
          <input id="zip-code" type="number" />
        </fieldset>
        <label htmlFor="department">Department</label>
        <select name="department" id="department">
          <option>Sales</option>
          <option>Marketing</option>
          <option>Engineering</option>
          <option>Human Resources</option>
          <option>Legal</option>
        </select>
      </form>
      <SaveButton onClick={handleSubmit} />
    </>
  );
};
