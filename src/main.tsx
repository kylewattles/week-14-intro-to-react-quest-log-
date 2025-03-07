import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Quests from './App.tsx'
import "bootstrap/dist/css/bootstrap.min.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Quests />
  </StrictMode>,
)