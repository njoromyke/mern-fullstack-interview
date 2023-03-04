import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProduct, getProducts } from "../../../state/actions/actions";
import { resetSuccessMessage } from "../../../state/slices/slice";
import Modal from "../modal";

const DeleteProduct = ({ onClose, productId }) => {
  const dispatch = useDispatch();
  const getProductData = useSelector((state) => state.data);
  const { product, success } = getProductData;

  const handleDelete = () => {
    dispatch(deleteProduct(productId));
  };

  useEffect(() => {
    dispatch(getProduct(productId));
  }, [dispatch, productId]);

  useEffect(() => {
    if (success) {
      dispatch(resetSuccessMessage());
      dispatch(getProducts());
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success, dispatch]);

  return (
    <Modal actionText="Delete" handleAction={handleDelete} onClose={onClose} title={`Delete ${product.name}`}>
      <div className="mx-auto grid grid-cols-1 gap-4">
        <div className="col-span-1">
          <p className="text-center">Are you sure you want to delete this product?</p>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteProduct;
