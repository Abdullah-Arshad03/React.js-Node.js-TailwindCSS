import React from "react";
import Hamburger from "../components/Hamburger";
import Header from "../components/Header";
import Greeting from "../components/Greeting";
import ProductCard from "../components/ProductCard";
import product from "../utils/product";

const HomeScreen = () => {
  return (
    <div className="p-10 lg:p-14 bg-gray-50">
      <Header />
      <div className="mt-8">
        <Greeting />
      </div>
      <h2 className="mt-4 text-xl font-semibold">Our Products</h2>
      <div className="mt-6 grid lg:grid-cols-4 grid-cols-2 gap-6 ">
        {product.map((product) => (
          <ProductCard
            key={product.id}
            title={product.brand}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
