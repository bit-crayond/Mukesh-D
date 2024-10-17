import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Block from './mukesh/block'
import { Grid } from '@mui/material'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Grid container>
      <Grid item lg={3.6}>
      <Block/>
      </Grid>
    </Grid>
  </StrictMode>
)
