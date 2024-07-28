import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Donate from './components/Donate';
import Inventory from './components/Inventory';  // Import the Inventory component
import Cart from './components/Cart';


const App = () => {
  return (
    <Router><div style={{background:"white",height:"100vh"}}>
      <div style={{display:"flex",justifyContent:"center"}}><img src='https://aspireandglee.com/wp-content/uploads/2020/04/cropped-img-20200417-wa0062_edited.png'></img></div>
      <nav style={{display:"flex",justifyContent:"space-evenly"}}>
        <Link to="/register">Check on Student</Link>
        <Link to="/login">Add the Data of the Student</Link>
        <Link to="/donate">Donate</Link>
        
      </nav>
      <div style={{display:"flex",justifyContent:"center",marginTop:"10rem",color:"black"}}><div ><h1>Mission statement</h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique commodi possimus at molestiae, voluptatem labore?</div></div>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/inventory" element={<Inventory />} /> {/* Add route for inventory */}
        <Route path="/cart" element={<Cart />} />
      </Routes>
      </div>
    </Router>
  );
};

export default App;
