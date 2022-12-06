import React from 'react'
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Header from '../Header'
import PersonalityContent from '../PersonalityContent'


const useStyles = makeStyles({
  side: {
    height: '100vh',
  },
});

export default function JudgePersonalitypage() {
  const classes = useStyles();
  return (
    <div>
      <Header header="パーソナリティ判定"/>

      <Grid container>
        <Grid item xs={2} className={classes.side}></Grid>
        <Grid item xs={8}>
          <PersonalityContent />
        </Grid>
        <Grid item xs={2} className={classes.side}></Grid>
      </Grid>
    </div>

  )
}
