const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://arshiaguptabt22ele:kGjWDqOkXFKhySYD@cluster0.glzdsy0.mongodb.net/", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};
module.exports = connectDB;
