import { chickenProducts } from "../utils/food-data";
import ProductCards from "./product-card";

const ProductList = ({ categoryName, title, description }) => {
  const lastSpaceIndex = title.lastIndexOf(" ");

  const lastWord = title.slice(lastSpaceIndex + 1);
  const restOfTitle = title.slice(0, lastSpaceIndex + 1);

  return (
    <div className="py-16">
      <div className="flex items-center flex-col container mx-auto text-center px-4 pb-10">
        <span className="text-xs py-1 text-white px-4 md:px-6 bg-main-orange rounded-[4px] font-semibold mb-3 lg:text-sm">
          {categoryName}
        </span>
        <h1 className="text-xl font-extrabold mb-1 md:text-2xl lg:text-4xl">
          {" "}
          {restOfTitle}
          <span className="text-main-orange">{lastWord}</span>
        </h1>
        <p className="text-xs text-gray-500 font-medium md:text-sm">
          {description}
        </p>
      </div>

      <div className=" container mx-auto flex gap-5 flex-col items-center sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        <ProductCards list={chickenProducts} />
      </div>
    </div>
  );
};

export default ProductList;
