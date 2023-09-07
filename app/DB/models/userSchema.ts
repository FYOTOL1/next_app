const mongoose = require("mongoose");
import { models, model } from "mongoose";

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  phone_number: { type: Number, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export default models.user || model("user", userSchema);
