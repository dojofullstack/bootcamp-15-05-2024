import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './views/App.jsx'
import './assets/css/styles.css'
import Home from './views/Home.jsx'
import { Login } from './views/Login.jsx'
import Rutas from './Rutas.jsx'
// import { debugContextDevtool } from 'react-context-devtool';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

      <Rutas/>
 
  </React.StrictMode>,
)



// debugContextDevtool(document.getElementById('root'));
