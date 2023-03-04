const express = require("express");
const { getProducts, createProduct, deleteProduct } = require("../controllers/product_controller");
const router = express.Router();
const { protect } = require("../middleware/auth");

router.route("/").get(protect, getProducts).post(protect, createProduct);
router.route("/:product_id").get(protect, getProducts).put(protect, createProduct).delete(protect, deleteProduct);


module.exports = router;