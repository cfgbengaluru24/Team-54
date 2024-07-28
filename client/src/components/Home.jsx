// components/Home.js
import React from 'react';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
        <img src="https://aspireandglee.com/wp-content/uploads/2020/04/cropped-img-20200417-wa0062_edited.png"></img>
      <h1 style={{ fontSize: '2.5rem', margin: '1rem 0' }}>Aspire and Glee</h1>
      <h2 style={{ fontSize: '1.5rem', margin: '1rem 0', color: '#666' }}>Let's Intend To Spread Smiles</h2>
      <p style={{ fontSize: '1rem', marginTop: '2rem', maxWidth: '600px', margin: 'auto', color: '#333' }}>
        Welcome to Aspire and Glee. Our mission is to spread smiles and make a difference in the lives of those in need. Join us in our journey to bring happiness and hope to everyone.
      </p>
    </div>
  );
}

export default Home;
