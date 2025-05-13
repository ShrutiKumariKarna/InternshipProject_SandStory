'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import GoogleIcon from '../../../../public/assets/icon/flat-color-icons_google.png';
import AuthCommonCard from '../common/AuthCommonCard';
import AuthCommonSocialLink from '../common/AuthCommonSocialLink';
import { authCommonCardData } from '../../../static-data/authcard-data';
import { signInStyles } from '@/Styles/uiStyles';

// const styles = {
//   container: 'w-[1440px] h-[1024px] mx-auto flex rounded-[20px] bg-[#FCFCFC]',
//   left: {
//     section: 'w-[770px] h-[1024px] ml-[-70px]',
//     wrapper: 'h-[827px] ml-[146px] mr-[96px] my-[98px] mt-[160px] flex flex-col items-center gap-[32px]',
//     header: 'w-[528px] h-[203px] flex flex-col items-center gap-[24px]',
//     logo: 'text-4xl font-inter font-extrabold text-[#1A093F]',
//     title: 'text-4xl font-sofia-pro-semibold text-g900 text-center',
//     socialBtn: 'w-[528px] h-[64px] flex items-center justify-center gap-[16px] border border-g300 rounded-[10px]',
//     divider: 'flex items-center divider-with-lines',
//     form: 'flex flex-col gap-[24px]',
//     inputWrapper: 'flex flex-col gap-[8px]',
//     inputLabel: 'text-base font-sofia-pro-medium text-g400',
//     inputField: 'w-[528px] h-[64px] border border-[#CBCAD7] rounded-[6px] px-[20px] placeholder-g500',
//     passwordWrapper: 'relative w-[528px] h-[64px]',
//     passwordInput: 'w-full h-full border border-[#CBCAD7] rounded-[6px] px-[20px] pr-[48px] placeholder-g500',
//     toggleBtn: 'absolute right-[16px] top-1/2 transform -translate-y-1/2 text-g600',
//   },
//   right: {
//     section: 'w-[744px] h-[1024px] rounded-tl-[60px] rounded-bl-[60px] z-50 overflow-hidden bg-[#7874FF] rounded-[20px] relative',
//     bgImage: 'opacity-60 w-[744px] h-[1024px] scale-x-[-1]',
//     swiperWrapper: 'absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center',
//     controlWrapper: 'w-[523px] h-[95px] absolute top-[809px] left-[110px] flex flex-col items-center gap-[40px] z-20',
//     footerText: 'text-g25 opacity-90 text-center text-lg leading-[27px] font-sofia-pro-medium',
//     navBtn: 'text-white text-xl font-bold',
//     pagination: 'custom-swiper-pagination signup-swiper-pagination flex gap-2 justify-center',
//   },
// };

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={signInStyles.container}>
      {/* LEFT SIDE */}
      <div className={signInStyles.left.section}>
        <div className={signInStyles.left.wrapper}>
          {/* Header */}
          <div className={signInStyles.left.header}>
            <h1 className={signInStyles.left.logo}>
              LOGO<span className="text-[#7370FF]">.</span>
            </h1>
            <h2 className={signInStyles.left.title}>Create an account</h2>
            <button className={signInStyles.left.socialBtn}>
              <p className="text-base font-sofia-pro-medium text-g800">Create account with Google</p>
              <Image src={GoogleIcon} alt="Google Icon" width={28} height={28} />
            </button>
          </div>

          {/* Divider */}
          <div className={signInStyles.left.divider}>
            <span className="text-lg font-sofia-pro-medium text-g500">Or</span>
          </div>

          {/* Form */}
          <form className={signInStyles.left.form}>
            <div className={signInStyles.left.inputWrapper}>
              <label className={signInStyles.left.inputLabel}>Email Address</label>
              <input
                type="email"
                placeholder="Enter your email address"
                className={signInStyles.left.inputField}
              />
            </div>

            <div className={signInStyles.left.inputWrapper}>
              <label className={signInStyles.left.inputLabel}>Password</label>
              <div className={signInStyles.left.passwordWrapper}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create your password"
                  className={signInStyles.left.passwordInput}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={signInStyles.left.toggleBtn}
                >
                  {showPassword ? <EyeIcon size={24} /> : <EyeOffIcon size={24} />}
                </button>
              </div>
            </div>
          </form>

          {/* Social Auth Footer */}
          <AuthCommonSocialLink page="signin"/>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className={signInStyles.right.section}>
        <Image
          src="/assets/image/authbg.png"
          alt="Auth Background"
          width={744}
          height={1024}
          className={signInStyles.right.bgImage}
        />

        {/* Swiper Section */}
        <div className={signInStyles.right.swiperWrapper}>
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
        <div className={signInStyles.right.controlWrapper}>
          <p className={signInStyles.right.footerText}>
            Let your creativity shine—no limits, just possibilities.
          </p>

          <div className="flex items-center justify-between w-full">
            <button className={`custom-swiper-button-prev ${signInStyles.right.navBtn}`}>
              <Image
                src="/assets/svg/less-than-solid.svg"
                alt="navigation left arrow"
                height={5}
                width={10}
              />
            </button>
            <div className={signInStyles.right.pagination} />
            <button className={`custom-swiper-button-next ${signInStyles.right.navBtn}`}>
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
    </div>
  );
};

export default SignInPage;
