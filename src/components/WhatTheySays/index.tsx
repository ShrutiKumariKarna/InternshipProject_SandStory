'use client'
import React, { useState } from 'react'
import { WhatTheySaysDetails } from '@/static-data/whattheysays-data'
import Slider from '../Slider'
import { SwiperSlide } from 'swiper/react'
import WhatTheySaysCard from './WhatTheySaysCard'
import WhatTheySaysActiveCard from './WhatTheySaysActiveCard'
import type { Swiper as SwiperType } from 'swiper'

const WhatTheySays = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex)
  }

  return (
    <div className="h-[694px] mt-[107px] flex flex-col">
      <div className="ml-[80px] flex flex-col">
        <Slider
          subtitle="WHAT THEY SAY"
          title="What Our Community Says About Us"
          titleClassName="w-[773px]"
          swiperOptions={{
            spaceBetween: 30,
            slidesPerView: 4,
            slidesPerGroup: 1,
            onSlideChange: handleSlideChange,
          }}
          swiperClassName="!pb-[70px]"
        >
          {WhatTheySaysDetails.map((item, index) => {
            const isActive = index === activeIndex
            const isBefore = index < activeIndex
            const isAfter = index > activeIndex

            let transformClass = ''

            if (!isActive) {
              if (isBefore) {
                transformClass = 'transform -translate-x-[px]'
              } else if (isAfter) {
                transformClass = 'transform translate-x-[120px]'
              }
            }

            return (
              <SwiperSlide key={index}>
                <div className={`transition-transform duration-300 ease-in-out ${transformClass}`}>
                  {isActive ? (
                    <WhatTheySaysActiveCard data={item} />
                  ) : (
                    <WhatTheySaysCard data={item} />
                  )}
                </div>
              </SwiperSlide>
            )
          })}
        </Slider>
      </div>
    </div>
  )
}

export default WhatTheySays
