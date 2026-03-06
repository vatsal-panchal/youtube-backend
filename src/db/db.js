import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const conectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `database connected : DB HOST: ${conectionInstance.connection.host}`
    );
  } catch (err) {
    console.error("database connection fail ", err);
    process.exit(1);
  }
};

export default connectDB;
