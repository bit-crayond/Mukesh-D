import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Block from './block/block'
import { Grid } from '@mui/material'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Grid container>
      <Grid item lg={4.35}>
      <Block/>
      </Grid>
    </Grid>
  </StrictMode>
)
