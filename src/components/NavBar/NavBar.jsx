import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import CustomDropdown from './CustomDropdown';
import "../../assets/css/NavBar.css"


import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';

// import Link from '@material-ui/core/Link';
import { fade, makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';


const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
      // borderBottom: `1px solid ${theme.palette.divider}`,
      marginBottom: '20px'
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.primary.light, 0.2),
    '&:hover': {
      backgroundColor: fade(theme.palette.primary.light, 0.35),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
    position: 'relative',
  },
  nav: {
    // marginRight: '100px'
  },
  endIcon: {
    marginLeft: '0px !important'
  },
}));

function NavBar() {
  const classes = useStyles();
  
  return (
    <Container>
    <AppBar position="static" color="inherit" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          KdShop
          </Typography>
        <div className={classes.grow} />
        <nav className={classes.nav}>
            <Button variant="link" color="default" className={classes.link}
                  component={RouterLink} to="/Home">
              Home
          </Button>
          <CustomDropdown />
            <Button variant="link" color="default" className={classes.link} endIcon={<ArrowDropDownOutlinedIcon className={classes.endIcon} />}
                  component={RouterLink} to="/Products">
            Products
          </Button>
          <Button variant="link" color="default" className={classes.link} endIcon={< ArrowDropDownOutlinedIcon/>}
                  component={RouterLink} to="/Blogs">
            Blogs
          </Button>
        </nav>
        <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
        </div>
        <Button variant="outlined" color="default" className={classes.button} startIcon={<ShoppingCartIcon />}>
          My Cart (0)
        </Button>
        {/* <Button href="#" color="primary" variant="outlined" className={classes.link}>
          Login
        </Button> */}
      </Toolbar>
      </AppBar>
    </Container>
  );
}

export default NavBar;
