const mongoose = require('mongoose');
console.log("Hey   ");
const connectDB = async () => {
  try {
    
    // console.log(MONGO_EDU_URI);
    await mongoose.connect("mongodb+srv://arshiaguptabt22ele:1234@cluster0.nc9sfh3.mongodb.net/", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected...');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
