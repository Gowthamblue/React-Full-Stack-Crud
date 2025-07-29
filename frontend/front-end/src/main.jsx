import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import UploadForm from './Uploadform.jsx'
import App from './App.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
