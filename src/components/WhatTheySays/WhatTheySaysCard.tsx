import React from "react";
import Image from "next/image";

type CardProps = {
  data: {
    id: number;
    image: string;
    title: string;
    description: string;
    author: string;
    company: string;
    rating: string;
  };
};

const WhatTheySaysCard = ({ data }: CardProps) => {
  const styles = {
    container: "w-[310px] h-[347px] bg-[#F5F5F5] rounded-[10px] flex flex-col justify-between p-[20px] gap-[4px]",
    content: "w-[270px] h-[208px] flex flex-col gap-[20px]",
    title: "text-2xl font-sofia-pro-bold text-[#1A093F] leading-[140%]",
    description: "h-[87px] text-[#18191F] text-base font-sofia-pro-regular leading-[180%]",
    ratingContainer: "w-[138px] h-[20px] flex items-center gap-[11px]",
    ratingText: "text-[15px] font-sofia-pro-medium text-[#8C849F]",
    quoteIconContainer: "flex justify-end",
    authorContainer: "w-[227px] h-[59px] flex items-center gap-[8px]",
    authorImage: "rounded-full object-cover w-[56px] h-[56px]",
    authorInfo: "flex flex-col w-[163px]",
    authorName: "text-[20px] font-sofia-pro-bold text-[#18191F] leading-[30px] capitalize",
    authorCompany: "text-base font-sofia-pro-regular text-[#474A57] leading-[180%]",
  };

  return (
   
    <div className={styles.container}>
      <div className={styles.content}>
        <h4 className={styles.title}>{data.title}</h4>
        <p className={styles.description}>{data.description}</p>

        {/* Rating */}
        <div className={styles.ratingContainer}>
          {[0, 1, 2, 3, 4].map((i) => (
            <Image
              key={i}
              src={`/assets/svg/star-${i < Math.floor(Number(data.rating)) ? "yellowish" : "whitish"}.svg`}
              alt="Star Rating"
              width={16}
              height={15}
            />
          ))}
          <span className={styles.ratingText}>{data.rating}</span>
        </div>

        {/* Quote Icon */}
        <div className={styles.quoteIconContainer}>
          <Image
            src="/assets/image/Quote.png"
            alt="Quote"
            width={24}
            height={24}
          />
        </div>
      </div>

      {/* Author Details */}
      <div className={styles.authorContainer}>
        <Image
          src={data.image}
          alt={data.author}
          width={56}
          height={56}
          className={styles.authorImage}
        />
        <div className={styles.authorInfo}>
          <span className={styles.authorName}>{data.author}</span>
          <span className={styles.authorCompany}>{data.company}</span>
        </div>
      </div>
    </div>

  );
};

export default WhatTheySaysCard; 


