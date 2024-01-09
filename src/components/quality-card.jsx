const QualityCard = ({ type, image, title, description }) => {
  return (
    <div
      className={`${type === "orange" && "bg-main-orange"}
                  ${type === "green" && "bg-green-700"}
                  ${type === "black" && "bg-black"}
                  flex w-2/1 p-4 my-8 rounded-xl`}
    >
      <img src={image} className="w-6 h-6 mr-2" />
      <div>
        <h5 className="uppercase text-sm text-white font-bold md:text-base">
          {title}
        </h5>
        <p className="text-white text-xs">{description}</p>
      </div>
    </div>
  );
};

export default QualityCard;
