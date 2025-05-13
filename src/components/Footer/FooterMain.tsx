import React from 'react';
import LogoSection from '../Header/LogoSection';
import { footerDataQuickLinks, footerDataCategories } from '@/static-data/footer-data';
import Link from "next/link";
import Image from 'next/image';
import Icon from "../../../public/assets/icon/Icon.png"; // Use public folder path
import { footerMainStyles } from '@/Styles/uiStyles';
import FooterMainSocialLinks from './FooterMainSocialLinks';

// const footerStyles = {
//   wrapper: "max-w-[1115px] mx-auto flex gap-[113px] mb-[85px]",
//   section: {
//     brand: "w-[299px] flex flex-col gap-[21px]",
//     quickLinks: "w-[126px] flex flex-col gap-[6px]",
//     categories: "w-[125px] flex flex-col gap-[6px]",
//     getInTouch: "w-[226px] flex flex-col gap-[14px]",
//   },
//   text: "text-[#8C849F] text-base leading-[28.8px] font-sofia-pro-regular",
//   heading: "font-sofia-pro-bold text-2xl leading-[33.6px] text-[#1A093F]",
//   linkHover: "hover:border-b-2 hover:border-[#7874FF]",
//   input: {
//     wrapper: "w-[220px] h-[50px] border border-[#8C849F] rounded-full px-4 flex items-center relative",
//     field: "w-[78px] h-[29px] bg-transparent text-[#8C849F] text-base leading-[28.8px] font-sofia-pro-regular outline-none placeholder:text-[#8C849F]",
//     button: "absolute right-2 top-1/2 transform -translate-y-1/2 w-[40px] h-[40px] bg-[#7370FF] rounded-full flex items-center justify-center hover:bg-[#5a57e5] transition duration-300",
//   },
//   socialIcons: "w-[112px] flex items-center justify-between text-[#1A093F] cursor-pointer",
//   followUsText: "text-[#1A093F] text-base leading-[28.8px] font-sofia-pro-regular",
// };

const FooterMain = () => {
  return (
    <div className={footerMainStyles.wrapper}>

      {/* Brand Info */}
      <div className={footerMainStyles.section.brand}>
        {/* Logo Section */}
        <LogoSection />

        {/* Description */}
        <p className={footerMainStyles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum rhoncus vulputate.
        </p>

        {/* Social Media */}
        <div className="flex gap-[11px]">
          <span className={footerMainStyles.followUsText}>Follow Us:</span>
          <FooterMainSocialLinks/>
        </div>
      </div>

      {/* Quick Links */}
      <div className={footerMainStyles.section.quickLinks}>
        <h2 className={footerMainStyles.heading}>Quick Links</h2>
        <ul className={`flex flex-col gap-[6px] ${footerMainStyles.text}`}>
          {footerDataQuickLinks.map((item) => (
            <li key={item.id}>
              <Link href={item.path} className={footerMainStyles.linkHover}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Categories */}
      <div className={footerMainStyles.section.categories}>
        <h2 className={footerMainStyles.heading}>Categories</h2>
        <ul className={`flex flex-col gap-[6px] ${footerMainStyles.text}`}>
          {footerDataCategories.map((item) => (
            <li key={item.id}>
              <Link href={item.path} className={footerMainStyles.linkHover}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Get in Touch */}
      <div className={footerMainStyles.section.getInTouch}>
        <h2 className={footerMainStyles.heading}>Get in Touch</h2>
        <p className={footerMainStyles.text}>
          Question or feedback?  
          We&apos;d love to hear from you
        </p>

        {/* Input Field */}
        <div className={footerMainStyles.input.wrapper}>
          <input 
            type="email" 
            placeholder="Your Email" 
            className={footerMainStyles.input.field}
          />
          <button className={footerMainStyles.input.button}>
            <Image src={Icon} alt="Send Icon" width={17} height={17} className="rotate-[15deg] object-contain" />
          </button>
        </div>
      </div>

    </div>
  );
};

export default FooterMain;
