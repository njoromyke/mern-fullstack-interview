const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },

    discount: {
      type: Number,
      required: true,
    },

    sponsored: {
      type: Boolean,
      required: true,
    },

    rating: {
      type: Number,
      required: true,
      default: 0,
    },

    description: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
