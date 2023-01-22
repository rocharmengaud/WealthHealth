import * as React from 'react';
import Button from '@mui/material/Button';

export const SaveButton = (props) => {
  return (
    <Button onClick={props.onClick} variant="contained" color="primary" size="small" style={{ textTransform: 'none' }}>
      Save
    </Button>
  );
};
