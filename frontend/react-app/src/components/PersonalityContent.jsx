import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Question from './Question'

const useStyles = makeStyles({
  mt: {
    marginTop: '30px',
    textAlign: 'center',
    backgroundColor: '#CCFFFF',
    fontSize: '20px',
    paddingTop: '10px',
    paddingBottom: '10px',
    fontWeight: 'bold'
  },
});


export default function PersonalityContent() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.mt}>
        次の２７個の質問からあなたのパーソナリティを特定します。
        <br />少し質問数が多いですが、最後まで頑張ってください！😄
      </div>

      <Question />
    </>


  )
}
