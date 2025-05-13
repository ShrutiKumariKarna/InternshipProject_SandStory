
import React from "react";

const FooterBottom = () => {
  return (
    <div className="h-[50px] flex justify-between items-center bg-[#7874FF] text-white font-sofia-pro-regular text-base leading-[28.8px]">
      <p className="ml-[161px]">
        Sandstory © 2024 All Rights Reserved
      </p>
      <div className="flex gap-4 mr-[165px]">
        <a href="#">
          Privacy Policy <span>|</span>
        </a>
        
        <a href="#">
          Terms & Conditions
        </a>
      </div>
    </div>
  );
};
export default FooterBottom;