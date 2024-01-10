import { useEffect, useState } from "react";

const SliderCustom = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1300);

    return () => clearInterval(intervalId);
  }, [images.length]);

  const renderDots = () => {
    return Array.from({ length: images.length }, (x, i) => (
      <div
        key={i}
        className={`w-2 h-2 rounded-full border border-main-orange border-solid mx-1 ${
          i === currentImageIndex ? "bg-main-orange" : ""
        }`}
      ></div>
    ));
  };

  return (
    <>
      <img
        src={images[currentImageIndex]}
        className="w-full h-auto object-cover rounded-lg aspect-[3/1] brightness-[0.4] "
      />
      <div
        className="text-white text-xs absolute top-[148px] leading-5 text-center
              sm:top-48 sm:text-lg md:top-64 md:text-xl lg:text-2xl lg:top-72 xl:text-3xl xl:top-80 2xl:text-4xl 2xl:top-96"
      >
        <p className="font-bold tracking-[0.36px] uppercase">
          Your Ultimate Spot for Fresh and <br />
          Tasty Chicken Treats
        </p>
        <button
          className="bg-main-orange hover:bg-main-orange/80 text-white px-3 py-1 rounded-sm z-50 text-xs my-4
                  sm:my-6 sm:px-3
                  md:my-10
                  lg:my-14 lg:px-4 lg:py-2 lg:text-sm
                  xl:py-2
                  2xl:my-16"
        >
          <p>Delivery Shop</p>
        </button>
        <div className="flex justify-center">{renderDots()}</div>
      </div>
    </>
  );
};

export default SliderCustom;
