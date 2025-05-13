'use client'

import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { Swiper as SwiperType } from 'swiper'

type Props = {
    swiper: SwiperType | null
  }

const SwiperNavigation = ({ swiper }: Props) => {
  return (
    <div className="w-[110px] h-[45px] flex gap-[20px] mt-[57px]">
      <button
        onClick={() => swiper?.slidePrev()}
        className="bg-[#8C849F] w-[45px] h-[45px] rounded-full  flex items-center justify-center"
      >
        <ChevronLeft className="text-white " />
      </button>

      <button
        onClick={() => swiper?.slideNext()}
        className="bg-[#7874FF] w-[45px] h-[45px] rounded-full flex items-center justify-center"
      >
        <ChevronRight className="text-white " />
      </button>
    </div>
  )
}

export default SwiperNavigation
