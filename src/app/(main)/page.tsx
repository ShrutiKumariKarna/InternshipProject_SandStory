import React from 'react'
import Testimonial from "@/components/Testimonial/index"
import HowItWorks from '@/components/HowItWorks'
import SandStorySection from '@/components/SandstorySection'
import HeroSection from '@/components/HeroSection'
import TopStories from '@/components/TopStories'
import WhatTheySays from '@/components/WhatTheySays'
const page = () => {
  return (
    <div>
      <HeroSection/>
      <TopStories/>
      <HowItWorks/>
      <SandStorySection/>
      <WhatTheySays/>
      <Testimonial/>
    </div>
  )
}

export default page