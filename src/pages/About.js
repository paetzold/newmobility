
import '../App.css';

import { makeStyles } from '@material-ui/core/styles';

import {
  Link
} from "react-router-dom";

import { Button, Container, Paper, Card, CardContent, Typography } from '@material-ui/core';


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
    fontSize: 18,
    fontweight: 'bold',
  },
  pos: {
    marginBottom: 12,
  },
});

export default function () {

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Container>

      <Paper elevation={3} />
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textPrimary">
            About new.M. 
        </Typography>
        <Typography variant="body2" component="p" color="textSecondary">
            The "thing" consist out of two main parts.
            <li> the new.M. App </li>
            <li> the newM K8N driven backend </li>
          <br />
          However the real mission target is to explore as many new technologies and patterns as possible.
          <br />
          </Typography>
        </CardContent>
      </Card>

    </Container>
  );
}