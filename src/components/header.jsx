import icon from "../assets/images/main-logo.png";
import { IconCart, IconMarker, IconMenu } from "../components/icons";
import { VerticalLine } from "../components/line";

const Header = ({ onButtonClick }) => {
  return (
    <header>
      <div className=" bg-main-orange text-white py-2 text-xs mobile:hidden ">
        <div className="flex container items-center justify-between">
          <div className="flex">
            <p>balongbui2k@gmail.com</p>
            <p className="px-16 ">+84 916931268</p>
            <p>Thanh Xuan, Hanoi, Vietnam</p>
          </div>
          <div className="flex ">
            <p>English</p>
            <p className="pl-4 ">Sign-In</p>
          </div>
        </div>
      </div>

      <div className="flex border-2 rounded-lg border-solid border-main-orange my-[52px] justify-between items-center container mx-auto mobile:hidden">
        <img src={icon} width={140} height={40} className="py-4 ml-20" />
        <div className="flex items-center container mx-auto justify-end px-6">
          <p className="cursor-pointer hover:text-main-orange">Home</p>
          <VerticalLine />
          <p className="cursor-pointer  hover:text-main-orange">Shop</p>
          <VerticalLine />
          <p className="cursor-pointer  hover:text-main-orange">Contact</p>
          <VerticalLine />
          <IconMarker className="mr-4" />
          <IconCart />
        </div>
      </div>

      <div className="flex border-2 rounded-lg border-solid border-main-orange  justify-between items-center container mx-auto ">
        <img src={icon} width={140} height={40} className="py-4 ml-4" />
        <div className="mr-4 hover:opacity-80 hover:scale-105 duration-200 rounded-full cursor-pointer">
          <IconMenu onClick={onButtonClick} />
        </div>
      </div>
    </header>
  );
};

export default Header;
