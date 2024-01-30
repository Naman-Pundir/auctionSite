import mongoose from "mongoose";

// Defining Schema
const biddingSchema = new mongoose.Schema({
  item_name: { type: String, required: true, trim: true },
  client_email: { type: String, required: false, trim: true },
  seller_email: { type: String, required: true, trim: true },
  item_info: { type: String, required: true, trim: true },
  start_price: { type: String, required: true, trim: true },
  current_bid: { type: String, required: true, trim: true },
  end_time:{ type: Number, required: false, trim: true },
  status:{ type: String, required: false, trim: true }

})

// Model
const biddingModel = mongoose.model("bidding", biddingSchema)

export default biddingModel