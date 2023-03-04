import React from "react";

const Loader = () => {
  return (
    <div className="top-0 left-0 w-full h-full fixed flex justify-center items-center bg-white bg-opacity-75 z-50">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-pink-500"></div>
    </div>
  );
};

export default Loader;
