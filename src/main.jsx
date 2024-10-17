import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Grid } from '@mui/material'
import TopBar from './toplayer1/Header'
import Block from './blocks/block'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TopBar/>
    <Grid container>
      <Grid item lg={4.4}>
        <Block/>
      </Grid>
      </Grid>
  </StrictMode>
)
