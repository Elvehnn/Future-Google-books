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
  toShowPopUp: (isShow: boolean) => void;
  onConfirm?: () => void;
  onCancel?: () => void;
  child?: JSX.Element;
  description: string;
}

const ConfirmRedirection = (props: IConfirm) => {
  return (
    <>
      <Dialog open={props.isOpen}>
        <DialogTitle color="secondary">title</DialogTitle>
        <DialogContent>
          {props.child}
          <DialogContentText>{props.description}</DialogContentText>
        </DialogContent>
        <DialogActions sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="outlined" onClick={props.onCancel}>
            Cancel
          </Button>
          <Button color="secondary" variant="contained" onClick={props.onConfirm}>
            Redirect
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ConfirmRedirection;
