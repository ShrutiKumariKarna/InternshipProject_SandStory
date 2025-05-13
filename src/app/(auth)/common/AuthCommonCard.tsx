import React from 'react';

type AuthCommonCardProps = {
  card: {
    id: number;
    title: string;
    des: string;
  };
};

const AuthCommonCard: React.FC<AuthCommonCardProps> = ({ card }) => {
  return (
    <div className="w-[556px] h-[350px] top-[266px] left-[94px] backdrop-blur-[76px] absolute bg-[#FFFFFF33]">
      <div className="w-[464px] h-[252px] flex flex-col gap-[24px] mx-[46px] my-[49px]">
        <h1 className="w-[464px] h-[116px] font-sofia-pro-semibold text-5xl leading-[58px] text-white align-middle">
          {card.title}
        </h1>
        <p className="w-[460px] h-[108px] opacity-[0.9] font-sofia-pro-regular text-lg leading-[27px] text-g50">
          {card.des}
        </p>
      </div>
    </div>
  );
};

export default AuthCommonCard;
