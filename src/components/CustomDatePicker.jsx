import * as React from 'react';
import TextField from '@mui/material/TextField';

export const CustomDatePicker = () => {
  return (
    <TextField
      color="primary"
      size="small"
      id="date"
      type="date"
      defaultValue=""
      // sx={{ width: 175 }}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};
