import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: [true, "username must be added"],
      unique: [true, "Username must be unique"],
      lowercase: [true, "Username must be in lowercase"],
    },
    email: {
      type: String,
      require: [true, "Email must be added"],
      unique: [true, "Email must be unique"],
      lowercase: [true, "Email must be in lowercase"],
    },
    password: {
      type: String || Number,
      require: [true, "Password must be added"],
      unique: [true, "Password must be unique"],
      lowercase: [true, "Password must be in lowercase"],
      min: [6, "Too few eggs"],
      max: 12,
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
