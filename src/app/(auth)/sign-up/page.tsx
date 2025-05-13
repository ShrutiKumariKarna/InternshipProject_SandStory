'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import GoogleIcon from "../../../../public/assets/icon/flat-color-icons_google.png";
import AuthCommonCard from '../common/AuthCommonCard';
import AuthCommonSocialLink from '../common/AuthCommonSocialLink';
import { authCommonCardData } from "../../../static-data/authcard-data";
import { signUpStyles } from '@/Styles/uiStyles';

// const styles = {
//   container: 'w-[1440px] h-[1024px] mx-auto flex',
//   leftPanel: 'w-[744px] h-[1024px] rounded-tr-[60px] rounded-br-[60px] z-50 overflow-hidden bg-[#7874FF] rounded-[20px] relative',
//   leftImage: 'opacity-60 w-[744px] h-[1024px] scale-x-[-1]',
//   swiperWrapper: 'absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center',
//   navPaginationWrapper: 'w-[523px] h-[95px] absolute top-[809px] left-[110px] flex flex-col items-center gap-[40px] z-20',
//   navText: 'text-g25 opacity-90 text-center text-lg leading-[27px] font-sofia-pro-medium',
//   navButtons: 'flex items-center justify-between w-full',
//   rightPanel: 'w-[770px] rounded-[20px] h-[1024px] ml-[-70px] bg-[#FCFCFC]',
//   rightContentWrapper: 'h-[827px] ml-[146px] mr-[96px] my-[98px] flex flex-col items-center gap-[32px]',
//   headerSection: 'w-[528px] h-[203px] flex flex-col items-center gap-[24px]',
//   logoText: 'text-4xl font-inter font-extrabold text-[#1A093F]',
//   headingText: 'text-4xl font-sofia-pro-semibold text-g900 text-center',
//   googleBtn: 'w-[528px] h-[64px] flex items-center justify-center gap-[16px] border border-g300 rounded-[10px]',
//   googleBtnText: 'text-base font-sofia-pro-medium text-g800',
//   divider: 'flex items-center divider-with-lines',
//   formWrapper: 'flex flex-col gap-[24px]',
//   formGroup: 'flex flex-col gap-[8px]',
//   label: 'text-base font-sofia-pro-medium text-g400',
//   input: 'w-[528px] h-[64px] border border-[#CBCAD7] rounded-[6px] px-[20px] placeholder-g500',
//   passwordInputWrapper: 'relative w-[528px] h-[64px]',
//   passwordInput: 'w-full h-full border border-[#CBCAD7] rounded-[6px] px-[20px] pr-[48px] placeholder-g500',
//   toggleBtn: 'absolute right-[16px] top-1/2 transform -translate-y-1/2 text-g600',
// };

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={signUpStyles.container}>
      {/* LEFT SIDE */}
      <div className={signUpStyles.leftPanel}>
        <Image
          src="/assets/image/authbg.png"
          alt="Auth Background"
          width={744}
          height={1024}
          className={signUpStyles.leftImage}
        />

        {/* Swiper Section */}
        <div className={signUpStyles.swiperWrapper}>
          <Swiper
            cssMode={true}
            navigation={{
              nextEl: '.custom-swiper-button-next',
              prevEl: '.custom-swiper-button-prev',
            }}
            pagination={{
              el: '.custom-swiper-pagination',
              clickable: true,
            }}
            slidesPerView={1}
            slidesPerGroup={1}
            modules={[Navigation, Pagination]}
            className="w-full h-full"
          >
            {authCommonCardData.map((card, i) => (
              <SwiperSlide key={i} className="flex items-center justify-center h-full">
                <AuthCommonCard card={card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Navigation and Pagination Area */}
        <div className={signUpStyles.navPaginationWrapper}>
          <p className={signUpStyles.navText}>
            Let your creativity shine—no limits, just possibilities.
          </p>

          <div className={signUpStyles.navButtons}>
            <button className="custom-swiper-button-prev text-white text-xl font-bold">
              <Image
                src="/assets/svg/less-than-solid.svg"
                alt="navigation left arrow"
                height={5}
                width={10}
              />
            </button>
            <div className="custom-swiper-pagination signup-swiper-pagination flex gap-2 justify-center" />
            <button className="custom-swiper-button-next text-white text-xl font-bold">
              <Image
                src="/assets/svg/greater-than-solid.svg"
                alt="navigation right arrow"
                height={5}
                width={10}
              />
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className={signUpStyles.rightPanel}>
        <div className={signUpStyles.rightContentWrapper}>
          {/* Header */}
          <div className={signUpStyles.headerSection}>
            <h1 className={signUpStyles.logoText}>
              LOGO<span className="text-[#7370FF]">.</span>
            </h1>
            <h2 className={signUpStyles.headingText}>Create an account</h2>
            <button className={signUpStyles.googleBtn}>
              <p className={signUpStyles.googleBtnText}>Create account with Google</p>
              <Image src={GoogleIcon} alt="Google Icon" width={28} height={28} />
            </button>
          </div>

          {/* Divider */}
          <div className={signUpStyles.divider}>
            <span className="text-lg font-sofia-pro-medium text-g500">Or</span>
          </div>

          {/* Form */}
          <form className={signUpStyles.formWrapper}>
            <div className={signUpStyles.formGroup}>
              <label className={signUpStyles.label}>Email Address</label>
              <input
                type="email"
                placeholder="Enter your email address"
                className={signUpStyles.input}
              />
            </div>

            <div className={signUpStyles.formGroup}>
              <label className={signUpStyles.label}>Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className={signUpStyles.input}
              />
            </div>

            <div className={signUpStyles.formGroup}>
              <label className={signUpStyles.label}>Password</label>
              <div className={signUpStyles.passwordInputWrapper}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create your password"
                  className={signUpStyles.passwordInput}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={signUpStyles.toggleBtn}
                >
                  {showPassword ? <EyeIcon size={24} /> : <EyeOffIcon size={24} />}
                </button>
              </div>
            </div>
          </form>

          {/* Social Auth Footer */}
          <AuthCommonSocialLink page="signup"/>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
