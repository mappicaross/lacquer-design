import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Studio from './Studio.tsx'
import Contact from './Contact.tsx'
import PerdidoGallery from './PerdidoGallery.tsx'
import ClevelandParkGallery from './ClevelandParkGallery.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/perdido" element={<PerdidoGallery />} />
        <Route path="/projects/cleveland-park" element={<ClevelandParkGallery />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
