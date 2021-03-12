
import './App.css';

import { makeStyles } from '@material-ui/core/styles';

import {
  Link
} from "react-router-dom";

import { Button, Container, Paper, Card, CardContent, Typography } from '@material-ui/core';
import { QRCode } from 'react-qrcode-logo';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Download() {

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Container>


      <Button component={Link} to="/about" variant="contained" color="primary" disableElevation>Hello World</Button>

      <Paper elevation={3} />

      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Word of the Day
        </Typography>
          <Typography variant="h5" component="h2">
            be{bull}nev{bull}o{bull}lent
        </Typography>
          <Typography className={classes.pos} color="textSecondary">
            adjective
        </Typography>
          <Typography variant="body2" component="p">
            well meaning and kindly.
          <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
      </Card>
      <QRCode value="https://paetzold.github.io/newmobility/app-release.apk" />
    </Container>
  );
}