import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const conectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `DB connected : DB HOST: ${conectionInstance.connection.host}`
    );
  } catch (err) {
    console.error("DB connection fail ", err);
    process.exit(1);
  }
};

export default connectDB;
