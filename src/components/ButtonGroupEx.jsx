import React from 'react';

import ButtonGroup from '@material-ui/core/ButtonGroup';
import SendIcon from '@material-ui/icons/Send';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

function ButtonGroupEx() {
    return (
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
    );
}

export default ButtonGroupEx;
