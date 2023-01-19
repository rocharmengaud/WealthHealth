import * as React from 'react';
import TextField from '@mui/material/TextField';

export const CustomDatePicker = () => {
  return (
    <TextField
      size="small"
      id="date"
      // label="Birthday"
      type="date"
      defaultValue=""
      sx={{ width: 200 }}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};
