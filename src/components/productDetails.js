import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductDetails = (props) => {
  const [loading, setLoading] = useState(true);
  const [showImage, setShowImage] = useState("");

  const dispatch = useDispatch();
  const product = useSelector((state) => state.productsReducer.product);

  // GET PRODUCT DATA BY ID
  useEffect(() => {
    dispatch({ type: "PRODUCT_BY_ID", payload: +props.match.params.id });
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //UPDATE SHOWED IMAGE
  useEffect(() => {
    if (!loading) setShowImage(product.images[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  //Handle Image Change
  function updateImage(img) {
    setShowImage(img);
  }

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : product === undefined ? (
        <h1>No Product Found</h1>
      ) : (
        <div className="row">
          <div className="col-4">
            <div className="row">
              <div className="col-4 img-gallery">
                {product.images.map((img) => (
                  <img
                    alt=""
                    key={img}
                    onClick={() => updateImage(img)}
                    className="small-img"
                    src={img}
                  />
                ))}
              </div>
              <div className="col-8">
                <img className="product-img" src={showImage} alt="" />
              </div>
            </div>
          </div>
          <div className="col-8">
            <h2>{product.name}</h2>
            <h4>
              PRICE:<span className="price"> ${product.price}</span>
            </h4>
            <br />
            <h4>Details:</h4>
            <p>{product.description}</p>
            <br />
            <h4 className="inline-block">AVAILABLE COLORS:</h4>
            <div className="inline-block">
              {product.colors.map((c) => (
                <h4
                  key={c}
                  className="badge badge-primary color-badge"
                  style={{ backgroundColor: c }}
                >
                  {c}
                </h4>
              ))}
            </div>
            <button className="btn btn-secondary block">Add to cart</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
