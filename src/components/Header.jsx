import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


function Header() {
    return (
        <AppBar>
            <Toolbar>
            <IconButton>
                <MenuIcon />
            </IconButton>
            <Typography variant="h6">Kodeine</Typography>
            <Button>Login</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
