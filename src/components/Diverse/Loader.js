import React from "react";
import ClipLoader from "react-spinners/ClipLoader"; // Import any spinner of your choice

const Loader = () => {
  return (
    <div style={loaderStyles}>
      <ClipLoader color={"#0066ff"} size={50} />
    </div>
  );
};

const loaderStyles = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 1000,
};

export default Loader;
