import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Form from './Form.jsx'
import Register from './components/Register.jsx'
import Cart from './components/Cart.jsx'
import Login from './components/Login.jsx'
import Donate from './components/Donate.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Register/>
    <Cart/>
    <Login/>
    <Donate/>
  </React.StrictMode>,
)
