"use client";
import Link from "next/link";
import { useContext } from "react";

import { CartContext } from "@/context/CartContext/page";

const Header = () => {
  const { cartProducts } = useContext(CartContext);
  return (
    <header className="header-primary">
      <div className="centered-content flex justify-between">
        <Link href={"/"}>Ecommerce</Link>
        <nav>
          <Link href={"/home"}>Home</Link>
          <Link href={"/products"}>All Products</Link>
          <Link href={"/categories"}>Categories</Link>
          <Link href={"/account"}>Account</Link>
          <Link href={"/cart"}>Cart ({cartProducts.length})</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
