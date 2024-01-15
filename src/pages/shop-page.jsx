import shopPageBackground from "../assets/images/shop-bg.png";
import { HorizontalLine } from "../components/line";
import ProductList from "../components/product-list";

const ShopPage = () => {
  return (
    <div className="container mx-auto ">
      <div className="relative flex items-center justify-center">
        <img src={shopPageBackground} className="rounded brightness-30" />
        <p className="uppercase absolute text-white font-bold text-xl md:text-2xl xl:text-3xl">
          Shop
        </p>
      </div>

      <div className="food-card-background">
        <ProductList
          categoryName={"Categories"}
          title={"Our frozen cuts chicken"}
        />

        <ProductList
          categoryName={"Related Products"}
          title={"Display your category here"}
          description={" lorem ipsum dolor sit amet, consectetur adip"}
        />

        <div className="pb-16">
          <HorizontalLine />
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
