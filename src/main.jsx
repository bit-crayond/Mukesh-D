import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Block from './blocks/block'
import { Grid } from '@mui/material'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Grid container>
      <Grid item lg={4.4}>
      <Block/>
      </Grid>
    </Grid>
  </StrictMode>
)
