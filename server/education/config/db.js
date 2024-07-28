const mongoose = require('mongoose');
console.log("Hey   ");
const connectDB = async () => {
  try {
    // console.log(MONGO_EDU_URI);
    await mongoose.connect(process.env.MONGO_EDU_URI, {
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
