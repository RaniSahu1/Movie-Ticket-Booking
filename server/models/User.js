import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  _id: { type: String, required: true, unique: true },
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  image: { type: String, required: true },
});

export const User = mongoose.model("User", userSchema);

