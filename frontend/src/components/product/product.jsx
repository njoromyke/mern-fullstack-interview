import React from "react";
import Rating from "../rating/rating";

const Product = ({ product, handleDeleteProduct, handleViewProduct, handleUpdateProduct }) => {
  return (
    <>
      <div className="group shadow-md bg-white rounded p-3 col-span-1 ring-1 ring-black ring-opacity-5 ">
        <div className="h-72 aspect-w-1 relative  aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
          {product.sponsored && (
            <div className="absolute top-0 right-0 bg-pink-700 text-white px-2 py-1 rounded-bl-md">Sponsored</div>
          )}
          {product.discount > 0 && (
            <div className="absolute bottom-0 left-0 bg-orange-100 text-orange-500 px-2 py-1 rounded">
              {product.discount}% off
            </div>
          )}
          <img
            src={product.image}
            alt="Person using a pen to cross a task off a productivity paper card."
            className="h-full w-full object-cover object-center group-hover:opacity-75"
            width={300}
            height={300}
          />
        </div>
        <h3 className="mt-4 text-sm text-pink-700">{product.name}</h3>
        <p className="mt-1 text-xl font-medium text-gray-900 flex justify-between items-center">
          {product.sale_price}

          {product.discount > 0 && <span className="text-sm text-gray-500 line-through">Was Ksh{product.price}</span>}
        </p>
        <Rating rating={product.rating} size={1} readonly />
        <div className="flex justify-between items-center mt-4">
          <button className="bg-blue-700 text-white px-2 py-1 rounded-md" onClick={() => handleViewProduct(product._id)}>
            View
          </button>
          <button className="bg-green-700 text-white px-2 py-1 rounded-md" onClick={() => handleUpdateProduct(product._id)}>
            Update
          </button>
          <button className="bg-red-700 text-white px-2 py-1 rounded-md" onClick={() => handleDeleteProduct(product._id)}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
