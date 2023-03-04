const express = require("express");
const { getProducts, createProduct, deleteProduct, getProductById, updateProduct } = require("../controllers/product_controller");
const router = express.Router();
const { protect } = require("../middleware/auth");

router.route("/").get(protect, getProducts).post(protect, createProduct);
router.route("/:product_id").get(protect, getProductById).put(protect, updateProduct).delete(protect, deleteProduct);

module.exports = router;
