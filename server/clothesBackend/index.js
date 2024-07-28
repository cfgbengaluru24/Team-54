const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();

const authRoutes = require('./routes/authRoutes');
const donationRoutes = require('./routes/donationRoutes');
const inventoryRoutes = require('./routes/inventoryRoutes');
const cartRoutes = require('./routes/cartRoutes');
// const { initializeInventory } = require('./controllers/inventoryController');

const app = express(); // Initialize the app before using it

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/donate', donationRoutes);
app.use('/api/inventory', inventoryRoutes);
app.use('/api/cart', cartRoutes);

// Middleware
app.use(express.json());
// app.use(cors());
app.use(bodyParser.json());  // Parses JSON data in the request body

// Routes
app.use('/', authRoutes);
app.use('/', donationRoutes);
app.use('/', inventoryRoutes);
app.use('/', cartRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect("mongodb+srv://arshiaguptabt22ele:kGjWDqOkXFKhySYD@cluster0.glzdsy0.mongodb.net/", { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('Connected to MongoDB');
  
    
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });
  