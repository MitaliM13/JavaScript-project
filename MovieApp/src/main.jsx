import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Movie from './Movie'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Movie/>
  </StrictMode>,
)
