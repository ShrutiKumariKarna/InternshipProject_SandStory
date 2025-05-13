'use client'
import React from 'react'
import TopStoriesCard from "@/components/TopStories/TopStoriesCard"
import { storiesDetails } from '@/static-data/topstories-data'
import Slider from '../Slider'
import { SwiperSlide } from 'swiper/react'

const TopStories = () => {
  return (
    <div className="w-[1440px] h-[694px] flex flex-col ">
        
        <div className="ml-[80px] flex flex-col ">
        
          <Slider>
            {storiesDetails.map((item, i) => (
              <SwiperSlide key={i}>
                <TopStoriesCard data={item} />
              </SwiperSlide>
            ))}

          </Slider>

        </div>
       
    </div>
  )
}

export default TopStories



