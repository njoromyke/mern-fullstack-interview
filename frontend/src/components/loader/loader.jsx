import React from "react";

const Loader = () => {
  return (
    <div className="fixed left-0 top-0 bottom-0 right-0 flex justify-center bg-white items-center z-[4000]">
      <div className="animate-ping h-8  w-8 rounded-full bg-black"></div>
    </div>
  );
};

export default Loader;
