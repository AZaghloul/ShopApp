import React from "react";
import { useSelector } from "react-redux";

import ProductCard from "./productCard";

const ProductsList = () => {
  const products = useSelector((state) => state.productsReducer.products);

  return (
    <div className="row">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
