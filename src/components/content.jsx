import introBackground from "../assets/images/intro-background.png";
import supplyMeatImg from "../assets/images/supply-meat.png";
import { IconRightArrow } from "./icons";
import layer from "../assets/images/layer.png";
import tom from "../assets/images/tom.png";
import { HorizontalLine } from "./line";

const Content = () => {
  const slider = [""];

  return (
    <div className=" container mx-auto">
      <img
        src={introBackground}
        className="w-full h-auto object-cover rounded-lg aspect-[3/1] brightness-[0.4]"
      />
      <div className="flex justify-center">
        <div className="text-white  absolute top-[324px] leading-[48px] text-center ">
          <p className="text-4xl font-bold tracking-[0.36px] uppercase ">
            Your Ultimate Spot for Fresh and <br />
            Tasty Chicken Treats
          </p>
          <button className="bg-main-orange hover:bg-main-orange/80 text-white px-4 py-2 rounded-sm z-50 mt-10 text-xs">
            <p>Delivery Shop</p>
          </button>
          {slider.map((slide) => (
            <div key={slide} className="flex justify-center mt-14">
              <div
                key={slide}
                className="w-2 h-2 rounded-full border border-main-orange border-solid "
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
      <div className="mt-32 mx-24 flex drop-shadow-2xl ">
        <img src={layer} className="absolute right-0" />
        <img src={supplyMeatImg} className="h-[508px]" />
        <section className="py-12 pl-28">
          <p className="text-md font-bold text-main-orange">About us</p>
          <h1 className="text-5xl font-extrabold leading-tight">
            We Supply <br /> Quality{" "}
            <span className="text-main-orange">Meat</span>
          </h1>
          <p className="text-sm font-medium text-gray-500 mb-8 w-[370px]  ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt
          </p>
          <ul
            className={"list-image-[url(iconcheck.png)] text-sm font-semibold"}
          >
            <li>Fully Natural Meat</li>
            <li>Secured Payments</li>
          </ul>

          <button className="bg-main-orange hover:bg-main-orange/80 text-white px-4 py-2 rounded-sm mt-10 text-sm font-medium flex items-center">
            <p>Explore more</p>
            <IconRightArrow />
          </button>
          <img src={tom} className="absolute bottom-0 right-0 w-[202px]" />
        </section>
      </div>

      <div className="flex flex-col items-center ">
        <p className="text-[28px] font-extrabold uppercase text-center mt-44 my-5">
          Your Premier Destination for Poultry Perfection What
          <br /> do you <span className="text-main-orange">think?</span>
        </p>
        <HorizontalLine />
      </div>
    </div>
  );
};

export default Content;
