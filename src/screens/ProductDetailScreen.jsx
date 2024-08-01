import React, { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import OptionsButton from "../components/OptionsButton";
import ProductDetailSection from "../components/ProductDetailSection";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetailScreen = () => {
  const [product, setProduct] = useState(null);
  const { brandName } = useParams();
  console.log("this is the brandName", brandName);
  const prodId = brandName.split("-")[0];
  console.log("prodId", prodId);

  const imageNames = {
    127: "Modelo especial-img.png",
    374: "miller lite.png",
    743: "Corona premier-img.png",
    841: "Budweiser-img.png",
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/products/${prodId}`
        );
        setProduct(response.data.product);
      } catch (error) {
        window.alert("Error : Products Details not fetched!");
      }
    };

    fetchProduct();
  }, [prodId]);

  return (
    <div className="bg-gray-50 h-[100vh]">
      <div className="flex justify-between items-center p-10 lg:p-14">
        <BackButton />
        <p className="font-dm-sans font-semibold">Detail</p>
        <OptionsButton />
      </div>
      <div className="product-image flex justify-center items-center mb-10">
        <img
          src={
            product && imageNames[product.id]
              ? `../../public/icons/${imageNames[product.id]}`
              : "../../public/icons/default-image.png"
          }
          alt="product-image"
        />
      </div>
      {product ? (
        <ProductDetailSection product={product} />
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
};

export default ProductDetailScreen;
