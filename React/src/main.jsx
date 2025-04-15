import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div style={{ marginBottom: '50px' }}>
      <App />  
    </div>
  </StrictMode>,
)
