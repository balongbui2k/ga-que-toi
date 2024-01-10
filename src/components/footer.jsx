import { VerticalLine } from "./line";
import iconFooter from "../assets/images/main-icon-footer.png";
import iconFacebook from "../assets/images/facebook-icon.png";
import iconTwitter from "../assets/images/twitter-icon.png";
import iconGoogle from "../assets/images/google-plus-icon.png";
import iconInstagram from "../assets/images/instagram-icon.png";

const Footer = () => {
  return (
    <>
      <div className="bg-main-orange w-full h-auto flex flex-col items-center">
        <div className="flex gap-5 pt-4 md:pt-8 lg:pt-16">
          <div className="p-2 bg-white rounded-full cursor-pointer hover:opacity-85">
            <img src={iconFacebook} className="w-4 h-4" />
          </div>
          <div className="p-2 bg-white rounded-full cursor-pointer hover:opacity-85">
            <img src={iconTwitter} className="w-4 h-4" />
          </div>{" "}
          <div className="p-2 bg-white rounded-full cursor-pointer hover:opacity-85">
            <img src={iconGoogle} className="w-4 h-4" />
          </div>{" "}
          <div className="p-2 bg-white rounded-full cursor-pointer hover:opacity-85">
            <img src={iconInstagram} className="w-4 h-4" />
          </div>
        </div>
        <div>
          <img
            src={iconFooter}
            className="cursor-pointer my-6 w-[140px] lg:w-[180px]"
          />
        </div>
        <div className="pb-4 md:pb-8 lg:pb-16">
          <div className="flex items-center container mx-auto justify-end px-6 text-white">
            <p className="cursor-pointer hover:opacity-85">Home</p>
            <VerticalLine color={"white"} />
            <p className="cursor-pointer hover:opacity-85">Shop</p>
            <VerticalLine color={"white"} />
            <p className="cursor-pointer hover:opacity-85">Contact</p>
            <VerticalLine color={"white"} />
            <p className="cursor-pointer hover:opacity-85">Blog</p>
          </div>
        </div>
      </div>

      <div className="bg-stone-300 text-stone-800 text-center py-2 px-4 text-xs flex flex-col items-center xl:justify-around xl:flex-row ">
        <div className="flex items-center mb-2 xl:mb-0 ">
          <p className="cursor-pointer hover:opacity-8">Copyright 4-12-2023</p>
          <VerticalLine />
          <p className="cursor-pointer hover:opacity-8">
            Design by LongVuiTuoi
          </p>
          <VerticalLine />
          <p className="cursor-pointer hover:opacity-8">Privacy policy</p>
          <VerticalLine />
          <p className="cursor-pointer hover:opacity-8">Terms And Conditions</p>
        </div>

        <div className="flex items-center">
          <p className="cursor-pointer hover:opacity-8">
            balongbui2k@gmail.com
          </p>
          <VerticalLine />
          <p className="cursor-pointer hover:opacity-8">+84 916931268</p>
          <VerticalLine />
          <p className="cursor-pointer hover:opacity-8">
            Thanh Xuan, Hanoi, Vietnam
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
