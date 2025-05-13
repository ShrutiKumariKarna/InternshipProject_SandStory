import React from "react";
import { details } from "@/static-data/sandstorysec-data";
import Image from "next/image";
import arrowPatter from "../../../public/assets/image/sandstorysec_pattern2.png";
import circularImg from "../../../public/assets/image/sandstory_circularimg.png";
import bgPattern from "../../../public/assets/image/sandstorysec_patternbg.png";
import loveineyeImg from "../../../public/assets/image/loveineye-emojie.png";
import startinEye from "../../../public/assets/image/starineye-emoji.png";
import sadEmojie from "../../../public/assets/image/sad-emoji.png";
import angryEmoji from "../../../public/assets/image/angry-emoji.png";
import { sandstoryStyles } from "@/Styles/uiStyles";

// Common style constants
// const headingStyle = "font-sofia-pro-extrabold text-lg text-[#E97B0C] leading-[25.2px]";
// const titleStyle = "text-5xl leading-[67.2px] text-[#1A093F] font-sofia-pro-black";
// const descriptionStyle = "w-[460px] text-[#191825BF] text-base font-sofia-pro-regular leading-[28.8px]";
// const numberTextStyle = "font-sofia-pro-black text-[#F94681] text-[45.36px] leading-[45.36px]";
// const statTextStyle = "text-[#191825BF] leading-[28.8px] text-base font-sofia-pro-regular";
// const smallCircleStyle = "w-[13px] h-[13px] rounded-[7.33px]";
// const squareCircleStyle = "w-[13px] h-[13px] rounded-[4.51px]";
// const emojiSize = "w-[30px] h-[30px]";
// const feedbackCardStyle = "absolute w-[244px] h-[111px] top-[406px] left-[0px] rounded-[22px] p-[20px] bg-[#FFFFFF] shadow-[0px_16.9px_67.62px_0px_rgba(0,0,0,0.1)]";

const SandStorySection = () => {
  return (
    <div className="max-w-[1284px] h-[517.77px] relative mx-auto flex gap-[127px]">
      {/* Left part */}
      <div className="w-[545px] my-[66px] flex flex-col gap-[22px]">
        <div className="w-[545px] flex flex-col gap-[23.67px]">
          <h3 className={sandstoryStyles.heading}>Start Your Story in 3 Easy Steps</h3>
          <h1 className={sandstoryStyles.title}>Join the Sandstory Community</h1>
          <p className={sandstoryStyles.description}>
            Be part of a vibrant community of storytellers. Exchange ideas, gain inspiration, and grow together.
          </p>
        </div>

        <div className="w-[498px] flex gap-[54px]">
          {details.map((item) => (
            <div key={item.id} className="w-[130.46px] flex flex-col gap-[24px]">
              <p className={sandstoryStyles.numberText}>{item.title}</p>
              <p className={sandstoryStyles.statText}>{item.des}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative circles */}
      <div className={`bg-[#FFCA00] ${sandstoryStyles.smallCircle} absolute top-0 left-[830.8px]`} />
      <div className={`bg-[#4141A5] ${sandstoryStyles.squareCircle} absolute top-[334.7px] left-[689.86px] rotate-[-14.24deg]`} />
      <div className={`bg-[#FD5056] ${sandstoryStyles.squareCircle} absolute top-[370.65px] left-[1266.18px] rotate-[41.14deg]`} />

      {/* Right part */}
      <div className="w-[612px] relative flex justify-center items-center">
        <div className="absolute top-[2px] right-[320px] -rotate-[5deg] opacity-[10px]">
          <Image src={bgPattern} width={255} alt="Background Pattern" className="z-0" />
        </div>

        <div className="absolute insert-0 top-[3px] left-[480px] -rotate-[26.94deg]">
          <Image
            src={arrowPatter}
            alt="Arrow Line"
            width={105}
            className="object-cover rotate-[26.94deg]"
          />
        </div>

        <div className="w-[492px] h-[492px] rounded-full overflow-hidden relative mt-[11px] ml-[20px]">
          <Image src={circularImg} alt="User Image" fill className="object-cover scale-x-[-1]" />
        </div>

        <div className={sandstoryStyles.feedbackCard}>
          <div className="w-[183px] h-[70px] mx-auto flex justify-center flex-col gap-[8px]">
            <p className="h-[34px] text-[18.03px] leading-[33.81px] text-[#1A093F] font-sofia-pro-bold">
              How your Experience?
            </p>
            <div className="w-[165px] ml-[9px] flex gap-[15px]">
              <Image src={loveineyeImg} alt="Reaction Image" className={sandstoryStyles.emojiSize} />
              <Image src={startinEye} alt="Reaction Image" className={sandstoryStyles.emojiSize} />
              <Image src={sadEmojie} alt="Reaction Image" className={sandstoryStyles.emojiSize} />
              <Image src={angryEmoji} alt="Reaction Image" className={sandstoryStyles.emojiSize} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SandStorySection;
