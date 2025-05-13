'use client'

// import React, { useState } from 'react';
import { Swiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination} from 'swiper/modules';


export default function App() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{
            clickable: true,
        }}
        modules={[Navigation, Pagination,]}
        className="swiper"
      > 
      </Swiper>
    </>
  );
}
