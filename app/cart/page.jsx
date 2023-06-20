"use client";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";

import Header from "@/components/Header";
import { CartContext } from "@/context/CartContext/page";

const CartPage = () => {
  const { cartProducts } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductData = async () => {
      const res = await fetch("/api/CartProducts/", {
        method: "POST",
        body: JSON.stringify({ ids: cartProducts }),
      });
      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await res.json();
      setProducts(data);
    };
    if (cartProducts.length > 0) {
      fetchProductData();
    }
  }, [cartProducts]);

  return (
    <>
      <Header />
      <div className="centered-content grid grid-cols-[65%_35%] gap-10">
        <div className="box-div">
          <h2 className="font-bold">Cart</h2>
          {!cartProducts?.length && <div> Your cart is empty</div>}
          {products?.length > 0 && (
            <table>
              <thead className="border-b-2 text-gray-400">
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product._id}>
                    <td className="p-10">
                      <div className="relative w-full h-24 border border-gray-100 rounded-md shadow-md p-3">
                        <Image
                          src={product.images[0]}
                          alt={`${product.title} image`}
                          fill
                          className="p-2 object-contain"
                        />
                      </div>
                      {product.title}
                    </td>
                    <td>
                      {cartProducts.filter((id) => id === product._id).length}
                    </td>
                    <td>
                      {cartProducts.filter((id) => id === product._id).length *
                        product.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        {!!cartProducts?.length && (
          <div className="box-div">
            <h2>Order Information</h2>
            <input type="text" placeholder="Address"></input>
            <input type="text" placeholder="Address 2"></input>
            <button className="btn-checkout mt-7">Continue to payment</button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartPage;
