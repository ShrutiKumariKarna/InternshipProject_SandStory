// import React from "react";
// import Image from "next/image";

// type CardProps = {
//   data: {
//     id: number;
//     image: string;
//     title: string;
//     description: string;
//     author: string;
//     company: string;
//     rating: string;
//   };
// };

// const WhatTheySaysActiveCard = ({ data }: CardProps) => {
//   return (
//     <div className="w-[428px] h-[353px] bg-[#F5F5F5] rounded-[10px] flex flex-col justify-between p-[20px]">
//       <div className="w-[388px] h-[313px] flex justify-between flex-col">

//             {/* top div */}
//             <div className="h-[126px] flex flex-col gap-[20px]">
//                 <h4 className="text-2xl font-sofia-pro-bold text-[#1A093F] leading-[140%]">
//                 {data.title}
//                 </h4>

//                 <p className="h-[87px] text-[#18191F] text-base font-sofia-pro-regular leading-[180%]">
//                 {data.description}
//                 </p>

//                 {/* Rating */}
//                 <div className="w-[138px] h-[20px] flex items-center gap-[11px]">
//                 {[0, 1, 2, 3, 4].map((i) => (
//                     <Image
//                     key={i}
//                     src={`/assets/svg/star-${i < Math.floor(Number(data.rating)) ? "yellowish" : "whitish"}.svg`}
//                     alt="Star Rating"
//                     width={16}
//                     height={15}
//                     />
//                 ))}
//                 <span className="text-[15px] font-sofia-pro-medium text-[#8C849F]">
//                     {data.rating}
//                 </span>
//                 </div>
//             </div>

//             {/* bottom div */}
//             <div className="h-[59px] flex justify-between items-center">
//                 <div className="w-[227px]">
//                     {/* Author Details */}
//                     <div className="h-[59px] flex items-center gap-[8px]">
//                         <Image
//                         src={data.image}
//                         alt={data.author}
//                         width={56}
//                         height={56}
//                         className="rounded-full object-cover w-[56px] h-[56px]"
//                         />
//                         <div className="flex flex-col w-[163px]">
//                         <span className="text-[20px] font-sofia-pro-bold text-[#18191F] leading-[30px] capitalize">
//                             {data.author}
//                         </span>
//                         <span className="text-base font-sofia-pro-regular text-[#474A57] leading-[180%]">
//                             {data.company}
//                         </span>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="w-[161px]">
//                     {/* Quote Icon */}
//                     <div className="flex justify-end">
//                         <Image
//                         src="/assets/image/Quote.png"
//                         alt="Quote"
//                         width={24}
//                         height={24}
//                         />
//                     </div>
//                 </div>
//             </div>

//         </div>
//     </div>
//   );
// };

// export default WhatTheySaysActiveCard;




import React from "react";
import Image from "next/image";

const styles = {
  cardWrapper: "w-[428px] h-[357px] bg-[#F5F5F5] rounded-[10px] flex flex-col p-[20px]",
  cardContentWrapper: "w-[388px] h-[313px] flex justify-between flex-col",
  topSection: "h-[126px] flex flex-col gap-[20px]",
  titleText: "text-2xl font-sofia-pro-bold text-[#1A093F] leading-[140%]",
  descriptionText: "h-[87px] text-[#18191F] text-base font-sofia-pro-regular leading-[180%]",
  ratingWrapper: "w-[138px] h-[20px] flex items-center gap-[11px]",
  ratingText: "text-[15px] font-sofia-pro-medium text-[#8C849F]",
  bottomSection: "h-[59px] flex justify-between items-center",
  authorWrapper: "w-[227px]",
  authorInfoWrapper: "h-[59px] flex items-center gap-[8px]",
  authorTextWrapper: "flex flex-col w-[163px]",
  authorName: "text-[20px] font-sofia-pro-bold text-[#18191F] leading-[30px] capitalize",
  authorCompany: "text-base font-sofia-pro-regular text-[#474A57] leading-[180%]",
  quoteWrapper: "w-[161px]",
  quoteIcon: "flex justify-end",
};

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

const WhatTheySaysActiveCard = ({ data }: CardProps) => {
  return (

         <div className={styles.cardWrapper}>
      <div className={styles.cardContentWrapper}>
        {/* Top Section */}
        <div className={styles.topSection}>
          <h4 className={styles.titleText}>{data.title}</h4>
          <p className={styles.descriptionText}>{data.description}</p>

          {/* Rating */}
          <div className={styles.ratingWrapper}>
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
        </div>

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          <div className={styles.authorWrapper}>
            <div className={styles.authorInfoWrapper}>
              <Image
                src={data.image}
                alt={data.author}
                width={56}
                height={56}
                className="rounded-full object-cover w-[56px] h-[56px]"
              />
              <div className={styles.authorTextWrapper}>
                <span className={styles.authorName}>{data.author}</span>
                <span className={styles.authorCompany}>{data.company}</span>
              </div>
            </div>
          </div>

          <div className={styles.quoteWrapper}>
            <div className={styles.quoteIcon}>
              <Image
                src="/assets/image/Quote.png"
                alt="Quote"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatTheySaysActiveCard;

