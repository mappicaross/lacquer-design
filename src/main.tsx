import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Studio from './Studio.tsx'
import PerdidoGallery from './PerdidoGallery.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/projects/perdido" element={<PerdidoGallery />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
