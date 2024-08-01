import React from "react";

const ProductCard = ({ id, title, image, price }) => {
  return (
    <div className="relative bg-white p-4 rounded-tl-lg rounded-tr-3xl rounded-bl-lg rounded-br-lg shadow-md sm:w-96 sm:h-96 flex flex-col justify-between ">
      <h2 className="text-lg text-center mb-2 font-dm-sans">{title}</h2>
      <div className="flex-grow flex items-center justify-center mb-4">
        <img
          src={image}
          alt={title}
          className="max-h-32 w-auto object-contain"
        />
      </div>
      <div className="flex items-center justify-between">
        <span className="sm:text-4xl font-dm-sans">${price}</span>
        <button className="bg-orange-500 text-white text-3xl font-thin rounded-tl-lg rounded-tr-none rounded-bl-none absolute right-0 bottom-0 rounded w-12 h-12 flex items-center justify-center sm:p-8">
          +
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
