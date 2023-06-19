import Link from "next/link";

const Header = () => {
  return (
    <header className="header-primary">
      <div className="centered-content flex justify-between">
        <Link href={"/"}>Ecommerce</Link>
        <nav>
          <Link href={"/home"}>Home</Link>
          <Link href={"/products"}>All Products</Link>
          <Link href={"/categories"}>Categories</Link>
          <Link href={"/account"}>Account</Link>
          <Link href={"/cart"}>Cart (0)</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
