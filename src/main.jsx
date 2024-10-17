import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Lapview from './navbar/lapview'
import { Grid } from '@mui/material'
import Block from './blocks/block'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Grid container>
      <Grid item lg={4.4}>
        <Block/>
      </Grid>
      </Grid>
  </StrictMode>
)
