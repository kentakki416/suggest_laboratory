import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  button: {
    marginTop: '2rem',
    textAlign: 'center',
    fontSize:"13px"
  },
});

export default function Updowntext(props) {
  const classes = useStyles();
  return (
    <div>
      <style>
        {`@keyframes toUpdown {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-10px);
          }
        }`}
      </style>
      <div className={classes.button} style={{animation: `toUpdown 1s infinite alternate ease-in-out`}}>{props.recomend}</div>  
    </div>

  )
}
