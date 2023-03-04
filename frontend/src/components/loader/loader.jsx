import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="border-t-4 border-b-4 border-gray-200 rounded-full animate-spin h-5 w-5 mr-3"></div>
      <span>Loading...</span>
    </div>
  );
};

export default Loader;
