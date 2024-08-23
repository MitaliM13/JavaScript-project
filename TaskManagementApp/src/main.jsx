import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TaskManagement from './TaskManagement'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < TaskManagement/>
  </StrictMode>,
)
