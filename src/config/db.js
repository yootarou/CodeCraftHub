const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Connect to MongoDB using the URI from .env
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected successfully.');
    } catch (error) {
        console.error('MongoDB connection failed:', error);
        process.exit(1);
    }
};

module.exports = connectDB;

