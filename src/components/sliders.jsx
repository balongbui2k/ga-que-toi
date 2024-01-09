const Sliders = () => {
  const slider = Array.from({ length: 1 }, (x, i) => i);

  return slider.map((slide) => (
    <div key={slide} className="flex justify-center ">
      <div className="w-2 h-2 rounded-full border border-main-orange border-solid bg-main-orange "></div>
      <div className="w-2 h-2 rounded-full border border-main-orange border-solid mx-1"></div>
      <div className="w-2 h-2 rounded-full border border-main-orange border-solid "></div>
    </div>
  ));
};

export default Sliders;
