import React from "react";
import { BallTriangle } from "react-loader-spinner";
import "./Loader.scss";

function Loader() {
  return (
    <div className="loaderDiv">
      <BallTriangle
        height={150}
        width={100}
        radius={5}
        color="#8FAED6"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

export default Loader;
