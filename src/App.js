import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import SendIcon from '@material-ui/icons/Send';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import { lightBlue, lightGreen } from '@material-ui/core/colors';
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'; 

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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

function CheckboxExample() {
  const [checked, setChecked] = useState(true);

  return (
    <FormControlLabel
      control={<Checkbox
        checked={checked}
        icon={<DeleteIcon />}
        checkedIcon={<DeleteIcon />}
        onChange={(e) => setChecked(e.target.checked)}
        inputProps={{'aria-label': 'secondary checkbox'}}
      />}
      label="Testing Checkbox"
    >
    </FormControlLabel>
    
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <div className="App">
          <header className="App-header">
            <AppBar>
              <Toolbar>
                <IconButton>
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6">Kodeine</Typography>
                <Button>Login</Button>
              </Toolbar>
            </AppBar>
            <Typography variant="h2">
              Welcome to Material UI
            </Typography>
            <ButtonStyled />
            <Grid container spacing={2} justify="center">
              <Grid item xs={3} sm={6}>
                <Paper style={{height: 75, width: '100%'}} />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{height: 75, width: '100%'}} />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{height: 75, width: '100%'}} />
              </Grid>
            </Grid>
            < TextField
              variant="outlined"
              color="secondary"
              type="email"
              label="Email"
              placeholder="test@test.com"
            />
            <CheckboxExample />
            <ButtonGroup variant="contained" color="primary" size="large">
              <Button
                startIcon={<SendIcon />}
              >
                Alert
              </Button>
              <Button
                startIcon={<DeleteIcon />}
              >
                delete
              </Button>
            </ButtonGroup>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
