import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../components/modal/modal";
import ViewProduct from "../../components/modal/view-product/view-product";
import Product from "../../components/product/product";
import Rating from "../../components/rating/rating";
import { getProducts } from "../../state/actions/actions";

const Home = () => {
  const dispatch = useDispatch();
  const [showViewProductModal, setShowViewProductModal] = useState(false);
  const [showUpdateProductModal, setShowUpdateProductModal] = useState(false);
  const [showDeleteProductModal, setShowDeleteProductModal] = useState(false);
  const [productId, setProductId] = useState(null);

  const getProductsData = useSelector((state) => state.data);
  const { products } = getProductsData;

  const handleDeleteProduct = (id) => {};
  const handleViewProduct = (id) => {
    console.log(id, "id");
    setShowViewProductModal(true);
    setProductId(id);
  };
  const handleUpdateProduct = (id) => {};

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="mx-auto container mt-6">
      <h2 className="text-2xl text-pink-700  text-center uppercase font-bold">Products</h2>
      {showViewProductModal ? (
        <ViewProduct
          productId={productId}
          showViewProduct={showViewProductModal}
          onClose={() => {
            setShowViewProductModal(false);
            setProductId(null);
          }}
        />
      ) : null}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {products?.map((product) => (
          <Product
            handleDeleteProduct={handleDeleteProduct}
            handleViewProduct={handleViewProduct}
            handleUpdateProduct={handleUpdateProduct}
            product={product}
            key={product.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
