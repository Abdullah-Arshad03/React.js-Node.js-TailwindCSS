import React from "react";
import Header from "../components/Header";
import Greeting from "../components/Greeting";
import ProductCard from "../components/ProductCard";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductsScreen = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/products");
        setProducts(response.data.products);
      } catch (error) {
        window.alert("Error : Products not fetched!");
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-10 lg:p-14 bg-gray-50 h-[100vh]">
      <Header />
      <div className="mt-8">
        <Greeting />
      </div>
      <h2 className="mt-4 text-xl font-semibold mb-8">Our Products</h2>

      <div className="grid md:grid-cols-4 grid-cols-2 gap-6 ">
        {products &&
          products.map((product, index) => (
            <Link to={`/products/${product.id}-${product.brand}`}>
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.brand}
                image={product.image}
                price={product.price}
                skus={product.skus}
                index={index}
              />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default ProductsScreen;
