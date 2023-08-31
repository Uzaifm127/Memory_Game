import React from "react";
import { Link } from "react-router-dom";

const Button = ({ buttonContent, id }) => {
  return (
    <>
      <div className="watermark-container-start">
        <span className="watermark">MADE BY UZAIF</span>
      </div>
      <Link to="/game">
        <button id={id} type="button">
          {buttonContent}
        </button>
      </Link>
    </>
  );
};

export default Button;
