import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import pro from './pro.jsx';  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div style={{ marginBottom: '50px' }}>
      <App />  
    </div>
    <div>
      <pro />  
    </div>
  </StrictMode>,
)
