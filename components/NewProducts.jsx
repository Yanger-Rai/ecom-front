"use client";
import { useEffect, useState } from "react";
import ProductBox from "./ProductBox";

const NewProducts = () => {
  const [newProducts, setNewProducts] = useState([]);

  useEffect(() => {
    const getNewProducts = async () => {
      const res = await fetch("api/NewProducts");
      if (!res.ok) {
        throw new Error("Failed to fetch new products");
      }
      const data = await res.json();
      setNewProducts(data);
    };
    getNewProducts();
  }, []);
  return (
    <>
      <div className="centered-content font-bold">
        <h2 className="mt-10">New Arrivals</h2>
      </div>
      <div className="centered-content grid grid-cols-4 gap-7 pt-10">
        {newProducts.length > 0 &&
          newProducts.map((product) => (
            <ProductBox key={product._id} product={product} />
          ))}
      </div>
    </>
  );
};

export default NewProducts;
