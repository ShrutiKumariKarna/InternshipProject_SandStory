import React from 'react'
import Image from 'next/image'
import { howitworksData } from '@/static-data/howitworks-data'
import { howItWorksStyles } from '@/Styles/uiStyles'

const HowItWorks = () => {
  // Reusable class strings
  // const headingClass = "text-5xl font-sofia-pro-black text-[#1A093F] leading-[67.2px] text-center"
  // const subHeadingClass = "text-lg font-sofia-pro-bold text-[#E97B0C] text-center"
  // const paragraphClass = "text-base font-sofia-pro-regular text-[#8C849F] leading-[28.8px] text-center"
  // const cardTitleClass = "text-[20px] font-sofia-pro-black text-[#1A093F] leading-[30px] text-center"
  // const cardDescClass = "text-base font-sofia-pro-regular text-[#8C849F] leading-[28.8px] text-center"

  return (
    <div className="mx-auto h-[440px] max-w-[1078px] mt-[101px] mb-[107px] text-center">
      <div className="mx-auto w-[453.34px] flex flex-col gap-5">
        <h3 className={howItWorksStyles.subHeading}>Start Your Story in 3 Easy Steps</h3>

        <div className="h-[129px] flex flex-col gap-2">
          <h1 className={howItWorksStyles.heading}>How it works</h1>
          <p className={howItWorksStyles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
          </p>
        </div>
      </div>

      <div className="mt-[75px] flex items-center justify-center gap-[70px]">
        {howitworksData.map((item, index) => (
            <React.Fragment key={item.id}>
            {/* Card */}
            <div className="w-[260px] h-[191px] flex flex-col gap-[25px] items-center">
                <Image src={item.img} alt="How it works icon" width={58} height={58} />
                <div className="w-[260px] h-[98px] flex flex-col gap-4">
                <h5 className={howItWorksStyles.cardTitle}>{item.title}</h5>
                <p className={howItWorksStyles.cardDesc}>{item.des}</p>
                </div>
            </div>

            {/* Vertical Divider between cards */}
            {index !== howitworksData.length - 1 && (
                <div className="h-[115px] w-[3px] bg-[#8C849F] opacity-10" />
            )}
            </React.Fragment>
        ))}
     </div>


    </div>
  )
}

export default HowItWorks 