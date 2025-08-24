import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Navbar } from './components/nav.tsx'
import { Planos } from './components/plans-section.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <App />
    <Planos />
  </StrictMode>,
)
