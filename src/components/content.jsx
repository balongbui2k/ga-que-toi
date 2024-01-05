import introBackground from "../assets/images/intro-background.png";
import supplyMeatImg from "../assets/images/supply-meat.png";
import { IconArrowLeft, IconArrowRight, IconExplore } from "./icons";
import layer from "../assets/images/layer.png";
import tom from "../assets/images/tom.png";
import { HorizontalLine } from "./line";
import ProductCards from "./product-card";
import productBg from "../assets/images/bg-product.png";
import { chickenProducts } from "../utils/food-data";

const Content = () => {
  const slider = Array.from({ length: 1 }, (x, i) => i);

  return (
    <div>
      <div className="container mx-auto mt-12">
        <img
          src={introBackground}
          className="w-full h-auto object-cover rounded-lg aspect-[3/1] brightness-[0.4]"
        />

        <div className="flex justify-center ">
          <div
            className="text-white  absolute top-[324px] leading-[48px] text-center
                      mobile:top-5 mobile:absolute
                      tablet:top-5 tablet:absolute
                      surface:top-20 surface:absolute
                      laptop:top-24 laptop:absolute
                      desktop:top-30 desktop:absolute"
          >
            <p
              className="text-4xl font-bold tracking-[0.36px] uppercase
                        mobile:text-sm mobile:mt-28
                        tablet:text-base tablet:mt-32
                        surface:text-2xl surface:mt-40
                        laptop:text-3xl laptop:mt-40
                        desktop:text-4xl
                        lg-desktop:text-4xl"
            >
              Your Ultimate Spot for Fresh and <br />
              Tasty Chicken Treats
            </p>
            <button
              className="bg-main-orange hover:bg-main-orange/80 text-white px-4 py-2 rounded-sm z-50 mt-10 text-sm
                        mobile:my-2 mobile:px-2 mobile:py-1
                        tablet:my-6 tablet:px-3 tablet:py-2
                        surface:my-10 surface:px-4 surface:py-2
                        laptop:my-14 laptop:px-5 laptop:py-3
                        desktop:my-16 desktop:px-6 desktop:py-3
                        lg-desktop:my-20 lg-desktop:px-6 lg-desktop:py-3"
            >
              <p>Delivery Shop</p>
            </button>
            {slider.map((slide) => (
              <div
                key={slide}
                className="flex justify-center mt-14
                          mobile:mt-0
                          tablet:mt-0
                          surface:mt-0
                          laptop:mt-0
                          desktop:mt-0
                          lg-desktop:mt-0"
              >
                <div className="w-2 h-2 rounded-full border border-main-orange border-solid bg-main-orange "></div>
                <div className="w-2 h-2 rounded-full border border-main-orange border-solid mx-1"></div>
                <div className="w-2 h-2 rounded-full border border-main-orange border-solid "></div>
              </div>
            ))}
          </div>
        </div>

        {/* Supply meat */}
        <div
          className="mt-32 mx-24 flex drop-shadow-2xl
                    mobile:flex-col mobile:mt-20 mobile:mx-auto
                    tablet:flex-col tablet:mt-20 tablet:mx-auto
                    surface:flex-col surface:mt-20 surface:mx-auto"
        >
          <img
            src={layer}
            className="absolute right-0
                      mobile:hidden
                      tablet:hidden
                      surface:hidden
                      laptop:opacity-20"
          />
          <img
            src={supplyMeatImg}
            className="max-h-[508px] h-full object-cover
                      mobile:max-h-[250px] mobile:h-full
                      tablet:max-h-[300px] tablet:h-full
                      surface:max-h-[400px] surface:h-full"
          />
          <section
            className="py-12 pl-28
                      mobile:p-6
                      tablet:p-8
                      surface:p-10"
          >
            <p
              className="font-bold text-main-orange
                          mobile:text-sm
                          tablet:text-base
                          surface:text-lg
                          laptop:text-lg
                          desktop:text-lg
                          lg-desktop:text-lg"
            >
              About us
            </p>
            <h1
              className="font-extrabold tracking-wide mb-2
                        mobile:text-3xl
                        tablet:text-3xl
                        surface:text-3xl
                        laptop:text-4xl
                        desktop:text-4xl
                        lg-desktop:text-4xl"
            >
              We Supply <br /> Quality{" "}
              <span className="text-main-orange">Meat</span>
            </h1>
            <p
              className="font-medium text-gray-500 mb-8 mx-auto
                          mobile:text-xs
                          tablet:text-xs
                          surface:text-sm
                          laptop:text-sm
                          desktop:text-base
                          lg-desktop:text-base"
            >
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
              className="bg-main-orange hover:bg-main-orange/80 text-white rounded-sm mt-10 text-sm font-medium flex items-center
                          mobile:px-2 mobile:py-2 mobile:text-xs
                          tablet:px-2 tablet:py-2 tablet:text-sm
                          surface:px-4 surface:py-2 surface:text-sm
                          laptop:px-6 laptop:py-2 laptop:text-base
                          desktop:px-6 desktop:py-2 desktop:text-base
                          lg-desktop:px-6 lg-desktop:py-2 lg-desktop:text-base"
            >
              <p>Explore more</p>
              <IconExplore />
            </button>
            <img
              src={tom}
              className="absolute bottom-0 right-0 w-[202px]
                          mobile:hidden
                          tablet:hidden
                          surface:hidden
                          laptop:hidden"
            />
          </section>
        </div>

        <div className="flex flex-col items-center mb-20">
          <p
            className="text-3xl font-extrabold uppercase text-center  my-5
                      mobile:text-xl mobile:mt-10 mobile:my-2
                      tablet:text-xl tablet:mt-14 tablet:my-2
                      surface:text-2xl surface:mt-14 surface:my-2
                      laptop:text-2xl laptop:mt-16 laptop:my-2
                      desktop:text-3xl desktop:mt-20 desktop:my-2
                      lg-desktop:text-3xl lg-desktop:mt-20 lg-desktop:my-2"
          >
            Your Premier Destination for Poultry Perfection <br />
            What do you <span className="text-main-orange">think?</span>
          </p>
          <HorizontalLine />
        </div>
      </div>

      <div className="flex bg-gray-100 justify-center lg-desktop:justify-start">
        <img
          src={productBg}
          className="max-h-[508px] h-full aspect-[1/1] object-cover
                    mobile:hidden
                    tablet:hidden
                    surface:hidden
                    laptop:hidden
                    desktop:hidden"
        />
        <div
          className="mr-60
                    mobile:mr-0
                    tablet:mr-0
                    surface:mr-0 "
        >
          <div className=" pt-5 flex items-center container mx-auto justify-center z-50 ">
            <div
              className="mr-28 border border-main-orange border-solid rounded-full p-1 hover:opacity-70 cursor-pointer x
                        mobile:mr-4
                        tablet:mr-4
                        surface:mr-0"
            >
              <IconArrowLeft />
            </div>

            <div className="tablet">
              <ProductCards list={chickenProducts.slice(0, 1)} />
            </div>
            <div className="mobile:hidden">
              <ProductCards list={chickenProducts.slice(0, 2)} />
            </div>
            <div
              className="ml-28 border border-main-orange border-solid rounded-full p-1 hover:opacity-70 cursor-pointer
                        mobile:ml-4
                        tablet:ml-4
                        surface:ml-0"
            >
              <IconArrowRight />
            </div>
          </div>
          {slider.map((slide) => (
            <div
              key={slide}
              className="flex justify-center mt-2 items-center z-50
                        mobile:pb-4
                        tablet:pb-4
                        surface:pb-4"
            >
              <div className="w-2 h-2 rounded-full border border-main-orange border-solid bg-main-orange "></div>
              <div className="w-2 h-2 rounded-full border border-main-orange border-solid mx-1"></div>
              <div className="w-2 h-2 rounded-full border border-main-orange border-solid "></div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-32 flex items-center flex-col container mx-auto text-center">
        <span className="text-xs py-1 text-white px-6 bg-main-orange rounded-[4px] font-semibold mb-3">
          Products
        </span>
        <h1 className="text-4xl font-extrabold mb-1">
          Featured frozen <span className="text-main-orange">meat</span>{" "}
        </h1>
        <p className="text-sm text-gray-500 font-medium ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt
        </p>
      </div>

      <div className="container mx-auto mt-16 grid grid-cols-5 gap-x-7 gap-y-12 mobile:grid-cols-1 ">
        <div className="flex justify-center flex-col items-center">
          <ProductCards list={chickenProducts} />
        </div>
      </div>
    </div>
  );
};

export default Content;
