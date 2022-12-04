import React from 'react'
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import TitleCard from './Title'
import SuggestButton from './SuggestButton';
import AnalysisButton from './AnalysisButton'


const useStyles = makeStyles({
  container: {
    marginTop: '2rem',
  },
  item: {
    overflowWrap: 'normal',
  }
});

export default function Content() {
  const classes = useStyles();
  return (
    <div>
      <TitleCard/>
      <Grid container   direction="row" justifyContent="space-around" alignItems="center" className={classes.container} >
        <Grid item className={classes.item}>
          <SuggestButton 
            text="ホランドの理論を使って提案" 
            color="secondary" 
            recomend="興味のあるテーマが分からない人向け"
            modalTitle="ホランドの理論とは" 
            num={1}
          />
        </Grid>
        <Grid item className={classes.item}>
          <SuggestButton 
            text="キーワード検索で提案" 
            color={"primary"} 
            recomend="興味のあるテーマを分かっている人向け"
            modalTitle="キーワード検索とは"
            num={2}
          />
        </Grid>
        <Grid item className={classes.item}>
          <SuggestButton 
          text="研究室のデータを提供する" 
          recomend="※研究室生が対象です"
          modalTitle="研究室生へのお願い"
          num={3}
        />
        </Grid>
      </Grid>

      <Grid container spacing={3} className={classes.container} alignItems="center" justifyContent="center">
        <Grid item >
          <AnalysisButton />
        </Grid>
      </Grid>
      
    </div>
  )
}
