import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../../state/actions/actions";
import Modal from "../modal";

const ViewProduct = ({ productId, onClose }) => {
  const dispatch = useDispatch();
  const getProductData = useSelector((state) => state.data);
  const { product } = getProductData;

  useEffect(() => {
    dispatch(getProduct(productId, "Product fetched successfully"));
  }, [dispatch, productId]);

  return (
    <Modal title="View Product" actionText={`Viewing Product ${product?.name}`} onClose={onClose}>
      <div className="flex flex-col">
        <div className="flex space-y-6 justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900">Name</h3>
          <p className="text-sm text-gray-500">{product?.name}</p>
        </div>
        <div className="flex  justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900">Price</h3>
          <p className="text-sm text-gray-500">Ksh {product?.price}</p>
        </div>
        <div className="flex  justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900">Discount</h3>
          <p className="text-sm text-gray-500">{product?.discount} %</p>
        </div>
        <div className="flex  justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900">Sale Price</h3>
          <p className="text-sm text-gray-500">Ksh {product?.sale_price}</p>
        </div>
        <div className="flex  justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900">Image</h3>
          <img src={product?.image} alt={product?.name} className="w-20 rounded h-20" />
        </div>
        <div className="flex  justify-between items-center mt-2">
          <h3 className="text-lg font-medium text-gray-900">Sponsored</h3>
          <p className="text-sm text-gray-500">
            {product?.sponsored ? (
              <>
                <span className="text-green-900 rounded bg-green-200 py-2 px-1">Sponsored</span>
              </>
            ) : (
              <>
                <span className="text-red-900 rounded bg-red-200 py-1 px-1">Not Sponsored</span>
              </>
            )}
          </p>
        </div>

        <div className="flex  justify-between flex-col">
          <h3 className="text-lg font-medium text-gray-900 ">Description</h3>
          <p className="text-sm text-gray-500">{product?.description}</p>
        </div>
      </div>
    </Modal>
  );
};

export default ViewProduct;
