export const VerticalLine = () => {
  return (
    <div className="w-[1px] h-4 bg-main-orange flex items-center mx-6"></div>
  );
};

export const HorizontalLine = ({ width }) => {
  return <div className={`w-[${width}] h-[3px] bg-main-orange mx-auto`}></div>;
};
