import { useEffect } from "react";
import toast from "react-hot-toast";
import { FaRegTrashAlt } from "react-icons/fa";
export default function CartItem({
  id,
  title,
  price,
  count,
  image,
  addedProducts,
  setAddedProducts,
  addedToCart,
  setAddedToCart,
  setTotalPrice,
}) {
  const increaseHandler = () => {
    const updateAddedProducts = [...addedProducts];
    updateAddedProducts.map((product) => {
      if (product.id == id) {
        product.count += 1;
        product.total = product.count * product.price;
      }
      setAddedProducts(updateAddedProducts);
      return;
    });
    toast.success('Added to the number of products')
  };

  const decreaseHandler = () => {
    const updateAddedProducts = [...addedProducts];
    updateAddedProducts.map((product) => {
      if (product.id == id) {
        product.count -= 1;
        product.total = product.count * product.price;
      }
      setAddedProducts(updateAddedProducts);
      return;
    });
    toast.success('The number of products was reduced')
  };

  const removeHandler = () => {
    const updateAddedProducts = addedProducts.filter(
      (product) => product.id !== id
    );
    setAddedToCart(addedToCart - 1);
    setAddedProducts(updateAddedProducts);
    toast.success('The product was removed from the cart')
  };

  useEffect(() => {
    let updateTotalPrice = 0
    if(!addedProducts.length){
        setTotalPrice(updateTotalPrice)
        return
    }
    addedProducts.forEach(product => {
      updateTotalPrice += product.total
    })
    setTotalPrice(updateTotalPrice)
  }, );

  return (
    <>
      <div className="cart-item border-2 border-orange-200 rounded-md flex p-3 items-center">
        <div className="product-imd w-[100px] h-[100px] rounded-md">
          <img
            className="object-contain w-full h-full"
            src={image}
            alt="product-img"
          />
        </div>
        <div className="product-info ml-2 text-gray-700">
          <h5 className="title line-clamp-1 whitespace-nowrap">
            title : {title}
          </h5>
          <p className="price">price : {price}$</p>
        </div>
        <div className="product-count flex items-center text-gray-700 gap-5 ml-auto mr-2 mt-12">
          <button
            onClick={increaseHandler}
            className="increase-btn border-2 border-orange-300 py-1 px-4 rounded-md"
          >
            +
          </button>
          <p className="count">{count}</p>
          {count == 1 ? (
            <button
              onClick={removeHandler}
              className="remove-btn border-2 border-orange-300 text-orange-300 cursor-pointer py-2 px-4 rounded-md"
            >
              <FaRegTrashAlt />
            </button>
          ) : (
            <button
              onClick={decreaseHandler}
              className="decrease-btn border-2 border-orange-300 cursor-pointer py-1 px-4 rounded-md"
            >
              -
            </button>
          )}
        </div>
      </div>
    </>
  );
}
