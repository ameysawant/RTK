import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/products/productsSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { productList, isLoading, isError } = useSelector(
    (state) => state.productsReducer
  );
  // console.log(isError);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (isLoading) {
    return <h1>Loading Products...</h1>;
  }

  if (isError) {
    return <h1>{isError}</h1>;
  }

  return (
    <>
      <div className="d-flex">
        {productList &&
          productList.map((item) => {
            const { id, name, image, price } = item;
            return (
              <div key={id} className="col">
                <div className="image">
                  <img src={image} alt={name} />
                </div>
                <div className="name">
                  <h6>{name}</h6>
                </div>
                <div className="price">Rs.{price}/-</div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Products;
