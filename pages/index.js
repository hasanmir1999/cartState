import ProductItem from "@/components/productItem/ProductItem";

export default function Home({
  data,
  addedProducts,
  setAddedProducts,
  addedToCart,
  setAddedToCart,
  totalPrice,
  setTotalPrice
}) {
  return (
    <>
      <div className="pt-32 px-3">
        <div className="Container">
          <div className="heading flex items-center justify-between">
            <div className="w-5 h-5 bg-orange-300 rotate-45 rounded-md" />
            <h1 className="text-gray-700 whitespace-nowrap text-sm md:text-base mx-2">
              Products List
            </h1>
            <div className="line bg-orange-300 h-0.5 w-[89%]" />
          </div>
          <div className="product-items-container mt-5">
            <div className="row flex flex-wrap">
              {data.map((product) => (
                <div
                  key={product.id}
                  className="col sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2"
                >
                  <ProductItem
                    addedProducts={addedProducts}
                    setAddedProducts={setAddedProducts}
                    addedToCart={addedToCart}
                    setAddedToCart={setAddedToCart}
                    totalPrice={totalPrice}
                    setTotalPrice={setTotalPrice}
                    {...product}
                    allpro={data}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
