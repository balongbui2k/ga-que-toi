import { chickenProducts } from "../utils/food-data";

const ProductCard = () => {
  return chickenProducts.map((product) => {
    return (
      <div
        key={product.id}
        className="max-h-[420px] rounded-lg w-[290px] h-full aspect-[1/2] px-2 py-4 shadow-xl bg-white relative group m-4"
      >
        {product.status.onSale === "onSale" ? (
          <span className="px-3 py-1 bg-main-orange text-white rounded-sm text-[10px] font-bold text-center absolute left-4 top-4 z-10">
            On Sale
          </span>
        ) : (
          <span className="px-3 py-1 bg-gray-600 text-white rounded-sm text-[10px] font-bold text-center absolute left-4 top-4 z-10">
            Out of Stock
          </span>
        )}
        <div className="mt-3 mx-8">
          <img
            src={product.image}
            className="w-full h-[150px] object-cover rounded"
          />
        </div>
        <div className="mt-3 ml-8">
          <p className="text-main-orange font-bold text-md">
            {product.starRate} Stars
          </p>
          <p className="text-base leading-1 font-bold mb-1">{product.name}</p>
          <p className="text-gray-700 text-xs mb-2">{product.description}</p>
          <p className="text-main-orange text-sm font-bold mb-4">
            ${product.price}
          </p>
        </div>
        <button className="bg-main-orange hover:bg-main-orange/80 py-2 px-4 rounded-xl text-white  transition-all duration-200 text-xs ml-6">
          Add to Cart
        </button>
      </div>
    );
  });
};

export default ProductCard;
