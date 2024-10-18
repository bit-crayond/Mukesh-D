import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Lapview from './navbar/lapview'
import { Grid } from '@mui/material'
import TopBar from './toplayer1/Header'
import Block from './blocks/block'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TopBar/>
  <Lapview />
    <Grid container>
      <Grid item lg={4.3}>
        <Block/>
      </Grid>
      </Grid>
  </StrictMode>
)
  