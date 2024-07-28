import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Form from './Form.jsx'
{/*import Register from './components/Register.jsx'*/}
{/*import Login from './components/Login.jsx'*/}
import Cart from './components/Cart.jsx'
import Donation from './components/Donate.jsx'
import Inventory from './components/Inventory.jsx'
import SendEmailButton from './components/SendEmailButton.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      background: "#CFFCF8",
      margin: 0,
      color: 'black',
    }}>
      <Donation />
      {/*<div style={{ display: "flex", flexDirection: "column" }}>
        <Cart />
      </div>
      <Inventory />
  <SendEmailButton />*/}
    </div>
  </React.StrictMode>,
)
