import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct, getProduct, getProducts, updateProduct } from "../../../state/actions/actions";
import { resetSuccessMessage } from "../../../state/slices/slice";
import Modal from "../modal";

const AddProduct = ({ onClose, productId }) => {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();

  const addProductState = useSelector((state) => state.data);
  const { success, product } = addProductState;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheck = (e) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handleSubmit = () => {
    if (productId) {
      dispatch(updateProduct(formData));
    } else {
      dispatch(createProduct(formData));
    }
  };

  useEffect(() => {
    if (success) {
      setFormData({});
      onClose();
      dispatch(resetSuccessMessage());
      dispatch(getProducts());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success]);

  useEffect(() => {
    if (productId) {
      dispatch(getProduct(productId));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);

  useEffect(() => {
    if (productId && product) {
      setFormData(product);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product, productId]);

  return (
    <Modal title="New Product" actionText="Submit" handleAction={handleSubmit} onClose={onClose}>
      <div className="mx-auto grid grid-cols-1 gap-4">
        <div className="col-span-1">
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Product Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            required
            value={formData.name}
            className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="col-span-1">
          <label htmlFor="price" className="block text-sm font-medium mb-2">
            Product Price <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="price"
            id="price"
            onChange={handleChange}
            required
            value={formData.price}
            className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="col-span-1">
          <label htmlFor="discount" className="block text-sm font-medium mb-2">
            Product Discount <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="discount"
            id="discount"
            onChange={handleChange}
            required
            value={formData.discount}
            className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="col-span-1">
          <label htmlFor="image" className="block text-sm font-medium mb-2">
            Product Image <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="image"
            id="image"
            onChange={handleChange}
            required
            value={formData.image}
            className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="col-span-1">
          <label htmlFor="rating" className="block text-sm font-medium mb-2">
            Product Rating <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="rating"
            id="rating"
            onChange={handleChange}
            required
            value={formData.rating}
            className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="col-span-1">
          <label htmlFor="description" className="block text-sm font-medium mb-2">
            Product Description <span className="text-red-500">*</span>
          </label>
          <textarea
            type="text"
            name="description"
            id="description"
            onChange={handleChange}
            required
            value={formData.description}
            className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="col-span-1 items-center">
          <div className="flex items-center justify-between">
            <label htmlFor="sponsored" className="block text-sm font-medium mb-2">
              Sponsored
            </label>
            <input
              type="checkbox"
              name="sponsored"
              id="sponsored"
              onChange={handleCheck}
              required
              checked={formData.sponsored || false}
              className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md"
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddProduct;
