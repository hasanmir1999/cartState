import { useEffect } from "react";
import toast from "react-hot-toast";

export default function ProductItem({
  id,
  title,
  price,
  description,
  image,
  addedProducts,
  setAddedProducts,
  addedToCart,
  setAddedToCart,
  setTotalPrice,
}) {


  const addToCartHandler = () => {
    if (addedProducts.some((product) => product.id == id)) {
      const updateAddedProduct = [...addedProducts];
      updateAddedProduct.map((product) => {
        if (product.id == id) {
          product.count += 1;
          product.total = product.count * product.price;
        }
        setAddedProducts(updateAddedProduct);
        return;
      });
    } else {
      const product = { id, title, price, description, image };
      product.count = 1;
      product.total = product.price;
      setAddedProducts([...addedProducts, { ...product }]);
      setAddedToCart(addedToCart + 1);
    }
    toast.success('Added To Cart')
  };


  return (
    <>
      <div className="product-item border-2 border-orange-300 rounded-md p-5 flex flex-col items-center gap-7 h-[670px]">
        <div className="product-img w-[calc(100%-20px) h-[400px] rounded-md]">
          <img
            src={image}
            className="object-contain h-full w-full"
            alt="product-img"
          />
        </div>
        <div className="product-title-desc">
          <h5 className="text-gray-700 text-xl line-clamp-1">{title}</h5>
          <p className="text-gray-600 text-sm mt-3 line-clamp-3">
            {description}
          </p>
        </div>
        <div className="line bg-orange-300 w-full h-0.5 mx-auto" />
        <div className="product-price-addBtn flex items-center justify-between w-full">
          <p className="text-gray-700">{price}$</p>
          <button
            onClick={addToCartHandler}
            className="bg-orange-300 rounded-md text-white py-2 px-5 cursor-pointer"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
}
