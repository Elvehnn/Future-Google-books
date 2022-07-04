import React from 'react';
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  DialogActions,
} from '@mui/material';

interface IConfirm {
  isOpen: boolean;
  isDisabled?: boolean;
  toShowPopUp: (isShow: boolean) => void;
  onConfirm?: () => void;
  child?: JSX.Element;
  description: string;
  onCancel?: () => void;
}

const ConfirmPopUp = (props: IConfirm) => {
  const cancelClickHandler = () => {
    props.toShowPopUp(false);
  };

  return (
    <>
      <Dialog open={props.isOpen}>
        <DialogTitle color="error">Question?</DialogTitle>
        <DialogContent>
          {props.child}
          <DialogContentText>{props.description}</DialogContentText>
        </DialogContent>
        <DialogActions sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="outlined"
            onClick={() => {
              if (props.onCancel) {
                props.onCancel();
              }

              cancelClickHandler();
            }}
          >
            Cancel
          </Button>
          <Button
            color="error"
            variant="contained"
            onClick={props.onConfirm}
            disabled={props.isDisabled}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ConfirmPopUp;
