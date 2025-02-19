const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-3 mt-[33px] mx-[32px] bg-[#5C60691A] border border-[#FFFFFF1A] backdrop-blur-md h-[63px] rounded-[16px]">
      {/* Logo */}
      <h1 className="text-white text-3xl font-normal">
        ad<span className="font-bold">Task</span>.ai
      </h1>

      {/* Navigation Items */}
      <div className="flex items-center gap-[32px] text-white text-[14px]">
        <div className="flex items-center space-x-1 cursor-pointer gap-[4px]">
          <span>Products</span>
          <span className="text-xs">▼</span> {/* Less sharp dropdown */}
        </div>
        <div className="flex items-center space-x-1 cursor-pointer gap-[4px]">
          <span>Tools</span>
          <span className="text-xs">▼</span>
        </div>
        <div className="cursor-pointer">Contact Us</div>
      </div>

      {/* Buttons */}
<div className="flex space-x-4">
  {/* Login Button with Light Effect */}
  <div className="relative">
    <div className="absolute w-[71px] h-[10px] bg-[#E6EDFF] blur-[26px] rounded-full left-[50%] bottom-[-5px] translate-x-[-50%]"></div>
    <button className="w-[113px] h-[42px] rounded-[24px] border border-[#7687B5] text-white font-[Poppins] font-normal text-[16px] leading-[24px] text-center relative">
      Log in
    </button>
  </div>

  {/* Schedule a Call Button with Light Effect */}
  <div className="relative">
    <div className="absolute w-[71px] h-[10px] bg-[#E6EDFF] blur-[26px] rounded-full left-[50%] bottom-[-5px] translate-x-[-50%]"></div>
    <button className="w-[161px] h-[42px] rounded-[24px] bg-[#7687B54A] border border-[#7687B5] text-white font-[Poppins] font-normal text-[16px] leading-[24px] text-center relative">
      Schedule a Call
    </button>
  </div>
</div>

    </nav>
  );
};

export default Navbar;
