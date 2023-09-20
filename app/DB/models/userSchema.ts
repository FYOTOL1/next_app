const mongoose = require("mongoose");
import { models, model } from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: { type: String, required: true },
    phone_number: { type: Number, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    status: { type: String, required: true, default: "login" },
    role: { type: String, default: "user", required: true },
  },
  {
    timestamps: true,
  }
);

export default models.user || model("user", userSchema);
