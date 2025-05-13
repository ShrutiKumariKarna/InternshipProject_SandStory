'use client';
import React from 'react';
import Image from 'next/image';

interface AuthCommonSocialLinkProps {
  page: 'signup' | 'signin';
}

const AuthCommonSocialLink: React.FC<AuthCommonSocialLinkProps> = ({ page }) => {
  const isSignUp = page === 'signup';

  return (
    <div className="h-[165px] flex flex-col items-center gap-[28px]">
      <button className="w-[528px] h-[48px] gap-[20px] rounded-full pt-[10px] pr-[10px] pb-[10px] pl-[20px] bg-[#7874FF] shadow-[0px_4px_30px_0px_#7874FF33]">
        <span className="w-[136px] h-[22px] font-sofia-pro-medium text-base leading-[140%] text-center text-white">
          Create an Account
        </span>
      </button>

      <div className="h-[89px] w-[237px] flex flex-col gap-[32px]">
        <p className="w-[237px] h-[25px] font-sofia-pro-regular text-base text-g600 leading-[25px] tracking-[0.5%] text-center align-middle">
          {isSignUp ? (
            <>
              Already have an account?{' '}
              <a href="/sign-in" className="text-[#7874FF] font-semibold">
                Login
              </a>
            </>
          ) : (
            <>
              Don’t have an account?{' '}
              <a href="/sign-up" className="text-[#7874FF] font-semibold">
                Sign Up
              </a>
            </>
          )}
        </p>

        <div className="flex justify-center mx-[18px] w-[200px] h-[32px] gap-[24px]">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/svg/facebook-brands.svg"
              alt="Facebook"
              width={26}
              height={26}
            />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/svg/twitter-brands.svg"
              alt="Twitter"
              width={26}
              height={26}
            />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/svg/square-instagram-brands.svg"
              alt="Instagram"
              width={26}
              height={26}
            />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/svg/linkedin-brands.svg"
              alt="LinkedIn"
              width={26}
              height={26}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AuthCommonSocialLink;
