import React from 'react';
import './App.css';

import Header from './components/NavBar/Header'

import 'fontsource-roboto';
// import Typography from '@material-ui/core/Typography';
import ProductsContainer from './components/Products/ProductsContainer';
import {Grid} from '@material-ui/core'

function App() {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <ProductsContainer />
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
  )
}

export default App;
