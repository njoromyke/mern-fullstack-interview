import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddProduct from "../../components/modal/add-product/add-product";
import DeleteProduct from "../../components/modal/delete-product/delete-product";
import ViewProduct from "../../components/modal/view-product/view-product";
import Product from "../../components/product/product";
import { getProducts } from "../../state/actions/actions";

const Home = () => {
  const dispatch = useDispatch();
  const [showViewProductModal, setShowViewProductModal] = useState(false);
  const [showDeleteProductModal, setShowDeleteProductModal] = useState(false);
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [productId, setProductId] = useState(null);

  const getProductsData = useSelector((state) => state.data);
  const { products } = getProductsData;

  const handleDeleteProduct = (id) => {
    setShowDeleteProductModal(true);
    setProductId(id);
  };
  const handleViewProduct = (id) => {
    setShowViewProductModal(true);
    setProductId(id);
  };
  const handleUpdateProduct = (id) => {
    setShowAddProductModal(true);
    setProductId(id);
  };

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

      {showAddProductModal ? (
        <AddProduct
          onClose={() => {
            setShowAddProductModal(false);
            setProductId(null);
          }}
          productId={productId}
        />
      ) : null}

      {showDeleteProductModal ? (
        <DeleteProduct
          onClose={() => {
            setShowDeleteProductModal(false);
            setProductId(null);
          }}
          productId={productId}
        />
      ) : null}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <div className="col-span-1 md:col-span-2 lg:col-span-4">
          <button
            onClick={() => {
              setShowAddProductModal(true);
            }}
            className="bg-pink-700 text-white px-4 py-2 rounded-md mt-6 float-right"
          >
            Add Product
          </button>
        </div>
        {products?.map((product) => (
          <Product
            handleDeleteProduct={handleDeleteProduct}
            handleViewProduct={handleViewProduct}
            handleUpdateProduct={handleUpdateProduct}
            product={product}
            key={product._id}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
