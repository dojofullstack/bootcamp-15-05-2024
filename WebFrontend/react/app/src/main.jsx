import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './views/App.jsx'
import './assets/css/styles.css'
import Home from './views/Home.jsx'
import { Login } from './views/Login.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Login/>
    {/* <Home /> */}
  </React.StrictMode>,
)
