
import '../App.css';

import { makeStyles } from '@material-ui/core/styles';

import {
  Link
} from "react-router-dom";

import { Button, Container, Paper, Card, CardContent, Typography } from '@material-ui/core';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    //width: 500,

  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

const tileData = [
  {
    img: 'https://images.unsplash.com/photo-1563805898174-32757f44c556?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxpdHl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    title: 'Take a ride',
    author: 'author',
  },
  {
    img: 'https://images.unsplash.com/photo-1603142776149-bdfccba50032?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjh8fG1vYmlsaXR5fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    title: 'Berlin',
    author: 'author',
  },  {
    img: 'https://images.unsplash.com/photo-1601398796865-c93b9c867fd3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8bW9iaWxpdHl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    title: 'Black&White',
    author: 'author',
  },  {
    img: 'https://images.unsplash.com/photo-1520895181739-4ac079a31ac7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjR8fG1vYmlsaXR5fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60',
    title: 'Close to your destination',
    author: 'author',
  },
];



export default function Download() {

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (

      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Impressions</ListSubheader>
        </GridListTile>
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  <InfoIcon/>
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>

  );
}