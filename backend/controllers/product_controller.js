const Product = require("../models/Products");
const asyncHandler = require("express-async-handler");
const { HTTP_STATUS_CODES } = require("../utilities/constants");

// @desc    Fetch all products
// @route   GET /api/products
// @access  Private

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  if (!products) {
    res.status(HTTP_STATUS_CODES.Bad_Request);
    throw new Error("No products found");
  }

  res.status(HTTP_STATUS_CODES.OK);
  res.json({
    products,
    message: "Products fetched successfully",
    success: true,
  });
});

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Private

const getProductById = asyncHandler(async (req, res) => {
  const { product_id } = req.params;

  const product = await Product.findById(product_id);

  if (!product) {
    res.status(HTTP_STATUS_CODES.Bad_Request);
    throw new Error("No product found");
  }

  res.status(HTTP_STATUS_CODES.OK);
  res.json({
    product,
    message: "Product fetched successfully",
    success: true,
  });
});

// @desc    Create a product
// @route   POST /api/products
// @access  Private

const createProduct = asyncHandler(async (req, res) => {
  const { name, price, discount, sponsored, rating, description, image } = req.body;

  const product = await Product.create({
    name,
    price,
    discount,
    sponsored,
    rating,
    description,
    image,
    sale_price: parseFloat(price) - (parseFloat(price) * parseFloat(discount)) / 100,
  });

  if (product) {
    res.status(HTTP_STATUS_CODES.Created);
    res.json({
      _id: product._id,
      name: product.name,
      price: product.price,
      discount: product.discount,
      sponsored: product.sponsored,
      rating: product.rating,
      description: product.description,
      image: product.image,
      sale_price: product.sale_price,
      message: "Product created successfully",
      success: true,
    });
  } else {
    res.status(HTTP_STATUS_CODES.Bad_Request);
    throw new Error("Invalid product data");
  }
});

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private

const updateProduct = asyncHandler(async (req, res) => {
  const { product_id } = req.params;

  const product = await Product.findById(product_id);

  if (product) {
    product.name = req.body.name || product.name;
    product.price = req.body.price || product.price;
    product.discount = req.body.discount || product.discount;
    product.sponsored = req.body.sponsored || product.sponsored;
    product.rating = req.body.rating || product.rating;
    product.description = req.body.description || product.description;
    product.image = req.body.image || product.image;
    product.sale_price = parseFloat(product.price) - (parseFloat(product.price) * parseFloat(product.discount)) / 100;

    const updatedProduct = await product.save();

    res.status(HTTP_STATUS_CODES.OK);
    res.json({
      message: "Product updated successfully",
      success: true,
      product: updatedProduct,
    });
  } else {
    res.status(HTTP_STATUS_CODES.Bad_Request);
    throw new Error("Product not found");
  }
});

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private

const deleteProduct = asyncHandler(async (req, res) => {
  const { product_id } = req.params;

  const product = await Product.findById(product_id);

  if (product) {
    await product.delete();
    res.status(HTTP_STATUS_CODES.OK);
    res.json({
      message: "Product deleted successfully",
      success: true,
    });
  } else {
    res.status(HTTP_STATUS_CODES.Bad_Request);
    throw new Error("Product not found");
  }
});

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
