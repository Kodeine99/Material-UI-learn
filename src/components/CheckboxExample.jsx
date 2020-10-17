import React, { useState } from 'react';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';


export default function CheckboxExample() {
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
