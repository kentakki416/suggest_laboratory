import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  modalText: {
    marginTop:  '10px',
  },
  markerR: {
    background: 'linear-gradient(transparent 80%, #FFFF66 40%)',
  },
  markerI:{
    background: 'linear-gradient(transparent 80%, #FF9966 40%)',
  },
  markerA:{
    background: 'linear-gradient(transparent 80%, #FF99FF 40%)',
  },
  markerS:{
    background: 'linear-gradient(transparent 80%, #3399FF 40%)',
  },
  markerE:{
    background: 'linear-gradient(transparent 80%, #99FFFF 40%)',
  },
  markerC:{
    background: 'linear-gradient(transparent 80%, #99FF66 40%)',
  }
});

export default function ModalText1() {
  const classes = useStyles();
  return (
    <Typography id="modal-modal-description" className={classes.modalText}>
    人は<span className={classes.bold}>興味・価値観</span>から６つのパーソナリティ
    （
    <span className={classes.markerR}>現実的</span>・
    <span className={classes.markerI}>研究的</span>・
    <span className={classes.markerA}>芸術的</span>・
    <span className={classes.markerS}>社会的</span>・
    <span className={classes.markerE}>企業的</span>・
    <span className={classes.markerC}>習慣的</span>
    ）に分類でき、
    それぞれのパーソナリティに適した環境が存在するという理論です。
    <br />
    <br />
    <br />
    この理論を応用してあなたのパーソナリティにあった研究室を提案します!
  </Typography>
  )
}
