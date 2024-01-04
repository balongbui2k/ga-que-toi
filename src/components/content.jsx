import introBackground from "../assets/images/intro-background.png";
import supplyMeatImg from "../assets/images/supply-meat.png";
import { IconExplore } from "./icons";
import layer from "../assets/images/layer.png";
import tom from "../assets/images/tom.png";
import { HorizontalLine } from "./line";
import ProductCard from "./product-card";
import productBg from "../assets/images/bg-product.png";

const Content = () => {
  const slider = [""];

  return (
    <>
      <div className=" container mx-auto">
        <img
          src={introBackground}
          className="w-full h-auto object-cover rounded-lg aspect-[3/1] brightness-[0.4]"
        />

        <div className="flex justify-center ">
          <div
            className="text-white  absolute top-[324px] leading-[48px] text-center
          mobile:top-5 mobile:absolute"
          >
            <p
              className="text-4xl font-bold tracking-[0.36px] uppercase
          mobile:text-sm mobile:mt-20 "
            >
              Your Ultimate Spot for Fresh and <br />
              Tasty Chicken Treats
            </p>
            <button
              className="bg-main-orange hover:bg-main-orange/80 text-white px-4 py-2 rounded-sm z-50 mt-10 text-xs
          mobile:mt-0 mobile:px-2 mobile:py-1 mobile:mb-4"
            >
              <p>Delivery Shop</p>
            </button>
            {slider.map((slide) => (
              <div
                key={slide}
                className="flex justify-center mt-14 mobile:mt-0"
              >
                <div
                  key={slide}
                  className="w-2 h-2 rounded-full border border-main-orange border-solid bg-main-orange "
                ></div>
                <div
                  key={slide}
                  className="w-2 h-2 rounded-full border border-main-orange border-solid mx-1"
                ></div>
                <div
                  key={slide}
                  className="w-2 h-2 rounded-full border border-main-orange border-solid "
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* Supply meat */}
        <div
          className="mt-32 mx-24 flex drop-shadow-2xl
      mobile:flex-col mobile:mt-20 mobile:mx-auto "
        >
          <img src={layer} className="absolute right-0 mobile:hidden" />
          <img
            src={supplyMeatImg}
            className="max-h-[508px] h-full
          mobile:max-h-[250px]"
          />
          <section
            className="py-12 pl-28
        mobile:p-6"
          >
            <p className="text-md font-bold text-main-orange">About us</p>
            <h1 className="text-5xl font-extrabold leading-tight mb-2">
              We Supply <br /> Quality{" "}
              <span className="text-main-orange">Meat</span>
            </h1>
            <p className="text-sm font-medium text-gray-500 mb-8 mx-auto ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt
            </p>
            <ul
              className={
                "list-image-[url(iconcheck.png)] text-sm font-semibold"
              }
            >
              <li>Fully Natural Meat</li>
              <li>Secured Payments</li>
            </ul>

            <button
              className="bg-main-orange hover:bg-main-orange/80 text-white px-4 py-2 rounded-sm mt-10 text-sm font-medium flex items-center
          mobile:px-2 mobile:py-1 "
            >
              <p>Explore more</p>
              <IconExplore />
            </button>
            <img
              src={tom}
              className="absolute bottom-0 right-0 w-[202px]
                      mobile:hidden"
            />
          </section>
        </div>

        <div className="flex flex-col items-center mb-24">
          <p className="text-3xl font-extrabold uppercase text-center mt-44 my-5 mobile:text-lg mobile:mt-14 mobile:my-2">
            Your Premier Destination for Poultry Perfection <br />
            What do you <span className="text-main-orange">think?</span>
          </p>
          <HorizontalLine />
        </div>
      </div>

      <div className="flex bg-gray-100  justify-between">
        <img src={productBg} className="max-h-[508px] " />
        <div className=" pt-5 flex justify-center w-full mr-30">
          <ProductCard />
        </div>
      </div>
    </>
  );
};

export default Content;
