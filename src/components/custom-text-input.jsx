const CustomTextInput = ({ title, placeholder, widthFull }) => {
  return (
    <div className="relative">
      <input
        className={`border rounded px-2 py-1 border-solid border-main-orange ${
          widthFull ? "w-full" : "w-1/2"
        }`}
        type="text"
        placeholder={placeholder}
      />
      <p className="text-sm text-gray-500 absolute left-5 bottom-6 bg-white px-1">
        {title}
      </p>
    </div>
  );
};

export default CustomTextInput;
