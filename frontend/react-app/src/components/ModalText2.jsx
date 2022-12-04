import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  modalText: {
    marginTop:  '10px',
  }
})
export default function ModalText2() {
  const classes = useStyles();
  return (
    <Typography id="modal-modal-description" className={classes.modalText}>
      各研究室のホームページと過去の卒業論文からキーワードを抽出しました<br/><br />
      あなたの興味のあるキーワードにマッチする研究室を提案します!
    </Typography>
  )
}
