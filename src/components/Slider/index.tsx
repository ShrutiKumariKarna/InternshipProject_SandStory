// 'use client'

// import React, { useState } from 'react'
// import { Swiper } from 'swiper/react'
// import type { Swiper as SwiperType } from 'swiper'
// import 'swiper/css'
// import SwiperNavigation from './SwiperNavigation'
// import { Pagination } from 'swiper/modules';


// type Props = {
//   children: React.ReactNode
//   subtitle?: string
//   title?: string
//   titleClassName?: string
//   swiperOptions?: {
//     spaceBetween?: number
//     slidesPerView?: number
//     slidesPerGroup?: number
//   }
//   swiperClassName?: string
// }

// // default value
// const Slider = ({
//   children,
//   subtitle = 'TOP STORIES',
//   title = 'Stories that Inspire',
//   titleClassName = '',
//   swiperOptions = {},
//   swiperClassName = '!pb-[38px]',
// }: Props) => {
//   const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null)

//   return (
//     <>
//       <div className="w-[1278px] mx-auto h-[102px] mb-[58px] mr-[82px] flex justify-between">
//         <div className="w-[438px] flex flex-col gap-[10px]">
//           <p className="text-lg text-[#E97B0C] font-sofia-pro-bold">
//             {subtitle}
//           </p>
//           <h1 className={`text-5xl font-sofia-pro-black ${titleClassName}`}>
//             {title}
//           </h1>
//         </div>

//         <SwiperNavigation swiper={swiperInstance} />
        
//       </div>

     
//       <Swiper
//         spaceBetween={swiperOptions.spaceBetween ?? 245}
//         slidesPerView={swiperOptions.slidesPerView ?? 5}
//         slidesPerGroup={swiperOptions.slidesPerGroup ?? 1}
//         onSwiper={(swiper) => setSwiperInstance(swiper)}
//         pagination={{ clickable: true }}
//         modules={[Pagination]}
//         className={` ${swiperClassName}`}
//       >
//         {children}
//       </Swiper>
      
//     </>
//   )
// }

// export default Slider



'use client'

import React, { useState } from 'react'
import { Swiper } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import SwiperNavigation from './SwiperNavigation'
import { Pagination } from 'swiper/modules'

type Props = {
  children: React.ReactNode
  subtitle?: string
  title?: string
  titleClassName?: string
  swiperOptions?: {
    spaceBetween?: number
    slidesPerView?: number
    slidesPerGroup?: number
    onSlideChange?: (swiper: SwiperType) => void  // Add onSlideChange as part of swiperOptions
  }
  swiperClassName?: string
}

// default value
const Slider = ({
  children,
  subtitle = 'TOP STORIES',
  title = 'Stories that Inspire',
  titleClassName = '',
  swiperOptions = {},
  swiperClassName = '!pb-[38px]',
}: Props) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null)

  return (
    <>
      <div className="w-[1278px] mx-auto h-[102px] mb-[58px] mr-[82px] flex justify-between">
        <div className="w-[438px] flex flex-col gap-[10px]">
          <p className="text-lg text-[#E97B0C] font-sofia-pro-bold">
            {subtitle}
          </p>
          <h1 className={`text-5xl font-sofia-pro-black ${titleClassName}`}>
            {title}
          </h1>
        </div>

        <SwiperNavigation swiper={swiperInstance} />
      </div>

      <Swiper
        spaceBetween={swiperOptions.spaceBetween ?? 245}
        slidesPerView={swiperOptions.slidesPerView ?? 5}
        slidesPerGroup={swiperOptions.slidesPerGroup ?? 1}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        onSlideChange={swiperOptions.onSlideChange}  // Handle slide change here
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className={` ${swiperClassName}`}
      >
        {children}
      </Swiper>
    </>
  )
}

export default Slider
