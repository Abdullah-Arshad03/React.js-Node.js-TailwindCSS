import React from "react";
import { BsHandbag } from "react-icons/bs";
import { useState } from "react";

const ProductDetailSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedSize, setSelectedSize] = useState("18 - 12oz");

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };
  return (
    <div className="bg-white rounded-tr-3xl rounded-tl-3xl h-[60vh] w-[100vw] p-5">
      <div className="prod-name-row flex justify-between">
        <p className="font-dm-sans text-2xl font-semibold">Modelo Especial</p>
        <p className="font-dm-sans text-2xl font-semibold text-orange-400">
          $26.40
        </p>
      </div>
      <div className="text-gray-400 flex gap-2 font-dm-sans">
        <p>Origin: Import</p>
        <p>|</p>
        <p>Stock: 456</p>
      </div>
      <div className="mt-7 flex flex-col gap-4">
        <p className="font-dm-sans font-semibold text-lg">Description</p>
        <p className="text-gray-400 font-dm-sans">
          {isExpanded ? (
            <>
              Selling imported beer in the US with nearly 60 million cases in
              annual sales (2), growing more than 15 million cases over the past
              2 years (3). A full flavored Mexican lager consistently delivering
              a crisp, clean taste that has stood the test of time for 90 years.
              Modelo Especial embodies substance with style - a straightforward,
              uncomplicated and consistent experience with an understated style.
              Modelo Especial earned the 2012 Market Watch "Beer Brand of the
              Year" due to 20 straight years of double-digit growth earning.
            </>
          ) : (
            <>
              Selling imported beer in the US with nearly 60 million cases in
              annual sales (2), growing more than 15 million cases over the past
              2 years (3). A full flavored Mexican lager consistently
              delivering...
            </>
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
          <button
            className={`px-4 py-2 border rounded-full ${
              selectedSize === "12 - 24oz"
                ? "border-orange-400 text-orange-400"
                : "border-gray-400 text-gray-400"
            }`}
            onClick={() => handleSizeSelect("12 - 24oz")}
          >
            12 - 24oz
          </button>
          <button
            className={`px-4 py-2 border rounded-full ${
              selectedSize === "18 - 12oz"
                ? "border-orange-400 text-orange-400"
                : "border-gray-400 text-gray-400"
            }`}
            onClick={() => handleSizeSelect("18 - 12oz")}
          >
            18 - 12oz
          </button>
          <button
            className={`px-4 py-2 border rounded-full ${
              selectedSize === "Half Barrel"
                ? "border-orange-400 text-orange-400"
                : "border-gray-400 text-gray-400"
            }`}
            onClick={() => handleSizeSelect("Half Barrel")}
          >
            Half Barrel
          </button>
        </div>
      </div>
      <div className="mt-10 flex justify-between items-center">
        <button className="border border-orange-500 text-orange-500 p-3 rounded-lg">
          <BsHandbag />
        </button>
        <button className="bg-orange-500 text-white py-3 px-6 rounded-lg flex-1 ml-4">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetailSection;
