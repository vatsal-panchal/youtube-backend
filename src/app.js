import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express(); // main express app

// allow frontend requests
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// read json data from request body
app.use(express.json({ limit: "20kb" }));

// read form data
app.use(express.urlencoded({ extended: true, limit: "20kb" }));

// serve static files from public folder
app.use(express.static("public"));

// read cookies
app.use(cookieParser());

export default app;
