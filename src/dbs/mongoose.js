const mongoose = require('mongoose');
const config = require('config');
const db = config.get("MONGODB_URI")

const connectDB = async () => {
    try {
      await mongoose.connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
      });
      console.log("DB connected");
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  };
  module.exports = connectDB;
  