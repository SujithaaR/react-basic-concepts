import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GlobalState from './components/context/index.jsx'

createRoot(document.getElementById('root')).render(
 <GlobalState>
      <App />
 </GlobalState>
    
 
)
