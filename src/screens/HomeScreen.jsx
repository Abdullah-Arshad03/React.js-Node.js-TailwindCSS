import React from "react";
import Hamburger from "../components/Hamburger";
import Header from "../components/Header";
import Greeting from "../components/Greeting";
import ProductCard from "../components/ProductCard";
import product from "../utils/product";

export const HomeScreen = () => {
  return (
    <>
      <div className="p-12">
        <Header />
        <div className="mt-8">
          <Greeting />
        </div>
        <div className="mt-20 flex flex-wrap gap-10">
          {product.map((product) => (
            <>
              <ProductCard
                title={product.brand}
                image={product.image}
                price={product.price}
              />
            </>
          ))}
        </div>
      </div>
    </>
  );
};
export default HomeScreen;
