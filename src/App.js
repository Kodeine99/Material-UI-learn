import React from 'react';
import './App.css';

import Header from './components/Header'
import CheckboxExample from './components/CheckboxExample';
import Gridlayout from './components/Gridlayout';
import TextFieldinput from './components/TextField';
import ButtonGroupEx from './components/ButtonGroupEx'

import Button from '@material-ui/core/Button';
import { lightBlue, lightGreen } from '@material-ui/core/colors';
import 'fontsource-roboto';

import Container from '@material-ui/core/Container';


import Typography from '@material-ui/core/Typography';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #009bf5, #34b1eb)',
    border: 0,
    marginBottom: 15,
    borderRadius: 8,
    color: 'white',
    padding: '5px 30px'
  }
})

const theme = createMuiTheme({
  typography: {
    h2: {
      marginBottom: 10,
    }
  },
  palette: {
    primary: {
      main: lightBlue[500]
    },
    secondary: {
      main: lightGreen[500]
    }
  }
})

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Button Styled</Button>
}



function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container >
        <div className="App">
          <header className="App-header">
            <Header />
            <Typography variant="h2">
              Welcome to Material UI
            </Typography>
            <ButtonStyled />
            <TextFieldinput />
            <Gridlayout />
            <CheckboxExample />
            <ButtonGroupEx />
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
