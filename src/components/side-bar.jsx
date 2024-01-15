import { Link } from "react-router-dom";

const SideBar = ({ isOpen }) => {
  return (
    isOpen && (
      <div className=" absolute text-center z-10 top-[64px] left-0 w-full bg-white border-b border-gray-300 cursor-pointer">
        <div className="p-2 ">
          <Link to={"/"} className=" hover:text-main-orange ">
            Home
          </Link>
        </div>
        <div className="p-2 border-t border-gray-300 ">
          <Link
            to={`/shop-page`}
            className="cursor-pointer hover:text-main-orange"
          >
            Shop
          </Link>
        </div>
        <div className="p-2 border-t border-gray-300  hover:text-main-orange ">
          <Link to={"/contact-page"} className=" hover:text-main-orange">
            Contact
          </Link>
        </div>
        <div className="p-2 border-t border-gray-300  hover:text-main-orange ">
          <p className=" hover:text-main-orange">Favorites</p>
        </div>
        <div className="p-2 border-t border-gray-300  hover:text-main-orange "></div>
        <div className="bg-main-orange text-white text-sm text-left p-2 ">
          <p>balongbui2k@gmail.com</p>
          <p>+84 916931268</p>
          <p>Thanh Xuan, Hanoi, VietNam</p>
        </div>
      </div>
    )
  );
};
export default SideBar;
