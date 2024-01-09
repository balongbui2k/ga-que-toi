import { IconMarker } from "./icons";

const ProductCards = ({ list }) => {
  return list.map((product) => {
    const status = product.status;
    const label = status === "onSale" ? "On Sale" : "Out of Stock";
    const bgColor = status === "onSale" ? "bg-main-orange" : "bg-gray-600";

    return (
      <div
        key={product.id}
        className="rounded-lg h-full py-4 shadow-xl bg-white relative cursor-pointer flex flex-col justify-between"
      >
        <span
          className={`px-3 py-1 ${bgColor} text-white rounded-sm text-[10px] font-bold text-center absolute left-6 top-4 z-10`}
        >
          {label}
        </span>
        <div className="mt-3 mx-8">
          <img
            src={product.image}
            className="w-full h-[150px] object-cover rounded"
          />
        </div>
        <div className="mt-3 px-4">
          <p className="text-main-orange font-bold text-md">
            {product.starRate} Stars
          </p>
          <p className="text-base font-bold mb-1 ">{product.name}</p>
          <p className="text-gray-700 text-xs mb-2 ">{product.description}</p>
          <p className="text-main-orange text-sm font-bold mb-4">
            ${product.price}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <button className="bg-main-orange hover:bg-main-orange/80 py-2 px-4 rounded-xl text-white text-xs ml-4">
            Add to Cart
          </button>
          <IconMarker />
        </div>
      </div>
    );
  });
};

export default ProductCards;
