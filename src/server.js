import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import connectDB from "./db/db.js";
import app from "./app.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`server is running at PORT: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB connection start fail :", err);
  });
