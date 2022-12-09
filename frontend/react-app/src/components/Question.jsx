import React from 'react'
import { FormControl } from '@material-ui/core';
import { FormLabel } from '@material-ui/core';
import { RadioGroup } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';
import { Radio } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import UpdownText from './UpdownText';


const useStyles = makeStyles({
  mt: {
    marginTop: '30px',
    width: '100%',
  },
  question: {
    marginTop: "30px",
    fontSize: "20px",
    fontWeight: "bold",
    backgroundColor: "#f3f3f2",
    padding: "10px",
    color:"black",
  },
  select:{
    marginTop: '10px',
  },
  button:{
    marginTop:"20px",
    textAlign: 'center',
    marginBottom: "100px",
  },
  smallText:{
    fontSize:"12px",
  },
  text: {
    fontSize: "20px",
  }
});


export default function Question() {
  const classes = useStyles();
  return (
    <>
      <div>
        <FormControl className={classes.mt}>
          <FormLabel id="r1" className={classes.question}>[1/27]修理・設計・組み立て・モノ作りのどれかは？</FormLabel>
          <RadioGroup
            row
            aria-labelledby="r1"
            name="radio-buttons-group"
            className={classes.select}
          >
            <FormControlLabel value="20" control={<Radio />} label="向いている（好きだ）" />
            <FormControlLabel value="10" control={<Radio />} label="どちらとも言えない" />
            <FormControlLabel value="0" control={<Radio />} label="あまり向いていない" />
          </RadioGroup>

          <FormLabel id="i1" className={classes.question}>[2/27]理論や考えを発展させるのは？</FormLabel>
          <RadioGroup
            row
            aria-labelledby="i1"
            name="radio-buttons-group"
            className={classes.select}
          >
            <FormControlLabel value="20" control={<Radio />} label="向いている（好きだ）" />
            <FormControlLabel value="10" control={<Radio />} label="どちらとも言えない" />
            <FormControlLabel value="0" control={<Radio />} label="あまり向いていない" />
          </RadioGroup>

          <FormLabel id="a1" className={classes.question}>[3/27]アイデアを膨らませて何かを作り出す・考えるのは？</FormLabel>
          <RadioGroup
            row
            aria-labelledby="a1"
            name="radio-buttons-group"
            className={classes.select}
          >
            <FormControlLabel value="20" control={<Radio />} label="向いている（好きだ）" />
            <FormControlLabel value="10" control={<Radio />} label="どちらとも言えない" />
            <FormControlLabel value="0" control={<Radio />} label="あまり向いていない" />
          </RadioGroup>

          <FormLabel id="s1" className={classes.question}>[4/27]人の手助けをするのは？</FormLabel>
          <RadioGroup
            row
            aria-labelledby="s1"
            name="radio-buttons-group"
            className={classes.select}
          >
            <FormControlLabel value="female" control={<Radio />} label="向いている（好きだ）" />
            <FormControlLabel value="male" control={<Radio />} label="どちらとも言えない" />
            <FormControlLabel value="other" control={<Radio />} label="あまり向いていない" />
          </RadioGroup>

          <FormLabel id="e1" className={classes.question}>[5/27]他人に影響を与えるのは？</FormLabel>
          <RadioGroup
            row
            aria-labelledby="e1"
            name="radio-buttons-group"
            className={classes.select}
          >
            <FormControlLabel value="20" control={<Radio />} label="向いている（好きだ）" />
            <FormControlLabel value="10" control={<Radio />} label="どちらとも言えない" />
            <FormControlLabel value="0" control={<Radio />} label="あまり向いていない" />
          </RadioGroup>

          <FormLabel id="c1" className={classes.question}>[6/27]正確性が求められる作業は？</FormLabel>
          <RadioGroup
            row
            aria-labelledby="c1"
            name="radio-buttons-group"
            className={classes.select}
          >
            <FormControlLabel value="20" control={<Radio />} label="向いている（好きだ）" />
            <FormControlLabel value="10" control={<Radio />} label="どちらとも言えない" />
            <FormControlLabel value="0" control={<Radio />} label="あまり向いていない" />
          </RadioGroup>

          <FormLabel id="r2" className={classes.question}>[7/27]明確で秩序的・組織的な活動・操作は？</FormLabel>
          <RadioGroup
            row
            aria-labelledby="r2"
            name="radio-buttons-group"
            className={classes.select}
          >
            <FormControlLabel value="20" control={<Radio />} label="向いている（好きだ）" />
            <FormControlLabel value="10" control={<Radio />} label="どちらとも言えない" />
            <FormControlLabel value="0" control={<Radio />} label="あまり向いていない" />
          </RadioGroup>

          <FormLabel id="i2" className={classes.question}>[8/27]数学や科学の知識を使うのは？</FormLabel>
          <RadioGroup
            row
            aria-labelledby="i2"
            name="radio-buttons-group"
            className={classes.select}
          >
            <FormControlLabel value="20" control={<Radio />} label="向いている（好きだ）" />
            <FormControlLabel value="10" control={<Radio />} label="どちらとも言えない" />
            <FormControlLabel value="0" control={<Radio />} label="あまり向いていない" />
          </RadioGroup>

          <FormLabel id="a2" className={classes.question}>[9/27]慣例に捉われず、新しいアイデアを考え出すのは？</FormLabel>
          <RadioGroup
            row
            aria-labelledby="a2"
            name="radio-buttons-group"
            className={classes.select}
          >
            <FormControlLabel value="20" control={<Radio />} label="向いている（好きだ）" />
            <FormControlLabel value="10" control={<Radio />} label="どちらとも言えない" />
            <FormControlLabel value="0" control={<Radio />} label="あまり向いていない" />
          </RadioGroup>

          <FormLabel id="s2" className={classes.question}>[10/27]人に教えたり、成長をサポートするのは？</FormLabel>
          <RadioGroup
            row
            aria-labelledby="s2"
            name="radio-buttons-group"
            className={classes.select}
          >
            <FormControlLabel value="20" control={<Radio />} label="向いている（好きだ）" />
            <FormControlLabel value="10" control={<Radio />} label="どちらとも言えない" />
            <FormControlLabel value="0" control={<Radio />} label="あまり向いていない" />
          </RadioGroup>

          <FormLabel id="e2" className={classes.question}>[11/27]リーダシップを発揮するのは？</FormLabel>
          <RadioGroup
            row
            aria-labelledby="e2"
            name="radio-buttons-group"
            className={classes.select}
          >
            <FormControlLabel value="20" control={<Radio />} label="向いている（好きだ）" />
            <FormControlLabel value="10" control={<Radio />} label="どちらとも言えない" />
            <FormControlLabel value="0" control={<Radio />} label="あまり向いていない" />
          </RadioGroup>

          <FormLabel id="c2" className={classes.question}>[12/27]組織を引っ張るより、上を支える方が？</FormLabel>
          <RadioGroup
            row
            aria-labelledby="c2"
            name="radio-buttons-group"
            className={classes.select}
          >
            <FormControlLabel value="20" control={<Radio />} label="向いている（好きだ）" />
            <FormControlLabel value="10" control={<Radio />} label="どちらとも言えない" />
            <FormControlLabel value="0" control={<Radio />} label="あまり向いていない" />
          </RadioGroup>

          <FormLabel id="r3" className={classes.question}>[13/27]スキルアップや実践的なスキルは？</FormLabel>
          <RadioGroup
            row
            aria-labelledby="r3"
            name="radio-buttons-group"
            className={classes.select}
          >
            <FormControlLabel value="20" control={<Radio />} label="向いている（好きだ）" />
            <FormControlLabel value="10" control={<Radio />} label="どちらとも言えない" />
            <FormControlLabel value="0" control={<Radio />} label="あまり向いていない" />
          </RadioGroup>

          <FormLabel id="i3" className={classes.question}>[14/27]一人で仕事・活動するのは？</FormLabel>
          <RadioGroup
            row
            aria-labelledby="i3"
            name="radio-buttons-group"
            className={classes.select}
          >
            <FormControlLabel value="20" control={<Radio />} label="向いている（好きだ）" />
            <FormControlLabel value="10" control={<Radio />} label="どちらとも言えない" />
            <FormControlLabel value="0" control={<Radio />} label="あまり向いていない" />
          </RadioGroup>

          <FormLabel id="a3" className={classes.question}>[15/27]言語、美術、音楽、演劇などに関心を持つことは？</FormLabel>
          <RadioGroup
            row
            aria-labelledby="a3"
            name="radio-buttons-group"
            className={classes.select}
          >
            <FormControlLabel value="20" control={<Radio />} label="向いている（好きだ）" />
            <FormControlLabel value="10" control={<Radio />} label="どちらとも言えない" />
            <FormControlLabel value="0" control={<Radio />} label="あまり向いていない" />
          </RadioGroup>

          <FormLabel id="s3" className={classes.question}>[16/27]コミュニケーション能力を発揮するのは？</FormLabel>
          <RadioGroup
            row
            aria-labelledby="s3"
            name="radio-buttons-group"
            className={classes.select}
          >
            <FormControlLabel value="20" control={<Radio />} label="向いている（好きだ）" />
            <FormControlLabel value="10" control={<Radio />} label="どちらとも言えない" />
            <FormControlLabel value="0" control={<Radio />} label="あまり向いていない" />
          </RadioGroup>

          <FormLabel id="e3" className={classes.question}>[17/27]人を説得する能力が必要とされる機会は?</FormLabel>
          <RadioGroup
            row
            aria-labelledby="e3"
            name="radio-buttons-group"
            className={classes.select}
          >
            <FormControlLabel value="20" control={<Radio />} label="向いている（好きだ）" />
            <FormControlLabel value="10" control={<Radio />} label="どちらとも言えない" />
            <FormControlLabel value="0" control={<Radio />} label="あまり向いていない" />
          </RadioGroup>

          <FormLabel id="c3" className={classes.question}>[18/27]ルールや秩序を守るのは？</FormLabel>
          <RadioGroup
            row
            aria-labelledby="c3"
            name="radio-buttons-group"
            className={classes.select}
          >
            <FormControlLabel value="20" control={<Radio />} label="向いている（好きだ）" />
            <FormControlLabel value="10" control={<Radio />} label="どちらとも言えない" />
            <FormControlLabel value="0" control={<Radio />} label="あまり向いていない" />
          </RadioGroup>

          <FormLabel id="r4" className={classes.question}>[19/27]道具や機会を使うことは？</FormLabel>
          <RadioGroup
            row
            aria-labelledby="r4"
            name="radio-buttons-group"
            className={classes.select}
          >
            <FormControlLabel value="20" control={<Radio />} label="向いている（好きだ）" />
            <FormControlLabel value="10" control={<Radio />} label="どちらとも言えない" />
            <FormControlLabel value="0" control={<Radio />} label="あまり向いていない" />
          </RadioGroup>

          <FormLabel id="i4" className={classes.question}>[20/27]難しい問題を解決するのは</FormLabel>
          <RadioGroup
            row
            aria-labelledby="i4"
            name="radio-buttons-group"
            className={classes.select}
          >
            <FormControlLabel value="20" control={<Radio />} label="向いている（好きだ）" />
            <FormControlLabel value="10" control={<Radio />} label="どちらとも言えない" />
            <FormControlLabel value="0" control={<Radio />} label="あまり向いていない" />
          </RadioGroup>

          <FormLabel id="a4" className={classes.question}>[21/27]個性的・独創的である方？</FormLabel>
          <RadioGroup
            row
            aria-labelledby="a4"
            name="radio-buttons-group"
            className={classes.select}
          >
            <FormControlLabel value="20" control={<Radio />} label="向いている（好きだ）" />
            <FormControlLabel value="10" control={<Radio />} label="どちらとも言えない" />
            <FormControlLabel value="0" control={<Radio />} label="あまり向いていない" />
          </RadioGroup>

          <FormLabel id="s4" className={classes.question}>[22/27]人の役に立つこと（接客など）は？</FormLabel>
          <RadioGroup
            row
            aria-labelledby="s4"
            name="radio-buttons-group"
            className={classes.select}
          >
            <FormControlLabel value="20" control={<Radio />} label="向いている（好きだ）" />
            <FormControlLabel value="10" control={<Radio />} label="どちらとも言えない" />
            <FormControlLabel value="0" control={<Radio />} label="あまり向いていない" />
          </RadioGroup>

          <FormLabel id="e4" className={classes.question}>[23/27]人と競争するのは？</FormLabel>
          <RadioGroup
            row
            aria-labelledby="e4"
            name="radio-buttons-group"
            className={classes.select}
          >
            <FormControlLabel value="20" control={<Radio />} label="向いている（好きだ）" />
            <FormControlLabel value="10" control={<Radio />} label="どちらとも言えない" />
            <FormControlLabel value="0" control={<Radio />} label="あまり向いていない" />
          </RadioGroup>

          <FormLabel id="c4" className={classes.question}>[24/27]散らばった情報や、まとまっていないデータ・資料を整理するのは？</FormLabel>
          <RadioGroup
            row
            aria-labelledby="c4"
            name="radio-buttons-group"
            className={classes.select}
          >
            <FormControlLabel value="20" control={<Radio />} label="向いている（好きだ）" />
            <FormControlLabel value="10" control={<Radio />} label="どちらとも言えない" />
            <FormControlLabel value="0" control={<Radio />} label="あまり向いていない" />
          </RadioGroup>

          <FormLabel id="demo-radio-buttons-group-label" className={classes.question}>[25/27]どちらかというと私は…</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel value="female" control={<Radio />} label="疲れた時は一人になりたい" />
            <FormControlLabel value="male" control={<Radio />} label="どちらとも言えない" />
            <FormControlLabel value="other" control={<Radio />} label="疲れた時は人に会いたい" />
          </RadioGroup>

          <FormLabel id="demo-radio-buttons-group-label" className={classes.question}>[26/27]どちらかというと私は…</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel value="female" control={<Radio />} label="一人で仕事に没頭するタイプ" />
            <FormControlLabel value="male" control={<Radio />} label="どちらとも言えない" />
            <FormControlLabel value="other" control={<Radio />} label="みんなで目標を達成したいタイプ" />
          </RadioGroup>

          <FormLabel id="demo-radio-buttons-group-label" className={classes.question}>[27/27]どちらかというと私は…</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel value="female" control={<Radio />} label="ルールや規則に縛られたくないと思うタイプ" />
            <FormControlLabel value="male" control={<Radio />} label="どちらとも言えない" />
            <FormControlLabel value="other" control={<Radio />} label="ルールや秩序は大事だと思うタイプ" />
          </RadioGroup>

        </FormControl>
      </div>
      <div className={classes.button}>
      <UpdownText recomend="↓あなたのパーソナリティはどれかな？ さっそく診断してみよう！!" />
        <Button variant="contained" color="secondary" className={classes.text}>診断する</Button>
      </div>

    </>
  )
}
