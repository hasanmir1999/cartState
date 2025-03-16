import CartItem from "@/components/cartItem/CartItem";
import { useEffect, useState } from "react";

export default function Cart({
  addedProducts,
  setAddedProducts,
  addedToCart,
  setAddedToCart,
  totalPrice,
  setTotalPrice
}) {


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
      <div className="cart-info pt-32">
        <div className="Container">
          <div className="cart-info-container flex">
            <div className="total-cart border-2 border-orange-300 rounded-md p-5 text-gray-700 h-[70px]">
              <p>total : {totalPrice}$</p>
            </div>
            <div className="cart-items border-2 border-orange-300 rounded-md ml-5 flex flex-col grow p-5 gap-5">
              {addedToCart > 0 ? (
                addedProducts.map( product => <CartItem key={product.id} addedProducts={addedProducts} setAddedProducts={setAddedProducts} addedToCart={addedToCart} setAddedToCart={setAddedToCart}  {...product} setTotalPrice={setTotalPrice}/>)
              ) : (
                <>
                  <div className="cart-empty flex justify-center items-center bg-red-300 rounded-md p-5">
                    <p className="text-white">The Shopping Cart is Empty !</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
