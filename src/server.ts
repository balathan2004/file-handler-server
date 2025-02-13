import express, { Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import BlogRouter from "./minimal_blog/route/handler";
const app = express();
const PORT = process.env.PORT || 3000;

const allowedOrigins = [
  "http://localhost:3000",
  "https://minimal-blog-ivory.vercel.app",
  "http://localhost:8081",
];

dotenv.config();
app.use(cookieParser());
app.use(express.json());

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

app.use("/minimal_blog", BlogRouter);

app.get("/test", (req: Request, res: Response) => {
  res.json({ status: 200, message: "hello world !" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
