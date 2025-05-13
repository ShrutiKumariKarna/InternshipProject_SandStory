import React from "react";
import Link from "next/link";

const AuthButtons = () => {
  // common stylings of button
  const buttonCommonStyle =
    "w-[100px] px-2.5 py-3 rounded-full text-base font-sofia-pro-medium leading-[16px]";

  return (
    <div className="w-[199px] flex justify-between">
      <Link href="/sign-up">
        <button className={`${buttonCommonStyle} bg-white text-[#1A093F]`}>
          Sign Up
        </button>
      </Link>

      <Link href="/sign-in">
        <button className={`${buttonCommonStyle} bg-[#1A093F] text-white`}>
          Log In
        </button>
      </Link>
    </div>
  );
};

export default AuthButtons;
