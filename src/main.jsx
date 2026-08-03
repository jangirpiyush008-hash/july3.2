import React from 'react'
import { hydrateRoot, createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

const container = document.getElementById('root')
const tree = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

if (container.hasChildNodes() && container.firstChild && container.firstChild.nodeType === 1) {
  hydrateRoot(container, tree)
} else {
  createRoot(container).render(tree)
}
