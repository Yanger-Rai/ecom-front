"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import CartIcon from "./icons/Cart";

const Featured = () => {
  const [featuredProduct, setFeaturedProduct] = useState("");

  useEffect(() => {
    const getFeaturedProd = async () => {
      const response = await fetch("/api/FeaturedProduct", {
        cache: "no-store",
      });
      if (!response.ok) {
        throw new Error("Failed to fetch featured Product");
      }
      const product = await response.json();
      setFeaturedProduct(product);
    };
    getFeaturedProd();
  }, []);

  return (
    <div className="bg-black text-white px-0 py-14">
      <div className="centered-content grid grid-cols-[40%_60%] gap-5">
        <div className="flex  items-center">
          <div>
            <h1>Pro Anywhere</h1>
            <p className="text-gray-400 text-sm mt-2">
              {featuredProduct?.description}
            </p>
            <div className="flex gap-2 mt-3">
              <Link href={"/"} className="btn-default">
                read more
              </Link>
              <button className=" inline-flex gap-2 items-center btn-primary">
                <CartIcon />
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          {Object.keys(featuredProduct).length > 0 && (
            <img src={featuredProduct.images[1]} alt="mac book" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Featured;
