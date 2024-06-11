import express, { Request, Response } from "express";
import { notFound } from "./app/middlewares/notFound";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send({
    success: true,
    message: "Welcome to the API",
  });
});

app.use("*", notFound);

export default app;
