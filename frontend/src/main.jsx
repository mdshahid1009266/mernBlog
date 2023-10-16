import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Context_provider from "./project/context/context.jsx"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context_provider>
      <App />
    </Context_provider>
  </React.StrictMode>,
)
