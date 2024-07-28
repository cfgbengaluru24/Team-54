// components/About.js
import React from 'react';

const About = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>About Page</h1>
      <h1 style={{ maxWidth: '600px', margin: 'auto', lineHeight: '1.6' }}>
        Our Story
      </h1>
      <br /><br />
      <p style={{ maxWidth: '600px', margin: 'auto', lineHeight: '1.6' }}>
        It all started with the humble eagerness among us, the faint but honest wish to make some change, to create an example in the society. This wish took a strong place of belief when the ailing patients of Saroj Mohan Cancer Hospital prayed for our well being, with a handful of us making an attempt to make them smile. Their sympathetic gestures took all of us into contemplation. Thus we, with a common sense of purpose, and with god’s grace were driven to forming an organization that speaks for us, “Let’s intend to spread smiles”.
        <br /><br />
        Registered under West Bengal Registration Act, 1961, registration number: ‘3/2D/24337 of 2014-15’, 7 years ago, since then we have conducted more than 35+ events till date. From feeding hungry souls, to supporting kids at orphanage, to provide drinking water facility at oldage home, we have never stopped. Thankfully, with noble souls by our side, we have been able to conduct free medical checkups and medicine distribution, sponsor education of needy fellows, reconstruction of homes which were washed off in floods. We have helped critical patients in their surgery, we have stood by cancer patients for their treatment.
        <br /><br />
        In the 7th year as well, Aspire and Glee has taken up the challenge to feed every hungry soul in the time of grave crisis, requesting you to be with us. Together, we can spread more smiles. #inittogether
      </p>
      <img src="https://aspireandglee.com/wp-content/uploads/2021/11/ebartobekhushirjaama_aspireandglee_standee.png" style={{height:"500px", width:"600px",}}></img>
    </div>
  );
}

export default About;
