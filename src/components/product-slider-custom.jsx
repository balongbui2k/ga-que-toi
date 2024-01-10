import { IconArrowLeft, IconArrowRight } from "./icons";
import { chickenProducts } from "../utils/food-data";
import ProductCards from "./product-card";
import { useState } from "react";

const ProductSliderCustom = () => {
  const [currentProduct, setCurrentProduct] = useState(0);
  const totalProducts = chickenProducts.length;

  const handleNextButtonClick = () => {
    setCurrentProduct((prevIndex) => (prevIndex + 2) % totalProducts);
  };

  const handlePreviousButtonClick = () => {
    setCurrentProduct(
      (prevIndex) => (prevIndex - 2 + totalProducts) % totalProducts
    );
  };

  const renderDots = () => {
    return Array.from({ length: totalProducts / 2 }, (x, i) => (
      <div
        key={i}
        className={`w-2 h-2 rounded-full border border-main-orange border-solid mx-1 ${
          i === currentProduct / 2 ? "bg-main-orange" : ""
        }`}
      ></div>
    ));
  };

  return (
    <div>
      <div className="pt-5 gap-3 mx-3 flex items-center justify-evenly xl:mt-16 xl:mx-10 xl:mb-10 xl:gap-10">
        <div className="border border-main-orange border-solid rounded-full p-1 hover:opacity-70 cursor-pointer">
          <IconArrowLeft onClick={handlePreviousButtonClick} />
        </div>

        <div className="sm:hidden">
          <ProductCards
            list={chickenProducts.slice(currentProduct, currentProduct + 1)}
          />
        </div>

        <div className="hidden sm:flex gap-8 ">
          <ProductCards
            list={chickenProducts.slice(currentProduct, currentProduct + 2)}
          />
        </div>

        <div className="border border-main-orange border-solid rounded-full p-1 hover:opacity-70 cursor-pointer">
          <IconArrowRight onClick={handleNextButtonClick} />
        </div>
      </div>
      <div className="flex justify-center py-4">{renderDots()}</div>
    </div>
  );
};

export default ProductSliderCustom;
