import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog({match}) {
  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button style={{color:"whitesmoke"}} onClick={handleClickOpen}>
        Match Details
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          ALL The Match Update!....
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          
            {   
                <h4>{match.name}</h4>
            }
          </DialogContentText>
            
          <DialogContentText id="alert-dialog-description">
             
                <h4>Status of The match is:{match.status}</h4>
          
          </DialogContentText>

          <DialogContentText id="alert-dialog-description">
             
                <p>Venue of the match is::{match.venue}</p>
          
          </DialogContentText>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}