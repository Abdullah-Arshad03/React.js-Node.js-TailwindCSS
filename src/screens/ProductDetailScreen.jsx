import React, { useState } from "react";
import BackButton from "../components/BackButton";
import OptionsButton from "../components/OptionsButton";
import ProductDetailSection from "../components/ProductDetailSection";

const ProductDetailScreen = () => {
  return (
    <div className="bg-gray-50 h-[100vh]">
      <div className="flex justify-between items-center p-10 lg:p-14">
        <BackButton />
        <p className="font-dm-sans font-semibold">Detail</p>
        <OptionsButton />
      </div>
      <div className="product-image flex justify-center items-center mb-10">
        <img
          src="../../public/icons/Modelo especial-img.png"
          alt="product-image"
        />
      </div>
      <ProductDetailSection />
    </div>
  );
};

export default ProductDetailScreen;
