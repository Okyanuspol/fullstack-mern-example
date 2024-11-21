import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRouter from './routes/auth.js';
import postsRouter from './routes/posts.js';

await mongoose.connect(process.env.DB_URI);

const app = express();


app.use(express.json());
app.use(cors());


app.use("/app/auth", authRouter);
app.use("/app", postsRouter);

app.listen("3005", () => console.log("server started on port 3005"));