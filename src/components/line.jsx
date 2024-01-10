export const VerticalLine = ({ color }) => {
  const lineColor = color || "main-orange";

  return (
    <div
      className={`w-[1px] h-4 bg-${lineColor} flex items-center mx-2 md:mx-6`}
    ></div>
  );
};

export const HorizontalLine = () => {
  return <div className={`w-[340px] h-[3px] bg-main-orange mx-auto`}></div>;
};
