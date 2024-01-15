import introBackground from "../assets/images/intro-background.png";
import introBackground2 from "../assets/images/chicken-bg.png";
import introBackground3 from "../assets/images/shop-bg.png";
import supplyMeatImg from "../assets/images/supply-meat.png";
import { IconExplore } from "../components/icons";
import layer from "../assets/images/layer.png";
import tom from "../assets/images/tom.png";
import { HorizontalLine } from "../components/line";
import productBg from "../assets/images/bg-product.png";
import QualityCard from "../components/quality-card";
import { qualityFood, qualityList } from "../utils/quality-data";
import iconCheck from "../assets/images/icon-check.png";
import SliderCustom from "../components/slider-custom";
import ProductSliderCustom from "../components/product-slider-custom";
import ProductList from "../components/product-list";

const Home = () => {
  const images = [introBackground, introBackground2, introBackground3];
  const categoryDescription =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt";

  return (
    <div className="my-20">
      <div className="container mx-auto my-16">
        <div className="flex justify-center">
          <SliderCustom images={images} />
        </div>

        <div
          className="mt-24 flex shadow-2xl flex-col relative
                    sm:mt-20 sm:mx-auto
                    lg:flex-row"
        >
          <div>
            <img src={layer} className="absolute right-0 hidden lg:block" />
          </div>
          <img
            src={supplyMeatImg}
            className=" object-cover w-full h-auto
                        lg:w-1/2"
          />
          <section className="p-10 flex-1 lg:p-16 xl:p-20 2xl:p-28">
            <p
              className="font-bold text-main-orange text-sm md:text-base
                        lg:text-lg"
            >
              About us
            </p>
            <h1
              className="font-extrabold tracking-wide mb-2 text-2xl
                        md:text-3xl
                        lg:text-4xl
                        2xl:mt-2 2xl:mb-8"
            >
              We Supply <br /> Quality{" "}
              <span className="text-main-orange">Meat</span>
            </h1>
            <p
              className="font-medium text-gray-500 mb-8 mx-auto text-xs
                        md:text-base
                        2xl:mb-8"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt
            </p>

            {qualityList.map((list) => (
              <div key={list} className="flex items-center mb-4">
                <div className="p-1 mr-2 border border-solid border-main-orange rounded-full">
                  <img src={iconCheck} className="w-3 h-3" />
                </div>
                <p className="text-xs font-semibold lg:text-sm ">
                  {list.title}
                </p>
              </div>
            ))}

            <button
              className="bg-main-orange hover:bg-main-orange/80 text-white rounded-sm mt-10 text-xs font-medium flex items-center px-3 py-1
                        lg:text-sm lg:px-4 lg:py-2"
            >
              <p>Explore more</p>
              <IconExplore />
            </button>
          </section>
          <img
            src={tom}
            className="absolute right-0 bottom-0 w-[180px] hidden lg:block"
          />
        </div>

        <div className="flex flex-col items-center my-16">
          <p className="text-xl font-extrabold uppercase text-center my-5 md:text-2xl lg:text-3xl">
            Your Premier Destination for Poultry Perfection <br />
            What do you <span className="text-main-orange">think?</span>
          </p>
          <HorizontalLine width={"250px"} />
        </div>
      </div>

      <div className="flex bg-gray-100 ">
        <img
          src={productBg}
          className="w-1/2 h-[625px] object-cover hidden xl:block "
        />
        <ProductSliderCustom />
      </div>

      <div className="food-card-background">
        <ProductList
          categoryName={"Product"}
          title={"Featured frozen meat"}
          description={categoryDescription}
        />

        <section className="quality-background flex w-full h-auto">
          <div className="m-8 lg:flex ">
            <div className="lg:flex-1 lg:px-10 lg:py-9">
              <span className="py-2 px-10 rounded-md bg-main-orange text-white text-xs md:text-sm">
                Quality
              </span>
              <h1 className="uppercase text-2xl text-white font-extrabold mt-4 mb-6 lg:text-4xl">
                HIGH-QUALITY FRESH{" "}
                <span className="text-main-orange">MEAT</span>
              </h1>
              <p className="text-xs text-white w-2/1 md:text-sm lg:pr-8 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="lg:flex-1 lg:px-10 2xl:px-52">
              {qualityFood.map((data) => {
                return (
                  <QualityCard
                    key={data.id}
                    title={data.title}
                    description={data.description}
                    image={data.backgroundImage}
                    type={data.type}
                  />
                );
              })}
            </div>
          </div>
        </section>

        <div className="py-20">
          <HorizontalLine width={"200px"} />
        </div>
      </div>
    </div>
  );
};

export default Home;
