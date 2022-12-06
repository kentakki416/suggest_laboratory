import React from 'react'
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box';

import UpdownText from './UpdownText';
import ModalText1 from './ModalText1';
import ModalText2 from './ModalText2';
import ModalText3 from './ModalText3';

const modalSwitch = (num) => {
  if (num === 1) {
    return <ModalText1 />;
  } else if ( num === 2) {
    return <ModalText2 />;
  } else if ( num === 3) {
    return <ModalText3 />;
  }

}

const useStyles = makeStyles({
  button: {
    padding: '30px',
    borderRadius: '50%',
    width: '13rem',
    height: '10rem',
    transition: '.4s',
    
    /*--水平方向 垂直方向 影のぼかし 色--*/
    boxShadow: '10px 10px 10px rgba(0,0,0,0.3)',
  },
  text: {
    fontSize: '20px'
  },
  buttonBox: {
    width: '210px',
    height: '320px'
  },
  modalBox: {
    position: 'absolute',
    index: 1000,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '21x solid #000',
    borderRadius: '10px',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    backgroundColor: "white",
    padding: '30px',
  },
  startButton: {
    textAlign: 'center',
    margin: '20px',
  },
  bold: {
    fontWeight: 'bold',
  },
  linkButton: {
    textDecoration: 'none',
    color: 'white',
  }
});

const SuggestButton = (props) =>{
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className={classes.buttonBox}>
      <Button onClick={handleOpen} className={classes.button} variant="contained" color={props.color}>
        <p className={classes.text}>{props.text}</p>
      </Button>
      <UpdownText recomend={props.recomend} />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.modalBox}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <span className={classes.bold}>{props.modalTitle}：</span>
          </Typography>
          
          {modalSwitch(props.num)}
          <div className={classes.startButton}> 
            <Button variant="contained" color={props.color}>
              <Link to={'judge_personarity'} className={classes.linkButton}>始める</Link>
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default SuggestButton;
