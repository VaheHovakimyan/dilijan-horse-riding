'use client'

import React from "react";
import PageTitleComponent from "../../shared/PageTitleComponent/PageTitleComponent";
import style from './OurServices.module.scss';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import horse_image from '../../assets/images/horse_image.jpg';

const sliderParams = {
  slidesPerView: 5,
  spaceBetween: 40,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    560: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    990: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
}

export const OurServicesPage = ({ }: {}) => {

  const swiper = useSwiper();

  return (
    <section className={style.our_services}>
      <PageTitleComponent title={"Our Services"} />
      <div className={style.our_services_slider}>
        <Swiper
          navigation={{
            nextEl: '#swiper-button-next',
            prevEl: '#swiper-button-prev',
          }}
          modules={[Autoplay, Pagination, Navigation]}
          {...sliderParams}
          autoplay={{
            delay: 1000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false
          }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide><img src={horse_image.src} alt="image1" className={style.swiper_item_image} /></SwiperSlide>
          <SwiperSlide><img src={horse_image.src} alt="image1" className={style.swiper_item_image} /></SwiperSlide>
          <SwiperSlide><img src={horse_image.src} alt="image1" className={style.swiper_item_image} /></SwiperSlide>
          <SwiperSlide><img src={horse_image.src} alt="image1" className={style.swiper_item_image} /></SwiperSlide>
          <SwiperSlide><img src={horse_image.src} alt="image1" className={style.swiper_item_image} /></SwiperSlide>
          <SwiperSlide><img src={horse_image.src} alt="image1" className={style.swiper_item_image} /></SwiperSlide>
          <SwiperSlide><img src={horse_image.src} alt="image1" className={style.swiper_item_image} /></SwiperSlide>
          <SwiperSlide><img src={horse_image.src} alt="image1" className={style.swiper_item_image} /></SwiperSlide>
          <SwiperSlide><img src={horse_image.src} alt="image1" className={style.swiper_item_image} /></SwiperSlide>
          <div className={style.our_services_slider_btns}>
            <div id="swiper-button-prev" className={style.swiper_navigation_button}>previous</div>
            <div id="swiper-button-next" className={style.swiper_navigation_button}>next</div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default OurServicesPage;
