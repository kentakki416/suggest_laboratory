import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  text: {
    backgroundColor: '#ff9'
  },
  button: {
    padding: '1rem',
    fontSize: '16px',
  },
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }
});

export default function AnalysisButton() {
  const classes = useStyles();

  return (
    <div>
      <Button className={classes.button} variant="contained">研究室データを分析する</Button>
      <p className={classes.text}>※管理者用のボタンです</p>
    </div>
    
  )
}
