const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;
console.log("Github Api Key:" , apiKey)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
