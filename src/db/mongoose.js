const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/task_manager_api")
  .then(() => console.log("Connected to MongoDB via Mongoose successfully!"))
  .catch((err) => console.error("Mongoose connection error:", err));
