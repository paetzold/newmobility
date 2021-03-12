
import './App.css';

import { makeStyles } from '@material-ui/core/styles';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Box, Container, Paper } from '@material-ui/core';

import About from './pages/About';
import Images from './pages/Images';
import Download from './pages/Download';

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

function Home() {
  return (
    <Container>
      <Box color="text.primary" m="auto">
        <ul>
          <li><Link to="/about">About </Link></li>
          <li><Link to="/images">Images</Link></li>
          <li><Link to="/download">Download</Link></li>
        </ul>
      </Box>
      </Container>);
}


export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/images">
          <Images />
        </Route>
        <Route path="/download">
          <Download />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
