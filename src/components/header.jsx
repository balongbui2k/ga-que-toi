import mainIcon from "../assets/images/main-logo.png";
import englandIcon from "../assets/images/england-icon.png";
import { IconCart, IconMarker, IconMenu } from "../components/icons";
import { VerticalLine } from "../components/line";

const Header = ({ onButtonClick }) => {
  return (
    <header>
      <div className="bg-main-orange text-white py-2 text-xs hidden lg:block md:block">
        <div className="flex container mx-auto items-center justify-between ">
          <div className="flex">
            <p>balongbui2k@gmail.com</p>
            <p className="px-14 ">+84 916931268</p>
            <p>Thanh Xuan, Hanoi, Vietnam</p>
          </div>
          <div className="flex justify-end ">
            <p className="hover:opacity-80 cursor-pointer">English</p>
            <p className="pl-4 cursor-pointer hover:opacity-80">Sign in</p>
          </div>
        </div>
      </div>

      <div className="md:flex border-2 rounded-lg border-solid border-main-orange my-[52px] justify-between items-center container mx-auto hidden ">
        <img
          src={mainIcon}
          width={140}
          height={40}
          className="py-4 ml-20 cursor-pointer  "
        />
        <div className="flex items-center container mx-auto justify-end px-6">
          <p className="cursor-pointer hover:text-main-orange">Home</p>
          <VerticalLine />
          <p className="cursor-pointer  hover:text-main-orange">Shop</p>
          <VerticalLine />
          <p className="cursor-pointer  hover:text-main-orange">Contact</p>
          <VerticalLine />
          <IconMarker className="mr-4 cursor-pointer hover:opacity-85" />
          <IconCart className="cursor-pointer hover:opacity-85" />
        </div>
      </div>

      <div className="flex border-2 rounded-lg border-solid border-main-orange justify-between items-center container mx-auto md:hidden">
        <img
          src={mainIcon}
          width={140}
          height={40}
          className="py-4 ml-4 cursor-pointer"
        />
        <div className="flex items-center">
          <div className="flex mr-5 items-center">
            <img
              src={englandIcon}
              className="w-[20px] h-[20px] hover:opacity-80 sm:cursor-pointer"
            />
            <p className="pl-4 hover:text-main-orange cursor-pointer">
              Sign in
            </p>
          </div>
          <div className="mr-4 hover:opacity-80 hover:scale-105 duration-200 rounded-full cursor-pointer flex">
            <IconMenu onClick={onButtonClick} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
