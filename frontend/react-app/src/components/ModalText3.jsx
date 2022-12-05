import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  modalText: {
    marginTop:  '10px',
  }
})
export default function ModalText3() {
  const classes = useStyles();
  return (
    <Typography id="modal-modal-description" className={classes.modalText}>
      研究室提案の精度を高めるために、所属する研究室のデータ提供のご協力をよろしくお願いします🙇
      <br /><br/><br/>
      次の30問の質問から研究室の環境タイプを分類させていただきます。
      質問数が多くなっていますが、直感で選んでいただいて構いませんのでご協力よろしくお願いします！
    </Typography>
  )
}
