import React from "react";

const ProductCard = ({ title, image, price }) => {
  return (
    <div className="relative bg-white p-4 rounded-tl-lg rounded-tr-3xl rounded-bl-lg rounded-br-lg shadow-md w-96 h-96 flex flex-col justify-between">
      <h2 className="text-2xl text-center mb-2 font-dm-sans">{title}</h2>
      <div className="flex-grow flex items-center justify-center mb-4">
        <img
          src={image}
          alt={title}
          className="max-h-48 w-auto object-contain"
        />
      </div>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-dm-sans">${price}</span>
        <button className="bg-orange-500 text-white absolute right-0 bottom-0 rounded w-12 h-12 flex items-center justify-center p-8">
          +
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
