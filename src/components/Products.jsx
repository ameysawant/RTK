import React, { useEffect } from "react";

const Products = () => {
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await fetch("http://localhost:8000/products");
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    } else {
      console.log("products not found");
    }
  };

  return <div>Products</div>;
};

export default Products;
