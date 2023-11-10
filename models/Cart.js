import mongoose from "mongoose";

const cartItem = new mongoose.Schema({
  product: {
    type: mongoose.Types.ObjectId,
    ref: "products",
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "users",
  },
  items: [cartItem],
});

export default mongoose.model("cart", cartSchema);
