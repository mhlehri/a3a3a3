import express, { Application, Request, Response } from "express";
import { notFound } from "./app/middlewares/notFound";
import cors from "cors";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";

const app: Application = express();

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send({
    success: true,
    message: "Welcome to the API",
  });
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;
