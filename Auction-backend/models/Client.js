import mongoose from "mongoose";

// Defining Schema
const clientSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  password: { type: String, required: true, trim: true }
})

// Model
const clientModel = mongoose.model("client", clientSchema)

export default clientModel