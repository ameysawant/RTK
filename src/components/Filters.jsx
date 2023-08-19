import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendProductId } from "../redux/products/productsSlice";

const Filters = () => {
  const dispatch = useDispatch();
  const { filterList, isLoading, isError } = useSelector(
    (state) => state.productsReducer
  );

  const sendName = (id) => {
    dispatch(sendProductId({ id }));
  };

  if (isLoading) {
    return <h1>Loading Filters...</h1>;
  }

  if (isError) {
    return <h1>{isError}</h1>;
  }

  return (
    <>
      {filterList &&
        filterList.map((item) => {
          const { id, name } = item;
          return (
            <button className="cat-name" key={id} onClick={() => sendName(id)}>
              {name}
            </button>
          );
        })}
    </>
  );
};

export default Filters;
