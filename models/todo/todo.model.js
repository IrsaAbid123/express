import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      require: true,
      unique: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    subTodo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "subTodo",
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const Todo = mongoose.model("Todo", todoSchema);
