const express = require("express");
const { getProducts, createProduct } = require("../controllers/product_controller");
const router = express.Router();
const { protect } = require("../middleware/auth");

router.route("/").get(protect, getProducts).post(protect, createProduct);
router.route("/:product_id").get(protect, getProducts).put(protect, createProduct).delete(protect, createProduct);


module.exports = router;