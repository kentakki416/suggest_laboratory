import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      color: 'white',
      textAlign: 'center',
      marginTop: '0.5em',
    },
    pos: {
      marginBottom: 12,
    },
    card: {
      marginTop: '30px',
      backgroundColor: '#1976d2',
    }
});


export default function TitleCard() {
    const classes = useStyles();
    return (
        <Card variant="outlined" className={classes.card}>
            <CardContent>
            <Typography variant="h2" component="h2" className={classes.title}>
                九州工業大学<br />
                研究室提案システム
            </Typography>
            </CardContent>
            <CardActions>
            <Button className={classes.title} size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

