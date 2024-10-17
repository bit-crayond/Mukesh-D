import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Block from './mukesh/block'
import { Grid } from '@mui/material'
import TopBar from './toplayer1/Header'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TopBar/>
  </StrictMode>
)
