const SideBar = ({ isOpen }) => {
  return (
    isOpen && (
      <div className="absolute top-20 right-0 ">
        <div> I slide into view </div>
        <div> Me Too! </div>
        <div> Me Three! </div>
      </div>
    )
  );
};
export default SideBar;
