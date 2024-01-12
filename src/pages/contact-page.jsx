import { IconMail, IconPhone, IconPlace } from "../components/icons";
import iconTwitter from "../assets/images/twitter-icon.png";
import iconInstagram from "../assets/images/instagram-icon.png";
import iconDiscord from "../assets/images/discord-icon.png";
import CustomTextInput from "../components/custom-text-input";

const ContactPage = () => {
  return (
    <div className="container mx-auto lg:flex my-16">
      <div className="flex flex-col justify-between bg-main-orange w-full h-auto rounded-md flex-2 p-10 space-y-9 lg:w-1/3 mr-24">
        <div>
          <p className="uppercase text-white text-xl font-semibold lg:text-2xl">
            Contact Information
          </p>
          <p className="text-sm lg:text-base">
            Say something to start a live chat!
          </p>
        </div>
        <div className="text-white text-xs space-y-12 ">
          <div className="flex items-center space-x-2">
            <IconPhone />
            <p>balongbui2k@gmail.com</p>
          </div>
          <div className="flex items-center space-x-2">
            <IconMail />
            <p>+84 916931268</p>
          </div>
          <div className="flex items-center space-x-2">
            <IconPlace />
            <p>Thanh Xuan, Hanoi, Vietnam</p>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="p-1 bg-white rounded-full cursor-pointer hover:opacity-85">
            <img src={iconTwitter} className="w-4 h-4" />
          </div>{" "}
          <div className="p-1 bg-white rounded-full cursor-pointer hover:opacity-85">
            <img src={iconDiscord} className="w-4 h-4" />
          </div>{" "}
          <div className="p-1 bg-white rounded-full cursor-pointer hover:opacity-85">
            <img src={iconInstagram} className="w-4 h-4" />
          </div>
        </div>
      </div>
      <form className="flex-1 py-5 lg:p-10 font-medium space-y-10">
        <div>
          <p className="font-extrabold text-2xl mb-2 ">Get In Touch</p>
          <p className="text-gray-400 text-xs ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <CustomTextInput title={"First name"} widthFull />
          <CustomTextInput title={"Last Name"} widthFull />
        </div>
        <CustomTextInput title={"Your E-mail"} widthFull />
        <div className="border border-solid border-main-orange p-2 rounded">
          <div className="text-sm text-gray-500 mb-3">Your Message</div>
          <textarea
            name="message"
            id="message"
            className="w-full placeholder:bottom-0 placeholder:absolute"
            placeholder="Write your message here...."
          ></textarea>
        </div>
        <button className="bg-main-orange text-white text-sm py-2 px-8 lg:py-3 lg:px-12 rounded hover:bg-main-orange/80">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
