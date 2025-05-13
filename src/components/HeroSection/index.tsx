import React from 'react';
import Image from 'next/image';
import heroBg from '../../../public/assets/image/Herosection_bg.png';
import elementorImg from '../../../public/assets/image/elementor-placeholder-image.png';
import loveineyeImg from '../../../public/assets/image/loveineye-emojie.png';
import { heroSectionStyles } from '@/Styles/uiStyles';

// Common style constants
// const badgeText = "absolute mt-[67px] ml-[42px] h-[25px] font-sofia-pro-bold leading-[25.2px] text-[#E97B0C] text-lg";
// const titleUnderline = "w-[369px] h-[21px] absolute top-[147px] left-[332px] bg-[#FAE180]";
// const heroTitle = "absolute w-[721px] h-[140px] mt-[109px] ml-[42px] font-sofia-pro-black text-[64px] text-[#1A093F] leading-[70.4px]";
// const heroDescription = "absolute w-[691px] ml-[42px] mt-[266px] h-[58px] text-[#868093]";
// const primaryBtn = "w-[171px] bg-[#7874FF] text-white text-base font-sofia-pro-medium text-center leading-[22.4px] shadow-[0px_4px_30px_rgba(120,116,255,0.2)] rounded-[100px]";
// const secondaryBtn = "w-[171px] bg-[#EFF2FC] text-[#1C1C1C] text-base font-sofia-pro-medium text-center leading-[22.4px] rounded-[100px]";
// const mockCardWrapper = "absolute w-[444px] h-[440px] top-[44px] right-[33px] rounded-[20px] bg-gradient-to-b from-[#CBD5F8] to-[#F6EFFC]";
// const mockCard = "w-[324px] h-[367px] mx-[60px] mt-[36px] mb-[37px] rounded-[14px] bg-[#FFFFFF] shadow-[0px_4px_21.9px_0px_rgba(0,0,0,0.15)] flex flex-col";
// const cardImage = "w-[296px] h-[95px] rounded-[5px] overflow-hidden";
// const contentBlock = "bg-[#EAEDF0] rounded-[1px]";
// const starRatingCard = "absolute w-[208px] h-[49px] rounded-[7.28px] p-[11.64px] flex gap-[11.64px] bg-[#FFFFFF] shadow-[0px_5.82px_27.65px_rgba(0,0,0,0.15)] ml-[876px] mt-[346px]";
// const emojiCard = "absolute w-[111px] h-[111px] top-[418px] left-[1310px] rounded-[14.92px] p-[23.87px] bg-[#FFFFFF] shadow-[0px_11.94px_56.7px_0px_rgba(0,0,0,0.15)]";

const HeroSection = () => {
  return (
    <div className="w-full h-[528px] mb-[45px] relative">
      <div className="absolute inset-0">
        <Image
          src={heroBg}
          alt="Herosection Background Image"
          fill
          className="object-cover opacity-60"
        />
      </div>

      <p className={heroSectionStyles.badgeText}>ALL IN ONE PLACE</p>
      <div className={heroSectionStyles.titleUnderline}></div>
      <h1 className={heroSectionStyles.heroTitle}>Unleash Your Creativity with Sandstory</h1>
      <p className={heroSectionStyles.heroDescription}>
        Lorem ipsum dolor sit amet consectetur. Sed nisl commodo mollis tristique sed adipiscing lacus commodo tincidunt.
      </p>

      <div className="absolute ml-[40px] mt-[371px] w-[325px] h-[48px] flex gap-[16px]">
        <button className={heroSectionStyles.primaryBtn}>Launch Sandstory</button>
        <button className={heroSectionStyles.secondaryBtn}>Launch Sandstory</button>
      </div>

      {/* Mock Card */}
      <div className={heroSectionStyles.mockCardWrapper}>
        <div className={heroSectionStyles.mockCard}>
          <div className="ml-[14px] mr-[13.69px] mt-[13px] mb-[12.69px]">
            <div className={heroSectionStyles.cardImage}>
              <Image
                src={elementorImg}
                alt="Elementor Placeholder Image"
                width={296}
                height={95}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="w-[296px] h-[236px] ml-[14px] mr-[13.69px] mb-[12.69px] flex flex-col">
            <div className="h-[23px] gap-1 flex flex-col">
              <div className={heroSectionStyles.contentBlock + " h-[9.69px]"}></div>
              <div className={heroSectionStyles.contentBlock + " w-[181.38px] h-[9.69px]"}></div>
            </div>
            <div className="flex h-[4.15px] my-[6.92px] gap-1">
              <div className={heroSectionStyles.contentBlock + " w-[34.61px]"}></div>
              <div className={heroSectionStyles.contentBlock + " w-[16.61px]"}></div>
            </div>

            <div className="h-[191.76px] flex flex-col rounded-[1px]">
              <div className="flex flex-col gap-1 mb-[7.15px]">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className={heroSectionStyles.contentBlock + " h-[6.92px]"}></div>
                ))}
              </div>

              <div className="flex">
                <div className="w-[148px] flex flex-col gap-[2.3px]">
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className={heroSectionStyles.contentBlock + " h-[6.92px]"}></div>
                  ))}
                </div>

                <div className="w-[146px] ml-[1px] h-[90px] rounded-[1px] overflow-hidden">
                  <Image
                    src={elementorImg}
                    alt="Elementor Placeholder Image"
                    width={146}
                    height={90}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Star Rating Card */}
      <div className={heroSectionStyles.starRatingCard}>
        {[...Array(5)].map((_, i) => (
          <Image
            key={i}
            src="/assets/svg/star-solid.svg"
            alt="Star Icon"
            width={27}
            height={27}
            
          />
        ))}
      </div>

      {/* Emoji Card */}
      <div className={heroSectionStyles.emojiCard}>
        <Image
          src={loveineyeImg}
          alt="Reaction Image"
          width={63}
          height={63}
        />
      </div>
    </div>
  );
};

export default HeroSection;