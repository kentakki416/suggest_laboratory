import React from 'react'
import { Grid } from '@material-ui/core';

import Header from '../Header'
import Content from '../Content'

export default function Homepage() {
  return (
    <div>
      <Header header="Home"/>

      <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Content />
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </div>
  )
}
