import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import './Testimonials.css'

import AVT1 from '../../assets/avatar1.jpg'
import AVT2 from '../../assets/avatar2.jpg'
import AVT3 from '../../assets/avatar3.jpg'
import AVT4 from '../../assets/avatar4.jpg'

export const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper container testimonials__container"
      >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVT1} alt="avatar" />
          </div>
          <h5 className="client__name">Ernest Archiever</h5>
          <small className="client__review">Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVT2} alt="avatar" />
          </div>
          <h5 className="client__name">Ernest Archiever</h5>
          <small className="client__review">Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVT3} alt="avatar" />
          </div>
          <h5 className="client__name">Ernest Archiever</h5>
          <small className="client__review">Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVT4} alt="avatar" />
          </div>
          <h5 className="client__name">Ernest Archiever</h5>
          <small className="client__review">Lorem ipsum dolor sit amet consectetur adipisicing elit.</small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
