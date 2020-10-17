import React from 'react';

import TextField from '@material-ui/core/TextField';

function TextFieldinput() {
    return (
        < TextField
            variant="outlined"
            color="secondary"
            type="email"
            label="Email"
            placeholder="test@test.com"
        />
    );
}

export default TextFieldinput;
