import Image from "next/image";
import Link from "next/link";
import CartIcon from "./icons/Cart";

const ProductBox = ({ product }) => {
  const { _id, title, description, price, images } = product;
  const url = "/product/" + _id;

  return (
    <div>
      <Link href={url}>
        <div className="bg-white p-5 h-36 text-center rounded-md">
          <div className="relative w-full h-28 flex items-center">
            <Image
              src={images[0]}
              alt={`${title} image`}
              fill
              sizes="w-30 h-28"
              className=" object-contain"
            />
          </div>
        </div>
      </Link>
      <div className="mt-3">
        <Link href={url} className="text-sm">
          {title}
        </Link>
        <div className="flex justify-between items-center">
          <span className="font-bold text-xl">${price}</span>
          <button className="btn-cart px-3 py-1">
            <CartIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductBox;
