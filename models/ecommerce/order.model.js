import mongoose from "mongoose";

const productItem = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      require: true,
    },
    status: {
      type: String,
      enum: ["PENDING", "DELIVERED", "CANCELLED"],
      default: "PENDING",
    },
    product: [productItem],
  },
  {
    timestamps: true,
  }
);

export const Order = mongoose.model("Order", orderSchema);
