import Navbar from "@/components/navbar/Navbar";
import "@/styles/globals.css";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  const [addedToCart, setAddedToCart] = useState(0);
  const [addedProducts, setAddedProducts] = useState([]);
  const [totalPrice , setTotalPrice] = useState(0)
  return (
    <>
      <Toaster />
      <Navbar addedToCart={addedToCart} setAddedToCart={setAddedToCart} />
      <Component
        addedProducts={addedProducts}
        setAddedProducts={setAddedProducts}
        addedToCart={addedToCart}
        setAddedToCart={setAddedToCart}
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
        {...pageProps}
      />
    </>
  );
}
