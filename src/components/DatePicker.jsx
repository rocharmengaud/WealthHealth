import * as React from 'react';
import TextField from '@mui/material/TextField';
import '../styles/DatePicker.css';

export const DatePicker = () => {
  return (
    <div className="content">
      <TextField
        className="date-field"
        id="date"
        label="Date of birth"
        type="date"
        defaultValue=""
        sx={{ width: 175 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
  );
};
