import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";

try {
  mongoose.connect(config.uri!);
  console.log("Connected to database");

  app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
  });
} catch (error: any) {
  console.log("Error connecting to database: ", error.message);
}
