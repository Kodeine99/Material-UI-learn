import React from 'react';
import { Link as RouterLink } from 'react-router-dom';


import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
      marginBottom: '20px'
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

function NavBar() {
    const classes = useStyles();
  return (
    <AppBar position="static" color="inherit" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            KdShop
          </Typography>
        <nav>
          <Link variant="button" color="textPrimary" component={RouterLink} to="/Home" className={classes.link}>
            Home
          </Link>
          <Link variant="button" color="textPrimary" component={RouterLink} to="/Products" className={classes.link}>
            Products
          </Link>
          <Link variant="button" color="textPrimary" component={RouterLink} to="/About" className={classes.link}>
            About Us
          </Link>
          <Link variant="button" color="textPrimary" href="#" className={classes.link}>
            Support
          </Link>
        </nav>
        <Button href="#" color="primary" variant="outlined" className={classes.link}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
