import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Lapview from './navbar/lapview'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Lapview />
  </StrictMode>
)
