"use client";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, A11y } from "swiper/modules";

import "swiper/swiper-bundle.css";
import "./about-swiper.scss";
import { aboutSwiper } from "@/mock/about/about";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Script from "../script-component";
import Image from "next/image";
import { notoSansBlack } from "@/fonts";

const AboutSwiper = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <article className="as_container">
      <header className="swiperTitle notobold">
        <p>Strengthen of Us</p>
      </header>
      <Swiper
        breakpoints={{
          374: {
            slidesPerView: 1,
            spaceBetween: 50,
            centeredSlides: false,
            autoplay: false,
          },
          1081: {
            slidesPerView: 1,
            centeredSlides: false,
          },
        }}
        a11y={{
          enabled: true,
        }}
        loop={true}
        loopAddBlankSlides={false}
        slidesPerGroup={1}
        modules={[Pagination, Autoplay, A11y]}
        autoplay={{
          delay: 3000,
        }}
        pagination={{
          clickable: true,
        }}
        className="about_swiper">
        {aboutSwiper.map(({ id, ImgUrl, label, script }) => {
          return (
            <SwiperSlide key={id} className="about_swiperSlide">
              <figure className={`swiperImg ${notoSansBlack.className}`}>
                <Image
                  className="swiperImg_file"
                  src={ImgUrl}
                  alt={label}
                  width={400}
                  height={160}
                />
                <p>
                  <Script param={label} />
                </p>
              </figure>
              <label className="swiperScript">
                <span>
                  <Script param={script} />
                </span>
              </label>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </article>
  );
};

export default AboutSwiper;
