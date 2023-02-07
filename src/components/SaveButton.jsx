import * as React from 'react';
import Button from '@mui/material/Button';

// This component is a save button

export const SaveButton = (props) => {
  return (
    <Button onClick={props.onClick} variant="contained" color="primary" size="small" style={{ textTransform: 'none' }}>
      Save
    </Button>
  );
};
