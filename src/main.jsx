import React from 'react'
import ReactDOM from 'react-dom/client'
import AsymmetricCryptography from './pages/AsymmetricCryptography.jsx'
import Footer from './components/footer/Footer.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AsymmetricCryptography />
    <Footer />
  </React.StrictMode>,
)
