import React, { useState, useEffect } from "react";
import { BsHandbag } from "react-icons/bs";
import axios from "axios";

const ProductDetailSection = ({ product }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedSku, setSelectedSku] = useState(product.skus[0]);
  const [stock, setStock] = useState(null);
  const [price, setPrice] = useState(null);

  useEffect(() => {
    fetchStockPrice(product.skus[0].code);
  }, [product.skus]);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const handleSizeSelect = (sku) => {
    setSelectedSku(sku);
    fetchStockPrice(sku.code);
  };

  const fetchStockPrice = async (skuCode) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/stock-price/${skuCode}`
      );
      setStock(response.data.stockPrice.stock);
      setPrice(response.data.stockPrice.price / 100);
    } catch (error) {
      window.alert("Error : stock prices not fetched");
    }
  };

  const formatSkuName = (name) => {
    return name
      .replace("Cans", "")
      .replace("Bottles", "")
      .replace("Pack", "")
      .trim();
  };

  return (
    <div className="bg-white rounded-tr-3xl rounded-tl-3xl h-[60vh] w-[100vw] p-5">
      <div className="prod-name-row flex justify-between">
        <p className="font-dm-sans text-2xl font-semibold">{product.brand}</p>
        <p className="font-dm-sans text-2xl font-semibold text-orange-400">
          ${price !== null ? price.toFixed(2) : "Loading..."}
        </p>
      </div>
      <div className="text-gray-400 flex gap-2 font-dm-sans">
        <p>Origin: {product.origin}</p>
        <p>|</p>
        <p>Stock: {stock !== null ? stock : "Loading..."}</p>
      </div>
      <div className="mt-7 flex flex-col gap-4">
        <p className="font-dm-sans font-semibold text-lg">Description</p>
        <p className="text-gray-400 font-dm-sans">
          {isExpanded ? (
            <>{product.information}</>
          ) : (
            <>{product.information.substring(0, 200)}...</>
          )}
          <button
            onClick={toggleReadMore}
            className="text-orange-400 font-semibold"
          >
            {isExpanded ? "Read less" : "Read more"}
          </button>
        </p>
      </div>
      <div className="mt-6">
        <p className="font-dm-sans font-semibold text-lg">Size</p>
        <div className="flex gap-4 mt-2 justify-center">
          {product.skus.map((sku) => (
            <button
              key={sku.code}
              className={`px-4 py-2 border rounded-full ${
                selectedSku.code === sku.code
                  ? "border-orange-400 text-orange-400"
                  : "border-gray-400 text-gray-400"
              }`}
              onClick={() => handleSizeSelect(sku)}
            >
              {formatSkuName(sku.name)}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-10 flex justify-between items-center">
        <button className="border border-orange-500 text-orange-500 p-3 rounded-lg">
          <BsHandbag />
        </button>
        <button
          onClick={() => {
            window.alert("Note: This feature is under construction! ");
          }}
          className="bg-orange-500 text-white py-3 px-6 rounded-lg flex-1 ml-4"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetailSection;
