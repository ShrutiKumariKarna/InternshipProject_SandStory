import React from 'react'
import Image from 'next/image';

const FooterMainSocialLinks = () => {
  return (
    <div className="w-[112px] flex items-center justify-between text-[#1A093F] cursor-pointer">
        <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className=""
        >
        <Image
        src="/assets/svg/facebook-f-brands.svg"
        alt="Facebook"
        width={11}
        height={15}
        />
        </a>

        <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className=""
        >
        <Image
        src="/assets/svg/instagram-brands.svg"
        alt="Twitter"
        width={15}
        height={15}
        />
        </a>

        <a
        href="https://www.twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className=""
        >
        <Image
        src="/assets/svg/twitter-brands_black.svg"
        alt="Instagram"
        width={17}
        height={17}
        />
        </a>

        <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className=""
        >
        <Image
        src="/assets/svg/linkedin-in-brands.svg"
        alt="LinkedIn"
        width={14}
        height={14}
        />
        </a>

    </div>
  )
}

export default FooterMainSocialLinks