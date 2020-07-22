import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100">
        {/* IMAGE PART */}
        <Link to={`/products/${product.id}`} className="product-img-link">
          <img
            className="product-img"
            src={product.images[0]}
            alt={product.name}
          />
        </Link>

        {/* DETAILS PART */}
        <div className="card-body">
          <h4 className="card-title">
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </h4>
          <h5>${product.price}</h5>
          <p className="card-text">{product.description}</p>
        </div>

        {/* RATING PART */}
        <div className="card-footer">
          <small className="text-muted">
            &#9733; &#9733; &#9733; &#9733; &#9734;
          </small>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
