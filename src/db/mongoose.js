const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/task_manager_api")
  .then(() => console.log("Connected to MongoDB via Mongoose successfully!"))
  .catch((err) => console.error("Mongoose connection error:", err));

const Task = mongoose.model("Task", {
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});

const myTask = new Task({ description: "Clean the House", completed: true });

myTask
  .save()
  .then(() => {
    console.log(myTask);
  })
  .catch((err) => {
    console.log("Unable to save the document", err);
  });
