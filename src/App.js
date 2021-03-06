import React from 'react';
import './App.css';

import { MemoryRouter as Router } from 'react-router';
import { Switch, Route } from 'react-router-dom';

import About from './components/pages/About/AboutUs';
import Home from './components/pages/Home/Home';

import HeaderTop from './components/Header/headerTop';
import NavBar from './components/NavBar/NavBar';

import 'fontsource-roboto';
// import Typography from '@material-ui/core/Typography';
import ProductsContainer from './components/pages/Products/ProductsContainer';
import {Grid} from '@material-ui/core'

function App() {
  return (
    <Router>
      <Grid container direction="column">
        <Grid item>
          <HeaderTop />
          <NavBar />
        </Grid>
      </Grid>
      <Switch>
        <Route path="/Home" exact component={Home} />
        <Route path="/About" exact component={About} />
        <Route path="/Products" exact component={ProductsContainer} />
      </Switch> 
    </Router>
  )
}

export default App;
