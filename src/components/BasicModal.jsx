import * as React from 'react';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { setToggle } from '../services/toggleSlice';
import { useSelector, useDispatch } from 'react-redux';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const BasicModal = () => {
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.toggle);

  return (
    <>
      {/* <div className="save-button" onClick={() => dispatch(setToggle())}>
        <SaveButton />
      </div> */}
      {toggle.active && (
        <>
          <Modal open={true} onClose={() => dispatch(setToggle())} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Confirmation
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Votre profil a été enregistré avec succès !
              </Typography>
            </Box>
          </Modal>
        </>
      )}
    </>
  );
};
