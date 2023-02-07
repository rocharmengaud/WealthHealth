import * as React from 'react';
import TextField from '@mui/material/TextField';

// This component is a date picker. If the user clicks on it, it pops up on the screen.

export const CustomDatePicker = (props) => {
  return (
    <TextField
      label={props.label}
      variant="standard"
      onChange={props.onChange}
      color="primary"
      size="normal"
      id="date"
      type="date"
      defaultValue=""
      sx={{ width: 175 }}
      InputLabelProps={{
        shrink: true,
        style: { marginTop: '-5px', color: 'black', fontSize: '20px' },
      }}
    />
  );
};
