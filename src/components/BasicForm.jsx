import React from 'react';
import '../styles/Homepage.css';
import { States } from './States';
import { CustomDatePicker } from './CustomDatePicker';
import { SaveButton } from './SaveButton';
import { setToggle } from '../services/toggleSlice';
import { addUser } from '../services/usersSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import '../styles/BasicForm.css';

// This component is a basic form gathering all types of informations on a new employee.
// Once you click on the save button, new user will be appear into 'NewTable' component.

export const BasicForm = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [dateOfBirth, setdateOfBirth] = useState();
  const [startDate, setStartDate] = useState();
  const [street, setStreet] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState('Alabama');
  const [zipcode, setZipcode] = useState();
  const [department, setDepartment] = useState('Sales');

  // Possibilité d'utilisation des useState d'une manière "groupée" :
  // const [adress, setAdress] = useState({
  //   street: undefined,
  //   city: undefined,
  //   state: 'Alabama',
  //   zipcode: undefined,
  // });

  // exemple sur le champ du zipcode :
  // setAdress({...adress, zipcode: event.target.value});

  const handleSubmit = () => {
    dispatch(setToggle());
    dispatch(addUser({ firstName, lastName, dateOfBirth, startDate, street, city, state, zipcode, department }));
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
        <div className="date-pickers">
          {/* <label htmlFor="date-of-birth">Date of Birth</label> */}
          <CustomDatePicker
            label={'Date of Birth'}
            onChange={(event) => {
              setdateOfBirth(event.target.value);
            }}
          />

          {/* <label htmlFor="start-date">Start Date</label> */}
          <CustomDatePicker
            label={'Start Date'}
            onChange={(event) => {
              setStartDate(event.target.value);
            }}
          />
        </div>

        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input
            id="street"
            type="text"
            onChange={(event) => {
              setStreet(event.target.value);
            }}
          />

          <label htmlFor="city">City</label>
          <input
            id="city"
            type="text"
            onChange={(event) => {
              setCity(event.target.value);
            }}
          />

          <States
            onChange={(event) => {
              setState(event.target.value);
            }}
          />

          <label htmlFor="zip-code">Zip Code</label>
          <input
            id="zip-code"
            type="number"
            onChange={(event) => {
              setZipcode(event.target.value);
            }}
          />
        </fieldset>

        <label htmlFor="department">Department</label>
        <select
          name="department"
          id="department"
          onChange={(event) => {
            setDepartment(event.target.value);
          }}
        >
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
