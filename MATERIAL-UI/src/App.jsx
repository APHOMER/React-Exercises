// import { useState } from 'react'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RatingComponent from './Rating';
import FormDemo from './FormDemo';

function App() {

  return (
    <>
      <FormDemo /> <br></br>
      <RatingComponent /> <br></br>

      <Button color='success' variant="contained" onClick={() => alert("Hi")}>Contained</Button>
      <Button color='error' size='small' variant="text" onClick={() => alert("Error")}>Contained-small</Button>
      <Button color='warning' size='large' variant="outlined" onClick={() => alert("Warning")}>Contained-large</Button>
      <Button color='secondary' size='medium' variant="contained" onClick={() => alert("Secondary")}>Contained</Button>
      <br></br>
      <IconButton aria-label="delete">
          <DeleteIcon />
      </IconButton>
      <IconButton aria-label="delete" disabled color="primary">
        <DeleteIcon />
      </IconButton>
      <IconButton color="secondary" aria-label="add an alarm">
        <AlarmIcon />
      </IconButton>
      <IconButton color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton>
    </>
  )
}

export default App
