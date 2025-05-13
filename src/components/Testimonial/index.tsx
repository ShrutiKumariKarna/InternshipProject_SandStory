import React from 'react';
import Image from "next/image";
import BackgroundImg from "../../../public/assets/image/03-Sky 2.png";
import { avatar } from '@/static-data/community-data';

const ButtonIcon = "/assets/icon/Vector.png";

// ✅ Common style groupings (can be moved inside or outside the component)
const styles = {
  sectionWrapper: 'h-[422px] relative mx-[182px] mb-[113px] rounded-[60px] overflow-hidden',
  overlay: 'absolute inset-0 bg-[#7874FF] opacity-60 backdrop-blur-[30px]',
  heading: 'max-w-[950px] mx-auto mt-[60px] font-sofia-pro-black text-5xl leading-[67.2px] text-center text-white',
  avatarWrapper: 'flex justify-center mt-[17px] -space-x-4',
  avatarFrame: 'rounded-full border-2 border-white shadow-md flex items-center justify-center',
  avatarText: 'flex items-center justify-center text-[#1C1C1C] leading-[19.6px] text-sm font-sofia-pro-semibold',
  description: 'mx-auto text-center mt-[17px] max-w-[535px] font-sofia-pro-regular text-base leading-[28.8px] text-white/75',
  buttonWrapper: 'mt-[40px] flex items-center mx-auto space-x-2 px-4 py-2 rounded-full bg-white shadow-[0px_4px_30px_0px_rgba(120,116,255,0.2)]',
  buttonText: 'text-[#7874FF] font-sofia-pro-medium text-base leading-[22.4px]',
  buttonIconWrapper: 'w-[31px] h-[31px] flex items-center justify-center bg-[#7874FF] rounded-full',
};

const CommunitySection = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className='absolute inset-0'>
        <Image
          src={BackgroundImg}
          alt="Community Background Image"
          fill
          className="object-cover"
        />
        <div className={styles.overlay}></div>
      </div>

      <div className='relative'>
        <h1 className={styles.heading}>
          Join the Sandstory Community
        </h1>

        <div className={styles.avatarWrapper}>
          {avatar.map((user, index) => (
            <div
              key={index}
              className={styles.avatarFrame}
              style={{ backgroundColor: user.bgColor }}
            >
              {user.src ? (
                <Image
                  src={user.src}
                  alt="User profile"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              ) : (
                <span
                  className={styles.avatarText}
                  style={{ width: '50px', height: '50px' }}
                >
                  {user.text}
                </span>
              )}
            </div>
          ))}
        </div>

        <p className={styles.description}>
          Be part of a vibrant community of storytellers. Exchange ideas, gain inspiration, and grow together.
        </p>

        <button className={styles.buttonWrapper}>
          <span className={styles.buttonText}>Launch Sandstory</span>
          <div className={styles.buttonIconWrapper}>
            <Image
              src={ButtonIcon}
              alt="Redirecting Arrow Icon"
              width={10}
              height={10}
              className="rotate-[10deg] object-contain"
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default CommunitySection;
