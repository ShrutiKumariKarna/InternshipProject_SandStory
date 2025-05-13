import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

type CardProps = {
  data: {
    id: number;
    image: string;
    title: string;
    author: string;
    date: string;
    rating: string;
  };
};

const TopStoriesCard = ({ data }: CardProps) => {
  const styles = {
    container: "w-[301px] h-[512px] flex flex-col gap-[16px]",
    imageContainer: "w-[301px] h-[340px]",
    image: "h-full object-cover rounded-[30px]",
    descriptionContainer: "flex flex-col h-[147px] gap-[10px]",
    title: "text-2xl font-sofia-pro-semibold leading-[140%] text-[#1A093F]",
    authorDate: "text-[#8C849F] text-lg leading-[140%] font-sofia-pro-medium",
    ratingContainer: "flex items-center justify-center w-[72px] h-[30px] rounded-[15px] bg-[#FFF7EB] gap-[6px]",
    ratingText: "text-[#8C849F] text-[15px] leading-[30px] font-sofia-pro-medium",
    starIcon: "text-[#FFC861] w-[12px] h-[11px]",
  };

  return (
    <div className={styles.container}>
      {/* Image Section */}
      <div className={styles.imageContainer}>
        <Image
          src={data.image}
          alt={data.title}
          width={301}
          height={340}
          className={styles.image}
        />
      </div>

      {/* Description Section */}
      <div className={styles.descriptionContainer}>
        <h4 className={styles.title}>{data.title}</h4>
        <p className={styles.authorDate}>
          {data.author} | {data.date}
        </p>
        <div className={styles.ratingContainer}>
          <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
          <span className={styles.ratingText}>{data.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default TopStoriesCard;
