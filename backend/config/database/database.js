const mongoose = require("mongoose");
const { CONFIG } = require("../../utilities/constants");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(CONFIG.MONGO_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
